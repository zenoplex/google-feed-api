'use strict';

import support from 'source-map-support'
import GoogleFeedApi from '../src/index.js'
import assert from 'power-assert';

support.install();

describe('GoogleFeedApi test', () => {
  context('on Document', () => {
    let url = 'http://www.echojs.com/rss';

    it('should append google feed api script on document', () => {
      let gfeed = new GoogleFeedApi(url);

      assert(document.getElementById(GoogleFeedApi.JSAPI_SCRIPT_TAG_ID));
    });


    it('should return url', () => {
      let gfeed = new GoogleFeedApi(url);

      assert(gfeed.url === url);
    });


    it('should return correct maximum number of entries', () => {
      let gfeed = new GoogleFeedApi(url);
      assert(gfeed.entriesNum === 10);

      gfeed = new GoogleFeedApi(url, 1000);
      assert(gfeed.entriesNum === 1000);
    });


    it('should load feed correctly', (done) => {
      let gfeed = new GoogleFeedApi(url);
      gfeed.load((result) => {

        if ( result && result.feed ) {
          assert(result.status.code === 200);
          assert(result.m === 'json');

          done();
        } else {
          throw new Error('feed not loaded');
        }
      });
    });
  });
});