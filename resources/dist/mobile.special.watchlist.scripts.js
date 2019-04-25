this.mfModules=this.mfModules||{},this.mfModules["mobile.special.watchlist.scripts"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/mobile.special.watchlist.scripts/WatchList.js":function(t,i,e){var s=e("./src/mobile.startup/mfExtend.js"),a=e("./src/mobile.startup/PageList.js"),r=e("./src/mobile.startup/watchstar/WatchstarPageList.js"),n=e("./src/mobile.startup/ScrollEndEventEmitter.js"),l=e("./src/mobile.startup/util.js"),c=e("./src/mobile.special.watchlist.scripts/WatchListGateway.js");function o(t){var i,e=l.extend({},{isBorderBox:!1},t);this.scrollEndEventEmitter=new n(e.eventBus),this.scrollEndEventEmitter.on(n.EVENT_SCROLL_END,this._loadPages.bind(this)),e.el&&(i=this.getLastTitle(e.el)),this.gateway=new c(e.api,i),r.call(this,e)}s(o,r,{preRender:function(){this.scrollEndEventEmitter.disable(),this.scrollEndEventEmitter.setElement(this.$el)},postRender:function(){var t,i;a.prototype.postRender.apply(this),t=this.queryUnitializedItems(),i=Object.keys(this.parsePagesFromItems(t)).reduce(function(t,i){return t[i]=!0,t},{}),this.renderItems(t,i),this.scrollEndEventEmitter.enable()},_loadPages:function(){this.gateway.loadWatchlist().then(function(t){t.forEach(function(t){this.appendPage(t)}.bind(this)),this.render()}.bind(this))},appendPage:function(t){var i=l.extend({},t.options,{wikidataDescription:void 0});this.$el.append(this.templatePartials.item.render(i))},getLastTitle:function(t){return t.find("li:last").attr("title")}}),t.exports=o},"./src/mobile.special.watchlist.scripts/WatchListGateway.js":function(t,i,e){var s=e("./src/mobile.startup/page/pageJSONParser.js"),a=e("./src/mobile.startup/util.js"),r=e("./src/mobile.startup/extendSearchParams.js");function n(t,i){this.api=t,this.limit=50,i?(this.continueParams={continue:"gwrcontinue||",gwrcontinue:"0|"+i.replace(/ /g,"_")},this.shouldSkipFirstTitle=!0):(this.continueParams={continue:""},this.shouldSkipFirstTitle=!1),this.canContinue=!0}n.prototype={loadWatchlist:function(){var t=this,i=r("watchlist",{prop:["info","revisions"],rvprop:"timestamp|user",generator:"watchlistraw",gwrnamespace:"0",gwrlimit:this.limit},this.continueParams);return!1===this.canContinue?a.Deferred().resolve([]):this.api.get(i,{url:this.apiUrl}).then(function(i){return void 0!==i.continue?t.continueParams=i.continue:t.canContinue=!1,t.parseData(i)})},parseData:function(t){var i;return t.query&&t.query.pages?((i=t.query.pages).sort(function(t,i){return t.title===i.title?0:t.title<i.title?-1:1}),this.shouldSkipFirstTitle&&(i=i.slice(1),this.shouldSkipFirstTitle=!1),i.map(s.parse)):[]}},t.exports=n},"./src/mobile.special.watchlist.scripts/mobile.special.watchlist.scripts.js":function(t,i,e){var s=e("./src/mobile.special.watchlist.scripts/WatchList.js"),a=e("./src/mobile.startup/eventBusSingleton.js"),r=mw.user.options.get();$(function(){var t=new mw.Api,i=$(".button-bar .is-on a").data("view"),e=$(".mw-mf-watchlist-selector .selected a").data("filter");!function(){var t=$("ul.page-list");0===$(".mw-mf-watchlist-selector").length&&new s({api:new mw.Api,el:t,funnel:"watchlist",skipTemplateRender:!0,eventBus:a}),$(".more").remove()}(),i!==r.mfWatchlistView&&t.saveOption("mfWatchlistView",i),e&&e!==r.mfWatchlistFilter&&t.saveOption("mfWatchlistFilter",e)})}},[["./src/mobile.special.watchlist.scripts/mobile.special.watchlist.scripts.js",0,1]]]);
//# sourceMappingURL=mobile.special.watchlist.scripts.js.map.json