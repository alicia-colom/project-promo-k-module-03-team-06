(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a(1),i=a.n(l),n=a(22),s=a.n(n),o=a(4),r=a(8),j=a(9),d=a(10),b=a(12),A=a(11),m=a.p+"static/media/logoversion2.8f138f5b.png",p=(a(29),a(13)),h=function(e){Object(b.a)(a,e);var t=Object(A.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{className:"cards-header",role:"banner",children:Object(c.jsx)(p.b,{to:"/",children:Object(c.jsx)("img",{src:m,alt:"Logo de Frida Kards",title:"Ir a la p\xe1gina de inicio",className:"cards-header__logo","aria-label":"Logotipo de Frida Kards"})})})}}]),a}(l.Component),O=(a(35),a(36),function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link||"/",className:"card-list__link","aria-label":e.linkAria,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("div",{className:"card-list__icon-container",children:Object(c.jsx)("i",{className:e.linkIcon+" card-list__icons"})})})})}),u=(a(37),function(e){Object(b.a)(a,e);var t=Object(A.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"card-reset",children:Object(c.jsxs)("button",{type:"reset",className:"card-reset__btn","aria-label":"Reset",children:[Object(c.jsx)("i",{className:"far fa-trash-alt"}),"Reset"]})})}}]),a}(l.Component)),g=a.p+"static/media/Frida480x400gif.71286df1.gif",I=function(e){var t=e.photo||g;return Object(c.jsxs)("section",{className:"card-preview",children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"card "+e.palette,children:[Object(c.jsxs)("div",{className:"card-head",children:[Object(c.jsx)("h1",{className:"card-head__title",children:e.name||"Nombre Apellido"}),Object(c.jsx)("h2",{className:"card-head__subtitle",children:e.job||"Front-end developer"})]}),Object(c.jsx)("div",{className:"card__image js__profile-image",style:{backgroundImage:"url("+t+")"}}),Object(c.jsxs)("ul",{className:"card-list",children:[Object(c.jsx)(O,{linkType:"tel",linkAria:"Tel\xe9fono",linkIcon:"fab fa-mobile-alt",link:"tel:"+e.phone}),Object(c.jsx)(O,{linkType:"email",linkAria:"Email",linkIcon:"fas fa-envelope",link:"mailto:"+e.email}),Object(c.jsx)(O,{linkType:"linkedin",linkAria:"Linkedin",linkIcon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/"+e.linkedin}),Object(c.jsx)(O,{linkType:"github",linkAria:"Github",linkIcon:"fab fa-github-alt",link:"https://github.com/"+e.github})]})]})]})},N=(a(38),a(39),function(e){var t=function(t){var a=t.target.value;e.sendPalette(a)};return Object(c.jsxs)("div",{className:"colors",children:[Object(c.jsx)("h3",{className:"colors__title",children:"Colores"}),Object(c.jsxs)("div",{className:"color__palets",children:[Object(c.jsxs)("div",{className:"color-palette-1",children:[Object(c.jsx)("input",{className:"input1",type:"radio",id:"color-palette-1",name:"color",value:"palette-green",onChange:t,checked:"palette-green"===e.palette}),Object(c.jsx)("div",{className:"palette1-1"}),Object(c.jsx)("div",{className:"palette1-2"}),Object(c.jsx)("div",{className:"palette1-3"})]}),Object(c.jsxs)("div",{className:"color-palette-2",children:[Object(c.jsx)("input",{className:"input2",type:"radio",id:"color-palette-2",name:"color",value:"palette-red",onChange:t,checked:"palette-red"===e.palette}),Object(c.jsx)("div",{className:"palette2-1"}),Object(c.jsx)("div",{className:"palette2-2"}),Object(c.jsx)("div",{className:"palette2-3"})]}),Object(c.jsxs)("div",{className:"color-palette-3",children:[Object(c.jsx)("input",{className:"input3",type:"radio",id:"color-palette-3",name:"color",value:"palette-grey",onChange:t,checked:"palette-grey"===e.palette}),Object(c.jsx)("div",{className:"palette3-1"}),Object(c.jsx)("div",{className:"palette3-2"}),Object(c.jsx)("div",{className:"palette3-3"})]})]})]})}),v=(a(40),function(e){return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("label",{htmlFor:e.inputName,children:e.inputLabel}),Object(c.jsx)("input",{onChange:function(t){var a=t.target.value,c=t.target.id;e.sendInput(c,a)},className:"form__inp",type:e.inputType,id:e.inputName,name:e.inputName,placeholder:"Ej: "+e.inputPlaceholder,required:!0,value:e.inputValue})]})}),x=(a(41),function(e){var t=i.a.createRef(),a=e.photo||"";return Object(c.jsxs)("div",{className:"fill-image",children:[Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("label",{htmlFor:"img-selector",children:"Imagen de perfil"}),Object(c.jsx)("button",{onClick:function(){t.current.click()},className:"js__profile-trigger fill-image__btn",type:"button",children:"A\xf1adir imagen"}),Object(c.jsx)("input",{ref:t,type:"file",name:"img-selector",id:"img-selector",className:"js__profile-upload-btn fill-image__hidden",accept:"image/*",onChange:function(){var a=t.current.files[0];console.log(a);var c=new FileReader;c.onload=function(){var t=c.result;e.sendImage(t)},c.readAsDataURL(a)}})]}),Object(c.jsx)("div",{className:"form fill-image__profile",children:Object(c.jsx)("div",{className:"js__profile-preview profile__preview",style:{backgroundImage:"url("+a+")"}})})]})}),f=(a(42),function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{inputName:"name",inputLabel:"Nombre completo",inputType:"text",inputPlaceholder:"Frida Kahlo",inputValue:e.name,sendInput:e.sendInput}),Object(c.jsx)(v,{inputName:"job",inputLabel:"Puesto",inputType:"text",inputPlaceholder:"Pintora",inputValue:e.job,sendInput:e.sendInput}),Object(c.jsx)(x,{photo:e.photo,sendImage:e.sendImage}),Object(c.jsx)(v,{inputName:"email",inputLabel:"Email",inputType:"email",inputPlaceholder:"frida.Kahlo@gmail.com",inputValue:e.email,sendInput:e.sendInput}),Object(c.jsx)(v,{inputName:"phone",inputLabel:"Tel\xe9fono",inputType:"tel",inputPlaceholder:"666 555 444",inputValue:e.phone,sendInput:e.sendInput}),Object(c.jsx)(v,{inputName:"linkedin",inputLabel:"LinkedIn",inputType:"text",inputPlaceholder:"linkedin.com/in/frida-kahlo",inputValue:e.linkedin,sendInput:e.sendInput}),Object(c.jsx)(v,{inputName:"github",inputLabel:"GitHub",inputType:"text",inputPlaceholder:"frida-kahlo",inputValue:e.github,sendInput:e.sendInput})]})}),R=(a(43),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"create-btn",children:Object(c.jsxs)("button",{type:"button",className:"create-btn__button",children:[Object(c.jsx)("i",{className:"far fa-address-card create-btn__icon"}),"Crear tarjeta"]})}),Object(c.jsxs)("div",{className:"success hidden",children:[Object(c.jsx)("p",{className:"success__text",children:"La tarjeta ha sido creada:"}),Object(c.jsx)("a",{href:"",className:"success__link",target:"_blank"}),Object(c.jsxs)("a",{href:"",title:"Link para compartir en twitter",target:"_blank",className:"success__link--twitter",children:[Object(c.jsx)("i",{className:"fab fa-twitter success__icon","aria-hidden":"true","aria-label":"Compartir en Twitter"}),"Compartir en twitter"]})]})]})}),G=a(16),k=(a(44),function(e){Object(b.a)(a,e);var t=Object(A.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this,e)).state={collapse:"hidden"},c.handleCollapse=c.handleCollapse.bind(Object(G.a)(c)),c}return Object(d.a)(a,[{key:"handleCollapse",value:function(){var e=this;this.setState((function(){return{collapse:"hidden"===e.state.collapse?"":"hidden"}}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:this.state.collapse,children:[Object(c.jsx)("div",{onClick:this.handleCollapse,children:Object(c.jsxs)("legend",{className:"legend",children:[Object(c.jsx)("i",{className:this.props.fieldsetIcon+" legend__icon"}),Object(c.jsx)("h2",{className:"legend__title",children:this.props.fieldsetTitle}),Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAXCaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI3VDE2OjQ2OjIwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI3VDE2OjQ2OjIwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yN1QxNjo0NjoyMCswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZDdmMWFjMS0wNzFhLWQxNDEtODkzNi05MTg4YzIzZTk4NjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZGE5NzYyNC1jMTcyLWRkNDktYTBkNC01NzY0OTU4Njg4YjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MjFiYTk1OS02MTUxLWE1NDctOTE5NC1kNzI2MGM4NzI1MGEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MjFiYTk1OS02MTUxLWE1NDctOTE5NC1kNzI2MGM4NzI1MGEiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjdUMTY6NDY6MjArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBkN2YxYWMxLTA3MWEtZDE0MS04OTM2LTkxODhjMjNlOTg2OCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yN1QxNjo0NjoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5dLzqlAAAE70lEQVQ4ja2U629TdRzGn9/pOb2ent67DjrHtpZtjG3Z3LhsXM24L1EQ0BcSzeCFEV4Y3pkYNWowaqLRaHgBKgoRUELikJsIGJIJHQtzW9hG12a3Qy/QXdpu7Tmn5/T4YljDe54/4JPnkzzfL1FVFc8yNABEy04CALI6CkS9D1nTDVqhQIsS+AO7cdG/AfPh9Kp957/9qi4YZH5913f67OphV15IfSYSIUGewK608QvAp6LmoRKAqKrDnEy+M/mIUYaslpU5Wr/u073vkxfv/Q5/YKLhzXvj6HrBZLdH5AMETyzb8DSQ5POQ9TYHmxI+1Iu5NUYHW5cWtJgVNejrDsJb4sTR9YfgjwXx5dF/0HpZekNsrjkvVXgvkZz8vzJkFSAwaOeUEzpm8Xpi3lh0RpvBcL4YtdMEVklE7dIivF1+D7RpEnbPPDIH1oA58Rc1ozNmBUEP0FoU/wecdwO6DFXBlBj3SmtsuPrAh5vDo5ifTYMZqUV1WQDGrV1oT+kQGRkAYRjoGhoxGWnJS13WQ6JsuqvT6eYAgAKAzBc1+KV1pGkqm0zDpkfKzqDIQcPjNMNgkVFvXYn2Gw5MTiiYZ91QbR4IGRHhP05rhETfLl2KXEdKqC8od0/2Fx+7+fMH2xIHNXJnQkrZ3KqZeHXLNmjhKvXCJCbx3GAIg4FpUA4FsofD9N1BaIuXYE7rhnl0bkXOmN8KoI8CgLHhsO/BaKj0LdvJeLRSWVff7D1Tv9KX9SwuneESD/nam19DognKKRrq7SmMdz9GKDWCvgoXusan8NCazo5t1A0WGmaz2WqowLJdqz+3vl4T6Dz+w9renvvPx9NxY0n6oXAkZZAW1SzTyvVehF6xg1ZkJKOTiM89RtXf1XDPmrTHR+++vAe4QFRVRVVV1Z1YLLb81KlTrunZqeX793fclqW8ZmEHGlhMrLilrok+Qtk1/GIF3rQJw7glKNppuSj+GitFtaGDuUvJ/vFgEw0APM/7SkpK+mmazn537PuPZCmvqa2t7SwvL/+ttLS0n49EUjoLpzuhNS2Jhyc2D4317hlPJK17m8q+2cKd3CU6tCX5YRtbUCaEEJvNNh4MBu08z1ccPnx4s81muyYIAsxmM9LpNIqLPMjI8oClsepCQ03ZJ/HLV49fidPN67a1t5+5+OcNndkeK8zG4XDEjUajGI1G661Wa6/X672m1+tByMKVsiwLhmFgYBjoaQbV/qWR3Ttfei8Ri9SHi1tH7oiucE4UugoNq6ur70xMTNjC4fAii8WSUhQFHo8HFEWBpmnU1dVBFEXMzMyA4ziwLAu73c4rci6vSMJzxU67UFTkjhQarl279iwAJyGEdTqd/OzsrGdgYKCV5/mGXC5nZBgGDMMgk8m4x8bGVgUCgVXZbFZyOJ3RqakpVy4nSdu3b79VaNjS0nK9p6dnJ0VRFkVRhNHR0X00TedDoZCfoihHc3PzT4lEwtbb27vb4XCMGAyGR4IgVLnd7qAkSZZNmzb92NbWFigAXS6X3NHR8XFnZ+cKAJmmpqYrLMuisrISyWTSLcvyisrKypDL5XrV6XRmFEUBIUQbi8XKOI7jGxsbb8jywrchqqqir68P2WwWwWBQQwjREUIyNE1jaGgIFEXB5/PB7/fj3LlzMBgMsFgs4DgOsVisweVyjXAcN8dxHHbs2LEAfJb5Fz9KIdutu1DwAAAAAElFTkSuQmCC",alt:"Menu",className:"legend__arrow","aria-label":"Desplegar"})]})}),Object(c.jsx)("div",{className:"hide",children:this.props.children})]})}}]),a}(l.Component)),D=function(e){return Object(c.jsx)("section",{className:"cards-form",children:Object(c.jsxs)("form",{className:"form-container",action:"",method:"POST",role:"form",children:[Object(c.jsx)("fieldset",{className:"design",children:Object(c.jsx)(k,{fieldsetName:"design",fieldsetTitle:"Dise\xf1a",fieldsetIcon:"far fa-object-ungroup",children:Object(c.jsx)(N,{palette:e.palette,sendPalette:e.sendPalette})})}),Object(c.jsx)("fieldset",{children:Object(c.jsx)("div",{className:"fill",children:Object(c.jsx)(k,{fieldsetName:"fill",fieldsetTitle:"Rellena",fieldsetIcon:"far fa-keyboard",children:Object(c.jsx)(f,{name:e.name,job:e.job,photo:e.photo,phone:e.phone,email:e.email,linkedin:e.linkedin,github:e.github,sendInput:e.sendInput,sendImage:e.sendImage})})})}),Object(c.jsx)("fieldset",{className:"form-share",children:Object(c.jsx)(k,{fieldsetName:"share",fieldsetTitle:"Comparte",fieldsetIcon:"fas fa-share-alt",children:Object(c.jsx)(R,{})})})]})})},M=(a(45),function(e){Object(b.a)(a,e);var t=Object(A.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("footer",{className:"footer",role:"contentinfo",children:[Object(c.jsxs)("div",{className:"footer__copy2020",children:[Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAoCAYAAADAFLWVAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAXCaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTEwVDE0OjU3OjM5KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTEwVDE0OjU3OjM5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0xMFQxNDo1NzozOSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ODMxZGRlZS1jOTU2LWEzNGEtODdlMC02NjFhNjFlZTYxYjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNDgzZjhjMi1hOWIyLTA1NGYtOThmYy0xZTkzNDE5NDFjYzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjBhMThhMC05ODU2LTE0NGUtOTdiMC01ZjZhOTBiMmRkMDIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjBhMThhMC05ODU2LTE0NGUtOTdiMC01ZjZhOTBiMmRkMDIiIHN0RXZ0OndoZW49IjIwMjAtMTAtMTBUMTQ6NTc6MzkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4MzFkZGVlLWM5NTYtYTM0YS04N2UwLTY2MWE2MWVlNjFiOCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0xMFQxNDo1NzozOSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9y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",className:"footer__logofrida",alt:"Logo Frida Kards"}),Object(c.jsx)("small",{className:"footer__copy",children:"\xa9 2020"})]}),Object(c.jsx)("a",{href:"https://adalab.es/",title:"Ir a la web de Adalab","aria-label":"Ir a la web de Adalab",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo Adalab",title:"Logotipo de Adalab",className:"footer__logo","aria-label":"Logotipo de Adalab"})})]})}}]),a}(l.Component)),Y=(a(46),function(){var e,t=Object(l.useState)(localStorage.getItem("name")||""),a=Object(r.a)(t,2),i=a[0],n=a[1],s=Object(l.useState)(localStorage.getItem("job")||""),j=Object(r.a)(s,2),d=j[0],b=j[1],A=Object(l.useState)(localStorage.getItem("photo")||""),m=Object(r.a)(A,2),p=m[0],O=m[1],u=Object(l.useState)(localStorage.getItem("phone")||""),g=Object(r.a)(u,2),N=g[0],v=g[1],x=Object(l.useState)(localStorage.getItem("email")||""),f=Object(r.a)(x,2),R=f[0],G=f[1],k=Object(l.useState)(localStorage.getItem("linkedin")||""),Y=Object(r.a)(k,2),B=Y[0],C=Y[1],E=Object(l.useState)(localStorage.getItem("github")||""),w=Object(r.a)(E,2),Z=w[0],T=w[1],F=Object(l.useState)(localStorage.getItem("palette")||"palette-green"),S=Object(r.a)(F,2),y=S[0],V=S[1];"palette-green"===y?e=1:"palette-red"===y?e=2:"palette-grey"===y&&(e=3);var L=Object(l.useState)({name:i,job:d,photo:p,phone:N,email:R,linkedin:B,github:Z,palette:e}),Q=Object(r.a)(L,2),W=Q[0],H=Q[1];return console.log(W),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)("main",{className:"cards-main",role:"main",children:[Object(c.jsx)(I,{name:i,job:d,photo:p,phone:N,email:R,linkedin:B,github:Z,palette:y}),Object(c.jsx)(D,{name:i,job:d,photo:p,phone:N,email:R,linkedin:B,github:Z,sendInput:function(e,t){console.log(e),console.log(t),"name"===e?(n(t),localStorage.setItem("name",t),H(Object(o.a)(Object(o.a)({},W),{},{name:t}))):"job"===e?(b(t),localStorage.setItem("job",t),H(Object(o.a)(Object(o.a)({},W),{},{job:t}))):"phone"===e?(v(t),localStorage.setItem("phone",t),H(Object(o.a)(Object(o.a)({},W),{},{phone:t}))):"email"===e?(G(t),localStorage.setItem("email",t),H(Object(o.a)(Object(o.a)({},W),{},{email:t}))):"linkedin"===e?(C(t),localStorage.setItem("linkedin",t),H(Object(o.a)(Object(o.a)({},W),{},{linkedin:t}))):"github"===e&&(T(t),localStorage.setItem("github",t),H(Object(o.a)(Object(o.a)({},W),{},{github:t})))},palette:y,sendPalette:function(e){var t;V(e),localStorage.setItem("palette",e),"palette-green"===e?t=1:"palette-red"===e?t=2:"palette-grey"===e&&(t=3),H(Object(o.a)(Object(o.a)({},W),{},{palette:t}))},sendImage:function(e){O(e),localStorage.setItem("photo",e),H(Object(o.a)(Object(o.a)({},W),{},{photo:e}))}})]}),Object(c.jsx)(M,{})]})}),B=a.p+"static/media/logofridakards.6c0869ca.png",C=(a(47),function(){return Object(c.jsxs)("div",{class:"landing",children:[Object(c.jsxs)("main",{class:"main",role:"main",children:[Object(c.jsx)("a",{href:"#",title:"Frida Kards",class:"main__logo","aria-label":"Logotipo de Frida Kards",children:Object(c.jsx)("img",{src:B,class:"main__image",alt:""})}),Object(c.jsx)("h1",{class:"main__title",children:"Crea tu tarjeta de visita"}),Object(c.jsx)("p",{class:"main__text",children:"Crea mejores contactos profesionales de forma f\xe1cil y c\xf3moda"}),Object(c.jsxs)("section",{class:"steps",children:[Object(c.jsxs)("article",{class:"steps__article",children:[Object(c.jsx)("i",{class:"far fa-object-ungroup steps__icon","aria-label":"Dise\xf1a"}),Object(c.jsx)("p",{class:"steps__text",children:"Dise\xf1a"})]}),Object(c.jsxs)("article",{class:"steps__article",children:[Object(c.jsx)("i",{class:"far fa-keyboard steps__icon","aria-label":"Rellena"}),Object(c.jsx)("p",{class:"steps__text",children:"Rellena"})]}),Object(c.jsxs)("article",{class:"steps__article",children:[Object(c.jsx)("i",{class:"fas fa-share-alt steps__icon","aria-label":"Comparte"}),Object(c.jsx)("p",{class:"steps__text",children:"Comparte"})]})]}),Object(c.jsx)(p.b,{to:"/PetCodeGirls-Card-Creator",children:Object(c.jsx)("button",{class:"main__link",title:"Ir a crear mi tarjeta","aria-label":"Comienza a crear tu tarjeta",children:"Comenzar"})})]}),Object(c.jsx)(M,{})]})}),E=a(2),w=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(E.c,{children:[Object(c.jsx)(E.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(E.a,{exact:!0,path:"/PetCodeGirls-Card-Creator",component:Y})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),l(e),i(e),n(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(w,{})})}),document.getElementById("root")),Z()}},[[48,1,2]]]);
//# sourceMappingURL=main.677c7d85.chunk.js.map