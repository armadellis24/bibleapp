(function(e){function t(t){for(var a,o,i=t[0],c=t[1],h=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,h||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bibleapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var h=0;h<i.length;h++)t(i[h]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"31de":function(e,t,s){"use strict";var a=s("4951"),n=s.n(a);n.a},"331f":function(e,t,s){"use strict";var a=s("4df1"),n=s.n(a);n.a},4951:function(e,t,s){},"4df1":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("ca95"),r=s.n(n),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isVisible,expression:"$store.state.isVisible"}],staticClass:"btn btn-primary btn-lg buttontab",staticStyle:{"border-color":"white","background-color":"gray","border-style":"groove"},on:{click:function(t){e.show=!0}}},[e._v(" Bible ")]),s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isVisible,expression:"$store.state.isVisible"}],staticClass:"btn btn-secondary btn-lg buttontab",staticStyle:{"border-color":"white","background-color":"gray","border-style":"groove"},on:{click:function(t){e.show=!1}}},[e._v(" Plan ")]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.show,expression:"show==true"}]},[s("BibleBook"),s("Chapter")],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.show,expression:"show==false"}]},[s("Plan"),s("Chapter")],1)])],1)},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isVisible,expression:"$store.state.isVisible"}],key:e.componentKey,attrs:{role:"tablist"}},e._l(e.books,(function(t){return s("b-card",{key:t.name,staticClass:"mb-1",staticStyle:{"padding-right":"0px"},attrs:{"no-body":"",bkey:t.name,chapters:t.chapters}},[s("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle:[book.name]",arg:t.name}],staticClass:"bible_button",attrs:{block:"",variant:"info"},on:{"&click":function(s){return e.getBook(t.name,t.chapters)}}},[e._v(e._s(t.name)),s("i",{staticClass:"fa fa-caret-down"})])],1),s("b-collapse",{attrs:{id:t.name,invisible:"",accordion:"my-accordion",role:"tabpanel"}},[s("b-row",{staticStyle:{margin:"0px"},attrs:{cols:"6"}},e._l(t.chapters,(function(a){return s("b-card",{key:a,ref:"book.name",refInFor:!0,staticClass:"chapter_card",attrs:{tabindex:"0",id:t.name},on:{"&click":function(t){return e.getVerses(a)}}},[s("b-card-text",{staticClass:"small"},[e._v(e._s(a))])],1)})),1)],1)],1)})),1)},h=[],u=s("2f62"),p={name:"BibleBook",data:function(){return{componentKey:0}},mounted:function(){this.$store.state.isVisible,this.$store.state.bookname,this.$store.state.chapterNum,this.$store.state.totalChapters},computed:Object(u["b"])({books:function(e){return e.books}}),verses:function(){return this.$store.getters.verseText},methods:{getBook:function(e,t){this.$store.commit("getBook",{name:e,chapter:t})},getVerses:function(e){this.$store.commit("getVerses",e),this.componentKey+=1}}},m=p,l=(s("331f"),s("2877")),b=Object(l["a"])(m,c,h,!1,null,"3db5f227",null),f=b.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},d=[],g={name:"Chapter",methods:{previousChapter:function(e){this.$store.commit("previousChapter",e)},nextChapter:function(e){this.$store.commit("nextChapter",e)}}},k=g,y=Object(l["a"])(k,v,d,!1,null,"d5b86c62",null),$=y.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.buttonVisible,expression:"$store.state.buttonVisible"}],key:e.componentKey},[s("b-button",{staticClass:"chapter_button",attrs:{block:"",variant:"primary"},on:{click:function(t){return e.reloadPage()}}},[s("span",{staticStyle:{position:"left"}},[e._v("◂")]),e._v(" "+e._s(e.$store.state.bookchapter.name)+" ")]),s("br"),s("br"),s("h3",{attrs:{align:"left"}},[e._v(e._s(e.currentChapter))]),s("br"),e._l(e.$store.state.verseNum,(function(t,a){return s("p",{key:"num"+a},[e._v(e._s(t+" "+e.$store.state.verseArray[t-1]))])})),s("br"),s("br"),s("br"),e.$store.state.buttonVisible?s("div",[s("transition",{attrs:{name:"fade"}},[s("b-button-toolbar",{staticClass:"center",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[s("b-button-group",{staticClass:"mx-1"},[s("b-button",{on:{"&click":function(t){return e.previousBook(e.returnBooks)}}},[e._v("«")]),s("b-button",{on:{"&click":function(t){return e.previousChapter(e.chapterNumber)}}},[e._v("‹")])],1),s("b-button-group",{staticClass:"mx-1"},[s("b-button",{on:{"&click":function(t){return e.nextChapter(e.chapterNumber)}}},[e._v("›")]),s("b-button",{on:{"&click":function(t){return e.nextBook(e.returnBooks)}}},[e._v("»")])],1)],1)],1)],1):e._e()],2)},x=[],C=(s("c975"),s("d81d"),s("b0c0"),{name:"Chapter",data:function(){return{componentKey:0,Menu:"Main Menu"}},mounted:function(){this.componentKey,this.$store.state.isChapter,this.$store.state.isVisible,this.$store.state.bookchapter.name,this.$store.state.totalChapters,this.$store.state.books},computed:{currentChapter:function(){return this.$store.state.bookchapter.name+" "+this.$store.state.bookchapter.cnumber},chapterNumber:function(){return this.$store.state.bookchapter.cnumber},returnBooks:function(){return this.$store.state.bookname}},methods:{getVerses:function(e){this.$store.commit("getVerses",e),this.componentKey+=1},previousChapter:function(e){e>1?(e-=1,this.$store.commit("getVerses",e),this.componentKey+=1,this.$store.state.buttonVisible=!1):(this.$store.commit("getVerses",e),this.componentKey+=1,this.$store.state.buttonVisible=!1)},nextChapter:function(e){e<this.$store.state.totalChapters?(e+=1,this.$store.commit("getVerses",e),this.componentKey+=1,this.$store.state.buttonVisible=!1):(this.$store.commit("getVerses",e),this.componentKey+=1,this.$store.state.buttonVisible=!1)},previousBook:function(e){var t=this.$store.state.books.map((function(e){return e.name})).indexOf(e),s="";t>0?(s=t-1,this.$store.state.bookname=this.$store.state.books[s].name,this.$store.commit("getVerses",1),this.componentKey+=1,this.$store.state.buttonVisible=!1):(this.$store.state.bookname=this.$store.state.books[this.$store.state.books.length-1].name,this.$store.commit("getVerses",1),this.componentKey+=1,this.$store.state.buttonVisible=!1)},nextBook:function(e){var t=0;t=this.$store.state.books.map((function(e){return e.name})).indexOf(e);var s="";t<this.$store.state.books.length-1?(s=t+1,this.$store.state.bookname=this.$store.state.books[s].name,this.$store.commit("getVerses",1),this.componentKey+=1,this.$store.state.buttonVisible=!1):(this.$store.state.bookname=this.$store.state.books[0].name,this.$store.commit("getVerses",1),this.componentKey+=1,this.$store.state.buttonVisible=!1)},reloadPage:function(){this.$store.state.isChapter=!1,this.$store.state.isVisible=!0,this.componentKey+=1,this.$store.state.buttonVisible=!1}}}),V=C,_=(s("31de"),Object(l["a"])(V,w,x,!1,null,"0178174b",null)),O=_.exports,j={name:"App",data:function(){return{show:!0}},components:{BibleBook:f,Plan:$,Chapter:O}},N=j,S=(s("034f"),Object(l["a"])(N,o,i,!1,null,null,null)),P=S.exports,T=s("5f5b"),B=s("b1e0"),K=(s("f9e3"),s("2dd8"),s("bc3a")),R=s.n(K),J=(s("d3b7"),s("3ca3"),s("2ca0"),s("ddb0"),s("96cf"),s("1da1"));a["default"].use(u["a"]);var q=s("bc3a"),M=new u["a"].Store({state:{isVisible:!0,isChapter:!1,buttonVisible:!1,bookname:"",verseText:"",verseNum:"",totalChapters:"",chapterNum:0,verseArray:[],asyncRequests:[],bookchapter:{},books:[{name:"Genesis",chapters:50},{name:"Exodus",chapters:40},{name:"Leviticus",chapters:27},{name:"Numbers",chapters:36},{name:"Deuteronomy",chapters:34},{name:"Joshua",chapters:24},{name:"Judges",chapters:21},{name:"Ruth",chapters:4},{name:"1 Samuel",chapters:31},{name:"2 Samuel",chapters:24},{name:"1 Kings",chapters:22},{name:"2 Kings",chapters:25},{name:"1 Chronicles",chapters:29},{name:"2 Chronicles",chapters:36},{name:"Ezra",chapters:10},{name:"Nehemiah",chapters:13},{name:"Esther",chapters:10},{name:"Job",chapters:42},{name:"Psalms",chapters:150},{name:"Proverbs",chapters:31},{name:"Ecclesiastes",chapters:12},{name:"Song of Solomon",chapters:8},{name:"Isaiah",chapters:66},{name:"Jeremiah",chapters:52},{name:"Lamentations",chapters:5},{name:"Ezekiel",chapters:48},{name:"Daniel",chapters:12},{name:"Hosea",chapters:14},{name:"Joel",chapters:3},{name:"Amos",chapters:9},{name:"Obadiah",chapters:1},{name:"Jonah",chapters:4},{name:"Micah",chapters:7},{name:"Nahum",chapters:3},{name:"Habakkuk",chapters:3},{name:"Zephaniah",chapters:3},{name:"Haggai",chapters:2},{name:"Zechariah",chapters:14},{name:"Malachi",chapters:4},{name:"Matthew",chapters:28},{name:"Mark",chapters:16},{name:"Luke",chapters:24},{name:"John",chapters:21},{name:"Acts",chapters:28},{name:"Romans",chapters:16},{name:"1 Corinthians",chapters:16},{name:"2 Corinthians",chapters:13},{name:"Galatians",chapters:6},{name:"Ephesians",chapters:6},{name:"Philippians",chapters:4},{name:"Colossians",chapters:4},{name:"1 Thessalonians",chapters:5},{name:"2 Thessalonians",chapters:3},{name:"1 Timothy",chapters:6},{name:"2 Timothy",chapters:4},{name:"Titus",chapters:3},{name:"Philemon",chapters:1},{name:"Hebrews",chapters:13},{name:"James",chapters:5},{name:"1 Peter",chapters:5},{name:"2 Peter",chapters:3},{name:"1 John",chapters:5},{name:"2 John",chapters:1},{name:"3 John",chapters:1},{name:"Jude",chapters:1},{name:"Revelation",chapters:22}]},getters:{verseText:function(e){return e.verseText}},mutations:{getBook:function(e,t){var s=t.name,a=t.chapter;console.log("Tot chapters are "+s+a),e.bookname=s,e.totalChapters=a,console.log("Tot chapters are "+e.bookname+e.totalChapters)},getVerses:function(e,t){var s=this;return Object(J["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.bookchapter={name:"",cnumber:""},e.isVisible=!1,e.isChapter=!0,e.chapterNum=t,e.verseNum=0,n=s,a.prev=6,a.next=9,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":1-30&Out=json");case 9:return e.asyncRequests[0]=a.sent,a.next=12,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":31-60&Out=json");case 12:return e.asyncRequests[1]=a.sent,a.next=15,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":61-90&Out=json");case 15:return e.asyncRequests[2]=a.sent,a.next=18,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":91-120&Out=json");case 18:return e.asyncRequests[3]=a.sent,a.next=21,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":121-150&Out=json");case 21:return e.asyncRequests[4]=a.sent,a.next=24,q.get("https://api.lsm.org/recver.php?String="+e.bookname+" "+t+":151-180&Out=json");case 24:e.asyncRequests[5]=a.sent,a.next=30;break;case 27:a.prev=27,a.t0=a["catch"](6),console.log(a.t0);case 30:return a.next=32,Promise.all([e.asyncRequests[0],e.asyncRequests[1],e.asyncRequests[2],e.asyncRequests[3],e.asyncRequests[4],e.asyncRequests[5]]).then((function(s){e.bookchapter={name:e.bookname,cnumber:t};for(var a=0;a<s.length;a++)for(var r=0;r<30;r++){if(n.state.verseText=s[a].data.verses[r].text,e.verseArray[e.verseNum]=n.state.verseText,n.state.verseText.startsWith("No such verse"))return n.state.verseText;e.verseNum=+e.verseNum+1}})).catch((function(e){console.log(e)}));case 32:e.buttonVisible=!0;case 33:case"end":return a.stop()}}),a,null,[[6,27]])})))()}},actions:{}});a["default"].config.productionTip=!1,a["default"].use(T["a"]),a["default"].use(B["a"]),a["default"].prototype.$http=R.a,a["default"].use(r.a),new a["default"]({store:M,render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.d26af545.js.map