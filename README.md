# node-google-feed-api

A node.js package for dynamically loading feeds with google feed api.
This module will append google feed api script to document and load feed api asynchronously.

## Installation

```
npm install git+https://github.com/zenoplex/node-google-feed-api.git --save
```

## Usage - API


* [GoogleFeedApi()](#module-constructor)
    * [~load(callback)](#module-method-load)
  
  
<a name="module-constructor"></a>
### GoogleFeedApi()

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| entriesNum | <code>number</code> | 


<a name="module-method-load"></a>
#### load(callback)

load feed/rss

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 


## Example

```js

var GoogleFeedApi = require('node-google-feed-api');
var feed = new GoogleFeedApi('http://www.example.com/rss', 10);

feed.load(function(result){
  console.log(result);
});


```

## Development

```
# watch
npm run watch
# build
npm run build
# test
npm run test
```

## License

MIT