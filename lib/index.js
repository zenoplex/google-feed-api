'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 *
 * @module google-feed-api
**/

/**
 * GoogleFeedApi is helper class for Google Feed API.
 * @class GoogleFeedApi
 */

var _default = (function () {
  var _class =

  /**
   * GoogleFeedApi constructor
   *
   * @param {string}  url
   * @param {number}  entriesNum
   * @constructor
   */
  function _default(url) {
    var entriesNum = arguments[1] === undefined ? 10 : arguments[1];

    _classCallCheck(this, _class);

    var constructor = this.constructor;
    var win = window;
    var self = this;

    // set default number of entries
    this.url = url;
    this.entriesNum = entriesNum;

    if (!constructor.isApiLoaded) {
      if (document.getElementById(constructor.JSAPI_SCRIPT_TAG_ID)) {
        return;
      }
      constructor.loadScript(document, 'script', constructor.JSAPI_SCRIPT_URL, constructor.JSAPI_SCRIPT_TAG_ID).then(function () {

        win.google.load('feeds', '1', {
          callback: function callback(e) {
            constructor.queue.forEach(function (current) {
              self.processQueue(current);
            });
            delete constructor.queue;
          },
          nocss: true
        });
      });
    }
  };

  _createClass(_class, [{
    key: 'load',

    /**
     * load feed
     *
     * @param callback
     */
    value: function load(callback) {
      var constructor = this.constructor;
      var url = this.url;

      if (!constructor.isApiLoaded) {
        constructor.queue = { url: url, callback: callback };
      } else {
        this.processQueue({ url: url, callback: callback });
      }
    }
  }, {
    key: 'processQueue',

    /**
     *
     * @param queue
     */
    value: function processQueue(queue) {
      var _this = this;

      var feed = new google.feeds.Feed(queue.url);

      feed.setNumEntries(this.entriesNum);
      feed.load(function (result) {
        queue.callback.call(_this, result);
      });
    }
  }], [{
    key: 'loadScript',

    /**
     * load external script
     *
     * @param {document}  document
     * @param {string}    tagname
     * @param {string}    url
     * @param {id}        id
     */
    value: function loadScript(document, tagname, url, id) {

      var promise = new Promise(function (resolve, reject) {

        var script = document.createElement(tagname);

        script.addEventListener('load', function (e) {
          resolve(e);
        }, false);

        script.async = true;
        script.id = id;
        script.src = url;

        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      });

      return promise;
    }
  }, {
    key: 'JSAPI_SCRIPT_URL',

    /**
     * returns google feed api url
     *
     * @returns {string}
     */
    get: function get() {
      return '//www.google.com/jsapi';
    }
  }, {
    key: 'JSAPI_SCRIPT_TAG_ID',

    /**
     * returns default script tag id
     *
     * @returns {string}
     */
    get: function get() {
      return 'google-script-jsapi';
    }
  }, {
    key: 'queue',

    /**
     *
     * @returns {*|Array}
     */
    get: function get() {
      return this._queue;
    },

    /**
     *
     * @param {object}  value
     */
    set: function set(value) {
      (this._queue = this._queue || []).push(value);
    }
  }, {
    key: 'isApiLoaded',

    /**
     *
     * @returns {boolean}
     */
    get: function get() {
      return window.google && window.google.feeds && window.google.feeds.Feed;
    }
  }]);

  return _class;
})();

exports['default'] = _default;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsR0FBTSxFQUFFLENBQUM7QUFDbEIsY0FBTSxDQUFDLEdBQUcsR0FBSyxHQUFHLENBQUM7O0FBRW5CLFlBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxtQkFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO09BQ3pELENBQUMsQ0FBQzs7QUFFSCxhQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7Ozs7O1NBeEQwQixlQUFHO0FBQUUsYUFBTyx3QkFBd0IsQ0FBQztLQUFFOzs7Ozs7Ozs7U0FPcEMsZUFBRztBQUFFLGFBQU8scUJBQXFCLENBQUM7S0FBRTs7Ozs7Ozs7U0FNbEQsZUFBRztBQUFFLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUFFOzs7Ozs7U0FNMUIsYUFBQyxLQUFLLEVBQUU7QUFBRSxPQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FBRTs7Ozs7Ozs7U0FNcEQsZUFBRztBQUN2QixhQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0tBQ3pFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICpcbiAqIEBtb2R1bGUgZ29vZ2xlLWZlZWQtYXBpXG4qKi9cblxuXG4vKipcbiAqIEdvb2dsZUZlZWRBcGkgaXMgaGVscGVyIGNsYXNzIGZvciBHb29nbGUgRmVlZCBBUEkuXG4gKiBAY2xhc3MgR29vZ2xlRmVlZEFwaVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzc3tcblxuICAvKipcbiAgICogR29vZ2xlRmVlZEFwaSBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHVybFxuICAgKiBAcGFyYW0ge251bWJlcn0gIGVudHJpZXNOdW1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmwsIGVudHJpZXNOdW0gPSAxMCkge1xuICAgIGxldCBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgbGV0IHdpbiAgICAgICAgID0gd2luZG93O1xuICAgIGxldCBzZWxmICAgICAgICA9IHRoaXM7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBudW1iZXIgb2YgZW50cmllc1xuICAgIHRoaXMudXJsICAgICAgICA9IHVybDtcbiAgICB0aGlzLmVudHJpZXNOdW0gPSBlbnRyaWVzTnVtO1xuXG4gICAgaWYgKCAhY29uc3RydWN0b3IuaXNBcGlMb2FkZWQgKSB7XG4gICAgICBpZiAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cnVjdG9yLkpTQVBJX1NDUklQVF9UQUdfSUQpICkgeyByZXR1cm47IH1cbiAgICAgIGNvbnN0cnVjdG9yLmxvYWRTY3JpcHQoZG9jdW1lbnQsICdzY3JpcHQnLCBjb25zdHJ1Y3Rvci5KU0FQSV9TQ1JJUFRfVVJMLCBjb25zdHJ1Y3Rvci5KU0FQSV9TQ1JJUFRfVEFHX0lEKS50aGVuKCgpID0+IHtcblxuICAgICAgICB3aW4uZ29vZ2xlLmxvYWQoJ2ZlZWRzJywgJzEnLCB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLnF1ZXVlLmZvckVhY2goKGN1cnJlbnQpID0+IHsgc2VsZi5wcm9jZXNzUXVldWUoY3VycmVudCk7IH0pO1xuICAgICAgICAgICAgZGVsZXRlIGNvbnN0cnVjdG9yLnF1ZXVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbm9jc3M6ICAgIHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBnb29nbGUgZmVlZCBhcGkgdXJsXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IEpTQVBJX1NDUklQVF9VUkwoKSB7IHJldHVybiAnLy93d3cuZ29vZ2xlLmNvbS9qc2FwaSc7IH1cblxuICAvKipcbiAgICogcmV0dXJucyBkZWZhdWx0IHNjcmlwdCB0YWcgaWRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgSlNBUElfU0NSSVBUX1RBR19JRCgpIHsgcmV0dXJuICdnb29nbGUtc2NyaXB0LWpzYXBpJzsgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7KnxBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZXQgcXVldWUoKSB7IHJldHVybiB0aGlzLl9xdWV1ZTsgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gIHZhbHVlXG4gICAqL1xuICBzdGF0aWMgc2V0IHF1ZXVlKHZhbHVlKSB7ICh0aGlzLl9xdWV1ZSA9IHRoaXMuX3F1ZXVlIHx8IFtdKS5wdXNoKHZhbHVlKTsgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgaXNBcGlMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5mZWVkcyAmJiB3aW5kb3cuZ29vZ2xlLmZlZWRzLkZlZWQ7XG4gIH1cblxuICAvKipcbiAgICogbG9hZCBleHRlcm5hbCBzY3JpcHRcbiAgICpcbiAgICogQHBhcmFtIHtkb2N1bWVudH0gIGRvY3VtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICB0YWduYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICB1cmxcbiAgICogQHBhcmFtIHtpZH0gICAgICAgIGlkXG4gICAqL1xuICBzdGF0aWMgbG9hZFNjcmlwdChkb2N1bWVudCwgdGFnbmFtZSwgdXJsLCBpZCkge1xuXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xuXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZSlcbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5pZCAgICA9IGlkO1xuICAgICAgc2NyaXB0LnNyYyAgID0gdXJsO1xuXG4gICAgICBsZXQgZmlyc3RTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICBmaXJzdFNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGZpcnN0U2NyaXB0KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBsb2FkIGZlZWRcbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBsb2FkKGNhbGxiYWNrKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICBsZXQgdXJsICAgICAgICAgPSB0aGlzLnVybDtcblxuICAgIGlmICggIWNvbnN0cnVjdG9yLmlzQXBpTG9hZGVkICkge1xuICAgICAgY29uc3RydWN0b3IucXVldWUgPSB7IHVybCwgY2FsbGJhY2sgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzUXVldWUoeyB1cmwsIGNhbGxiYWNrIH0pXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHF1ZXVlXG4gICAqL1xuICBwcm9jZXNzUXVldWUocXVldWUpIHtcbiAgICBsZXQgZmVlZCA9IG5ldyBnb29nbGUuZmVlZHMuRmVlZChxdWV1ZS51cmwpO1xuXG4gICAgZmVlZC5zZXROdW1FbnRyaWVzKHRoaXMuZW50cmllc051bSk7XG4gICAgZmVlZC5sb2FkKHJlc3VsdCA9PiB7XG4gICAgICBxdWV1ZS5jYWxsYmFjay5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==