(function(){"use strict";var e={4665:function(e,t,o){var a=o(9242),l=o(3396);function n(e,t,o,a,n,r){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(i)}var r=o(7139);const i={class:"hello"},u=(0,l.uE)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function d(e,t,o,a,n,d){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("h1",null,(0,r.zw)(o.msg),1),u])}var m={name:"HelloWorld",props:{msg:String}},c=o(89);const s=(0,c.Z)(m,[["render",d],["__scopeId","data-v-b9167eee"]]);var p=s,g={name:"App",components:{HelloWorld:p}};const f=(0,c.Z)(g,[["render",n]]);var v=f,b=o(678);function w(e,t,o,a,n,r){return(0,l.wg)(),(0,l.iD)("div",null," Hello World! ")}var h={name:"AppIndex"};const y=(0,c.Z)(h,[["render",w]]);var _=y;const W={id:"poster"},k=(0,l._)("h3",{class:"login_title"},"系统登录",-1);function U(e,t,o,a,n,r){const i=(0,l.up)("el-input"),u=(0,l.up)("el-form-item"),d=(0,l.up)("el-button"),m=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("body",W,[(0,l.Wm)(m,{class:"login-container","label-position":"left","label-width":"0px"},{default:(0,l.w5)((()=>[k,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"text",modelValue:a.loginForm.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.loginForm.username=e),"auto-complete":"off",placeholder:"账号"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"password",modelValue:a.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=e=>a.loginForm.password=e),"auto-complete":"off",placeholder:"密码"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{type:"primary",style:{width:"100%",background:"#505458",border:"none"},onClick:a.login},{default:(0,l.w5)((()=>[(0,l.Uk)("登录")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(u,{style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{type:"primary",style:{width:"100%",background:"#505458",border:"none"},onClick:a.sign},{default:(0,l.w5)((()=>[(0,l.Uk)("注册")])),_:1},8,["onClick"])])),_:1})])),_:1})])}var q=o(4870),C=o(1076),V=o(65);const S=(0,a.ri)(),x=(0,V.MT)({state(){return{user:{username:window.localStorage.getItem("user")?JSON.parse(window.localStorage.getItem("user")).username:""}}},mutations:{login(e,t){e.user=t,window.localStorage.setItem("user",JSON.stringify(t))}}});S.use(x),S.mount();var D=x,F={name:"Login",setup(){const e=(0,q.iH)({username:"admin",password:"admin"}),t=()=>{console.log(D.state),C.Z.post("/login",{username:e.value.username,password:e.value.password}).then((t=>{if(200===t.data.code){D.commit("login",e.value);const t=Ae.currentRoute.value.query.redirect;Ae.replace({path:"/"===t||void 0===t?"/index":t})}else alert("账号或密码错误！")})).catch()},o=()=>{console.log(D.state),C.Z.put("/login",{username:e.value.username,password:e.value.password}).then((t=>{if(200===t.data.code){D.commit("login",e.value);const t=Ae.currentRoute.value.query.redirect;Ae.replace({path:"/"===t||void 0===t?"/index":t})}else alert("账号或密码错误！")})).catch()};return{loginForm:e,login:t,sign:o}}};const Z=(0,c.Z)(F,[["render",U]]);var j=Z;function Y(e,t,o,a,n,r){const i=(0,l.up)("nav-menu"),u=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i),(0,l.Wm)(u)])}const H=e=>((0,l.dD)("data-v-612b2b53"),e=e(),(0,l.Cn)(),e),P=H((()=>(0,l._)("i",{class:"el-icon-menu",style:{float:"right","font-size":"45px",color:"#222","padding-top":"8px"}},null,-1)));function $(e,t,o,a,n,i){const u=(0,l.up)("el-menu-item"),d=(0,l.up)("el-menu");return(0,l.wg)(),(0,l.j4)(d,{"default-active":"/market",router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red",style:{"min-width":"1300px"}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.navList,((e,t)=>((0,l.wg)(),(0,l.j4)(u,{key:t,index:e.name},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.navItem),1)])),_:2},1032,["index"])))),128)),P])),_:1})}var I={name:"NavMenu",data(){return{navList:[{name:"/frontend",navItem:"商城"},{name:"/cart",navItem:"购物车"},{name:"/backend",navItem:"后台"},{name:"/login",navItem:"注销"}]}}};const O=(0,c.Z)(I,[["render",$],["__scopeId","data-v-612b2b53"]]);var z=O,L={name:"Home",components:{NavMenu:z}};const N=(0,c.Z)(L,[["render",Y]]);var B=N;function T(e,t,o,a,n,r){const i=(0,l.up)("el-header"),u=(0,l.up)("el-aside"),d=(0,l.up)("product-list-backend"),m=(0,l.up)("el-main"),c=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i),(0,l.Wm)(u,{style:{width:"200px","margin-top":"20px"}}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1})])),_:1})}const A={class:"product-container"};function E(e,t,o,a,n,r){const i=(0,l.up)("ProductsBackend"),u=(0,l.up)("UploadForm"),d=(0,l.up)("log"),m=(0,l.up)("Record");return(0,l.wg)(),(0,l.iD)("div",A,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.products,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"product-item"},[(0,l.Wm)(i,{name:e.name,price:e.price,quantity:e.quantity,description:e.description,imageUrl:e.imageUrl,id:e.id},null,8,["name","price","quantity","description","imageUrl","id"])])))),128)),(0,l._)("div",null,[(0,l.Wm)(u),(0,l.Wm)(d),(0,l.Wm)(m)])])}const M=["src"],R={style:{padding:"14px"}},K=(0,l._)("br",null,null,-1),J={class:"description"};function G(e,t,o,a,n,i){const u=(0,l.up)("el-card"),d=(0,l.up)("el-input"),m=(0,l.up)("el-form-item"),c=(0,l.up)("el-button"),s=(0,l.up)("el-form"),p=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u,{"body-style":{padding:"0px"},style:{width:"200px",height:"300px",position:"relative"}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:o.imageUrl,class:"image",onClick:t[0]||(t[0]=(...e)=>a.openFormDialog&&a.openFormDialog(...e))},null,8,M),(0,l._)("div",R,[(0,l._)("span",null,(0,r.zw)(o.name)+":"+(0,r.zw)(o.price)+"元 库存:"+(0,r.zw)(o.quantity),1),K,(0,l._)("span",J,(0,r.zw)(o.description),1)])])),_:1}),(0,l.Wm)(p,{title:"编辑商品信息","model-value":a.dialogVisible,onClose:a.closeFormDialog,class:"dialog-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{model:a.form,class:"form-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:"商品名称"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:a.form.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,{label:"商品描述"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:a.form.description,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.description=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,{label:"商品价格"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:a.form.price,"onUpdate:modelValue":t[3]||(t[3]=e=>a.form.price=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,{label:"商品数量"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:a.form.quantity,"onUpdate:modelValue":t[4]||(t[4]=e=>a.form.quantity=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,{label:"图片链接"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:a.form.imageUrl,"onUpdate:modelValue":t[5]||(t[5]=e=>a.form.imageUrl=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{type:"primary",onClick:a.onSubmit},{default:(0,l.w5)((()=>[(0,l.Uk)("保存")])),_:1},8,["onClick"]),(0,l.Wm)(c,{type:"danger",onClick:a.onDelete},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1},8,["onClick"]),(0,l.Wm)(c,{type:"default",onClick:a.closeFormDialog},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["model-value","onClose"])],64)}var Q={name:"ProductsBackend",components:{},setup(e){const t=(0,q.iH)(!1),o=()=>{t.value=!0},a=()=>{t.value=!1},l=(0,q.qj)({id:e.id,name:e.name,description:e.description,quantity:e.quantity,imageUrl:e.imageUrl,price:e.price}),n=()=>{const e={id:l.id,name:l.name,description:l.description,quantity:l.quantity,imageUrl:l.imageUrl,price:l.price};C.Z.put("/products",e).then((e=>{console.log("数据更新:",e.data),a()})).catch((e=>{console.error("更新商品信息时出错",e)}))},r=()=>{const t={id:e.id,name:e.name,description:e.description,quantity:e.quantity,imageUrl:e.imageUrl,price:e.price};C.Z.post("/delete",t).then((e=>{console.log(e.data),a()}))};return{dialogVisible:t,openFormDialog:o,closeFormDialog:a,form:l,onSubmit:n,onDelete:r}},props:{name:{type:String,required:!0},price:{type:Number,required:!0},quantity:{type:Number,default:1},description:{type:String,default:"default description"},imageUrl:{type:String,required:!0},id:{type:Number,required:!0}},data(){return{}}};const X=(0,c.Z)(Q,[["render",G]]);var ee=X;function te(e,t,o,a,n,r){const i=(0,l.up)("el-button"),u=(0,l.up)("el-input"),d=(0,l.up)("el-form-item"),m=(0,l.up)("el-form"),c=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,{onClick:a.openFormDialog,class:"button"},{default:(0,l.w5)((()=>[(0,l.Uk)("添加商品")])),_:1},8,["onClick"]),(0,l.Wm)(c,{title:"商品信息","model-value":a.dialogVisible,onClose:a.closeFormDialog,class:"dialog-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{model:a.form,class:"form-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"商品名称"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.form.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{label:"商品描述"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.form.description,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.description=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{label:"商品价格"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.form.price,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.price=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{label:"商品数量"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.form.quantity,"onUpdate:modelValue":t[3]||(t[3]=e=>a.form.quantity=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{label:"图片链接"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.form.imageUrl,"onUpdate:modelValue":t[4]||(t[4]=e=>a.form.imageUrl=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"primary",onClick:a.onSubmit},{default:(0,l.w5)((()=>[(0,l.Uk)("完成")])),_:1},8,["onClick"]),(0,l.Wm)(i,{type:"primary",onClick:a.closeFormDialog},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["model-value","onClose"])])}var oe={name:"UploadForm",setup(){const e=(0,q.iH)(!1),t=()=>{e.value=!0},o=()=>{e.value=!1},a=(0,q.qj)({name:"",description:"",quantity:1,imageUrl:"",price:0}),l=()=>{console.log(a),C.Z.post("/products",a).then((e=>{console.log("Data added successfully:",e.data)})).catch((e=>{console.error("Error adding data:",e)})),e.value=!1};return{dialogVisible:e,form:a,onSubmit:l,openFormDialog:t,closeFormDialog:o}}};const ae=(0,c.Z)(oe,[["render",te]]);var le=ae,ne=o(2261),re=o(7947),ie=o(965),ue={__name:"Log",setup(e){const t=(0,q.iH)(!1),o=(0,q.iH)([]);(0,l.bv)((()=>{a()}));const a=()=>{C.Z.get("log").then((e=>{o.value=e.data,console.log(o)}))},n=()=>{t.value=!0},r=()=>{t.value=!1};return(e,a)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)((0,q.SU)(ne.ElButton),{onClick:n,class:"logbutton"},{default:(0,l.w5)((()=>[(0,l.Uk)("查看日志")])),_:1}),(0,l.Wm)((0,q.SU)(re.d0),{"model-value":t.value,title:"日志",onClose:r},{default:(0,l.w5)((()=>[(0,l.Wm)((0,q.SU)(ie.eI),{data:o.value,border:"",fit:!0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"id",label:"id"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"user.username",label:"用户名"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"product.id",label:"商品id"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"productname",label:"商品名"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"price",label:"单价"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"quantity",label:"数量"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"total",label:"总价"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"time",label:"时间"})])),_:1},8,["data"])])),_:1},8,["model-value"])]))}};const de=ue;var me=de,ce={__name:"Record",setup(e){const t=(0,q.iH)(!1),o=(0,q.iH)([]);(0,l.bv)((()=>{a()}));const a=()=>{C.Z.get("record").then((e=>{o.value=e.data,console.log(o)}))},n=()=>{t.value=!0},r=()=>{t.value=!1};return(e,a)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)((0,q.SU)(ne.ElButton),{onClick:n,class:"recordbutton"},{default:(0,l.w5)((()=>[(0,l.Uk)("查看报表")])),_:1}),(0,l.Wm)((0,q.SU)(re.d0),{"model-value":t.value,title:"日志",onClose:r},{default:(0,l.w5)((()=>[(0,l.Wm)((0,q.SU)(ie.eI),{data:o.value,border:"",fit:!0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"id",label:"id"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"user.username",label:"用户名"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"product.id",label:"商品id"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"productname",label:"商品名"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"price",label:"单价"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"quantity",label:"数量"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"total",label:"总价"}),(0,l.Wm)((0,q.SU)(ie.$Y),{prop:"time",label:"时间"})])),_:1},8,["data"])])),_:1},8,["model-value"])]))}};const se=ce;var pe=se,ge={name:"ProductListBackend",components:{Record:pe,Log:me,ProductsBackend:ee,UploadForm:le},setup(){const e=(0,q.iH)([]),t=()=>{C.Z.get("/products").then((t=>{t&&200===t.status&&(e.value=t.data)}))};return(0,l.bv)((()=>{t()})),(0,l.YP)(e,(()=>t())),{products:e,loadProduct:t}}};const fe=(0,c.Z)(ge,[["render",E]]);var ve=fe,be={name:"Backend",components:{ProductListBackend:ve}};const we=(0,c.Z)(be,[["render",T]]);var he=we;function ye(e,t,o,a,n,r){const i=(0,l.up)("el-header"),u=(0,l.up)("el-aside"),d=(0,l.up)("product-list-frontend"),m=(0,l.up)("el-main"),c=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i),(0,l.Wm)(u,{style:{width:"200px","margin-top":"20px"}}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1})])),_:1})}const _e={class:"product-container"};function We(e,t,o,a,n,r){const i=(0,l.up)("ProductsFrontend");return(0,l.wg)(),(0,l.iD)("div",_e,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.products,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"product-item"},[(0,l.Wm)(i,{name:e.name,price:e.price,quantity:e.quantity,description:e.description,imageUrl:e.imageUrl,id:e.id},null,8,["name","price","quantity","description","imageUrl","id"])])))),128))])}const ke=["src"],Ue={style:{padding:"14px"}},qe=(0,l._)("br",null,null,-1),Ce={class:"description"};function Ve(e,t,o,a,n,i){const u=(0,l.up)("el-button"),d=(0,l.up)("el-card"),m=(0,l.up)("el-input"),c=(0,l.up)("el-form-item"),s=(0,l.up)("el-form"),p=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{"body-style":{padding:"0px"},style:{width:"200px",height:"300px",position:"relative"}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:o.imageUrl,class:"image"},null,8,ke),(0,l._)("div",Ue,[(0,l._)("span",null,(0,r.zw)(o.name)+":"+(0,r.zw)(o.price)+"元 库存:"+(0,r.zw)(o.quantity),1),qe,(0,l._)("span",Ce,(0,r.zw)(o.description),1)]),(0,l.Wm)(u,{style:{position:"absolute",bottom:"5px",left:"0",width:"200px"},onClick:a.openFormDialog},{default:(0,l.w5)((()=>[(0,l.Uk)("加购")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(p,{title:"购买信息","model-value":a.dialogVisible,onClose:a.closeFormDialog,class:"dialog-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{model:a.form,class:"form-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"购买数量"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:a.form.quantity,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.quantity=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{type:"primary",onClick:a.addToCart},{default:(0,l.w5)((()=>[(0,l.Uk)("完成")])),_:1},8,["onClick"]),(0,l.Wm)(u,{type:"default",onClick:a.closeFormDialog},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["model-value","onClose"])],64)}var Se={name:"ProductsFrontend",components:{},setup(e){const t=(0,q.iH)(!1),o=()=>{t.value=!0},a=()=>{t.value=!1},l=(0,q.qj)({quantity:1}),n=()=>{const t={quantity:l.quantity,productid:e.id,productname:e.name,price:e.price,username:D.state.user.username};console.log(t),C.Z.post("/cart",t).then((e=>{console.log("加入购物车:",e.data),a()})).catch((e=>{console.error("加入购物车失败:",e)}))},r=()=>{const t={id:e.id,name:e.name,description:e.description,quantity:e.quantity,imageUrl:e.imageUrl,price:e.price};C.Z.post("/delete",t).then(a)};return{dialogVisible:t,openFormDialog:o,closeFormDialog:a,form:l,addToCart:n,onDelete:r}},props:{name:{type:String,required:!0},price:{type:Number,required:!0},quantity:{type:Number,default:1},description:{type:String,default:"default description"},imageUrl:{type:String,required:!0},id:{type:Number,required:!0}},data(){return{}}};const xe=(0,c.Z)(Se,[["render",Ve]]);var De=xe,Fe={name:"ProductListFrontend",components:{ProductsFrontend:De},setup(){const e=(0,q.iH)([]),t=()=>{C.Z.get("/products").then((t=>{t&&200===t.status&&(e.value=t.data)}))};return(0,l.bv)((()=>{t()})),(0,l.YP)(e,(()=>t())),{products:e,loadProduct:t}}};const Ze=(0,c.Z)(Fe,[["render",We]]);var je=Ze,Ye={name:"Frontend",components:{ProductListFrontend:je}};const He=(0,c.Z)(Ye,[["render",ye]]);var Pe=He,$e={__name:"Cart",setup(e){const t=e=>{console.log(e),n.value=!0},o=(e,t)=>{console.log(e.row);var o,a=e.row.product.id,l=e.row.quantity;C.Z.get("/products",{params:{id:a}}).then((a=>{o=a.data[0];const r={id:o.id,name:o.name,price:o.price,description:o.description,quantity:o.quantity-l,imageUrl:o.imageUrl};C.Z.put("/products",r).then((a=>{console.log(a.data);const r={name:o.name,total_price:o.price*l,quantity:l,mail:t.mail};console.log(r),C.Z.post("/mail",r).then((t=>{console.log(t.data),n.value=!1;const a={username:e.row.user.username,productid:e.row.product.id,productname:e.row.product.name,price:o.price,quantity:l,time:new Date,total:r.total_price};console.log(a),C.Z.post("/log",a).then((t=>{console.log(t.data);var o=e.row.cartid;C.Z.delete(`/cart/${o}`).then((e=>{console.log(e),u()})).catch((e=>{console.error("删除失败:",e)}))}))}))}))}))},a=e=>{var t=e.row.cartid;console.log(e.row.cartid),C.Z.delete(`/cart/${t}`).then((e=>{console.log(e),u()})).catch((e=>{console.error("删除失败:",e)}))},n=(0,q.iH)(!1),r=(0,q.iH)([]),i=(0,q.qj)({mail:""}),u=()=>{C.Z.get("/cart",{params:{username:D.state.user.username}}).then((e=>{r.value=e.data})).catch((e=>{console.error("导入购物车失败:",e)}))};return(0,l.bv)(u),(e,u)=>{const d=(0,l.up)("el-table-column"),m=(0,l.up)("el-button"),c=(0,l.up)("el-input"),s=(0,l.up)("el-form-item"),p=(0,l.up)("el-form"),g=(0,l.up)("el-dialog"),f=(0,l.up)("el-table");return(0,l.wg)(),(0,l.j4)(f,{data:r.value,style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{prop:"productname",label:"商品名称",width:"150"}),(0,l.Wm)(d,{prop:"quantity",label:"商品数量",width:"120"}),(0,l.Wm)(d,{prop:"price",label:"商品价格",width:"120"}),(0,l.Wm)(d,{fixed:"right",label:"Operations",width:"120"},{default:(0,l.w5)((e=>[(0,l.Wm)(m,{link:"",type:"primary",size:"small",onClick:()=>{t(e)}},{default:(0,l.w5)((()=>[(0,l.Uk)("购买")])),_:2},1032,["onClick"]),(0,l.Wm)(m,{link:"",type:"primary",size:"small",onClick:()=>{a(e)}},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:2},1032,["onClick"]),(0,l.Wm)(g,{title:"付款","model-value":n.value,onClose:u[1]||(u[1]=e=>n.value=!1)},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{model:i,class:"form-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"邮箱地址"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:i.mail,"onUpdate:modelValue":u[0]||(u[0]=e=>i.mail=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),(0,l.Wm)(m,{type:"primary",onClick:()=>{o(e,i)}},{default:(0,l.w5)((()=>[(0,l.Uk)("付款")])),_:2},1032,["onClick"])])),_:2},1032,["model-value"])])),_:1})])),_:1},8,["data"])}}};const Ie=$e;var Oe=Ie,ze={__name:"CartIndex",setup(e){return(e,t)=>((0,l.wg)(),(0,l.j4)(Oe))}};const Le=ze;var Ne=Le;const Be=[{path:"/home",name:"Home",component:B,redirect:"/backend",children:[{path:"/index",name:"AppIndex",component:_,redirect:"/frontend",meta:{requireAuth:!0}},{path:"/backend",name:"Backend",component:he,meta:{requireAuth:!0}},{path:"/frontend",name:"Frontend",component:Pe,meta:{requireAuth:!0}},{path:"/cart",name:"Cart",component:Ne,meta:{requireAuth:!0}}]},{path:"/login",name:"Login",component:j},{path:"/",name:"root",redirect:"/index"}],Te=(0,b.p7)({history:(0,b.PO)(),routes:Be});var Ae=Te,Ee=o(5197);o(4415);C.Z.defaults.baseURL="http://localhost:8443/api";const Me=(0,a.ri)(v);Me.config.productionTip=!1,Me.config.globalProperties.$axios=C.Z,Ae.beforeEach(((e,t,o)=>{e.meta.requireAuth?D.state.user.username?o():o({path:"login",query:{redirect:e.fullPath}}):o()})),Me.use(Ae),Me.use(Ee.Z),Me.use(D),Me.mount("#app")}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,l,n){if(!a){var r=1/0;for(m=0;m<e.length;m++){a=e[m][0],l=e[m][1],n=e[m][2];for(var i=!0,u=0;u<a.length;u++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[u])}))?a.splice(u--,1):(i=!1,n<r&&(r=n));if(i){e.splice(m--,1);var d=l();void 0!==d&&(t=d)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,l,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,r=a[0],i=a[1],u=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(u)var m=u(o)}for(t&&t(a);d<r.length;d++)n=r[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(m)},a=self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(4665)}));a=o.O(a)})();
//# sourceMappingURL=app.0ac5b28f.js.map