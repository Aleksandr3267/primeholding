import{r as d,j as a,m as h,e as x,b as j}from"./index-d83cef06.js";function N({selectedBlock:l,selectedFloor:s,selectedArrFloor:t,selectedFlRooms:o}){const c=()=>{const e=document.getElementById("callModalApartments");j.Modal.getInstance(e).hide()},[i,n]=d.useState(!1),[b,m]=d.useState(!1);function u(e){e.preventDefault(),n(!0);const f={number:e.target.from_number.value,selectedBlock:l=="block-1"?"А":l=="block-2"?"Б":l=="block-3"?"В":l=="block-4"?"Г":"Не выбрано.",selectedFloor:s==""?"Не выбрано.":s,selectedArrFloor:t==""?"Не выбрано.":t,selectedFlRooms:o==""?"Не выбрано.":o};x.send("service_wrczsl5","template_xukrbhn",f,"O0nWnzGyyIvlnh2JI").then(r=>{c(),n(!1),m(!0),setTimeout(()=>{m(!1)},2100)}).catch(r=>{console.log(r)})}return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"modal fade modal-call",id:"callModalApartments",tabIndex:-1,"aria-labelledby":"callModalApartments","aria-hidden":"true",children:a.jsx("div",{className:"modal-dialog modal-lg",children:a.jsx("div",{className:"modal-content",children:a.jsxs("div",{className:"modal-body modal-call__body",children:[a.jsxs("form",{className:"modal-call__form",onSubmit:u,children:[a.jsx("h4",{className:"modal-call__title",children:"Нужна помощь в выборе?"}),a.jsx("label",{className:"form-item",children:a.jsx("input",{required:!0,type:"tel",pattern:"[0-9+\\-]+",title:"Неверный номер телефона",className:"form-item__input",placeholder:"Телефон",name:"from_number"})}),a.jsx("button",{type:"submit",className:"form__btn-submit link-brown",children:i?"Обработка...":"Заказать звонок"})]}),a.jsx("p",{className:"bg-font modal-call__bg-one",children:"Contact"}),a.jsx("button",{type:"button",className:"modal-call__btn-close","data-bs-dismiss":"modal","aria-label":"Закрыть",value:"Send",children:a.jsx("img",{src:h,alt:"Закрыть"})})]})})})}),b?a.jsxs("div",{className:"loading-form",children:[" ",a.jsx("div",{className:"loading-form-content",children:"Спасибо за заявку!"})]}):""]})}export{N as default};
