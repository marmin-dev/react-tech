"use strict";exports.id=850,exports.ids=[850],exports.modules={712:(e,r,s)=>{s.r(r),s.d(r,{default:()=>j});var n=s(22),u=s(689),t=s(661),i=s(997);const c=function(e){var r=e.users;return r?(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:r.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(t.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null};var l=s(802),o=s(701);const d=function(){var e=(0,n.useSelector)((function(e){return e.users.users})),r=(0,n.useDispatch)();return(0,u.useEffect)((function(){e||r((0,l.Rf)())}),[r,e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{users:e}),(0,i.jsx)(o.p9,{resolve:function(){return r(l.Rf)}})]})},a=function(e){var r=e.user,s=r.email,n=r.name,u=r.username;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[u,"(",n,")"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"e-mail:"}),s]})]})},x=function(e){var r=e.id,s=(0,n.useSelector)((function(e){return e.users.user})),t=(0,n.useDispatch)();return(0,o.lm)((function(){return t((0,l.PR)(r))})),(0,u.useEffect)((function(){s&&s.id===parseInt(r,10)||t((0,l.PR)(r))}),[t,r,s]),s?(0,i.jsx)(a,{user:s}):null},f=function(){var e=(0,t.useParams)().id;return(0,i.jsx)(x,{id:e})},j=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(t.Routes,{children:(0,i.jsx)(t.Route,{path:":id",element:(0,i.jsx)(f,{})})})]})}}};