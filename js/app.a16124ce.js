(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],s[r]&&m.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043a":function(t,e,a){t.exports=a.p+"img/Kevin_Thomas.90358889.jpg"},"0c1a":function(t,e,a){},1:function(t,e){},"14e1":function(t,e,a){t.exports=a.p+"img/Garry_Gold.5745d14e.jpg"},2:function(t,e){},3:function(t,e){},"34ba":function(t,e,a){"use strict";var n=a("7dbb"),s=a.n(n);s.a},4:function(t,e){},"418c":function(t,e,a){},"4e1e":function(t,e,a){t.exports=a.p+"img/true_label_2.3bbf5c90.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("aef6"),a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("9f7b"),i=a.n(s),r=a("ec02"),o=a.n(r),l=(a("ab8b"),a("2dd8"),a("ecee")),c=a("c074"),u=a("f2d1"),d=a("ad3d"),m=a("cbc3"),f=a.n(m),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view"),a("Footer"),a("ToastPanel")],1)},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"bg-light",attrs:{toggleable:"lg"}},[a("div",{staticClass:"container"})])},g=[],b=(a("bc3a"),a("2f62")),C={namespaced:!0,state:{id:1,maxToasts:2,timeBeforeClose:15e3,toasts:[]},mutations:{add:function(t,e){var a=this;e.id=t.id++,t.timeBeforeClose>0&&(e.timer=setTimeout(function(t){a.commit("toasts/close",t)},t.timeBeforeClose,e.id)),t.toasts.push(e),t.toasts.length>t.maxToasts&&t.toasts.shift()},close:function(t,e){t.toasts=t.toasts.filter(function(t){return t.id!==e})}}};n["a"].use(b["a"]);var y=new b["a"].Store({modules:{toasts:C},state:{apiKey:""},mutations:{setAPIKey:function(t,e){t.apiKey=e}}}),w=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-headful",{attrs:{title:"Saliency.ai - software to streamline knee osteoarthritis R&D"}}),a("TextInfoBlock"),a("Creators"),a("ContactForm")],1)},x=[],k=a("bd86"),S=(a("96cf"),a("3b8d")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:" h1-responsive font-weight-bold text-center my-4",staticStyle:{padding:"0.5em"}},[t._v("Team")]),n("b-row",{staticClass:"m-t-2 justify-content-center"},[n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("043a")}}),n("br"),n("div",{staticClass:"name"},[t._v("Kevin Thomas")]),n("div",{staticClass:"role"},[t._v("M.D. Ph.D. Candidate @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/kevin-a-thomas-04b91a45/"}},[n("i",{staticClass:"fab fa-linkedin"})])])]),n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("8ba2")}}),n("br"),n("div",{staticClass:"name"},[t._v("Lukasz Kidzinski, Ph.D.")]),n("div",{staticClass:"role"},[t._v("Bioengineering Researcher @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/lukaszkidzinski/"}},[n("i",{staticClass:"fab fa-linkedin"})])])])]),n("h1",{staticClass:" h1-responsive font-weight-bold text-center my-4",staticStyle:{padding:"0.5em"}},[t._v("Advisors")]),n("b-row",{staticClass:"mt-4 mb-5 justify-content-center"},[n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("14e1")}}),n("br"),n("div",{staticClass:"name"},[t._v("Garry Gold, M.D.")]),n("div",{staticClass:"role"},[t._v("Professor of Radiology   "),n("a",{attrs:{href:"https://www.linkedin.com/in/garry-gold-9a242a3/"}},[n("i",{staticClass:"fab fa-linkedin"})])])]),n("div",{staticClass:"col-md-4 person text-center"},[n("img",{attrs:{src:a("83e5")}}),n("div",{staticClass:"name"},[t._v("Scott Delp, Ph.D.")]),n("div",{staticClass:"role"},[t._v("Professor of Bioengineering @ Stanford   "),n("a",{attrs:{href:"https://www.linkedin.com/in/scott-delp-569651ab/"}},[n("i",{staticClass:"fab fa-linkedin"})])]),n("div",{staticClass:"blurb"})])])],1)},I=[],O={name:"Creators"},D=O,E=(a("ad23"),a("2877")),T=Object(E["a"])(D,j,I,!1,null,null,null),K=T.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-t-4 p-b-4 section-bg-dark",attrs:{id:"poc"}},[a("b-container",[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"font-weight-bold text-center my-4"},[t._v("Contact us")])]),a("div",{staticClass:"row align-items-center"},[a("p",{staticClass:"text-center w-responsive mx-auto mb-5"},[t._v("Interested in our demo? Please do not hesitate to contact us directly."),a("br")]),a("div",{staticClass:"row col-md-12"},[a("div",{staticClass:"col-md-6 offset-md-2 "},[a("form",{attrs:{id:"contact-form",name:"contact-form",action:"https://getsimpleform.com/messages?form_api_token=93c7299b577464b9524e30ddb343cda2",method:"POST"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"}}),a("label",{attrs:{for:"name"}},[t._v("Your name")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"email",name:"email"}}),a("label",{attrs:{for:"email"}},[t._v("Your email")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"subject",name:"subject"}}),a("label",{attrs:{for:"subject"}},[t._v("Subject")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form"},[a("textarea",{staticClass:"form-control md-textarea",attrs:{type:"text",id:"message",name:"message",rows:"4"}}),a("label",{attrs:{for:"message"}},[t._v("Your message")])])])])]),a("div",{staticClass:"text-center text-md-center"},[a("a",{staticClass:"btn btn-outline-success",attrs:{onclick:"document.getElementById('contact-form').submit();"}},[t._v("Send")])]),a("div",{staticClass:"status"})]),a("div",{staticClass:"col-md-2 text-center"},[a("ul",{staticClass:"list-unstyled mb-0"},[a("li",[a("i",{staticClass:"fas fa-map fa-2x"}),a("p",[t._v("S.331, James Clark Center, 318 Campus Drive, Stanford, CA 94305, USA")])]),a("li",[a("i",{staticClass:"fas fa-phone mt-4 fa-2x"}),a("p",[t._v("+1 650 307 2053")])]),a("li",[a("i",{staticClass:"fas fa-envelope mt-4 fa-2x"}),a("p",[t._v("lukasz.kidzinski@stanford.edu")])])])])])])])],1)},P=[],R=(a("7f7f"),{name:"ContactForm",data:function(){return{name:"",email:"",message:""}},computed:{contactDisabled:function(){return!(this.name&&this.email&&this.message)}}}),B=R,L=Object(E["a"])(B,$,P,!1,null,null,null),N=L.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"header-image text-light",attrs:{fluid:""}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",[n("h1",{staticClass:"h1-responsive font-weight-bold text-center pb-2 contact-us"},[t._v("We make software to streamline knee osteoarthritis R&D")])])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8",staticStyle:{"font-size":"1.3em"}},[t._v("\n      Our software automatically asseses knee osteoarthritis using artificial intelligence\n        "),n("p",[n("br"),t._v(" Our services include: \n"),n("ul",[n("li",[t._v("Automated analysis of knee osteoarthritis severity from X-rays.")]),n("li",[t._v("Automated detection of short-term disease changes.")]),n("li",[t._v("Early detection of OA from gait analysis.")])])])]),n("div",{staticClass:"col-md-4"},[n("img",{attrs:{src:a("cb55"),width:"300",height:"300",alt:"Knee cap"}}),n("br")])])])],1)},A=[],M={name:"TextInfoBlock"},F=M,W=Object(E["a"])(F,z,A,!1,null,null,null),H=W.exports,q=Object(k["a"])({name:"General",components:{Creators:K,ContactForm:N,TextInfoBlock:H},data:function(){return{}},computed:{hasKey:function(){return this.$store.state.apiKey.length>0}},created:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),watch:{},methods:{}},"created",function(){this.$route.query.key&&wt.push({name:"Demo"})}),G=q,U=Object(E["a"])(G,_,x,!1,null,null,null),Y=(U.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-headful",{attrs:{title:"KneeNet - software to streamline knee osteoarthritis R&D"}}),a("div",{staticClass:"header-image py-4"},[a("b-container",{staticClass:"text-light my-5"},[a("b-row",{staticClass:"form-inline",attrs:{"align-h":"center"}},[a("b-col",{staticClass:"mb-2 text-center",attrs:{cols:"12",md:"8"}},[a("h2",[t._v("Our KneeNet tool automatically evaluates knee osteoarthritis severity in X-rays using the Kellgren-Lawrence scoring system.")]),a("br"),a("h4",[t._v("Try it out! Pick an image to analyze")])])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"mx-sm-3 mb-2",attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("b-form-file",{attrs:{state:Boolean(t.newImages),disabled:!t.mobilenet,placeholder:"Choose or drag-and-drop a file...",multiple:""},model:{value:t.newImages,callback:function(e){t.newImages=e},expression:"newImages"}})],1)],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"text-center",staticStyle:{"font-weight":"bold"}},[t._v("\n          The analysis is run on your computer - no images are sent out!\n        ")])],1)],1)],1),a("b-container",[t.images.length>0?a("Results",{attrs:{images:t.images,width:t.imageSize,height:t.imageSize},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}):t._e()],1),a("Status",{attrs:{networkStatus:t.networkStatus}}),a("Creators"),a("ContactForm")],1)}),J=[],X=(a("b6e4"),a("63d9"),a("55dd"),a("795b")),V=a.n(X),Q=(a("673e"),a("0b53")),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mb-5"},[a("h1",{staticClass:"h1-responsive font-weight-bold text-center my-4",staticStyle:{padding:"0.5em"}},[t._v("Evaluation using artifical intelligence")]),a("div",{staticClass:"ml-md-5 mr-md-5 text-container"},[a("div",{staticClass:"mr-md-3 text-col"},[a("b-table",{attrs:{items:t.images,fields:t.fields,hover:""},on:{"row-clicked":t.rowClicked},scopedSlots:t._u([{key:"filename",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""]},[t._v(t._s(e.item.filename))])]}},{key:"score",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""]},[t._v("\n            "+t._s(e.item.res[0].className)+" \n          ")])]}},{key:"confidence",fn:function(e){return[a("span",{class:[e.index===t.value?"text-selected":""]},[t._v("\n            "+t._s(t._f("round")(100*e.item.res[0].probability,2))+"%\n          ")])]}}])})],1),a("b-modal",{ref:"KLmodal",attrs:{id:"modal1",title:"BootstrapVue","hide-footer":""}},[a("p",{staticClass:"my-4"},[t._v("Hello from modal!")])]),a("div",{staticClass:"image-col"},[a("img",{attrs:{id:"selectedImage",src:t.images[t.value].img.src,width:t.width,height:t.height,alt:"Knee cap"}}),a("div",{staticClass:"mt-2 text-center"},[a("strong",{staticStyle:{"font-size":"2em"}},[t._v(t._s(t.images[t.value].res[0].className))]),a("br"),a("span",{staticStyle:{color:"#777777"}},[t._v("(confidence = "+t._s(t._f("round")(100*t.images[t.value].res[0].probability,2))+"%)")])])])],1)])},tt=[],et=(a("c5f6"),{name:"Results",props:{value:Number,images:Array,width:Number,height:Number},data:function(){return{fields:[{key:"filename",label:"Filename",sortable:!1},{key:"score",label:"KL Score",sortable:!1},{key:"confidence",label:"Confidence",sortable:!1}]}},methods:{rowClicked:function(t,e,a){this.$emit("input",e)}}}),at=et,nt=(a("67b8"),Object(E["a"])(at,Z,tt,!1,null,null,null)),st=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"py-2 mb-2 mt-2 text-center",staticStyle:{background:"#fafafa","border-top":"1px solid #e0e0e0","border-bottom":"1px solid #e0e0e0"},attrs:{fluid:""}},[a("strong",[t._v("Neural network status: ")]),a("span",{domProps:{innerHTML:t._s(t.networkStatus)}})])},rt=[],ot={name:"Status",props:{networkStatus:String}},lt=ot,ct=Object(E["a"])(lt,it,rt,!1,null,null,null),ut=ct.exports,dt=a("e730"),mt=a.n(dt),ft={data:function(){return{dwvRenderID:1}},methods:{convertDICOMtoBLOB:function(t){var e=this;return new V.a(function(a){var n=document.createElement("div");n.id="dwvRoot_"+e.dwvRenderID,n.style.cssText="position: absolute; top: 0; left: 0; opacity: 0",document.body.appendChild(n);var s=document.createElement("div");s.id="dwv_"+e.dwvRenderID,n.appendChild(s);var i=document.createElement("div");i.className="layerContainer",s.appendChild(i);var r=document.createElement("canvas");r.id="imageCanvas",r.className="imageLayer",i.appendChild(r);var o=new mt.a.App;o.init({containerDivId:"dwv_"+e.dwvRenderID}),e.dwvRenderID++,o.addEventListener("load-end",function(e){o.removeEventListener("load-end",this),r.toBlob(function(e){document.body.removeChild(n),e.name=t.name,a(e)})}),o.loadFiles([t])})}}},ht="https://s3.amazonaws.com/health-ai/models/kneenet/model.json",pt=299;function vt(t){var e=1,a=pt,n=pt,s=t.naturalHeight,i=t.naturalWidth,r=i*e,o=s-r,l=Math.ceil(o/2),c=Math.floor(o/2),u=document.createElement("canvas"),d=u.getContext("2d");u.width=pt,u.height=pt,console.log(l),d.drawImage(t,0,l,i,s-c-l,0,0,u.width,u.height),d.save();var m=d.getImageData(0,0,a,n),f=Q["b"](m).toFloat(),h=Q["h"](f,2)[0],p=h.mean(),v=Q["e"](h,p),g=v.square().mean().sqrt(),b=Q["a"](v,g),C=Q["e"](b.max(),b.min()).get();b=Q["a"](Q["e"](b,b.min()),C);var y=Q["g"](Q["d"]([b,b,b]),[1,2,0]);return y}var gt={name:"Demo",components:{Results:st,Status:ut,Creators:K,ContactForm:N},mixins:[ft],data:function(){return{mobilenet:!1,newImages:!1,images:[],selected:0,networkStatus:"Loading... (wait up to 30 seconds)",splitImages:!0}},computed:{hasKey:function(){return this.$store.state.apiKey.length>0},imageSize:function(){return pt}},created:function(){var t=this;Q["c"](ht).then(function(e){t.networkStatus="Ready! You can upload images now",t.mobilenet=e}),this.images.push({filename:"true_label_2.png",img:{src:a("4e1e")},res:[{className:"2",probability:.5556}],time:0}),this.images.push({filename:"true_label_4.png",img:{src:a("bace")},res:[{className:"4",probability:.7899}],time:0}),mt.a.gui.getElement=mt.a.gui.base.getElement,mt.a.gui.displayProgress=function(t){}},watch:{newImages:function(t){for(var e=this,a=this,n=0;n<t.length;n++)this.processImage(t[n]).then(function(t){if(e.splitImages){var n=document.createElement("canvas"),s=document.createElement("canvas"),i=n.getContext("2d"),r=s.getContext("2d"),o=Math.round(t.naturalWidth/2);n.width=o,s.width=t.naturalWidth-o,n.height=s.height=t.naturalHeight,i.drawImage(t,0,0,o,t.naturalHeight,0,0,o,t.naturalHeight),r.drawImage(t,o+1,0,t.naturalWidth-o,t.naturalHeight,0,0,t.naturalWidth-o,t.naturalHeight);var l=new Image;l.name=t.name+"_left";var c=new Image;c.name=t.name+"_right",l.onload=function(){a.predict(l,l.name)},c.onload=function(){a.predict(c,c.name)},l.src=n.toDataURL("image/png"),c.src=s.toDataURL("image/png")}else a.predict(t,t.name)})}},methods:{processImage:function(t){var e=this;return this.networkStatus="Processing a new image",new V.a(function(a){var n=function(t){var e=new Image;e.onload=function(){e.name=t.name,a(e)},e.src=URL.createObjectURL(t)};t.name.endsWith(".jpg")||t.name.endsWith(".jpeg")||t.name.endsWith(".png")?n(t):e.convertDICOMtoBLOB(t).then(n)})},predict:function(t,e){var a=this,n=performance.now(),s=Q["f"](function(){var e=vt(t),n=e.reshape([1,pt,pt,3]);return a.mobilenet.predict(n)});this.getTopKClasses(s,5).then(function(s){a.images.length,a.images.push({filename:e,img:t,res:s,time:performance.now()-n});var i=performance.now()-n;a.networkStatus="Done in ".concat(Math.floor(i),"ms. Ready for more images"),a.selected=a.images.length-1})},getTopKClasses:function(t,e){return t.data().then(function(t){for(var a=[],n=0;n<t.length;n++)a.push({value:t[n],index:n});a.sort(function(t,e){return e.value-t.value});for(var s=new Float32Array(e),i=new Int32Array(e),r=0;r<e;r++)s[r]=a[r].value,i[r]=a[r].index;for(var o=[],l=0;l<i.length;l++)o.push({className:i[l],probability:s[l]});return o})}}},bt=gt,Ct=Object(E["a"])(bt,Y,J,!1,null,null,null),yt=Ct.exports;n["a"].use(w["a"]);var wt=new w["a"]({mode:"history",routes:[{path:"/",name:"Demo",component:yt}]}),_t={name:"NavBar",data:function(){return{menuItems:[{label:"About",to:"/"},{label:"Demo",to:"/demo"},{label:"Logout",handler:this.logout}]}},methods:{onClick:function(t){"handler"in t&&t.handler()},logout:function(){y.commit("setAPIKey",""),wt.push({path:"/"})}},computed:{hasKey:function(){return y.state.apiKey.length>0}}},xt=_t,kt=(a("34ba"),Object(E["a"])(xt,v,g,!1,null,null,null)),St=kt.exports,jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pre-footer"}),a("footer",[a("div",{staticClass:"container"},[a("p",{staticClass:"text-center"},[t._v("Copyright (c) 2019")])])])])}],Ot={name:"Footer"},Dt=Ot,Et=(a("760c"),Object(E["a"])(Dt,jt,It,!1,null,null,null)),Tt=Et.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},t._l(t.$store.state.toasts.toasts,function(t){return a("Toast",{key:t.id,attrs:{data:t}})}),1)},$t=[],Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast toast-main",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[a("div",{staticClass:"toast-header text-white",class:t.headerClass},[a("strong",{staticClass:"mr-auto"},[t._v(t._s(t.header))]),a("button",{staticClass:"ml-2 mb-1 close text-white",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.close()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"toast-body"},[t._v("\n    "+t._s(t.data.text)+"\n  ")])])},Rt=[],Bt={name:"Toast",props:{data:Object},computed:{header:function(){return"error"===this.data.type?"Error":"info"===this.data.type?"Info":this.data.customHeader},headerClass:function(){return{error:"error"===this.data.type,info:"info"===this.data.type,custom:"error"!==this.data.type&&"info"!==this.data.type}}},methods:{close:function(){this.$store.commit("toasts/close",this.data.id)}}},Lt=Bt,Nt=(a("616f"),Object(E["a"])(Lt,Pt,Rt,!1,null,null,null)),zt=Nt.exports,At={name:"Toasts",components:{Toast:zt}},Mt=At,Ft=(a("c41b"),Object(E["a"])(Mt,Kt,$t,!1,null,null,null)),Wt=Ft.exports,Ht={name:"App",components:{NavBar:St,Footer:Tt,ToastPanel:Wt},created:function(){this.$route.query.key&&this.$store.commit("setAPIKey",this.$route.query.key)}},qt=Ht,Gt=Object(E["a"])(qt,h,p,!1,null,null,null),Ut=Gt.exports;a("a347");n["a"].use(i.a),n["a"].component("vue-headful",o.a),l["d"].add(c["c"],c["e"],c["f"],c["b"],u["a"],c["d"],c["a"],c["g"]),n["a"].component("font-awesome-icon",d["a"]),l["b"].watch(),n["a"].config.productionTip=!1,"function"!==typeof String.prototype.endsWith&&(String.prototype.endsWith=function(t){return-1!==this.indexOf(t,this.length-t.length)}),n["a"].filter("round",f.a),new n["a"]({router:wt,store:y,render:function(t){return t(Ut)}}).$mount("#app")},"616f":function(t,e,a){"use strict";var n=a("f195"),s=a.n(n);s.a},"67b8":function(t,e,a){"use strict";var n=a("0c1a"),s=a.n(n);s.a},"760c":function(t,e,a){"use strict";var n=a("b675"),s=a.n(n);s.a},"7dbb":function(t,e,a){},"83e5":function(t,e,a){t.exports=a.p+"img/Scott_Delp.8a991b86.jpg"},"8ba2":function(t,e,a){t.exports=a.p+"img/Lukasz_Kidzinski.e1f3aa21.jpg"},a347:function(t,e,a){},ad23:function(t,e,a){"use strict";var n=a("418c"),s=a.n(n);s.a},b675:function(t,e,a){},bace:function(t,e,a){t.exports=a.p+"img/true_label_4.74f372b7.jpg"},c41b:function(t,e,a){"use strict";var n=a("f1db"),s=a.n(n);s.a},cb55:function(t,e,a){t.exports=a.p+"img/saliency.72ad1dde.png"},f195:function(t,e,a){},f1db:function(t,e,a){}});
//# sourceMappingURL=app.a16124ce.js.map