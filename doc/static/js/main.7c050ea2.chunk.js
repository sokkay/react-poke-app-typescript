(this["webpackJsonpreact-poke-app"]=this["webpackJsonpreact-poke-app"]||[]).push([[0],{40:function(e,t,n){e.exports=n(70)},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o),c=n(37),u=n(3),i=n(9),s=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"No se ha seleccionado nada"))},m=[{name:"normal",color:"#A8A878"},{name:"fighting",color:"#C03028"},{name:"flying",color:"#A890F0"},{name:"poison",color:"#A040A0"},{name:"ground",color:"#927D44"},{name:"rock",color:"#B8A038"},{name:"bug",color:"#A8B820"},{name:"ghost",color:"#705898"},{name:"steel",color:"#B8B8D0"},{name:"fire",color:"#F5AC78"},{name:"water",color:"#6890F0"},{name:"grass",color:"#78C850"},{name:"electric",color:"#F8D030"},{name:"psychic",color:"#F85888"},{name:"ice",color:"#98D8D8"},{name:"dragon",color:"#7038F8"},{name:"dark",color:"#705848"},{name:"fairy",color:"#EE99AC"},{name:"unknown",color:"#C92112"},{name:"shadow",color:"#4F5870"}],d=function(e){var t,n=e.pokemon,o=(null===(t=n.sprites.other)||void 0===t?void 0:t["official-artwork"].front_default)||"",l=function(e){var t;return{color:(null===(t=m.find((function(t){return t.name===e})))||void 0===t?void 0:t.color)||"red"}};return r.a.createElement("div",{className:"flex w-full justify-between flex-row py-10 px-5"},r.a.createElement("div",{className:"flex-auto flex justify-center"},r.a.createElement("div",null,r.a.createElement("div",{className:"h-auto w-64 shadow-md rounded-md flex flex-col items-center p-4 relative"},r.a.createElement("div",{style:{zIndex:-10,position:"absolute",fontSize:"4.5rem"},className:"font-extrabold text-gray-400"},r.a.createElement("p",null,"#",n.id)),r.a.createElement("div",{className:"absolute rounded-full bg-white h-10 w-10 right-0 top-0 font-sans font-bold flex justify-center items-center"},r.a.createElement("p",{className:"text-xs"},n.weight/10,"Kg")),r.a.createElement("div",{className:"absolute rounded-full bg-white h-10 w-10 left-0 top-0 font-sans font-bold flex justify-center items-center"},r.a.createElement("p",{className:"text-xs"},n.height/10,"m")),r.a.createElement("img",{src:o,alt:n.name,width:90}),r.a.createElement("h3",{className:"text-xl font-sans font-bold"},p(n.name)),r.a.createElement("h5",null,n.types.map((function(e,t){return r.a.createElement(a.Fragment,{key:e.type.name},t>0&&r.a.createElement("span",null,r.a.createElement("b",null,"\xb7")),r.a.createElement("span",{className:"text-sm font-bold",style:l(e.type.name)}," "+p(e.type.name)+" "))})))))),r.a.createElement("div",{className:"flex-auto flex justify-center"}))};function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}var f=function(){var e=Object(i.c)((function(e){return e.pokemon})).pokemons;return 0===e.length?r.a.createElement(s,null):r.a.createElement("div",{className:"w-full h-full overflow-y-auto"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(d,{key:e.id,pokemon:e})}))))},v=n(14),y=n.n(v),E=n(22),h=n(19),b=n.n(h),g="[UI] Start loading",x="[UI] Finish loading",w="[UI] Set Error",k="[UI] Remove Error",j="[Pokemon] Selected type",O="[Pokemon] Get By Type",N="[Pokemon] Get Types",C=function(e){return{type:w,payload:e}},S=function(e){return{type:N,payload:e}},T=function(e){return{type:O,payload:e}},A=function(e){var t,n,a=e.pt,o=e.selected,l=e.color,c=Object(i.b)();return o?(t={backgroundColor:l},n={color:"white"}):(t={backgroundColor:"white"},n={color:l}),r.a.createElement("button",{onClick:function(){var e;c({type:j,payload:a}),c((e=a,function(){var t=Object(E.a)(y.a.mark((function t(n){var a,r,o,l,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get(e.url);case 3:return a=t.sent,r=a.data,o=r.pokemon.filter((function(e,t){return t<15})).map((function(e){return b.a.get(e.pokemon.url)})),t.next=8,Promise.all(o);case 8:l=t.sent,c=l.map((function(e){return e.data})),n(T(c)),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0),n(C(t.t0.toString()));case 17:return t.prev=17,t.finish(17);case 19:case"end":return t.stop()}}),t,null,[[0,13,17,19]])})));return function(e){return t.apply(this,arguments)}}()))},style:t,type:"button",disabled:o,className:"btn py-2 w-full my-3 font-bold focus:outline-none rounded-md"},r.a.createElement("p",{style:n},a.name.toUpperCase()))},F=function(){var e=Object(i.c)((function(e){return e.pokemonTypes})).pokemonTypes,t=Object(i.c)((function(e){return e.pokemonTypeSelected})).type;return r.a.createElement("div",{className:"px-3 py-3 w-56 hidden sm:flex shadow-xs overflow-y-auto sm:flex-col h-full"},e.map((function(e,n){return r.a.createElement(A,{key:e.name,pt:e,color:m[n].color,selected:(null===t||void 0===t?void 0:t.name)===e.name})})))},P=n(39),_=n(17),z=n(18),D=function(e){var t=e.setToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50",onClick:function(e){t(!1)}},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"relative mx-auto w-auto max-w-xl bg-white p-4 rounded-md shadow-xl flex flex-col justify-between"},r.a.createElement("div",{className:"w-full flex flex-row items-center rounded-sm border-2 border-green-600 text-lg py-1 px-2"},r.a.createElement(_.a,{icon:z.a,size:"1x"}),r.a.createElement("input",{className:"w-full ml-4 focus:outline-none",type:"text",autoComplete:"off",placeholder:"Search a Pokemon",autoFocus:!0})),r.a.createElement("div",{className:"w-full mt-4"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias pariatur earum, laudantium aut voluptate dolore commodi. Explicabo nihil in necessitatibus cumque id molestiae magni accusamus omnis corrupti! Eveniet, soluta id."),r.a.createElement("div",null))),r.a.createElement("div",{className:"absolute inset-0 z-40 opacity-25 bg-black h-screen w-screen"}))},I=function(){var e=Object(a.useState)(!1),t=Object(P.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"h-16 shadow-md flex flex-row justify-between px-12 items-center z-10"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",{className:"border border-gray-300 rounded-lg py-2 px-4 leading-normal flex-row flex items-center cursor-pointer bg-white shadow-md",onClick:function(){return o(!n)}},r.a.createElement(_.a,{icon:z.a,size:"1x"}),r.a.createElement("h4",{className:"ml-4 text-gray-500"},"Search a Pokemon"))),r.a.createElement("div",null),n&&r.a.createElement(D,{setToggle:o}))},U=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui}));return Object(a.useEffect)((function(){e(function(){var e=Object(E.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:g,payload:null}),e.next=4,b.a.get("https://pokeapi.co/api/v2/type");case 4:n=e.sent,a=n.data,t(S(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),t(C(e.t0.toString()));case 13:return e.prev=13,t({type:x,payload:null}),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),t.loading?r.a.createElement("h1",null,"Hola"):r.a.createElement(c.a,null,r.a.createElement("div",{className:"overflow-hidden w-screen h-screen"},r.a.createElement(I,null),r.a.createElement("div",{className:"flex flex-row h-full"},r.a.createElement(F,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:f})))))},B=n(11),G=n(38),J=n(4),L={loading:!1,msgError:null},R={pokemonTypes:[]},X={},q={pokemons:[]},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,K=Object(B.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(J.a)(Object(J.a)({},e),{},{msgError:t.payload});case k:return Object(J.a)(Object(J.a)({},e),{},{msgError:null});case g:return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case x:return Object(J.a)(Object(J.a)({},e),{},{loading:!1});default:return e}},pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(J.a)(Object(J.a)({},e),{},{pokemons:t.payload});default:return e}},pokemonTypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(J.a)(Object(J.a)({},e),{},{pokemonTypes:t.payload.results});default:return e}},pokemonTypeSelected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(J.a)(Object(J.a)({},e),{},{type:t.payload});default:return e}}}),M=Object(B.e)(K,H(Object(B.a)(G.a))),V=function(){return r.a.createElement(i.a,{store:M},r.a.createElement(U,null))};n(69);l.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7c050ea2.chunk.js.map