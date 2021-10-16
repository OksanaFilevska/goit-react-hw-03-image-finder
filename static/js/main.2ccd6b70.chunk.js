(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__k5X_J",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1AZ8X"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2WgJe",Modal:"Modal_Modal__qr5QB"}},14:function(e,t,a){e.exports={container:"Container_container__1PROH"}},16:function(e,t,a){e.exports={Loader:"Loader_Loader__25bnN"}},17:function(e,t,a){e.exports={message:"NotFound_message__3WvZ_"}},18:function(e,t,a){e.exports={Button:"Button_Button__nSDqX"}},24:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(24),a(3)),i=a(4),l=a(6),u=a(5),m=a(19),h=a(14),d=a.n(h),j=a(1);var g=function(e){var t=e.children;return Object(j.jsx)("div",{className:d.a.container,children:t})},p=a(8),b=a.n(p),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery.trim().toLowerCase()),e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",name:"searchQuery",value:this.state.searchQuery,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleNameChange})]})})}}]),a}(n.Component),f=a(13),O=a(9),v=a.n(O),_=a(11),x=a.n(_),S=a(12),I=a.n(S),C=document.querySelector("#modal-root"),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){"Escape"===t.key&&e.props.onCloseModal(t)},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{onClick:this.props.onCloseModal,className:I.a.Overlay,children:Object(j.jsx)("div",{className:I.a.Modal,children:Object(j.jsx)("img",{src:this.props.modalImg,alt:this.props.modalAlt})})}),C)}}]),a}(n.Component),F=w,M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,modalImg:"",modalAlt:""},e.onOpenModal=function(t){e.setState({modalImg:t.target.dataset.source,showModal:!0,modalAlt:t.target.attributes.alt.textContent})},e.onCloseModal=function(t){"IMG"!==t.target.nodeName&&e.setState({showModal:!1,modalImg:"",modalAlt:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,n=a.showModal,r=a.modalImg,o=a.modalAlt;return Object(j.jsxs)(j.Fragment,{children:[t.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(j.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:e.onOpenModal,className:x.a.ImageGalleryItemImage,src:n,alt:r,"data-source":o})},a)})),n&&Object(j.jsx)(F,{onCloseModal:this.onCloseModal,modalImg:r,modalAlt:o})]})}}]),a}(r.a.Component),k=M,L=a(15),N=a.n(L),Q=a(16),B=a.n(Q),G=function(){return Object(j.jsx)("div",{className:B.a.Loader,children:Object(j.jsx)(N.a,{type:"Circles",color:"#00BFFF",height:80,width:80})})},A=a(2),D=a.n(A),T=a(17),E=a.n(T);function J(e){var t=e.message;return Object(j.jsxs)("p",{className:E.a.message,children:[" Search images ",t," not found"]})}J.protoType={message:D.a.string};var U=J,q=a(18),K=a.n(q),P=function(e){var t=e.onLoadMore;return Object(j.jsx)("button",{onClick:t,className:K.a.Button,type:"button",children:"Load more"})};function R(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22870491-0414a720e7578a2aeb94b7ded","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){if(e.ok)return e.json()})).then((function(e){return e}))}var H="idle",W="pending",X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,status:H,page:1},e.onLoadMore=function(){var t=e.props.searchQuery,a=e.state.page;e.setState({status:"pending"}),R(t,a+1).then((function(t){return e.setState((function(e){return{images:[].concat(Object(f.a)(e.images),Object(f.a)(t.hits)),status:"resolved",page:e.page+1}}))})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.searchQuery,r=this.props.searchQuery;n!==r&&(this.setState({status:W}),R(r,1).then((function(e){return 0!==e.hits.length?a.setState({images:e.hits,status:"resolved",page:1}):a.setState({images:e.hits,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=this.props.searchQuery;return"idle"===a?Object(j.jsx)("div",{className:v.a.idle,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."}):"pending"===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:v.a.ImageGallery,id:"imagesList",children:Object(j.jsx)(k,{images:t})}),Object(j.jsx)(G,{})]}):"rejected"===a?Object(j.jsx)(U,{message:n}):"resolved"===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:v.a.ImageGallery,id:"imagesList",children:Object(j.jsx)(k,{images:t})}),Object(j.jsx)(P,{onLoadMore:this.onLoadMore})]}):void 0}}]),a}(n.Component),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(g,{children:[Object(j.jsx)(y,{onSubmit:this.handleFormSubmit}),Object(j.jsx)(X,{searchQuery:this.state.searchQuery}),Object(j.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Z,{})}),document.getElementById("root")),z()},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3h8sk",SearchForm:"Searchbar_SearchForm__14LRg",SearchFormButton:"Searchbar_SearchFormButton__CyH_m",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1JSQM",SearchFormInput:"Searchbar_SearchFormInput__1yxQK"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3kU_2",idle:"ImageGallery_idle__o80oe"}}},[[46,1,2]]]);
//# sourceMappingURL=main.2ccd6b70.chunk.js.map