(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},23:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},27:function(e,t,a){e.exports={wrapper:"Loader_wrapper__mG1MG"}},34:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},53:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),o=a.n(c),i=(a(34),a(11)),s=a(4),u=a(21),l=a.n(u),m=(a(53),a(5)),b=a.n(m),j=a(1),h=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)}})]})})};h.defaultProps={searchQuery:""};var f=h,g=a(22),d=a.n(g),O=a(10),p=a.n(O),_=function(e){var t=e.images,a=e.showLargeImage;return t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(j.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(j.jsx)("img",{className:p.a.ImageGalleryItemImage,src:r,alt:"","data-image":n,onClick:a})},t)}))},S=function(e){var t=e.images,a=e.showLargeImage;return Object(j.jsx)("ul",{className:d.a.ImageGallery,children:Object(j.jsx)(_,{images:t,showLargeImage:a})})},x=a(23),I=a.n(x),y=function(e){var t=e.onClick;return Object(j.jsx)("button",{className:I.a.Button,type:"button",onClick:t,children:"Load more"})},v=a(24),w=a(25),L=a(29),G=a(28),F=a(26),N=a.n(F),k=a(27),M=a.n(k),B=(a(75),function(e){Object(L.a)(a,e);var t=Object(G.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:M.a.wrapper,children:Object(j.jsx)(N.a,{type:"ThreeDots",color:"#d40d0d",height:90,width:90})})}}]),a}(r.Component)),C=a(8),E=a.n(C),D=function(e){var t=e.closeModal,a=e.image,n=function(e){"Escape"===e.code&&t()};return Object(r.useEffect)((function(){window.addEventListener("keydown",n)}),[]),Object(r.useEffect)((function(){return function(){return window.removeEventListener("keydown",n)}}),[]),Object(j.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(j.jsx)("div",{className:E.a.Modal,children:Object(j.jsx)("img",{className:E.a.image,src:a,alt:""})})})},T=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(s.a)(c,2),u=o[0],m=o[1],b=Object(r.useState)(1),h=Object(s.a)(b,2),g=h[0],d=h[1],O=Object(r.useState)(!1),p=Object(s.a)(O,2),_=p[0],x=p[1],I=Object(r.useState)(!1),v=Object(s.a)(I,2),w=v[0],L=v[1],G=Object(r.useState)(""),F=Object(s.a)(G,2),N=F[0],k=F[1];Object(r.useEffect)((function(){M()}),[a]),Object(r.useEffect)((function(){g>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[g]);var M=function(){""!==a&&(x(!0),l.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(g,"&key=19710989-7d132287f37ef0bf3153ac7f1&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})).then((function(e){m((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),d((function(e){return e+1}))})).finally((function(){return x(!1)})))},C=function(){L((function(e){return!e})),w&&k("")};return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{onSubmit:function(e){n(e),m([]),d(1)}}),Object(j.jsx)(S,{images:u,showLargeImage:function(e){var t=e.target.dataset.image;k(t),C()}}),_&&Object(j.jsx)(B,{}),u.length>0&&Object(j.jsx)(y,{onClick:M}),w&&Object(j.jsx)(D,{image:N,closeModal:C})]})};T.defaultProps={query:"",images:[],page:1,isLoading:!1,showModal:!1,urlLargeImage:""};var R=T;o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.querySelector("#root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT",image:"Modal_image__1cHuD"}}},[[76,1,2]]]);
//# sourceMappingURL=main.8ff92ffc.chunk.js.map