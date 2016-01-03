var viewLoader = require('../../index.js');

function myPage (el, props) {
  console.log(el, props);
  // ignored
}

function myArticle (el, props) {
  console.log(el, props);
  // div ""Scope to this article and include me""
}

function myArticleStatsChart (el, props) {
  console.log(el, props);
  //=> div "Some amazing JSON stats"
}

var views = {};

views.page = function (el, props) {
  myPage(el, props);
};

views.article = function (el, props) {
  myArticle(el, props);
};

views.articleStats = function (el, props) {
  myArticleStatsChart(el, props);
};

// scope to `data-view-article` and include the scoped element
var scope = document.querySelector('[data-view-article]');
viewLoader.execute(views, scope, true);
