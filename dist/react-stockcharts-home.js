webpackJsonp([1],{0:function(e,t,a){"use strict";var s=a(1),n=a(2);a(29),a(27);var r=a(24);document.getElementById("content").innerHTML=r;var i=n.time.format("%Y-%m-%d").parse;n.tsv("data/data.tsv",function(e,t){t.forEach(function(e){e.date=new Date(i(e.date).getTime()),e.open=+e.open,e.high=+e.high,e.low=+e.low,e.close=+e.close,e.volume=+e.volume});var n=a(3).init(t);s.render(s.createElement(n,null),document.getElementById("area"))})},24:function(e){e.exports='<h1>React Stockcharts</h1><p>Highly customizable stock charts built with <a href="http://facebook.github.io/react/">React JS</a> and <a href="http://d3js.org/">d3</a></p>'}});
//# sourceMappingURL=react-stockcharts-home.js.map