"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7384],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,c=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(c,l(l({ref:t},k),{},{components:n})):a.createElement(c,l({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Queue",d={unversionedId:"api/functions/queue",id:"version-3.1/api/functions/queue",title:"Queue",description:"add(tracks, insertBeforeIndex)",source:"@site/versioned_docs/version-3.1/api/functions/queue.md",sourceDirName:"api/functions",slug:"/api/functions/queue",permalink:"/docs/api/functions/queue",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.1/api/functions/queue.md",tags:[],version:"3.1",frontMatter:{},sidebar:"app",previous:{title:"Player",permalink:"/docs/api/functions/player"},next:{title:"Hooks",permalink:"/docs/api/hooks"}},k={},u=[{value:"<code>add(tracks, insertBeforeIndex)</code>",id:"addtracks-insertbeforeindex",level:2},{value:"<code>remove(tracks)</code>",id:"removetracks",level:2},{value:"<code>skip(index, initialPosition)</code>",id:"skipindex-initialposition",level:2},{value:"<code>skipToNext(initialPosition)</code>",id:"skiptonextinitialposition",level:2},{value:"<code>skipToPrevious(initialPosition)</code>",id:"skiptopreviousinitialposition",level:2},{value:"<code>reset()</code>",id:"reset",level:2},{value:"<code>getTrack(index)</code>",id:"gettrackindex",level:2},{value:"<code>getCurrentTrack()</code>",id:"getcurrenttrack",level:2},{value:"<code>getQueue()</code>",id:"getqueue",level:2},{value:"<code>removeUpcomingTracks()</code>",id:"removeupcomingtracks",level:2},{value:"<code>updateMetadataForTrack(index, metadata)</code>",id:"updatemetadatafortrackindex-metadata",level:2},{value:"<code>setRepeatMode(mode)</code>",id:"setrepeatmodemode",level:2},{value:"<code>getRepeatMode()</code>",id:"getrepeatmode",level:2}],m={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"queue"},"Queue"),(0,i.kt)("h2",{id:"addtracks-insertbeforeindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"add(tracks, insertBeforeIndex)")),(0,i.kt)("p",null,"Adds one or more tracks to the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<number | void>")," - The promise resolves with the first\nadded track index. If no tracks were added it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tracks"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"array")," of ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/objects/track"},"Track Object")," or a single one"),(0,i.kt)("td",{parentName:"tr",align:null},"The tracks that will be added")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"insertBeforeIndex"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the track that will be located immediately after the inserted tracks. Set it to ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," to add it at the end of the queue")))),(0,i.kt)("h2",{id:"removetracks"},(0,i.kt)("inlineCode",{parentName:"h2"},"remove(tracks)")),(0,i.kt)("p",null,"Removes one or more tracks from the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tracks"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"array")," of track indexes or a single one"),(0,i.kt)("td",{parentName:"tr",align:null},"The tracks that will be removed")))),(0,i.kt)("h2",{id:"skipindex-initialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skip(index, initialPosition)")),(0,i.kt)("p",null,"Skips to a track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"skiptonextinitialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skipToNext(initialPosition)")),(0,i.kt)("p",null,"Skips to the next track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"skiptopreviousinitialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skipToPrevious(initialPosition)")),(0,i.kt)("p",null,"Skips to the previous track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"reset"},(0,i.kt)("inlineCode",{parentName:"h2"},"reset()")),(0,i.kt)("p",null,"Resets the player stopping the current track and clearing the queue."),(0,i.kt)("h2",{id:"gettrackindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"getTrack(index)")),(0,i.kt)("p",null,"Gets a track object from the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,i.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"Track"),(0,i.kt)("inlineCode",{parentName:"p"},">")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")))),(0,i.kt)("h2",{id:"getcurrenttrack"},(0,i.kt)("inlineCode",{parentName:"h2"},"getCurrentTrack()")),(0,i.kt)("p",null,"Gets the index of the current track"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,i.kt)("h2",{id:"getqueue"},(0,i.kt)("inlineCode",{parentName:"h2"},"getQueue()")),(0,i.kt)("p",null,"Gets the whole queue"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,i.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"Track[]"),(0,i.kt)("inlineCode",{parentName:"p"},">")),(0,i.kt)("h2",{id:"removeupcomingtracks"},(0,i.kt)("inlineCode",{parentName:"h2"},"removeUpcomingTracks()")),(0,i.kt)("p",null,"Clears any upcoming tracks from the queue."),(0,i.kt)("h2",{id:"updatemetadatafortrackindex-metadata"},(0,i.kt)("inlineCode",{parentName:"h2"},"updateMetadataForTrack(index, metadata)")),(0,i.kt)("p",null,"Updates the metadata of a track in the queue.\nIf the current track is updated, the notification and the Now Playing Center will be updated accordingly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metadata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"A subset of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/objects/track"},"Track Object")," with only the ",(0,i.kt)("inlineCode",{parentName:"td"},"artwork"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"artist"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"album"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"description"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"genre"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"rating")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," properties.")))),(0,i.kt)("h2",{id:"setrepeatmodemode"},(0,i.kt)("inlineCode",{parentName:"h2"},"setRepeatMode(mode)")),(0,i.kt)("p",null,"Sets the repeat mode."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/constants/repeat-mode"},"Repeat Mode")),(0,i.kt)("td",{parentName:"tr",align:null},"The repeat mode")))),(0,i.kt)("h2",{id:"getrepeatmode"},(0,i.kt)("inlineCode",{parentName:"h2"},"getRepeatMode()")),(0,i.kt)("p",null,"Gets the repeat mode."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/constants/repeat-mode"},"Repeat Mode")))}s.isMDXComponent=!0}}]);