import{r as n,j as a,m as b,e as f,b as p}from"./index-254d410c.js";function _(){const m=()=>{const e=document.getElementById("callModal");p.Modal.getInstance(e).hide()},[d,l]=n.useState(!1),[r,s]=n.useState(!1);function c(e){e.preventDefault(),l(!0);const t=e.target.from_name.value,i=e.target.from_number.value,u={from_name:t,number:i};f.send("service_wrczsl5","template_q5w7veq",u,"O0nWnzGyyIvlnh2JI").then(o=>{m(),l(!1),s(!0),setTimeout(()=>{s(!1)},2100)}).catch(o=>{console.log(o)})}return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"modal fade modal-call",id:"callModal",tabIndex:-1,"aria-labelledby":"callModal","aria-hidden":"true",children:a.jsx("div",{className:"modal-dialog modal-lg",children:a.jsx("div",{className:"modal-content",children:a.jsxs("div",{className:"modal-body modal-call__body",children:[a.jsxs("form",{className:"modal-call__form",onSubmit:c,children:[a.jsx("h4",{className:"modal-call__title",children:"Вы в шаге от ответа"}),a.jsx("label",{className:"form-item",children:a.jsx("input",{required:!0,type:"text",className:"form-item__input",placeholder:"Как мы можем обращаться к вам",name:"from_name"})}),a.jsx("label",{className:"form-item",children:a.jsx("input",{required:!0,type:"tel",pattern:"[0-9+\\-]+",title:"Неверный номер телефона",className:"form-item__input",placeholder:"Телефон",name:"from_number"})}),a.jsx("button",{type:"submit",className:"form__btn-submit link-brown",children:d?"Обработка...":"Заказать звонок"})]}),a.jsx("p",{className:"bg-font modal-call__bg-one",children:"Contact"}),a.jsx("button",{type:"button",className:"modal-call__btn-close","data-bs-dismiss":"modal","aria-label":"Закрыть",value:"Send",children:a.jsx("img",{src:b,alt:"Закрыть"})})]})})})}),r?a.jsxs("div",{className:"loading-form",children:[" ",a.jsx("div",{className:"loading-form-content",children:"Спасибо за заявку!"})]}):""]})}export{_ as default};