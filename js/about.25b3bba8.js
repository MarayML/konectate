(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0dcf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("navBar"),s("v-content",[s("v-container",{attrs:{fluid:""}},[s("div",{staticClass:"title"},[s("unidad",{attrs:{index:t.index}})],1),t._l(t.data.cursos[t.index].unidad,(function(e,a){return s("div",{key:a},[s("v-row",{staticClass:"mt-10",attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("h4",{staticClass:"d-flex justify-center mb-5 display-1"},[t._v("Unidad: "+t._s(a+1))]),s("subCard",{attrs:{img:t.data.cursos[t.index].img,autor:t.data.cursos[t.index].autor,imga:t.data.cursos[t.index].imga,porcent:e.porcent,title:e.title,unidad:!0,time:e.time,status:e.status,indexUnidad:a,indexTest:-1}})],1)],1),s("div",{staticClass:"d-flex justify-center"},[s("div",{staticClass:"border"})]),s("v-row",{staticClass:"mt-5",attrs:{dense:""}},t._l(t.data.cursos[t.index].unidad[a].test,(function(e,i){return s("v-col",{key:i,attrs:{cols:"6"}},[s("subCard",{attrs:{img:e.img,autor:t.data.cursos[t.index].autor,imga:t.data.cursos[t.index].imga,porcent:e.porcent,title:e.title,unidad:!1,time:e.time,status:e.status,indexUnidad:a,indexTest:i}})],1)})),1)],1)})),s("div",{staticClass:"d-flex justify-center"},[s("v-btn",{staticClass:"ma-5",attrs:{color:"teal","min-width":"200px"},on:{click:function(e){return t.goBack()}}},[t._v("Atras")])],1)],2)],1)],1)},i=[],n=s("dd8b"),r=s("da1d"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:s("bb6e")("./"+t.img)}},[a("v-card-title",{staticClass:"black--text"},[a("div",{staticClass:"d-flex justify-center align-end white--text"},[a("v-img",{staticClass:"round",attrs:{src:s("bb6e")("./"+t.imga)}}),a("h5",{staticClass:"align-center ml-3 black--text"},[t._v(t._s(t.autor))])],1)])],1),a("v-progress-linear",{attrs:{"background-color":"white",color:"teal","buffer-value":"100",height:"25",value:t.porcent,striped:""}},[t._v("Progreso "+t._s(t.porcent)+"%")]),a("v-card-subtitle",{staticClass:"pb-0 title black--text"},[t._v(t._s(t.title))]),a("v-card-subtitle",{staticClass:"pb-0"},[t.unidad?a("div",[a("v-icon",{staticClass:"teal--text mr-2"},[t._v("fa fa-youtube-play")]),a("b",[t._v(t._s(t.time)+" Minutos")])],1):a("div",[a("v-icon",{staticClass:"teal--text mr-2"},[t._v("fa fa-pencil")]),a("b",{staticClass:"subtitle-1"},[t._v(t._s(t.time)+" Minutos")])],1)]),a("v-card-actions",{staticClass:"d-flex justify-center"},[0===t.porcent?a("v-btn",{staticClass:"ma-1",attrs:{disabled:!t.status,outlined:"",color:"teal","min-width":"150px"},on:{click:function(e){return t.goVideo()}}},[t._v("Iniciar")]):a("v-btn",{staticClass:"mb-1",attrs:{disabled:!t.status,outlined:"",color:"teal","min-width":"150px"},on:{click:function(e){return t.goVideo()}}},[t._v("Continuar")])],1)],1)},o=[],c=(s("a9e3"),{name:"subCard",props:{img:String,autor:String,imga:String,porcent:Number,title:String,unidad:Boolean,time:Number,status:Boolean,indexUnidad:Number,indexTest:Number},methods:{goVideo:function(){sessionStorage.setItem("indexUnidad",this.indexUnidad),sessionStorage.setItem("indexTest",this.indexTest),this.$router.push({name:"Init"})}}}),l=c,u=(s("b517"),s("2877")),m=s("6544"),v=s.n(m),f=s("8336"),h=s("b0af"),x=s("99d9"),b=s("132d"),p=s("adda"),g=s("8e36"),C=Object(u["a"])(l,d,o,!1,null,"127b9306",null),_=C.exports;v()(C,{VBtn:f["a"],VCard:h["a"],VCardActions:x["a"],VCardSubtitle:x["b"],VCardTitle:x["d"],VIcon:b["a"],VImg:p["a"],VProgressLinear:g["a"]});var I=s("34bc"),T={name:"Cursos",components:{navBar:r["a"],subCard:_,unidad:I["a"]},data:function(){return{data:n,index:parseInt(sessionStorage.getItem("index"))}},methods:{getIndex:function(){return parseInt(sessionStorage.getItem("index"))},goBack:function(){this.$router.push({name:"Home"})}}},V=T,w=(s("8aa3"),s("7496")),y=s("62ad"),k=s("a523"),S=s("a75b"),j=s("0fd9"),B=Object(u["a"])(V,a,i,!1,null,"63a553f0",null);e["default"]=B.exports;v()(B,{VApp:w["a"],VBtn:f["a"],VCol:y["a"],VContainer:k["a"],VContent:S["a"],VRow:j["a"]})},"26bc":function(t,e,s){},4874:function(t,e,s){},7717:function(t,e,s){},"8aa3":function(t,e,s){"use strict";var a=s("4874"),i=s.n(a);i.a},a812:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("h2",{staticClass:"ml-2"},[t._v(t._s(t.title))]),s("div",{staticClass:"d-flex ml-2"},[s("v-icon",{staticClass:"teal--text mr-2"},[t._v("fa fa-youtube-play")]),s("h4",{staticClass:"ml-2"},[t._v(t._s(t.totalTime)+" Minutos")])],1),s("v-row",[s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[s("iframe",{staticClass:"size",attrs:{src:t.src,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])],1),s("div",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[s("v-btn",{staticClass:"ma-5",attrs:{outlined:"",color:"teal","min-width":"200px"},on:{click:function(e){return t.finish()}}},[t._v("Terminar")])],1)],1)},i=[],n=s("dd8b"),r={name:"Init",data:function(){return{data:n,src:String,counterInterval:"",time:0,totalTime:0,title:String,unidad:Boolean,indexCurso:parseInt(sessionStorage.getItem("index")),indexUnidad:parseInt(sessionStorage.getItem("indexUnidad")),indexTest:parseInt(sessionStorage.getItem("indexTest"))}},methods:{finish:function(){clearInterval(this.counterInterval);var t=this.data.cursos[this.indexCurso].unidad[this.indexUnidad];this.time>=60*this.totalTime+60&&this.time<60*this.totalTime+120?this.unidad?t.porcent=50:t.test[this.indexTest].porcent=50:this.time>=60*this.totalTime+120&&(this.unidad?(t.porcent=100,t.status=!1):(t.test[this.indexTest].porcent=100,t.test[this.indexTest].status=!1)),this.$router.push({name:"Cursos"})}},created:function(){var t=this.data.cursos[this.indexCurso].unidad[this.indexUnidad];-1===this.indexTest?(this.unidad=!0,this.title=t.title,this.totalTime=t.time,this.src=t.video):(this.unidad=!1,this.title=t.test[this.indexTest].title,this.totalTime=t.test[this.indexTest].time,this.src=t.test[this.indexTest].video);var e=this;this.counterInterval=setInterval((function(){e.time++}),1e3)},destroyed:function(){clearInterval(this.counterInterval)}},d=r,o=(s("f76e"),s("2877")),c=s("6544"),l=s.n(c),u=s("7496"),m=s("8336"),v=s("62ad"),f=s("132d"),h=s("0fd9"),x=Object(o["a"])(d,a,i,!1,null,"897f4e28",null);e["default"]=x.exports;l()(x,{VApp:u["a"],VBtn:m["a"],VCol:v["a"],VIcon:f["a"],VRow:h["a"]})},b517:function(t,e,s){"use strict";var a=s("26bc"),i=s.n(a);i.a},f76e:function(t,e,s){"use strict";var a=s("7717"),i=s.n(a);i.a}}]);
//# sourceMappingURL=about.25b3bba8.js.map