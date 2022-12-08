(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee94ba22"],{"0511":function(e,r,a){"use strict";a.r(r);var s=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"register-container"},[a("div",{staticClass:"register"},[e._m(0),a("div",{staticClass:"content"},[a("label",[e._v("手机号:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{type:"text",placeholder:"请输入你的手机号",name:"phone"},domProps:{value:e.phone},on:{input:function(r){r.target.composing||(e.phone=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("phone")))])]),a("div",{staticClass:"content"},[a("label",[e._v("验证码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\d{6}$/},expression:"{ required: true, regex: /^\\d{6}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{type:"text",placeholder:"请输入你的验证码",name:"code"},domProps:{value:e.code},on:{input:function(r){r.target.composing||(e.code=r.target.value)}}}),a("button",{staticStyle:{width:"100px",height:"38px"},on:{click:e.getCode}},[e._v("获取验证码")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("code")))])]),a("div",{staticClass:"content"},[a("label",[e._v("登录密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[0-9a-zA-Z]{8,20}$/},expression:"{ required: true, regex: /^[0-9a-zA-Z]{8,20}$/ }"}],class:{invalid:e.errors.has("password")},attrs:{type:"text",placeholder:"请输入你的登录密码",name:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password")))])]),a("div",{staticClass:"content"},[a("label",[e._v("确认密码:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"},{name:"validate",rawName:"v-validate",value:{required:!0,is:e.password},expression:"{ required: true, is:password}"}],class:{invalid:e.errors.has("password1")},attrs:{type:"text",placeholder:"请输入你的确认密码",name:"password1"},domProps:{value:e.password1},on:{input:function(r){r.target.composing||(e.password1=r.target.value)}}}),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password1")))])]),a("div",{staticClass:"controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,agree:!0},expression:"{ required: true,'agree':true}"}],class:{invalid:e.errors.has("agree")},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(r){var a=e.agree,s=r.target,t=!!s.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);s.checked?i<0&&(e.agree=a.concat([n])):i>-1&&(e.agree=a.slice(0,i).concat(a.slice(i+1)))}else e.agree=t}}}),a("span",[e._v("同意协议并注册《至美优品用户协议》")]),a("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("agree")))])]),a("div",{staticClass:"btn"},[a("button",{on:{click:e.register}},[e._v("完成注册")])])]),e._m(1)])},t=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("h3",[e._v("注册新用户 "),a("span",{staticClass:"go"},[e._v("我有账号，去 "),a("a",{attrs:{href:"login.html",target:"_blank"}},[e._v("登陆")])])])},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"copyright"},[a("ul",[a("li",[e._v("关于我们")]),a("li",[e._v("联系我们")]),a("li",[e._v("联系客服")]),a("li",[e._v("商家入驻")]),a("li",[e._v("营销中心")]),a("li",[e._v("至美优品")]),a("li",[e._v("销售联盟")]),a("li",[e._v("至美优品社区")])]),a("div",{staticClass:"address"},[e._v("地址: 浙江省绍兴市上虞区e游小镇")]),a("div",{staticClass:"beian"},[e._v("浙ICP备19006430号 ")])])}],n=a("1da1"),i=(a("96cf"),{name:"Register",data:function(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{getCode:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.phone,!a){r.next=10;break}return r.prev=2,r.next=5,e.$store.dispatch("getCode",a);case 5:e.code=e.$store.state.user.code,r.next=10;break;case 8:r.prev=8,r.t0=r["catch"](2);case 10:case"end":return r.stop()}}),r,null,[[2,8]])})))()},register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$validator.validateAll();case 2:if(a=r.sent,console.log(a),!a){r.next=15;break}return s=e.phone,t=e.code,n=e.password,e.password1,r.prev=6,r.next=9,e.$store.dispatch("userRegister",{phone:s,code:t,password:n});case 9:e.$router.push("/login"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](6),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[6,12]])})))()}}}),o=i,l=(a("8645"),a("2877")),c=Object(l["a"])(o,s,t,!1,null,"1b467826",null);r["default"]=c.exports},8645:function(e,r,a){"use strict";a("de09")},de09:function(e,r,a){}}]);
//# sourceMappingURL=chunk-ee94ba22.27cf720c.js.map