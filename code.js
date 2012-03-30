var jsdom = require("jsdom");

jsdom.env("http://bed-con.org/en/talks/", [
  "http://code.jquery.com/jquery-1.5.min.js"
],
function(err, window) {
    var jQuery = window.jQuery;
    
    var talks = [];
    jQuery("h2.entry-title").each(function (ix, item) {
        talks.push(jQuery(item).text())
    });
    
    console.log(talks);
});