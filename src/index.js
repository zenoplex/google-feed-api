'use strict';


/**
 *
 * @module google-feed-api
**/


/**
 * GoogleFeedApi is helper class for Google Feed API.
 * @class GoogleFeedApi
 */
export default class{

  /**
   * GoogleFeedApi constructor
   *
   * @param {string}  url
   * @param {number}  entriesNum
   * @constructor
   */
  constructor(url, entriesNum = 10) {
    let constructor = this.constructor;
    let win         = window;
    let self        = this;

    // set default number of entries
    this.url        = url;
    this.entriesNum = entriesNum;

    if ( !constructor.isApiLoaded ) {
      if ( document.getElementById(constructor.JSAPI_SCRIPT_TAG_ID) ) { return; }
      constructor.loadScript(document, 'script', constructor.JSAPI_SCRIPT_URL, constructor.JSAPI_SCRIPT_TAG_ID).then(() => {

        win.google.load('feeds', '1', {
          callback: function(e) {
            constructor.queue.forEach((current) => { self.processQueue(current); });
            delete constructor.queue;
          },
          nocss:    true
        });
      });
    }
  }

  /**
   * returns google feed api url
   *
   * @returns {string}
   */
  static get JSAPI_SCRIPT_URL() { return '//www.google.com/jsapi'; }

  /**
   * returns default script tag id
   *
   * @returns {string}
   */
  static get JSAPI_SCRIPT_TAG_ID() { return 'google-script-jsapi'; }

  /**
   *
   * @returns {*|Array}
   */
  static get queue() { return this._queue; }

  /**
   *
   * @param {object}  value
   */
  static set queue(value) { (this._queue = this._queue || []).push(value); }

  /**
   *
   * @returns {boolean}
   */
  static get isApiLoaded() {
    return window.google && window.google.feeds && window.google.feeds.Feed;
  }

  /**
   * load external script
   *
   * @param {document}  document
   * @param {string}    tagname
   * @param {string}    url
   * @param {id}        id
   */
  static loadScript(document, tagname, url, id) {

    let promise = new Promise((resolve, reject) => {

      let script = document.createElement(tagname);

      script.addEventListener('load', (e) => {
        resolve(e)
      }, false);

      script.async = true;
      script.id    = id;
      script.src   = url;

      let firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript)
    });

    return promise;
  }


  /**
   * load feed
   *
   * @param callback
   */
  load(callback) {
    let constructor = this.constructor;
    let url         = this.url;

    if ( !constructor.isApiLoaded ) {
      constructor.queue = { url, callback };
    } else {
      this.processQueue({ url, callback })
    }
  }


  /**
   *
   * @param queue
   */
  processQueue(queue) {
    let feed = new google.feeds.Feed(queue.url);

    feed.setNumEntries(this.entriesNum);
    feed.load(result => {
      queue.callback.call(this, result);
    });
  }
}
