(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],s[o]&&m.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043a":function(t,e,a){t.exports=a.p+"img/Kevin_Thomas.90358889.jpg"},"0c1a":function(t,e,a){},"0e5e":function(t,e,a){"use strict";var n=a("6d2d"),s=a.n(n);s.a},1:function(t,e){},"14e1":function(t,e,a){t.exports=a.p+"img/Garry_Gold.5745d14e.jpg"},2:function(t,e){},3:function(t,e){},"34ba":function(t,e,a){"use strict";var n=a("7dbb"),s=a.n(n);s.a},4:function(t,e){},"418c":function(t,e,a){},"4e1e":function(t,e,a){t.exports=a.p+"img/true_label_2.3bbf5c90.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("aef6"),a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("0284"),i=a.n(s),o=a("9f7b"),r=a.n(o),c=a("ec02"),l=a.n(c),u=(a("ab8b"),a("2dd8"),a("ecee")),d=a("c074"),m=a("f2d1"),f=a("ad3d"),h=a("cbc3"),p=a.n(h),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("Footer"),a("ToastPanel")],1)},g=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"bg-light",attrs:{toggleable:"lg"}},[a("div",{staticClass:"container"},[t._v("\n    <!span>\n      "),a("b-collapse",{staticClass:"py-3",attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},t._l(t.menuItems,function(e,n){return a("b-nav-item",{key:n,staticClass:"pl-0",attrs:{to:e.to?e.to:null,exact:"","active-class":"active",active:e.to===t.$route.path},on:{click:function(a){return t.onClick(e)}}},[t._v("\n            "+t._s(e.label)+"\n          ")])}),1)],1),a("b-navbar-toggle",{staticClass:"mt-0",attrs:{target:"nav_collapse"}})],1)])},S=[],C=a("2f62"),y={namespaced:!0,state:{id:1,maxToasts:2,timeBeforeClose:15e3,toasts:[]},mutations:{add:function(t,e){var a=this;e.id=t.id++,t.timeBeforeClose>0&&(e.timer=setTimeout(function(t){a.commit("toasts/close",t)},t.timeBeforeClose,e.id)),t.toasts.push(e),t.toasts.length>t.maxToasts&&t.toasts.shift()},close:function(t,e){t.toasts=t.toasts.filter(function(t){return t.id!==e})}}},w=a("0b53");n["a"].use(C["a"]);var E="Loading... (wait up to 30 seconds)",T="Ready! You can upload images now",_=new C["a"].Store({modules:{toasts:y},state:{klTool:{mobilenet:!1,networkStatus:E},mriTool:{mobilenet:!1,networkStatus:E},links:{facebook:"https://www.facebook.com/Saliencyai-308526986484182/",twitter:"https://twitter.com/saliencyai",linkedin:"https://www.linkedin.com/company/19134331/"}},mutations:{setKLToolNet:function(t,e){t.klTool.mobilenet=e},setKLToolStatus:function(t,e){t.klTool.networkStatus=e},setMRIToolNet:function(t,e){t.mriTool.mobilenet=e},setMRIToolStatus:function(t,e){t.mriTool.networkStatus=e}},actions:{warmUpKLNet:function(t,e){w["c"](e.modelPath).then(function(e){t.commit("setKLToolStatus",T),t.commit("setKLToolNet",e)})},warmUpMRINet:function(t,e){w["c"](e.modelPath).then(function(e){t.commit("setMRIToolStatus",T),t.commit("setMRIToolNet",e)})}}}),O=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-headful",{attrs:{title:"KneeNet - software to streamline knee osteoarthritis R&D"}}),a("ToolSelectFile",{attrs:{busy:!t.mobilenet||t.busy,header:"Our X-ray tool automatically evaluates knee osteoarthritis severity in X-rays using the Kellgren-Lawrence scoring system.",statusText:t.networkStatus,accept:".jpg, .jpeg, .png, .dcm"},model:{value:t.newImages,callback:function(e){t.newImages=e},expression:"newImages"}}),t.images.length>0?a("Results",{attrs:{images:t.images,width:t.imageSize,height:t.imageSize,tool:"KL"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}):t._e(),a("Status",{attrs:{networkStatus:t.networkStatus}}),a("Creators"),a("License")],1)},I=[],R=(a("b6e4"),a("63d9"),a("55dd"),a("ac6a"),a("5df3"),a("7f7f"),a("795b")),A=a.n(R),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"s-services"},[a("h1",{staticClass:"h1-responsive font-weight-bold text-center mb-4 mt-0"},[t._v("Automatic annotations from our model")]),a("div",{staticClass:"ml-md-5 mr-md-5 text-container"},[a("div",{staticClass:"mr-md-3 text-col"},[a("b-table",{staticClass:"results",attrs:{items:t.images,fields:t.fields,hover:""},on:{"row-clicked":t.rowClicked},scopedSlots:t._u([{key:"filename",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""]},[t._v(t._s(e.item.filename))])]}},{key:"score",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""],staticStyle:{"text-align":"center"}},[t._v("\n            "+t._s(e.item.res[0].className)+" \n          ")])]}},{key:"confidence",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""]},[t._v("\n            "+t._s(t._f("round")(100*e.item.res[0].probability,2))+"%\n          ")])]}}])})],1),a("div",{staticClass:"image-col"},[a("img",{attrs:{id:"selectedImage",src:t.images[t.value].img.src,width:t.width,height:t.height,alt:"Knee cap"}}),a("div",{staticClass:"mt-2 text-center"},["MRI"==t.tool?a("span",[t._v("femoral cartilage area: ")]):t._e(),a("strong",{staticStyle:{"font-size":"2em"}},[t._v(t._s(t.images[t.value].res[0].className))]),a("br"),"KL"==t.tool?a("span",[t._v("(confidence = "+t._s(t._f("round")(100*t.images[t.value].res[0].probability,2))+"%)")]):t._e()])])]),a("SectionLine",{attrs:{color:"#39b54a",top:""}})],1)},k=[],D=(a("c5f6"),{name:"Results",props:{value:Number,images:Array,width:Number,height:Number,tool:String},data:function(){var t={sortBy:"filename",fields:[{key:"filename",label:"Filename",sortable:!0},{key:"score",label:"KL Score",sortable:!1,thClass:"text-center",tdClass:"text-center"}]};return"KL"==this.tool?t["fields"].push({key:"confidence",label:"Confidence",sortable:!1,thClass:"text-center",tdClass:"text-center"}):t["fields"][1]["label"]="Femoral cartilage area",t},methods:{rowClicked:function(t,e,a){this.$emit("input",e)}}}),L=D,F=(a("67b8"),a("f45a"),a("2877")),M=Object(F["a"])(L,N,k,!1,null,null,null),j=M.exports,P=(a("673e"),a("e730")),Y=a.n(P),U={data:function(){return{newImages:[],images:[],selected:0,busy:!1,startTime:!1}},created:function(){Y.a.gui.getElement=Y.a.gui.base.getElement,Y.a.gui.displayProgress=function(t){}},watch:{newImages:function(t){var e=this;this.busy=!0,this.networkStatus="Processing a new image";var a=performance.now(),n=this,s=[];this.watchHandler(n,s,t),A.a.all(s).then(function(t){var s=performance.now()-a;e.networkStatus="Done in ".concat(Math.floor(s),"ms. Ready for more images"),n.busy=!1})}},methods:{processImage:function(t){var e=this;return new A.a(function(a){var n=function(t){var e=new Image;e.onload=function(){e.name=t.name,a(e)},e.src=URL.createObjectURL(t)};t.name.endsWith(".jpg")||t.name.endsWith(".jpeg")||t.name.endsWith(".png")?n(t):e.convertDICOMtoBLOB(t).then(n)})},preprocess:function(t){var e=1,a=this.imageSize,n=this.imageSize,s=t.naturalHeight,i=t.naturalWidth,o=i*e,r=s-o,c=Math.ceil(r/2),l=Math.floor(r/2),u=document.createElement("canvas"),d=u.getContext("2d");u.width=this.imageSize,u.height=this.imageSize,d.drawImage(t,0,c,i,s-l-c,0,0,u.width,u.height),d.save();var m=d.getImageData(0,0,a,n),f=w["b"](m).toFloat(),h=w["h"](f,2)[0],p=h.mean(),v=w["e"](h,p),g=v.square().mean().sqrt(),b=w["a"](v,g),S=w["e"](b.max(),b.min()).get();b=w["a"](w["e"](b,b.min()),S);var C=w["g"](w["d"]([b,b,b]),[1,2,0]);return C},preprocess_mri:function(t){var e=384,a=1,n=e,s=e,i=t.naturalHeight,o=t.naturalWidth,r=o*a,c=i-r,l=Math.ceil(c/2),u=Math.floor(c/2),d=document.createElement("canvas"),m=d.getContext("2d");d.width=e,d.height=e,m.drawImage(t,0,l,o,i-u-l,0,0,d.width,d.height),m.save();var f=m.getImageData(0,0,n,s),h=w["b"](f).toFloat(),p=w["h"](h,2)[0],v=p,g=w["e"](v.max(),v.min()).get();v=w["a"](w["e"](v,v.min()),g);var b=w["d"]([v]);return b},toPixels:function(t){var e=t.dataSync(),a=new ImageData(t.shape[0],t.shape[1]);if(2==t.shape.length||1==t.shape[2])for(var n=0;n<e.length;n++){var s=255*(e[n]>.35);a.data[4*n+0]=0,a.data[4*n+1]=s,a.data[4*n+2]=0,a.data[4*n+3]=s}else if(3==t.shape[2])for(var i=0;i<e.length/3;i++)a.data[4*i+0]=255*e[3*i+0],a.data[4*i+1]=0,a.data[4*i+2]=0,a.data[4*i+3]=255*e[3*i+0];else 4==t.shape[2]&&(a.data=e);return a}}},B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"header-image py-4",attrs:{id:"demo"}},[a("b-container",{staticClass:"text-light my-5"},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"mb-2 text-center",attrs:{cols:"12",md:"8"}},[a("div",{staticClass:"section-header has-bottom-sep"},[a("h2",[t._v(t._s(t.header))])]),a("div",{staticStyle:{margin:"0.5em"}},[a("a",{attrs:{href:"#license"}},[t._v("Before using our software read and accept our license agreement.")])]),a("h4",[t._v("Try it out! Pick an image to analyze")])])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"mx-sm-3 mb-2",attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("b-form-file",{attrs:{state:Boolean(t.files),disabled:t.busy,placeholder:"Choose or drag-and-drop a file...",multiple:t.multiple,accept:t.accept},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"text-center",staticStyle:{"font-weight":"bold"}},[t._v("\n          The analysis is run on your computer - no images are sent out!\n        ")])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"text-center"},[t._v("\n\t  It can take up to 30 seconds to process an image depending on your computer configuration.\n        ")])],1)],1),a("SectionLine",{attrs:{bottom:""}})],1)},H=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"py-2 mb-2 mt-2 text-center",staticStyle:{background:"#fafafa","border-top":"1px solid #e0e0e0","border-bottom":"1px solid #e0e0e0"},attrs:{fluid:""}},[a("strong",[t._v("Neural network status: ")]),a("span",{domProps:{innerHTML:t._s(t.networkStatus)}})])},z=[],$={name:"Status",props:{networkStatus:String}},W=$,G=Object(F["a"])(W,K,z,!1,null,null,null),V=G.exports,X={name:"ToolSelectFile",components:{Status:V},props:{busy:Boolean,header:String,statusText:String,value:Array,multiple:{type:Boolean,default:!0},accept:String},computed:{files:{get:function(){return this.value},set:function(t){this.$emit("input",this.multiple?t:[t])}}}},q=X,J=Object(F["a"])(q,B,H,!1,null,null,null),Q=J.exports,Z={data:function(){return{dwvRenderID:1}},methods:{convertDICOMtoBLOB:function(t){var e=this;return new A.a(function(a){var n=document.createElement("div");n.id="dwvRoot_"+e.dwvRenderID,n.style.cssText="position: absolute; top: 0; left: 0; opacity: 0",document.body.appendChild(n);var s=document.createElement("div");s.id="dwv_"+e.dwvRenderID,n.appendChild(s);var i=document.createElement("div");i.className="layerContainer",s.appendChild(i);var o=document.createElement("canvas");o.id="imageCanvas",o.className="imageLayer",i.appendChild(o);var r=new Y.a.App;r.init({containerDivId:"dwv_"+e.dwvRenderID}),e.dwvRenderID++,r.addEventListener("load-end",function(e){r.removeEventListener("load-end",this),o.toBlob(function(e){document.body.removeChild(n),e.name=t.name,a(e)})}),r.loadFiles([t])})}}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:" h1-responsive font-weight-bold text-center my-4",staticStyle:{padding:"0.5em"}},[t._v("Team")]),n("b-row",{staticClass:"m-t-2 justify-content-center"},[n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("043a")}}),n("br"),n("div",{staticClass:"name"},[t._v("Kevin Thomas")]),n("div",{staticClass:"role"},[t._v("M.D. Ph.D. Candidate @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/kevin-a-thomas-04b91a45/"}},[n("i",{staticClass:"fab fa-linkedin"})])])]),n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("8ba2")}}),n("br"),n("div",{staticClass:"name"},[t._v("Lukasz Kidzinski, Ph.D.")]),n("div",{staticClass:"role"},[t._v("Bioengineering Researcher @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/lukaszkidzinski/"}},[n("i",{staticClass:"fab fa-linkedin"})])])])]),n("h1",{staticClass:" h1-responsive font-weight-bold text-center my-4",staticStyle:{padding:"0.5em"}},[t._v("Advisors")]),n("b-row",{staticClass:"mt-4 mb-5 justify-content-center"},[n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("14e1")}}),n("br"),n("div",{staticClass:"name"},[t._v("Garry Gold, M.D.")]),n("div",{staticClass:"role"},[t._v("Professor of Radiology   "),n("a",{attrs:{href:"https://www.linkedin.com/in/garry-gold-9a242a3/"}},[n("i",{staticClass:"fab fa-linkedin"})])])]),n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("83e5")}}),n("div",{staticClass:"name"},[t._v("Scott Delp, Ph.D.")]),n("div",{staticClass:"role"},[t._v("Professor of Bioengineering @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/scott-delp-569651ab/"}},[n("i",{staticClass:"fab fa-linkedin"})])]),n("div",{staticClass:"blurb"})])])],1)},et=[],at={name:"Creators"},nt=at,st=(a("ad23"),Object(F["a"])(nt,tt,et,!1,null,null,null)),it=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-t-4 p-b-4 section-bg-dark",attrs:{id:"poc"}},[a("b-container",[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"font-weight-bold text-center my-4"},[t._v("Contact us")])]),a("div",{staticClass:"row align-items-center"},[a("p",{staticClass:"text-center w-responsive mx-auto mb-5"},[t._v("Interested in our demo? Please do not hesitate to contact us directly."),a("br")]),a("div",{staticClass:"row col-md-12"},[a("div",{staticClass:"col-md-6 offset-md-2 "},[a("form",{attrs:{id:"contact-form",name:"contact-form",action:"https://getsimpleform.com/messages?form_api_token=93c7299b577464b9524e30ddb343cda2",method:"POST"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"}}),a("label",{attrs:{for:"name"}},[t._v("Your name")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"email",name:"email"}}),a("label",{attrs:{for:"email"}},[t._v("Your email")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"subject",name:"subject"}}),a("label",{attrs:{for:"subject"}},[t._v("Subject")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form"},[a("textarea",{staticClass:"form-control md-textarea",attrs:{type:"text",id:"message",name:"message",rows:"4"}}),a("label",{attrs:{for:"message"}},[t._v("Your message")])])])])]),a("div",{staticClass:"text-center text-md-center"},[a("a",{staticClass:"btn btn-outline-success",attrs:{onclick:"document.getElementById('contact-form').submit();"}},[t._v("Send")])]),a("div",{staticClass:"status"})]),a("div",{staticClass:"col-md-2 text-center"},[a("ul",{staticClass:"list-unstyled mb-0"},[a("li",[a("i",{staticClass:"fas fa-map fa-2x"}),a("p",[t._v("S.331, James Clark Center, 318 Campus Drive, Stanford, CA 94305, USA")])]),a("li",[a("i",{staticClass:"fas fa-phone mt-4 fa-2x"}),a("p",[t._v("+1 650 307 2053")])]),a("li",[a("i",{staticClass:"fas fa-envelope mt-4 fa-2x"}),a("p",[t._v("lukasz.kidzinski@stanford.edu")])])])])])])])],1)},rt=[],ct={name:"ContactForm",data:function(){return{name:"",email:"",message:""}},computed:{contactDisabled:function(){return!(this.name&&this.email&&this.message)}}},lt=ct,ut=Object(F["a"])(lt,ot,rt,!1,null,null,null),dt=ut.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-t-4 p-b-4 section-bg-dark",attrs:{id:"poc"}},[a("b-container",[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"font-weight-bold text-center my-4",attrs:{id:"license"}},[t._v("License agreement")])]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"row col-md-12"},[a("ol",[a("li",[t._v(' The Board of Trustees of the Leland Stanford Junior University ("Stanford") provides KneeNet software and code ("Service") free of charge for non-commercial use only. Use of the Service by any commercial entity for any purpose, including research, is prohibited.')]),a("li",[t._v(" By using the Service, you agree to be bound by the terms of this Agreement. Please read it carefully.")]),a("li",[t._v(" You agree not to use the Service for commercial advantage, or in the course of for-profit activities. You agree not to use the Service on behalf of any organization that is not a non-profit organization. Commercial entities wishing to use this Service should contact Stanford University's Office of Technology Licensing.")]),a("li",[t._v(' THE SERVICE IS OFFERED "AS IS", AND, TO THE EXTENT PERMITTED BY LAW, STANFORD MAKES NO REPRESENTATIONS AND EXTENDS NO WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. STANFORD SHALL NOT BE LIABLE FOR ANY CLAIMS OR DAMAGES WITH RESPECT TO ANY LOSS OR OTHER CLAIM BY YOU OR ANY THIRD PARTY ON ACCOUNT OF, OR ARISING FROM THE USE OF THE SERVICE. YOU HEREBY AGREE TO DEFEND AND INDEMNIFY STANFORD, ITS TRUSTEES, EMPLOYEES, OFFICERS, STUDENTS, AGENTS, FACULTY, REPRESENTATIVES, AND VOLUNTEERS ("STANFORD INDEMNITEES") FROM ANY LOSS OR CLAIM ASSERTED AGAINST STANFORD INDEMNITEES ARISING FROM YOUR USE OF THE SERVICE.')]),a("li",[t._v(" All rights not expressly granted to you in this Agreement are reserved and retained by Stanford or its licensors or content providers. This Agreement provides no license under any patent.")]),a("li",[t._v(" You agree that this Agreement and any dispute arising under it is governed by the laws of the State of California, United States of America, applicable to agreements negotiated, executed, and performed within California.")]),a("li",[t._v(" Subject to your compliance with the terms and conditions set forth in this Agreement, Stanford grants you a revocable, non-exclusive, non-transferable right to access and make use of the Service.")]),a("li",[t._v("Any questions regarding our technology direct to lukasz.kidzinski@stanford.edu.")])])])])])],1)},ft=[],ht={name:"License",data:function(){return{}},computed:{}},pt=ht,vt=Object(F["a"])(pt,mt,ft,!1,null,null,null),gt=vt.exports;function bt(t,e,a){return a*(4*t.width)+4*e}function St(t){for(var e=0,a=0,n=0,s=0;s<t.width;s++)for(var i=0;i<t.height;i++){var o=bt(t,s,i);t.data[o]>0&&(n+=1,e+=s,a+=i)}return[Math.round(e/n),Math.round(a/n)]}function Ct(t){for(var e=[],a=0;a<t.width;a++){for(var n=0,s=0;s<t.height;s++){var i=bt(t,a,s);t.data[i]>0&&(n+=1)}e.push(n/t.height>.2)}return e}function yt(t,e){for(var a=0;a<t.width;a++)for(var n=0;n<t.height;n++){var s=bt(t,a,n);t.data[s]>e?(t.data[s]=1,t.data[s+1]=1,t.data[s+2]=1):(t.data[s]=0,t.data[s+1]=0,t.data[s+2]=0)}return t}function wt(t){var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),n=Tt(Et(a),a.width*a.height);a=yt(a,n);var s=Ct(a),i=s.length,o=St(a),r=.15,c=Math.round(o[0]-i*r),l=Math.round(o[0]+i*r),u=s.slice(c,l+1);return Math.min.apply(null,u)==Math.max.apply(null,u)?(console.log("Found 1 knee"),1):(console.log("Found 2 knees"),2)}function Et(t){for(var e=[],a=0;a<256;a++)e.push(0);for(a=0;a<t.width;a++)for(var n=0;n<t.height;n++){var s=bt(t,a,n);e[t.data[s]]+=1}return e}function Tt(t,e){for(var a=0,n=0;n<256;n++)a+=n*t[n];for(var s=0,i=0,o=0,r=0,c=0,l=0;l<256;l++)if(i+=t[l],0!=i){if(o=e-i,0==o)break;s+=l*t[l];var u=s/i,d=(a-s)/o,m=i*o*(u-d)*(u-d);m>r&&(r=m,c=l)}return c}var _t={name:"KLTool",mixins:[Z,U],components:{ToolSelectFile:Q,Results:j,Creators:it,ContactForm:dt,Status:V,License:gt},data:function(){return{imageSize:299,splitImages:!0}},created:function(){this.images.push({filename:"true_label_2.png",img:{src:a("4e1e")},res:[{className:"2",probability:.5556}],time:0}),this.images.push({filename:"true_label_4.png",img:{src:a("bace")},res:[{className:"4",probability:.7899}],time:0})},computed:{mobilenet:function(){return this.$store.state.klTool.mobilenet},networkStatus:{get:function(){return this.$store.state.klTool.networkStatus},set:function(t){this.$store.commit("setKLToolStatus",t)}}},methods:{watchHandler:function(t,e,a){for(var n=function(n){e.push(new A.a(function(e){t.processImage(a[n]).then(function(a){var n=document.createElement("canvas"),s=n.getContext("2d");if(n.width=a.width,n.height=a.height,s.drawImage(a,0,0),t.splitImages=wt(n)>1,t.splitImages){var i=document.createElement("canvas"),o=document.createElement("canvas"),r=i.getContext("2d"),c=o.getContext("2d"),l=Math.round(a.naturalWidth/2);i.width=l,o.width=a.naturalWidth-l,i.height=o.height=a.naturalHeight,r.drawImage(a,0,0,l,a.naturalHeight,0,0,l,a.naturalHeight),c.drawImage(a,l+1,0,a.naturalWidth-l,a.naturalHeight,0,0,a.naturalWidth-l,a.naturalHeight);var u=new Image;u.name=a.name+"_left";var d=new Image;d.name=a.name+"_right";var m=[];m.push(new A.a(function(e){u.onload=function(){t.predict(u,u.name,e)}})),m.push(new A.a(function(e){d.onload=function(){t.predict(d,d.name,e)}})),u.src=i.toDataURL("image/png"),d.src=o.toDataURL("image/png"),A.a.all(m).then(function(t){e(!0)})}else t.predict(a,a.name,e)})}))},s=0;s<a.length;s++)n(s)},predict:function(t,e,a){var n=this,s=w["f"](function(){var e=n.preprocess(t),a=e.reshape([1,n.imageSize,n.imageSize,3]);return n.mobilenet.predict(a)});this.getTopKClasses(s,5).then(function(s){n.images.length,n.images.push({filename:e,img:t,res:s}),n.selected=n.images.length-1,a(!0)})},getTopKClasses:function(t,e){return t.data().then(function(t){for(var a=[],n=0;n<t.length;n++)a.push({value:t[n],index:n});a.sort(function(t,e){return e.value-t.value});for(var s=new Float32Array(e),i=new Int32Array(e),o=0;o<e;o++)s[o]=a[o].value,i[o]=a[o].index;for(var r=[],c=0;c<i.length;c++)r.push({className:i[c],probability:s[c]});return r})}}},Ot=_t,xt=Object(F["a"])(Ot,x,I,!1,null,null,null),It=xt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"header-image text-light",attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",[a("h1",{staticClass:"h1-responsive font-weight-bold text-center pb-2 contact-us"},[a("router-link",{attrs:{to:"/"}},[t._v("We make software to streamline knee osteoarthritis R&D")])],1)])],1)],1),t._m(0),a("ContactForm")],1)},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12",staticStyle:{"font-size":"1.3em",padding:"1em"}},[a("h2",[t._v("License agreement")]),a("ol",[a("li",[t._v(' The Board of Trustees of the Leland Stanford Junior University ("Stanford") provides KneeNet software and code ("Service") free of charge for non-commercial use only. Use of the Service by any commercial entity for any purpose, including research, is prohibited.')]),a("li",[t._v(" By using the Service, you agree to be bound by the terms of this Agreement. Please read it carefully.")]),a("li",[t._v(" You agree not to use the Service for commercial advantage, or in the course of for-profit activities. You agree not to use the Service on behalf of any organization that is not a non-profit organization. Commercial entities wishing to use this Service should contact Stanford University's Office of Technology Licensing.")]),a("li",[t._v(' THE SERVICE IS OFFERED "AS IS", AND, TO THE EXTENT PERMITTED BY LAW, STANFORD MAKES NO REPRESENTATIONS AND EXTENDS NO WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. STANFORD SHALL NOT BE LIABLE FOR ANY CLAIMS OR DAMAGES WITH RESPECT TO ANY LOSS OR OTHER CLAIM BY YOU OR ANY THIRD PARTY ON ACCOUNT OF, OR ARISING FROM THE USE OF THE SERVICE. YOU HEREBY AGREE TO DEFEND AND INDEMNIFY STANFORD, ITS TRUSTEES, EMPLOYEES, OFFICERS, STUDENTS, AGENTS, FACULTY, REPRESENTATIVES, AND VOLUNTEERS ("STANFORD INDEMNITEES") FROM ANY LOSS OR CLAIM ASSERTED AGAINST STANFORD INDEMNITEES ARISING FROM YOUR USE OF THE SERVICE.')]),a("li",[t._v(" All rights not expressly granted to you in this Agreement are reserved and retained by Stanford or its licensors or content providers. This Agreement provides no license under any patent.")]),a("li",[t._v(" You agree that this Agreement and any dispute arising under it is governed by the laws of the State of California, United States of America, applicable to agreements negotiated, executed, and performed within California.")]),a("li",[t._v(" Subject to your compliance with the terms and conditions set forth in this Agreement, Stanford grants you a revocable, non-exclusive, non-transferable right to access and make use of the Service.")])])])])])}],Nt=a("bd86"),kt=(a("96cf"),a("3b8d")),Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"header-image text-light",attrs:{fluid:""}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",[n("h1",{staticClass:"h1-responsive font-weight-bold text-center pb-2 contact-us"},[t._v("We make software to streamline knee osteoarthritis R&D")])])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8",staticStyle:{"font-size":"1.3em"}},[t._v("\n      Our software automatically asseses knee osteoarthritis using artificial intelligence\n        "),n("p",[n("br"),t._v(" Our services include: \n"),n("ul",[n("li",[t._v("Automated analysis of knee osteoarthritis severity from X-rays.")]),n("li",[t._v("Automated detection of short-term disease changes.")]),n("li",[t._v("Early detection of OA from gait analysis.")])])])]),n("div",{staticClass:"col-md-4"},[n("img",{attrs:{src:a("cb55"),width:"300",height:"300",alt:"Knee cap"}}),n("br")])])])],1)},Lt=[],Ft={name:"TextInfoBlock"},Mt=Ft,jt=Object(F["a"])(Mt,Dt,Lt,!1,null,null,null),Pt=jt.exports,Yt=Object(Nt["a"])({name:"General",components:{Creators:it,ContactForm:dt,TextInfoBlock:Pt},data:function(){return{}},computed:{hasKey:function(){return this.$store.state.apiKey.length>0}},created:function(){var t=Object(kt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),watch:{},methods:{}},"created",function(){this.$route.query.key&&Kt.push({name:"Demo"})}),Ut=Yt,Bt=(a("0e5e"),Object(F["a"])(Ut,Rt,At,!1,null,null,null)),Ht=Bt.exports;n["a"].use(O["a"]);var Kt=new O["a"]({mode:"history",routes:[{path:"/",name:"demo",component:It},{path:"/license/",name:"license",component:Ht}]}),zt={name:"NavBar",data:function(){return{menuItems:[{label:"About",to:"/"},{label:"Demo",to:"/demo"},{label:"Logout",handler:this.logout}]}},methods:{onClick:function(t){"handler"in t&&t.handler()},logout:function(){_.commit("setAPIKey",""),Kt.push({path:"/"})}},computed:{hasKey:function(){return _.state.apiKey.length>0}}},$t=zt,Wt=(a("34ba"),Object(F["a"])($t,b,S,!1,null,null,null)),Gt=Wt.exports,Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pre-footer"}),a("footer",[a("div",{staticClass:"container"},[a("p",{staticClass:"text-center"},[t._v("Copyright (c) 2019")])])])])}],qt={name:"Footer"},Jt=qt,Qt=(a("760c"),Object(F["a"])(Jt,Vt,Xt,!1,null,null,null)),Zt=Qt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},t._l(t.$store.state.toasts.toasts,function(t){return a("Toast",{key:t.id,attrs:{data:t}})}),1)},ee=[],ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast toast-main",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[a("div",{staticClass:"toast-header text-white",class:t.headerClass},[a("strong",{staticClass:"mr-auto"},[t._v(t._s(t.header))]),a("button",{staticClass:"ml-2 mb-1 close text-white",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.close()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"toast-body"},[t._v("\n    "+t._s(t.data.text)+"\n  ")])])},ne=[],se={name:"Toast",props:{data:Object},computed:{header:function(){return"error"===this.data.type?"Error":"info"===this.data.type?"Info":this.data.customHeader},headerClass:function(){return{error:"error"===this.data.type,info:"info"===this.data.type,custom:"error"!==this.data.type&&"info"!==this.data.type}}},methods:{close:function(){this.$store.commit("toasts/close",this.data.id)}}},ie=se,oe=(a("616f"),Object(F["a"])(ie,ae,ne,!1,null,null,null)),re=oe.exports,ce={name:"Toasts",components:{Toast:re}},le=ce,ue=(a("c41b"),Object(F["a"])(le,te,ee,!1,null,null,null)),de=ue.exports,me={name:"App",components:{NavBar:Gt,Footer:Zt,ToastPanel:de},created:function(){this.$store.dispatch("warmUpKLNet",{modelPath:"https://s3.amazonaws.com/health-ai/models/kneenet/model.json"}),this.$store.dispatch("warmUpMRINet",{modelPath:"https://s3.amazonaws.com/health-ai/models/small-unet/model.json"})}},fe=me,he=Object(F["a"])(fe,v,g,!1,null,null,null),pe=he.exports;a("a347");n["a"].use(r.a),n["a"].component("vue-headful",l.a),u["d"].add(d["c"],d["e"],d["f"],d["b"],m["a"],d["d"],d["a"],d["g"]),n["a"].component("font-awesome-icon",f["a"]),u["b"].watch(),n["a"].config.productionTip=!1,n["a"].use(i.a,{id:"UA-143411524-2",router:Kt,autoTracking:{pageviewTemplate:function(t){return{userId:t.query.key}}},debug:{enabled:!0,trace:!0,sendHitTask:!0}}),"function"!==typeof String.prototype.endsWith&&(String.prototype.endsWith=function(t){return-1!==this.indexOf(t,this.length-t.length)}),n["a"].filter("round",p.a),new n["a"]({router:Kt,store:_,render:function(t){return t(pe)}}).$mount("#app")},"616f":function(t,e,a){"use strict";var n=a("f195"),s=a.n(n);s.a},"67b8":function(t,e,a){"use strict";var n=a("0c1a"),s=a.n(n);s.a},"6d2d":function(t,e,a){},"760c":function(t,e,a){"use strict";var n=a("b675"),s=a.n(n);s.a},"7dbb":function(t,e,a){},"83e5":function(t,e,a){t.exports=a.p+"img/Scott_Delp.8a991b86.jpg"},"8ba2":function(t,e,a){t.exports=a.p+"img/Lukasz_Kidzinski.e1f3aa21.jpg"},"8d0c":function(t,e,a){},a347:function(t,e,a){},ad23:function(t,e,a){"use strict";var n=a("418c"),s=a.n(n);s.a},b675:function(t,e,a){},bace:function(t,e,a){t.exports=a.p+"img/true_label_4.74f372b7.jpg"},c41b:function(t,e,a){"use strict";var n=a("f1db"),s=a.n(n);s.a},cb55:function(t,e,a){t.exports=a.p+"img/saliency.72ad1dde.png"},f195:function(t,e,a){},f1db:function(t,e,a){},f45a:function(t,e,a){"use strict";var n=a("8d0c"),s=a.n(n);s.a}});
//# sourceMappingURL=app.f49e9a75.js.map