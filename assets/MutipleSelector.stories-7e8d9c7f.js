import{j as S}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{g as fe,c}from"./_commonjsHelpers-de833af9.js";var oe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var l={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var s=typeof n;if(s==="string"||s==="number")t.push(n);else if(Array.isArray(n)){if(n.length){var a=e.apply(null,n);a&&t.push(a)}}else if(s==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)l.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}r.exports?(e.default=e,r.exports=e):window.classNames=e})()})(oe);var pe=oe.exports;const E=fe(pe);var M={},G={},I={},R={};Object.defineProperty(R,"__esModule",{value:!0});var he=["pageX","pageY","clientX","clientY"];function q(r,l){he.forEach(function(e){typeof r[e]>"u"&&(r[e]=r[l][0][e])})}function me(r){if(r.type.includes("mouse"))return r;try{r.type==="touchstart"?q(r,"targetTouches"):r.type==="touchmove"&&q(r,"changedTouches")}catch(l){console.error(l.message)}return r}R.castTouchToMouseEvent=me;var $={};Object.defineProperty($,"__esModule",{value:!0});function ve(r,l,e){return l===void 0&&(l=1),e===void 0&&(e={}),r.metaKey&&!e.allowMetaClick||r.ctrlKey&&!e.allowCtrlClick||r.altKey&&!e.allowAltClick||r.shiftKey&&!e.allowShiftClick?!1:"buttons"in r?r.buttons===l:"which"in r?r.which===l:r.button===l-1}$.detectMouseButton=ve;var F={};Object.defineProperty(F,"__esModule",{value:!0});var Se=function(r,l,e){var t=e.tolerance,o=t===void 0?0:t,n=e.useOffsetSize,s=n===void 0?!1:n,a=s?r.offsetHeight:r.height,u=s?l.offsetHeight:l.height,i=s?r.offsetWidth:r.width,f=s?l.offsetWidth:l.width;return!(r.top+a-o<l.top||r.top+o>l.top+u||r.left+i-o<l.left||r.left+o>l.left+f)};function V(r){return Array.isArray(r)?r:[r]}function _e(r,l,e,t){e===void 0&&(e=0),t===void 0&&(t=1);for(var o=V(r),n=V(l),s=0;s<o.length;s++)for(var a=0;a<n.length;a++)return Se(o[s],n[a],{tolerance:e,useOffsetSize:t===1})}F.doObjectsCollide=_e;var P={};Object.defineProperty(P,"__esModule",{value:!0});function ge(){var r=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),l=Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft);return{documentScrollTop:r,documentScrollLeft:l}}P.getDocumentScroll=ge;function ye(r,l){l===void 0&&(l={scrollTop:0,scrollLeft:0});var e=l.scrollTop,t=l.scrollLeft;return Array.from(r.getClientRects()).map(function(o){return{top:o.top+e,left:o.left+t,offsetWidth:r.offsetWidth,offsetHeight:r.offsetHeight,width:o.width,height:o.height}})}P.getBoundsForNode=ye;var W={};Object.defineProperty(W,"__esModule",{value:!0});function xe(r,l){for(;r;){if(r===l)return!0;r=r.parentNode}return!1}W.isNodeInRoot=xe;(function(r){function l(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),r.noop=function(){},l(R),l($),l(F),l(P),l(W)})(I);var O={},be=c&&c.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(O,"__esModule",{value:!0});var we=be(x),K=I;O.SelectableGroupContext=we.default.createContext({selectable:{register:function(r){},unregister:function(r){},selectAll:K.noop,clearSelection:K.noop,getScrolledContainer:function(){return null}}});var Y={},Ce=c&&c.__read||function(r,l){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var t=e.call(r),o,n=[],s;try{for(;(l===void 0||l-- >0)&&!(o=t.next()).done;)n.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(e=t.return)&&e.call(t)}finally{if(s)throw s.error}}return n},Oe=c&&c.__importStar||function(r){if(r&&r.__esModule)return r;var l={};if(r!=null)for(var e in r)Object.hasOwnProperty.call(r,e)&&(l[e]=r[e]);return l.default=r,l};Object.defineProperty(Y,"__esModule",{value:!0});var T=Oe(x),De={y:0,x:0,width:0,height:0};function le(r){var l=r.fixedPosition,e=r.getSetState,t=r.className,o=Ce(T.useState(De),2),n=o[0],s=o[1];T.useEffect(function(){e(s)},[]);var a={left:n.x,top:n.y,width:n.width,height:n.height,zIndex:9e3,position:l?"fixed":"absolute",cursor:"default",willChange:"transform",transform:"translateZ(0)"};return T.default.createElement("div",{className:t,style:a})}Y.Selectbox=le;le.defaultProps={className:"selectable-selectbox"};var Me=c&&c.__extends||function(){var r=function(l,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])},r(l,e)};return function(l,e){r(l,e);function t(){this.constructor=l}l.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),k=c&&c.__assign||function(){return k=Object.assign||function(r){for(var l,e=1,t=arguments.length;e<t;e++){l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},k.apply(this,arguments)},C=c&&c.__values||function(r){var l=typeof Symbol=="function"&&Symbol.iterator,e=l&&r[l],t=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(l?"Object is not iterable.":"Symbol.iterator is not defined.")},ne=c&&c.__read||function(r,l){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var t=e.call(r),o,n=[],s;try{for(;(l===void 0||l-- >0)&&!(o=t.next()).done;)n.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(e=t.return)&&e.call(t)}finally{if(s)throw s.error}}return n},b=c&&c.__spread||function(){for(var r=[],l=0;l<arguments.length;l++)r=r.concat(ne(arguments[l]));return r},Le=c&&c.__importStar||function(r){if(r&&r.__esModule)return r;var l={};if(r!=null)for(var e in r)Object.hasOwnProperty.call(r,e)&&(l[e]=r[e]);return l.default=r,l};Object.defineProperty(G,"__esModule",{value:!0});var L=Le(x),_=I,je=O,Ee=Y,ke=function(r){Me(l,r);function l(){var e=r!==null&&r.apply(this,arguments)||this;return e.state={selectionMode:!1},e.mouseDownStarted=!1,e.mouseMoveStarted=!1,e.mouseMoved=!1,e.mouseUpStarted=!1,e.selectionStarted=!1,e.deselectionStarted=!1,e.mouseDownData={selectboxY:0,selectboxX:0,target:null},e.registry=new Set,e.selectedItems=new Set,e.selectingItems=new Set,e.ignoreCheckCache=new Map,e.ignoreList=e.props.ignoreList.concat([".selectable-select-all",".selectable-deselect-all"]),e.ignoreListNodes=[],e.setSelectboxState=null,e.selectableGroup=null,e.scrollContainer=null,e.maxScrollTop=0,e.maxScrollLeft=0,e.scrollBounds=null,e.containerScroll={scrollTop:0,scrollLeft:0},e.documentScroll={scrollTop:0,scrollLeft:0},e.saveContainerScroll=function(){var t=e.scrollContainer,o=t.scrollTop,n=t.scrollLeft;e.containerScroll={scrollTop:o,scrollLeft:n}},e.saveDocumentScroll=function(){var t=_.getDocumentScroll(),o=t.documentScrollLeft,n=t.documentScrollTop;e.documentScroll={scrollTop:n,scrollLeft:o}},e.updateRegistry=function(){var t,o;try{for(var n=C(e.registry.values()),s=n.next();!s.done;s=n.next()){var a=s.value;a.updateBounds(e.containerDocumentScroll)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}},e.registerSelectable=function(t){e.registry.add(t),t.state.isSelected&&e.selectedItems.add(t)},e.unregisterSelectable=function(t){e.registry.delete(t);var o=e.selectedItems.has(t)||e.selectingItems.has(t);e.selectedItems.delete(t),e.selectingItems.delete(t),o&&e.props.onSelectedItemUnmount(t,b(e.selectedItems))},e.updateContainerScroll=function(t){var o=e.containerScroll,n=o.scrollTop,s=o.scrollLeft;e.checkScrollTop(t.clientY,n),e.checkScrollBottom(t.clientY,n),e.checkScrollLeft(t.clientX,s),e.checkScrollRight(t.clientX,s)},e.getScrollStep=function(t){var o=e.props,n=o.minimumSpeedFactor,s=o.scrollSpeed;return Math.max(t,n)*s},e.checkScrollTop=function(t,o){var n=e.scrollBounds.top-t;(n>0||t<0)&&(e.scrollContainer.scrollTop=o-e.getScrollStep(n))},e.checkScrollBottom=function(t,o){var n=t-e.scrollBounds.bottom;if(n>0||t>window.innerHeight){var s=o+e.getScrollStep(n);e.scrollContainer.scrollTop=Math.min(s,e.maxScrollTop)}},e.checkScrollLeft=function(t,o){var n=e.scrollBounds.left-t;if(n>0||t<0){var s=o-e.getScrollStep(n);e.scrollContainer.scrollLeft=s}},e.checkScrollRight=function(t,o){var n=t-e.scrollBounds.right;if(n>0||t>window.innerWidth){var s=o+e.getScrollStep(n);e.scrollContainer.scrollLeft=Math.min(s,e.maxScrollLeft)}},e.updateSelectBox=function(t){var o=_.castTouchToMouseEvent(t);if(e.updateContainerScroll(o),!e.mouseMoveStarted){e.mouseMoveStarted=!0,e.mouseMoved=!0;var n=e.mouseDownData,s=o.clientX,a=o.clientY,u=a-e.scrollBounds.top+e.containerScroll.scrollTop,i=Math.min(u,n.selectboxY),f=s-e.scrollBounds.left+e.containerScroll.scrollLeft,v=Math.min(f,n.selectboxX),p={x:v,y:i,width:Math.abs(f-n.selectboxX),height:Math.abs(u-n.selectboxY)};e.setSelectboxState(p);var g={top:p.y+e.scrollBounds.top+e.documentScroll.scrollTop,left:p.x+e.scrollBounds.left+e.documentScroll.scrollLeft,width:p.width,height:p.height,offsetWidth:p.width||1,offsetHeight:p.height||1};e.selectItems(g),e.props.duringSelection(b(e.selectingItems)),e.mouseMoveStarted=!1}},e.selectItems=function(t,o){var n,s;o===void 0&&(o={});var a=e.props,u=a.tolerance,i=a.enableDeselect,f=a.mixedDeselect;try{for(var v=C(e.registry.values()),p=v.next();!p.done;p=v.next()){var g=p.value;e.processItem({item:g,selectboxBounds:t,tolerance:u,mixedDeselect:f,enableDeselect:i,isFromClick:o&&o.isFromClick})}}catch(w){n={error:w}}finally{try{p&&!p.done&&(s=v.return)&&s.call(v)}finally{if(n)throw n.error}}},e.clearSelection=function(){var t,o;try{for(var n=C(e.selectedItems.values()),s=n.next();!s.done;s=n.next()){var a=s.value;a.setState({isSelected:!1}),e.selectedItems.delete(a)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}e.setState({selectionMode:!1}),e.props.onSelectionFinish(b(e.selectedItems)),e.props.onSelectionClear()},e.selectAll=function(){var t,o;e.removeIgnoredItemsFromRegistry();try{for(var n=C(e.registry.values()),s=n.next();!s.done;s=n.next()){var a=s.value;a.state.isSelected||(a.setState({isSelected:!0}),e.selectedItems.add(a))}}catch(u){t={error:u}}finally{try{s&&!s.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}e.setState({selectionMode:!0}),e.props.onSelectionFinish(b(e.selectedItems))},e.mouseDown=function(t){var o=!t.type.includes("touch")&&!_.detectMouseButton(t,1,{allowAltClick:e.props.allowAltClick,allowCtrlClick:e.props.allowCtrlClick,allowMetaClick:e.props.allowMetaClick,allowShiftClick:e.props.allowShiftClick});if(!(e.mouseDownStarted||e.props.disabled||o)){if(e.removeIgnoredItemsFromRegistry(),e.isInIgnoreList(t.target)){e.mouseDownStarted=!1;return}e.props.resetOnStart&&e.clearSelection(),e.mouseDownStarted=!0,e.mouseUpStarted=!1;var n=_.castTouchToMouseEvent(t);if(!e.props.globalMouse&&!_.isNodeInRoot(n.target,e.selectableGroup)){var s=ne(_.getBoundsForNode(e.selectableGroup,e.documentScroll),1),a=s[0],u=_.doObjectsCollide({top:a.top,left:a.left,width:0,height:0,offsetHeight:a.offsetHeight,offsetWidth:a.offsetWidth},{top:n.pageY,left:n.pageX,width:0,height:0,offsetWidth:0,offsetHeight:0});if(!u)return}e.updateRootBounds(),e.updateRegistry(),e.mouseDownData={target:n.target,selectboxY:n.clientY-e.scrollBounds.top+e.containerScroll.scrollTop,selectboxX:n.clientX-e.scrollBounds.left+e.containerScroll.scrollLeft},n.preventDefault(),document.addEventListener("mousemove",e.updateSelectBox),document.addEventListener("touchmove",e.updateSelectBox),document.addEventListener("mouseup",e.mouseUp),document.addEventListener("touchend",e.mouseUp)}},e.mouseUp=function(t){var o,n;if(!e.mouseUpStarted&&(e.mouseUpStarted=!0,e.mouseDownStarted=!1,e.removeTempEventListeners(),!!e.mouseDownData)){var s=_.castTouchToMouseEvent(t),a=s.pageX,u=s.pageY;if(!e.mouseMoved&&_.isNodeInRoot(s.target,e.selectableGroup))e.handleClick(s,u,a);else{try{for(var i=C(e.selectingItems.values()),f=i.next();!f.done;f=i.next()){var v=f.value;v.setState({isSelected:!0,isSelecting:!1})}}catch(p){o={error:p}}finally{try{f&&!f.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}e.selectedItems=new Set(b(e.selectedItems,e.selectingItems)),e.selectingItems.clear(),s.which===1&&e.mouseDownData.target===s.target&&e.preventEvent(s.target,"click"),e.setSelectboxState({x:0,y:0,width:0,height:0}),e.props.onSelectionFinish(b(e.selectedItems))}e.toggleSelectionMode(),e.cleanUp(),e.mouseMoved=!1}},e.keyListener=function(t){t.keyCode===27&&e.clearSelection()},e.getGroupRef=function(t){e.selectableGroup=t},e.getSelectboxSetState=function(t){e.setSelectboxState=t},e.defaultContainerStyle={position:"relative"},e.contextValue={selectable:{register:e.registerSelectable,unregister:e.unregisterSelectable,selectAll:e.selectAll,clearSelection:e.clearSelection,getScrolledContainer:function(){return e.scrollContainer}}},e}return l.prototype.componentDidMount=function(){this.props.scrollContainer?this.scrollContainer=document.querySelector(this.props.scrollContainer):this.scrollContainer=this.selectableGroup,this.scrollContainer.addEventListener("scroll",this.saveContainerScroll),document.addEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.addEventListener("mousedown",this.mouseDown),this.selectableGroup.addEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.addEventListener("keydown",this.keyListener),document.addEventListener("keyup",this.keyListener)),this.removeIgnoredItemsFromRegistry()},l.prototype.componentWillUnmount=function(){this.scrollContainer.removeEventListener("scroll",this.saveContainerScroll),document.removeEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.removeEventListener("mousedown",this.mouseDown),this.selectableGroup.removeEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.removeEventListener("keydown",this.keyListener),document.removeEventListener("keyup",this.keyListener)),this.removeTempEventListeners(),this.selectedItems.clear(),this.selectingItems.clear()},Object.defineProperty(l.prototype,"containerDocumentScroll",{get:function(){return{scrollTop:this.containerScroll.scrollTop+this.documentScroll.scrollTop,scrollLeft:this.containerScroll.scrollLeft+this.documentScroll.scrollLeft}},enumerable:!0,configurable:!0}),l.prototype.removeTempEventListeners=function(){document.removeEventListener("mousemove",this.updateSelectBox),document.removeEventListener("touchmove",this.updateSelectBox),document.removeEventListener("mouseup",this.mouseUp),document.removeEventListener("touchend",this.mouseUp)},l.prototype.updateRootBounds=function(){this.scrollBounds=this.scrollContainer.getBoundingClientRect(),this.maxScrollTop=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight,this.maxScrollLeft=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth},l.prototype.toggleSelectionMode=function(){var e=this,t=e.selectedItems,o=e.state.selectionMode;t.size&&!o&&this.setState({selectionMode:!0}),!t.size&&o&&this.setState({selectionMode:!1})},l.prototype.processItem=function(e){var t=e.item,o=e.tolerance,n=e.selectboxBounds,s=e.enableDeselect,a=e.mixedDeselect,u=e.isFromClick,i=this.props.delta,f=_.doObjectsCollide(n,t.bounds,o,i),v=t.state,p=v.isSelecting,g=v.isSelected;if(u&&f)return g?this.selectedItems.delete(t):this.selectedItems.add(t),t.setState({isSelected:!g}),this.clickedItem=t,t;if(!u&&f){if(g&&s&&(!this.selectionStarted||a))return t.setState({isSelected:!1}),t.deselected=!0,this.deselectionStarted=!0,this.selectedItems.delete(t);var w=a?!t.deselected:!this.deselectionStarted;if(!p&&!g&&w)return t.setState({isSelecting:!0}),this.selectionStarted=!0,this.selectingItems.add(t),{updateSelecting:!0}}return!u&&!f&&p&&this.selectingItems.has(t)?(t.setState({isSelecting:!1}),this.selectingItems.delete(t),{updateSelecting:!0}):null},l.prototype.isInIgnoreList=function(e){if(e){if(this.ignoreCheckCache.get(e)!==void 0)return this.ignoreCheckCache.get(e);var t=this.ignoreListNodes.some(function(o){return e===o||o.contains(e)});return this.ignoreCheckCache.set(e,t),t}},l.prototype.removeIgnoredItemsFromRegistry=function(){var e=this;this.ignoreListNodes=Array.from(document.querySelectorAll(this.ignoreList.join(", "))),this.registry=new Set(b(this.registry).filter(function(t){return!e.isInIgnoreList(t.node)})),this.selectedItems=new Set(b(this.selectedItems).filter(function(t){return!e.isInIgnoreList(t.node)}))},l.prototype.preventEvent=function(e,t){var o=function(n){e.removeEventListener(t,o,!0),n.preventDefault(),n.stopPropagation()};e.addEventListener(t,o,!0)},l.prototype.cleanUp=function(){var e,t;if(this.deselectionStarted=!1,this.selectionStarted=!1,this.props.mixedDeselect)try{for(var o=C(this.registry.values()),n=o.next();!n.done;n=o.next()){var s=n.value;s.deselected=!1}}catch(a){e={error:a}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},l.prototype.handleClick=function(e,t,o){if(this.props.selectOnClick){var n=this.props,s=n.clickClassName,a=n.allowClickWithoutSelected,u=n.onSelectionFinish,i=e.target.classList||[],f=Array.from(i).includes(s);(a||this.selectedItems.size||f||e.ctrlKey)&&(this.selectItems({top:t,left:o,width:0,height:0,offsetWidth:0,offsetHeight:0},{isFromClick:!0}),u(b(this.selectedItems),this.clickedItem),e.which===1&&this.preventEvent(e.target,"click"),(e.which===2||e.which===3)&&this.preventEvent(e.target,"contextmenu"))}},l.prototype.render=function(){var e=this.state.selectionMode,t=this.props,o=t.component,n=o===void 0?"div":o,s=t.className,a=t.style,u=t.selectionModeClass,i=t.fixedPosition,f=t.selectboxClassName,v=t.children;return L.default.createElement(je.SelectableGroupContext.Provider,{value:this.contextValue},L.default.createElement(n,{ref:this.getGroupRef,style:k(k({},this.defaultContainerStyle),a),className:s+" "+(e?u:"")},v,L.default.createElement(Ee.Selectbox,{getSetState:this.getSelectboxSetState,className:f,fixedPosition:i})))},l.defaultProps={clickClassName:"",tolerance:0,globalMouse:!1,ignoreList:[],scrollSpeed:.25,minimumSpeedFactor:60,duringSelection:_.noop,onSelectionFinish:_.noop,onSelectionClear:_.noop,onSelectedItemUnmount:_.noop,allowClickWithoutSelected:!0,selectionModeClass:"in-selection-mode",resetOnStart:!1,disabled:!1,deselectOnEsc:!0,fixedPosition:!1,delta:1,allowAltClick:!1,allowCtrlClick:!1,allowMetaClick:!1,allowShiftClick:!1,selectOnClick:!0},l}(L.Component);G.SelectableGroup=ke;var H={},Ie=c&&c.__extends||function(){var r=function(l,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])},r(l,e)};return function(l,e){r(l,e);function t(){this.constructor=l}l.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),A=c&&c.__assign||function(){return A=Object.assign||function(r){for(var l,e=1,t=arguments.length;e<t;e++){l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},A.apply(this,arguments)},Pe=c&&c.__importStar||function(r){if(r&&r.__esModule)return r;var l={};if(r!=null)for(var e in r)Object.hasOwnProperty.call(r,e)&&(l[e]=r[e]);return l.default=r,l};Object.defineProperty(H,"__esModule",{value:!0});var Z=Pe(x),Te=I,Ae=O;H.createSelectable=function(r){var l;return l=function(e){Ie(t,e);function t(){var o=e!==null&&e.apply(this,arguments)||this;return o.state={isSelected:o.props.isSelected,isSelecting:!1},o.node=null,o.bounds=null,o.updateBounds=function(n){o.bounds=Te.getBoundsForNode(o.node,n)},o.getSelectableRef=function(n){o.node=n},o}return t.prototype.componentDidMount=function(){this.updateBounds(),this.context.selectable.register(this)},t.prototype.componentWillUnmount=function(){this.context.selectable.unregister(this)},t.prototype.render=function(){return Z.default.createElement(r,A({},this.props,this.state,{selectableRef:this.getSelectableRef}))},t}(Z.Component),l.contextType=Ae.SelectableGroupContext,l.defaultProps={isSelected:!1},l};var U={},Ne=c&&c.__extends||function(){var r=function(l,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])},r(l,e)};return function(l,e){r(l,e);function t(){this.constructor=l}l.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),N=c&&c.__assign||function(){return N=Object.assign||function(r){for(var l,e=1,t=arguments.length;e<t;e++){l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},N.apply(this,arguments)},Be=c&&c.__rest||function(r,l){var e={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&l.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(e[t[o]]=r[t[o]]);return e},ze=c&&c.__importStar||function(r){if(r&&r.__esModule)return r;var l={};if(r!=null)for(var e in r)Object.hasOwnProperty.call(r,e)&&(l[e]=r[e]);return l.default=r,l};Object.defineProperty(U,"__esModule",{value:!0});var J=ze(x),Ge=O,Re=function(r){Ne(l,r);function l(){var e=r!==null&&r.apply(this,arguments)||this;return e.root=null,e.getRootRef=function(t){e.root=t},e}return l.prototype.componentDidMount=function(){this.root.addEventListener("mousedown",function(e){return e.stopPropagation()})},l.prototype.render=function(){var e=this.props,t=e.component,o=t===void 0?"div":t,n=e.children,s=e.className,a=s===void 0?"":s,u=Be(e,["component","children","className"]),i=o;return J.default.createElement(i,N({ref:this.getRootRef,className:"selectable-select-all "+a,onClick:this.context.selectable.selectAll},u),n)},l.contextType=Ge.SelectableGroupContext,l}(J.Component);U.SelectAll=Re;var X={},$e=c&&c.__extends||function(){var r=function(l,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])},r(l,e)};return function(l,e){r(l,e);function t(){this.constructor=l}l.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),B=c&&c.__assign||function(){return B=Object.assign||function(r){for(var l,e=1,t=arguments.length;e<t;e++){l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},B.apply(this,arguments)},Fe=c&&c.__rest||function(r,l){var e={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&l.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(e[t[o]]=r[t[o]]);return e},We=c&&c.__importStar||function(r){if(r&&r.__esModule)return r;var l={};if(r!=null)for(var e in r)Object.hasOwnProperty.call(r,e)&&(l[e]=r[e]);return l.default=r,l};Object.defineProperty(X,"__esModule",{value:!0});var Q=We(x),Ye=O,He=function(r){$e(l,r);function l(){var e=r!==null&&r.apply(this,arguments)||this;return e.root=null,e.getRootRef=function(t){e.root=t},e}return l.prototype.componentDidMount=function(){this.root.addEventListener("mousedown",function(e){return e.stopPropagation()})},l.prototype.render=function(){var e=this.props,t=e.component,o=t===void 0?"div":t,n=e.children,s=e.className,a=Fe(e,["component","children","className"]),u=o;return Q.default.createElement(u,B({ref:this.getRootRef,className:"selectable-select-all "+s,onClick:this.context.selectable.clearSelection},a),n)},l.contextType=Ye.SelectableGroupContext,l}(Q.Component);X.DeselectAll=He;Object.defineProperty(M,"__esModule",{value:!0});var Ue=G,Xe=M.SelectableGroup=Ue.SelectableGroup,qe=H,Ve=M.createSelectable=qe.createSelectable,Ke=U;M.SelectAll=Ke.SelectAll;var Ze=X;M.DeselectAll=Ze.DeselectAll;const Je="_minorColor_14xzz_27",Qe="_startDate_14xzz_34",et="_endDate_14xzz_38",h={"ds-panel-container":"_ds-panel-container_14xzz_1","ds-outer-container":"_ds-outer-container_14xzz_9","ds-container":"_ds-container_14xzz_12","ds-header":"_ds-header_14xzz_16","ds-body":"_ds-body_14xzz_24",minorColor:Je,startDate:Qe,endDate:et,"cell-disabled":"_cell-disabled_14xzz_42","ds-picker-cell-inner":"_ds-picker-cell-inner_14xzz_46","ds-picker-cell":"_ds-picker-cell_14xzz_46","cell-picker-cell-selected":"_cell-picker-cell-selected_14xzz_65","ds-picker-cell-today":"_ds-picker-cell-today_14xzz_69","ds-selectedDate":"_ds-selectedDate_14xzz_75","ds-selectedDate-header":"_ds-selectedDate-header_14xzz_79","ds-selectedDate-notAllow-clear":"_ds-selectedDate-notAllow-clear_14xzz_96","ds-selectedDate-body":"_ds-selectedDate-body_14xzz_100","ds-selectedDate-tag":"_ds-selectedDate-tag_14xzz_105"},tt=({cellValue:r,selectableRef:l,isSelecting:e,children:t,selectedAges:o,showMinorColor:n=!1,startAge:s,endAge:a,oneAge:u,disableItems:i})=>S.jsx("div",{ref:l,title:String(r),className:E(h["ds-picker-cell"],{[h["ds-picker-cell-today"]]:e&&!(i!=null&&i(r))},{[h["cell-picker-cell-selected"]]:o.includes(r)},{[h["cell-disabled"]]:i==null?void 0:i(r)},{[h.minorColor]:o.includes(r)&&!u},{[h.startDate]:s},{[h.endDate]:a}),style:{margin:"4px 0",padding:"3px 6px",width:"36px"},children:S.jsx("div",{className:E(h["ds-picker-cell-inner"],{[h.minorColor]:n}),children:t})}),rt=Ve(tt),ot=Xe,z=({componentsName:r="多重选择器",value:l=[],isEditMode:e=!1,onChange:t,disableItems:o=()=>!1,selectedTitle:n="选择的值",containerWidth:s=682,containerHeight:a=312,defaultOptions:u=[]})=>{const[i,f]=x.useState(l),v=x.useRef(),p=d=>{const m=d+1;return i.includes(m)},g=d=>{const m=d-1;return i.includes(m)},w=d=>i.includes(d),ae=x.useMemo(()=>{const d=[];let m=[];for(let y=0;y<i.length;y++)i[y]+1===i[y+1]?m.push(i[y]):(m.push(i[y]),d.push(m),m=[]);return d},[i]);x.useEffect(()=>{t==null||t(i)},[i]);const ie=d=>{const m=d.map(D=>D.props.cellValue),y=m.filter(D=>!i.includes(D));y.length&&f(i.concat(y).sort((D,de)=>D-de)),m.length&&v.current&&v.current.clearSelection()},ce=d=>{const m=[...i],y=i.indexOf(d[0]);m.splice(y,d.length),f(m)},ue=()=>{f([])};return S.jsx("div",{className:h["ds-panel-container"],style:{width:s},children:S.jsxs("div",{className:h["ds-outer-container"],children:[S.jsxs("div",{className:h["ds-container"],style:{height:a},children:[S.jsx("div",{className:h["ds-header"],children:r}),S.jsx("div",{className:h["ds-body"],style:{pointerEvents:e?"none":"auto"},children:S.jsx(ot,{ref:v,tolerance:0,deselectOnEsc:!1,allowClickWithoutSelected:!0,onSelectionFinish:ie,children:S.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:u.map((d,m)=>S.jsx(rt,{cellValue:d,disableItems:o,selectedAges:i,oneAge:w(d)&&!p(d)&&!g(d),startAge:w(d)&&p(d)&&!g(d),endAge:w(d)&&!p(d)&&g(d),showMinorColor:w(d)&&p(d)&&g(d),children:d},m))})})})]}),S.jsxs("div",{className:E(h["ds-selectedDate"],"ant-picker-date-panel"),children:[S.jsxs("div",{className:h["ds-selectedDate-header"],children:[S.jsx("span",{children:n}),S.jsx("span",{onClick:ue,className:E({[h["ds-selectedDate-notAllow-clear"]]:e}),children:"清空已选"})]}),S.jsx("div",{className:h["ds-selectedDate-body"],style:{maxHeight:a>72?a-72:72},children:ae.map((d,m)=>S.jsxs("span",{className:h["ds-selectedDate-tag"],children:[d[0]," ~ ",d[d.length-1],S.jsx("span",{style:{cursor:"pointer"},onClick:y=>{e||(y.preventDefault(),ce(d))},children:" x"})]},m))})]})]})})};try{z.displayName="MutipleSelector",z.__docgenInfo={description:"",displayName:"MutipleSelector",props:{componentsName:{defaultValue:{value:"多重选择器"},description:"Components name",name:"componentsName",required:!1,type:{name:"string"}},value:{defaultValue:{value:"[]"},description:"value",name:"value",required:!1,type:{name:"number[]"}},onChange:{defaultValue:null,description:"Function for value change",name:"onChange",required:!1,type:{name:"((value: number[]) => void)"}},isEditMode:{defaultValue:{value:"false"},description:"Can be edit or not",name:"isEditMode",required:!1,type:{name:"boolean"}},disableItems:{defaultValue:{value:"() => false"},description:"Disable items",name:"disableItems",required:!1,type:{name:"((current: number) => boolean)"}},selectedTitle:{defaultValue:{value:"选择的值"},description:"Title for selected area",name:"selectedTitle",required:!1,type:{name:"string"}},containerWidth:{defaultValue:{value:"682"},description:"Container width",name:"containerWidth",required:!1,type:{name:"number"}},containerHeight:{defaultValue:{value:"312"},description:"Container height",name:"containerHeight",required:!1,type:{name:"number"}},defaultOptions:{defaultValue:{value:"[]"},description:"Options for component",name:"defaultOptions",required:!1,type:{name:"number[]"}}}}}catch{}const at={title:"Components/MutipleSelector",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},se=[];for(let r=1;r<=50;r++)se.push(r);const j={args:{value:[],onChange:r=>{console.log(r)},defaultOptions:se}};var ee,te,re;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    value: [],
    onChange: v => {
      console.log(v);
    },
    defaultOptions: defaultOptions
  }
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const it=["Primary"];export{j as Primary,it as __namedExportsOrder,at as default};
//# sourceMappingURL=MutipleSelector.stories-7e8d9c7f.js.map
