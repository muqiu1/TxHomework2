(this.webpackJsonpreactts=this.webpackJsonpreactts||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var l=t(1),s=t(4),n=(t(9),t(2)),a=(t(10),t(0)),i=function(e){var c=e.item,t=e.callback,s=Object(l.useState)(!1),i=Object(n.a)(s,2),o=i[0],j=i[1];return Object(l.useEffect)((function(){j(c.value)}),[]),Object(a.jsx)("div",{className:"check-box",children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{onChange:function(e){t({isCheck:e.target.checked,key:c.key}),j(e.target.checked)},type:"checkbox",checked:o}),c.key]})})},o=function(e){return Object(a.jsxs)("select",{className:"my-select",onChange:function(c){e.callback(c.target.value)},children:[Object(a.jsx)("option",{children:"\u6a58\u5b50"}),Object(a.jsx)("option",{children:"\u82f9\u679c"}),Object(a.jsx)("option",{children:"\u68a8\u5b50"})]})},j=function(e){return Object(a.jsx)("div",{className:"slide-wrapper",children:Object(a.jsxs)("div",{onMouseDown:function(){var c=document.querySelector(".out-box"),t=document.querySelector(".slide"),l=document.querySelector(".mark");document.onmousemove=function(s){var n=s.clientX-c.offsetLeft;n>=300?(t.style.width="300px",l.style.left="290px"):n<=0?(t.style.width="0px",l.style.left="1px"):(t.style.width=n+"px",l.style.left=n+"px"),e.callback(Math.floor(n/300*100))}},onMouseUp:function(){document.onmousemove=function(){return null}},className:"out-box",children:[Object(a.jsx)("div",{className:"slide"}),Object(a.jsx)("div",{className:"mark"})]})})},r=function(e){var c=Object(l.useState)(""),t=Object(n.a)(c,2),s=t[0],i=t[1];return Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("input",{placeholder:"\u8f93\u5165\u5185\u5bb9\u540e\u51fa\u73b0\u6e05\u9664\u6309\u94ae",onChange:function(c){i(c.target.value),e.callback(c.target.value)},value:s}),s&&Object(a.jsx)("div",{onClick:function(){i("")},className:"clear-icon"})]})},u=function(e){return Object(a.jsx)("div",{className:"switch-wrapper",children:Object(a.jsx)("div",{onClick:function(){var c=document.querySelector(".scroll-bar"),t=document.querySelector(".switch-wrapper");c.style.left&&"0px"!==c.style.left?(c.style.left="0px",t.style.backgroundColor="#eee",e.callback(!1)):(c.style.left="15px",c.style.top="2px",t.style.backgroundColor="#2f5fd3",e.callback(!0))},className:"scroll-bar"})})},b=function(e){return console.log(e),Object(l.useEffect)((function(){var c=setTimeout((function(){e.callback()}),3e3);return function(){c=null,console.log(c)}}),[]),Object(a.jsxs)("div",{className:"tip-wrapper",children:[Object(a.jsx)("div",{className:"right-icon"}),"\u63d0\u4ea4\u6210\u529f\uff0c\u5373\u5c06\u66f4\u65b0\u53f3\u4fa7",Object(a.jsx)("div",{onClick:function(){e.callback()},className:"tip-icon"})]})},d=[],h=[{key:"\u6570\u5b66",value:!1},{key:"\u8bed\u6587",value:!1},{key:"\u82f1\u8bed",value:!1}],x=function(){var e=Object(l.useState)([]),c=Object(n.a)(e,2),t=c[0],s=c[1],x=Object(l.useState)("\u6a58\u5b50"),O=Object(n.a)(x,2),f=O[0],p=O[1],m=Object(l.useState)(!1),k=Object(n.a)(m,2),v=k[0],y=k[1],N=Object(l.useState)(0),g=Object(n.a)(N,2),S=g[0],w=g[1],C=Object(l.useState)(""),q=Object(n.a)(C,2),D=q[0],F=q[1],M=Object(l.useState)(!1),V=Object(n.a)(M,2),E=V[0],I=V[1],L=Object(l.useState)(null),T=Object(n.a)(L,2),B=T[0],J=T[1];return Object(a.jsxs)("div",{className:"form-page",children:[Object(a.jsxs)("div",{className:"page-left",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"\u4ee3\u7801\u793a\u8303\u5217\u5b50"})}),Object(a.jsx)("div",{className:"checkbox-title",children:"checkbox\u591a\u9009\uff1a"}),h.map((function(e){return Object(a.jsx)(i,{callback:function(e){e.isCheck&&!d.includes(e.key)?d.push(e.key):d.length&&d.splice(d.findIndex((function(c){return c===e.key})),1),s(d)},item:e},e.key)})),Object(a.jsx)("div",{className:"select-title",children:"Select\u591a\u9009\u6846\uff1a"}),Object(a.jsx)(o,{callback:function(e){p(e)}}),Object(a.jsx)("div",{className:"slide-title",children:"Slide\u8fdb\u5ea6\u6761\uff08\u53ef\u62d6\u52a8\uff09\uff1a"}),Object(a.jsx)(j,{callback:function(e){w(e)}}),Object(a.jsx)("div",{className:"input-title",children:"input\u8f93\u5165\u540e\u53ef\u6e05\u9664\uff1a"}),Object(a.jsx)(r,{callback:function(e){F(e)}}),Object(a.jsx)("div",{className:"switch-title",children:"switch\u5f00\u5173\uff1a"}),Object(a.jsx)(u,{callback:function(e){console.log(e),I(e)}}),Object(a.jsx)("div",{onClick:function(){y(!0),J({checkbox:t,selectData:f,slide:S,inputValue:D,switchValue:E})},className:"btn",children:"\u63d0\u4ea4"}),Object(a.jsx)("div",{className:"text",children:"\u70b9\u51fb\u63d0\u4ea4\u540e\uff0c\u4f1a\u8fdb\u884csnackbar\u63d0\u793a"})]}),B&&Object(a.jsxs)("div",{className:"page-right",children:[Object(a.jsx)("div",{className:"checkbox-title",children:"checkbox\u591a\u9009\uff1a"}),B.checkbox.map((function(e){return Object(a.jsx)("span",{children:e},e)})),Object(a.jsx)("div",{className:"select-title",children:"Select\u591a\u9009\u6846\uff1a"}),Object(a.jsx)("span",{children:B.selectData}),Object(a.jsx)("div",{className:"slide-title",children:"Slide\u8fdb\u5ea6\u6761\uff08\u53ef\u62d6\u52a8\uff09\uff1a"}),Object(a.jsx)("span",{children:B.slide}),Object(a.jsx)("div",{className:"input-title",children:"input\u8f93\u5165\u540e\u53ef\u6e05\u9664\uff1a"}),Object(a.jsx)("span",{children:B.inputValue}),Object(a.jsx)("div",{className:"switch-title",children:"switch\u5f00\u5173\uff1a"}),Object(a.jsx)("span",{children:"".concat(B.switchValue)})]}),v&&Object(a.jsx)(b,{callback:function(){y(!1)}})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,l=c.getFID,s=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),l(e),s(e),n(e),a(e)}))};s.render(Object(a.jsx)(l.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.37b56fef.chunk.js.map