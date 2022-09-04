(function(){"use strict";var e={8421:function(e,o,r){var t=r(9242),n=r(3396);const s={id:"app"},a=(0,n.Uk)("Books"),i=(0,n.Uk)(" | "),u=(0,n.Uk)("Users"),l=(0,n.Uk)(" | "),d=(0,n.Uk)("Contacts");function h(e,o,r,t,h,p){const c=(0,n.up)("router-link"),m=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("nav",null,[(0,n.Wm)(c,{to:"/"},{default:(0,n.w5)((()=>[a])),_:1}),i,(0,n.Wm)(c,{to:"/gallery"},{default:(0,n.w5)((()=>[u])),_:1}),l,(0,n.Wm)(c,{to:"/contacts"},{default:(0,n.w5)((()=>[d])),_:1})]),(0,n.Wm)(m,{books:h.booksArr,onChangeBook:p.saveChanges,onCreateBook:p.createBook,onDeleteBook:p.deleteBook,users:h.UsersArr,onChangeUser:p.changeUser,onDeleteUser:p.deleteUser,onCreateUser:p.createUser,cards:h.CardsArr,onReturnBook:p.returnBook,onAddCard:p.addCard,onDeleteCard:p.deleteCard},null,8,["books","onChangeBook","onCreateBook","onDeleteBook","users","onChangeUser","onDeleteUser","onCreateUser","cards","onReturnBook","onAddCard","onDeleteCard"])])}var p={data(){return{booksArr:[{id:1,name:"1984",author:"J.Oruel",pages:256,items:5,popularity:0},{id:2,name:"Азбука",author:"AРосмен",pages:33,items:5,popularity:1},{id:3,name:"Анна Каренина",author:"Л.Толстой",pages:336,items:2,popularity:2}],UsersArr:[{id:1,name:"Иван Иванов",phone:"8 700 2255387",popularity:0},{id:2,name:"Макс Максыч",phone:"8 700 3434222",popularity:0},{id:3,name:"Жан Жаныч",phone:"8 700 2545454",popularity:0}],CardsArr:[{id:1,userName:"Жан Клод",book:"Азбука",addDate:"24.01.2022",returnDate:""}]}},methods:{saveChanges(e){this.booksArr.forEach((o=>{o.id==e.id&&(o=e)}))},createBook(e){this.booksArr.push(e)},createUser(e){this.UsersArr.push(e)},deleteBook(e){this.booksArr=this.booksArr.filter((o=>o.id!=e))},changeUser(e){this.UsersArr.forEach((o=>{o.id==e.id&&(o=e)}))},deleteUser(e){this.UsersArr=this.UsersArr.filter((o=>o.id!=e))},deleteCard(e){this.CardsArr=this.CardsArr.filter((o=>o.id!=e))},returnBook(e,o){let r=new Date;this.CardsArr.forEach((o=>{o.id==e&&(o.returnDate=r.getDate()+"."+(r.getMonth()+1)+"."+r.getFullYear())})),this.booksArr.forEach((e=>{e.name==o&&e.items++}))},addCard(e){this.CardsArr.push(e),this.booksArr.forEach((o=>{o.name==e.book&&(o.popularity++,o.items--)})),this.UsersArr.forEach((o=>{o.name==e.userName&&o.popularity++}))}},watch:{booksArr:{handler(e){localStorage.setItem("booksArr",JSON.stringify(e))},deep:!0},UsersArr:{handler(e){localStorage.setItem("UsersArr",JSON.stringify(e))},deep:!0},CardsArr:{handler(e){localStorage.setItem("CardsArr",JSON.stringify(e))},deep:!0}},mounted(){localStorage.getItem("booksArr")&&(this.booksArr=JSON.parse(localStorage.getItem("booksArr"))),localStorage.getItem("UsersArr")&&(this.UsersArr=JSON.parse(localStorage.getItem("UsersArr"))),localStorage.getItem("CardsArr")&&(this.CardsArr=JSON.parse(localStorage.getItem("CardsArr")))}},c=r(89);const m=(0,c.Z)(p,[["render",h]]);var k=m,f=r(2483);const w={class:"home"},b=(0,n._)("h1",null,"All books",-1),g={class:"modal-block"},v=(0,n.Uk)(" Название"),y=(0,n.Uk)(" Автор"),_=(0,n.Uk)(" Страницы"),U=(0,n.Uk)(" Количество"),A={key:0},C={class:"books"};function D(e,o,r,s,a,i){const u=(0,n.up)("ModalWindow"),l=(0,n.up)("Slide");return(0,n.wg)(),(0,n.iD)("div",w,[b,(0,n.Wm)(u,{TextBtn:"Добавить книгу",show:a.show,"onUpdate:show":o[5]||(o[5]=e=>a.show=e)},{default:(0,n.w5)((()=>[(0,n._)("div",g,[v,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>a.book.name=e)},null,512),[[t.nr,a.book.name]]),y,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.book.author=e)},null,512),[[t.nr,a.book.author]]),_,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=e=>a.book.pages=e)},null,512),[[t.nr,a.book.pages]]),U,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=e=>a.book.items=e)},null,512),[[t.nr,a.book.items]]),a.error?((0,n.wg)(),(0,n.iD)("p",A,"Заполните все поля")):(0,n.kq)("",!0),(0,n._)("button",{onClick:o[4]||(o[4]=e=>i.Save())},"Сохранить изменения")])])),_:1},8,["show"]),(0,n._)("div",C,[(0,n.Wm)(t.W3,{name:"list",appear:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.books,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e.id,name:e.name,author:e.author,id:e.id,class:"blocks"},null,8,["name","author","id"])))),128))])),_:1})])])}var E=r(7139);const S={class:"main"},M={key:0},B={key:1};function O(e,o,r,t,s,a){return(0,n.wg)(),(0,n.iD)("div",S,[r.user?((0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("h2",null,"Имя: "+(0,E.zw)(r.userName),1),(0,n._)("p",null,"Телефон: "+(0,E.zw)(r.phone),1)])):((0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("h2",null,"Название: "+(0,E.zw)(r.name),1),(0,n._)("p",null,"Автор: "+(0,E.zw)(r.author),1)])),r.user?((0,n.wg)(),(0,n.iD)("button",{key:3,type:"button",onClick:o[1]||(o[1]=e=>this.$router.push("/users"+r.userId))},"Подробнее")):((0,n.wg)(),(0,n.iD)("button",{key:2,type:"button",onClick:o[0]||(o[0]=e=>this.$router.push("/books"+r.id))},"Подробнее"))])}var W={props:["id","name","author","userName","userId","phone","user"]};const I=(0,c.Z)(W,[["render",O],["__scopeId","data-v-8a6aac5e"]]);var N=I,x=r(6880),T={name:"HomeView",props:["books"],components:{Slide:N,ModalWindow:x.Z},data(){return{show:!1,error:!1,book:{id:0,name:"",author:"",items:"",pages:"",popularity:0}}},methods:{Save(){""!=this.book.name&&""!=this.book.author&&""!=this.book.items&&""!=this.book.pages?(this.book.id=Date.now(),this.$emit("createBook",this.book),this.book={},this.error=!1,this.show=!1):(this.error=!0,setTimeout((()=>{this.error=!1}),1e3))}}};const $=(0,c.Z)(T,[["render",D]]);var j=$;const z=(0,n._)("h1",null,"Все пользователи",-1),V={class:"modal-block"},Z=(0,n.Uk)(" Имя пользователя"),q={key:0,class:"Error"},H=(0,n.Uk)(" Телефон"),J={key:1,class:"Error"},P={id:"my-app"};function F(e,o,r,s,a,i){const u=(0,n.up)("ModalWindow"),l=(0,n.up)("Slide");return(0,n.wg)(),(0,n.iD)(n.HY,null,[z,(0,n.Wm)(u,{TextBtn:"Добавить пользователя",show:a.show,"onUpdate:show":o[3]||(o[3]=e=>a.show=e)},{default:(0,n.w5)((()=>[(0,n._)("div",V,[Z,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>a.user.name=e)},null,512),[[t.nr,a.user.name]]),a.showErorr?((0,n.wg)(),(0,n.iD)("p",q,"Имя пользователя не должно бытиь пустым")):(0,n.kq)("",!0),H,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.user.phone=e)},null,512),[[t.nr,a.user.phone]]),a.showErorr2?((0,n.wg)(),(0,n.iD)("p",J,"Напишите телефон пользователя")):(0,n.kq)("",!0),(0,n._)("button",{onClick:o[2]||(o[2]=e=>i.Save())},"Сохранить изменения")])])),_:1},8,["show"]),(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.users,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e.id,userName:e.name,phone:e.phone,userId:e.id,user:!0},null,8,["userName","phone","userId"])))),128))])],64)}var L={name:"App",data(){return{show:!1,showErorr:!1,showErorr2:!1,user:{id:0,name:"",phone:"",popularity:0}}},props:["users"],components:{Slide:N,ModalWindow:x.Z},methods:{Save(){""!=this.user.name?""!=this.user.phone?(this.user.id=Date.now(),this.$emit("createUser",this.user),this.showErorr=!1,this.showErorr2=!1,this.user={},this.show=!1):this.showErorr2=!0:this.showErorr=!0}},mounted(){},directives:{src:(e,o)=>{if(o.modifiers.random){let r=Math.floor(Math.random()*o.value.imgArr.length);e.setAttribute("src",o.value.imgArr[r])}else{e.src=o.value.imgArr[0],e.setAttribute("src",o.value.imgArr[0]);let r=1;setInterval((()=>{e.setAttribute("src",o.value.imgArr[r]),r++,r>=o.value.imgArr.length&&(r=0)}),o.value.interval)}}}};const Y=(0,c.Z)(L,[["render",F]]);var K=Y;const R=e=>((0,n.dD)("data-v-6b61b93a"),e=e(),(0,n.Cn)(),e),G={class:"book"},Q=R((()=>(0,n._)("p",null,"This is your book ",-1))),X=(0,n.Uk)(" Название"),ee=(0,n.Uk)(" Автор"),oe=(0,n.Uk)(" Страницы"),re=(0,n.Uk)(" Количество");function te(e,o,r,s,a,i){return(0,n.wg)(),(0,n.iD)("div",G,[Q,(0,n._)("button",{onClick:o[0]||(o[0]=(...e)=>i.openModal&&i.openModal(...e))},"Изменить данные о книге"),a.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modalWindow",onClick:o[8]||(o[8]=(0,t.iM)(((...e)=>i.closeModal&&i.closeModal(...e)),["stop"]))},[(0,n._)("div",{class:"modalItem",onClick:o[7]||(o[7]=(0,t.iM)((()=>{}),["stop"]))},[X,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.book.name=e)},null,512),[[t.nr,a.book.name]]),ee,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=e=>a.book.author=e)},null,512),[[t.nr,a.book.author]]),oe,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=e=>a.book.pages=e)},null,512),[[t.nr,a.book.pages]]),re,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":o[4]||(o[4]=e=>a.book.items=e)},null,512),[[t.nr,a.book.items]]),(0,n._)("button",{onClick:o[5]||(o[5]=(...e)=>i.Save&&i.Save(...e))},"Сохранить изменения"),(0,n._)("button",{onClick:o[6]||(o[6]=(...e)=>i.Delete&&i.Delete(...e))},"Удалить книгу")])])):(0,n.kq)("",!0),(0,n._)("h2",null,(0,E.zw)(a.book.name),1),(0,n._)("p",null,"Автор : "+(0,E.zw)(a.book.author),1),(0,n._)("p",null,"Количество страниц: "+(0,E.zw)(a.book.pages),1),(0,n._)("p",null,"На складе осталось: "+(0,E.zw)(a.book.items),1),(0,n._)("p",null,"Эту книгу брали "+(0,E.zw)(a.book.popularity)+" раза",1)])}var ne={name:"HelloWorld",props:["id","books"],data(){return{book:{},show:!1}},methods:{openModal(){this.show=!0},closeModal(){this.show=!1},Save(){this.$emit("changeBook",this.book),this.show=!1,this.$router.push("/")},Delete(){this.$emit("deleteBook",this.id),this.show=!1,this.$router.push("/")}},mounted(){this.books.forEach((e=>{e.id==this.id&&(this.book=e)}))}};const se=(0,c.Z)(ne,[["render",te],["__scopeId","data-v-6b61b93a"]]);var ae=se;const ie={class:"book"},ue=(0,n._)("p",null,"Страница пользователя ",-1),le={class:"modal-block"},de=(0,n.Uk)(" Имя"),he={key:0,class:"Error"},pe=(0,n.Uk)(" Телефон"),ce={key:1,class:"Error"};function me(e,o,r,s,a,i){const u=(0,n.up)("ModalWindow");return(0,n.wg)(),(0,n.iD)("div",ie,[ue,(0,n.Wm)(u,{TextBtn:"Изменить пользователя",show:a.show,"onUpdate:show":o[4]||(o[4]=e=>a.show=e)},{default:(0,n.w5)((()=>[(0,n._)("div",le,[de,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>a.user.name=e)},null,512),[[t.nr,a.user.name]]),a.showErorr?((0,n.wg)(),(0,n.iD)("p",he,"Имя пользователя не должно бытиь пустым")):(0,n.kq)("",!0),pe,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.user.phone=e)},null,512),[[t.nr,a.user.phone]]),a.showErorr2?((0,n.wg)(),(0,n.iD)("p",ce,"Напишите телефон пользователя")):(0,n.kq)("",!0),(0,n._)("button",{onClick:o[2]||(o[2]=(...e)=>i.Save&&i.Save(...e))},"Сохранить изменения"),(0,n._)("button",{onClick:o[3]||(o[3]=(...e)=>i.Delete&&i.Delete(...e))},"Удалить пользователя")])])),_:1},8,["show"]),(0,n._)("h2",null,"Имя : "+(0,E.zw)(a.user.name),1),(0,n._)("p",null,"Телефон : "+(0,E.zw)(a.user.phone),1),(0,n._)("p",null,"Как часто брал книги : "+(0,E.zw)(a.user.popularity),1)])}var ke={components:{ModalWindow:x.Z},props:["id","users"],data(){return{show:!1,showErorr:!1,showErorr2:!1,user:{},show:!1}},methods:{Save(){""!=this.user.name?""!=this.user.phone?(this.$emit("changeUser",this.user),this.$router.push("/gallery"),this.showErorr=!1,this.showErorr2=!1):this.showErorr2=!0:this.showErorr=!0},Delete(){this.$emit("deleteUser",this.id),this.$router.push("/gallery")}},mounted(){this.users.forEach((e=>{e.id==this.id&&(this.user=e)}))}};const fe=(0,c.Z)(ke,[["render",me]]);var we=fe;const be=[{path:"/",name:"home",component:j},{path:"/users:id",name:"user",component:we,props:!0},{path:"/books:id",name:"books",component:ae,props:!0},{path:"/gallery",name:"gallery",component:K},{path:"/contacts",name:"contacts",component:()=>r.e(553).then(r.bind(r,4553))}],ge=(0,f.p7)({history:(0,f.r5)(),routes:be});var ve=ge;(0,t.ri)(k).use(ve).mount("#app")},6880:function(e,o,r){r.d(o,{Z:function(){return d}});var t=r(3396),n=r(7139),s=r(9242);function a(e,o,r,a,i,u){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("button",{onClick:o[0]||(o[0]=(...e)=>u.openModal&&u.openModal(...e)),class:"btn"},(0,n.zw)(r.TextBtn),1),(0,t.Wm)(s.uT,{name:"fade"},{default:(0,t.w5)((()=>[r.show?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"modalWindow",onClick:o[2]||(o[2]=(0,s.iM)(((...e)=>u.closeModal&&u.closeModal(...e)),["stop"]))},[(0,t._)("div",{class:"modalItem",onClick:o[1]||(o[1]=(0,s.iM)((()=>{}),["stop"]))},[(0,t.WI)(e.$slots,"default")])])):(0,t.kq)("",!0)])),_:3})],64)}var i={name:["ModalWindow"],props:["TextBtn","show"],data(){return{}},methods:{openModal(){this.$emit("update:show",!0)},closeModal(){this.$emit("update:show",!1)}}},u=r(89);const l=(0,u.Z)(i,[["render",a]]);var d=l}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(o,t,n,s){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],s=e[d][2];for(var i=!0,u=0;u<t.length;u++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var l=n();void 0!==l&&(o=l)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[t,n,s]}}(),function(){r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,{a:o}),o}}(),function(){r.d=function(e,o){for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(o,t){return r.f[t](e,o),o}),[]))}}(),function(){r.u=function(e){return"js/"+e+".b1742696.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".ad5870a4.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="router-app:";r.l=function(t,n,s,a){if(e[t])e[t].push(n);else{var i,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var h=l[d];if(h.getAttribute("src")==t||h.getAttribute("data-webpack")==o+s){i=h;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",o+s),i.src=t),e[t]=[n];var p=function(o,r){i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),o)return o(r)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,o,r,t){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=function(s){if(n.onerror=n.onload=null,"load"===s.type)r();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,n.parentNode.removeChild(n),t(u)}};return n.onerror=n.onload=s,n.href=o,document.head.appendChild(n),n},o=function(e,o){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var n=r[t],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===o))return n}var a=document.getElementsByTagName("style");for(t=0;t<a.length;t++){n=a[t],s=n.getAttribute("data-href");if(s===e||s===o)return n}},t=function(t){return new Promise((function(n,s){var a=r.miniCssF(t),i=r.p+a;if(o(a,i))return n();e(t,i,n,s)}))},n={143:0};r.f.miniCss=function(e,o){var r={553:1};n[e]?o.push(n[e]):0!==n[e]&&r[e]&&o.push(n[e]=t(e).then((function(){n[e]=0}),(function(o){throw delete n[e],o})))}}(),function(){var e={143:0};r.f.j=function(o,t){var n=r.o(e,o)?e[o]:void 0;if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(r,t){n=e[o]=[r,t]}));t.push(n[2]=s);var a=r.p+r.u(o),i=new Error,u=function(t){if(r.o(e,o)&&(n=e[o],0!==n&&(e[o]=void 0),n)){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+o+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}};r.l(a,u,"chunk-"+o,o)}},r.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,s,a=t[0],i=t[1],u=t[2],l=0;if(a.some((function(o){return 0!==e[o]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var d=u(r)}for(o&&o(t);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},t=self["webpackChunkrouter_app"]=self["webpackChunkrouter_app"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8421)}));t=r.O(t)})();
//# sourceMappingURL=app.8bf4e793.js.map