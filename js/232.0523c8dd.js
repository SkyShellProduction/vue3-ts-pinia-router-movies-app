"use strict";(self["webpackChunkmovies_app"]=self["webpackChunkmovies_app"]||[]).push([[232],{2232:function(e,a,t){t.r(a),t.d(a,{default:function(){return z}});var s=t(3396),n=t(4870),r=t(7139);const i={class:"container"},o={class:"header__text"},d={class:"header__title"},_={class:"header__balls"},l={class:"header__year"},c={class:"logo__span header__rating header__year"},h={class:"header__stars header__year"},u=(0,s._)("span",{class:"icon-solid"},"",-1),m={class:"header__descr"},p={class:"header__buttons"},w=["href"],v=(0,s._)("span",{class:"icon-solid"},"",-1),g=(0,s.Uk)("watch"),b=[v,g],k=(0,s.Uk)("More information");var U=(0,s.aZ)({__name:"HeaderContent",props:{data:{default:null}},setup(e){const a=t(749);return(t,v)=>{const g=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"header__content",style:(0,r.j5)({backgroundImage:`url(${(0,n.SU)(a)})`})},[(0,s._)("div",i,[(0,s._)("div",o,[(0,s._)("h1",d,(0,r.zw)(e.data?.nameRu||e.data?.nameEn),1),(0,s._)("div",_,[(0,s._)("span",l,(0,r.zw)(e.data?.year),1),(0,s._)("span",c,(0,r.zw)(e.data?.ratingAgeLimits)+"+",1),(0,s._)("div",h,[u,(0,s._)("strong",null,(0,r.zw)(e.data?.ratingKinopoisk),1)])]),(0,s._)("p",m,(0,r.zw)(e.data?.description),1),(0,s._)("div",p,[(0,s._)("a",{href:e.data?.webUrl,class:"header__watch",target:"_blank"},b,8,w),(0,s.Wm)(g,{to:`/movies/${e.data?.kinopoiskId}`,class:"header__more header__watch movie__item"},{default:(0,s.w5)((()=>[k])),_:1},8,["to"])])])])],4)}}});const f=U;var S=f,y=t(2238),j=t(1020);const C={class:"home"};var D=(0,s.aZ)({__name:"Home",setup(e){const a=(0,s.RC)((()=>t.e(304).then(t.bind(t,3304)))),r=(0,s.RC)((()=>t.e(795).then(t.bind(t,6795)))),i=(0,s.RC)((()=>t.e(873).then(t.bind(t,1873)))),o=(0,s.RC)((()=>t.e(639).then(t.bind(t,2)))),d=(0,s.RC)((()=>t.e(704).then(t.bind(t,4704)))),_=["january","february","march","april","may","june","july","august","september","october","november","december"],l=`${_[(new Date).getMonth()]} ${(new Date).getFullYear()}`,{mainData:c,headerData:h,error:u}=(0,j.Jk)((0,y.h)());return(e,t)=>((0,s.wg)(),(0,s.iD)("div",C,[(0,s.Wm)(S,{data:(0,n.SU)(h)},null,8,["data"]),(0,n.SU)(u)?((0,s.wg)(),(0,s.j4)((0,n.SU)(a),{key:1})):((0,s.wg)(),(0,s.j4)((0,n.SU)(r),{key:0,title:"Trending TV Shows",movies:(0,n.SU)(c).top?.films},null,8,["movies"])),(0,s.Wm)((0,n.SU)(i)),(0,n.SU)(u)?((0,s.wg)(),(0,s.j4)((0,n.SU)(a),{key:3})):((0,s.wg)(),(0,s.j4)((0,n.SU)(r),{key:2,title:`awaited movies of ${l}`,movies:(0,n.SU)(c).awaited?.releases},null,8,["title","movies"])),(0,s.Wm)((0,n.SU)(o)),(0,s.Wm)((0,n.SU)(d))]))}});const R=D;var z=R},749:function(e,a,t){e.exports=t.p+"img/hero.6c3203bf.png"}}]);
//# sourceMappingURL=232.0523c8dd.js.map