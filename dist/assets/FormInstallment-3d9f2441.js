import{i as $,k as I,w as q,x as Y,r as o,j as e,C as m,m as A,D as B}from"./index-d83cef06.js";import{c as U,a as r,b as L,d as f}from"./index.esm-f7a4d6c0.js";import{e as y}from"./index-04138db7.js";import{U as O}from"./Uploader-475d4550.js";const R=U().shape({clientName:r().required("Поле обязательно для заполнения"),clientPhone:r().required("Поле обязательно для заполнения").matches(/^[\d+]+$/,"Телефон должен содержать только цифры"),paymentNotificationDate:L().required("Поле обязательно для заполнения").typeError("Поле обязательно для заполнения"),contractNumber:r().required("Поле обязательно для заполнения"),comment:r(),firstPayment:f().typeError("Поле обязательно для заполнения"),monthlyPayment:f().typeError("Поле обязательно для заполнения"),email:r().email("Некорректный email").required("Поле обязательно для заполнения")});function J({setUpdateStatus:b}){const N=$(),D=I(q),{handleSubmit:g,control:n,formState:v,setError:_,setValue:d,reset:P}=Y(),{errors:a}=v,[h,u]=o.useState({}),[s,k]=o.useState(new Date),[l,w]=o.useState(new Date(new Date().setFullYear(new Date().getFullYear()+1))),[S,x]=o.useState(!1),E=async t=>{try{await R.validate(t,{abortEarly:!1});const i=((l.getFullYear()-s.getFullYear())*12+(l.getMonth()-s.getMonth()))*t.monthlyPayment+t.firstPayment,V={apartment:D,clientName:t.clientName,clientPhone:t.clientPhone,contractNumber:t.contractNumber,contractDocument:h,mortgage:{startDate:new Date(s),endDate:new Date(l),price:i||0,firstPayment:t.firstPayment,monthlyPayment:t.monthlyPayment,email:t.email,paymentNotificationDate:new Date(t.paymentNotificationDate)},comment:t.comment};N(B(V)).unwrap().then(c=>{(c==null?void 0:c.status)===200&&(C(),u({}),P(),M())})}catch(j){j.inner.forEach(i=>{_(i.path,{type:"manual",message:i.message})})}},F=()=>{d("bookingDates.fromDate",s),d("bookingDates.toDate",l),x(!1)},p=t=>t.toLocaleDateString(),M=()=>{const t=document.getElementById("close-mortgage-form-btn");t&&t.click()},C=()=>{b("5")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"modal fade modal-for-admin",id:"formInstallment",tabIndex:-1,"aria-labelledby":"formInstallment","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-lg",children:e.jsx("div",{className:"modal-content",children:e.jsxs("div",{className:"modal-body modal-call__body",children:[e.jsxs("form",{className:"modal-call__form",onSubmit:g(E),children:[e.jsx("h4",{className:"modal-call__title",children:"Рассрочка"}),e.jsxs("div",{className:"modal-for-admin__forms",children:[e.jsxs("div",{className:"modal-call__side",children:[e.jsx("p",{className:"modal-for-admin__title-side",children:"Данные клиента"}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"clientName",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"ФИО клиента*",...t})}),a.clientName&&e.jsx("p",{children:a.clientName.message})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"clientPhone",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"Телефон клиента*",...t})}),a.clientPhone&&e.jsx("p",{children:a.clientPhone.message})]}),e.jsx("p",{className:"modal-for-admin__title-side",style:{marginTop:"40px"},children:"Параметры"}),e.jsxs("div",{className:"form-item",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Срок брони*",value:s&&l?`${p(s)} - ${p(l)}`:"",onClick:()=>x(!0),readOnly:!0}),a.bookingDates&&e.jsxs("p",{children:[a.bookingDates.fromDate&&a.bookingDates.fromDate.message,e.jsx("br",{}),a.bookingDates.toDate&&a.bookingDates.toDate.message]})]}),S&&e.jsxs("div",{className:"admin-term-form",children:[e.jsxs("div",{className:"admin-term-blocks",children:[e.jsxs("div",{className:"admin-term-block",children:[e.jsx("p",{children:"От:"}),e.jsx(y,{selected:s,onChange:t=>k(t),selectsStart:!0,startDate:s,endDate:l,minDate:new Date,dateFormat:"dd.MM.yy"})]}),e.jsxs("div",{className:"admin-term-block",children:[e.jsx("p",{children:"До:"}),e.jsx(y,{selected:l,onChange:t=>w(t),selectsEnd:!0,startDate:s,endDate:l,minDate:s||new Date,dateFormat:"dd.MM.yy"})]})]}),e.jsx("button",{className:"admin-term-button",onClick:F,children:"Применить"})]})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"firstPayment",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"Сумма первоначального взноса*",...t,type:"number"})}),a.firstPayment&&e.jsx("p",{children:a.firstPayment.message})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"monthlyPayment",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"Ежемесячный платеж*",...t,type:"number"})}),a.monthlyPayment&&e.jsx("p",{children:a.monthlyPayment.message})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"contractNumber",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"Номер договора*",...t,type:"text"})}),a.contractNumber&&e.jsx("p",{children:a.contractNumber.message})]})]}),e.jsxs("div",{className:"modal-call__side",children:[e.jsx("p",{className:"modal-for-admin__title-side",children:"Уведомление о ежемесячных платежах"}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"email",control:n,render:({field:t})=>e.jsx("input",{placeholder:"Почта*",...t})}),a.email&&e.jsx("p",{children:a.email.message})]}),e.jsx("div",{className:"form-item",children:e.jsx(m,{name:"additionalEmail",control:n,render:({field:t})=>e.jsx("input",{placeholder:"Доп почта",...t})})}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"paymentNotificationDate",control:n,defaultValue:"",render:({field:t})=>e.jsx("input",{placeholder:"Когда отправлять уведомление*",...t,type:"date",max:"2099-12-31"})}),a.paymentNotificationDate&&e.jsx("p",{children:a.paymentNotificationDate.message})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(m,{name:"comment",control:n,defaultValue:"",render:({field:t})=>e.jsx("textarea",{placeholder:"Комментарий",...t})}),a.comment&&e.jsx("p",{children:a.comment.message})]}),e.jsxs("div",{className:"modal-admin__controls",children:[e.jsx(O,{file:h,setFile:u}),e.jsx("button",{type:"submit",className:"form__btn-submit link-brown",children:"Сохранить"}),e.jsx("button",{type:"button",className:"form__btn-undoing","data-bs-dismiss":"modal","aria-label":"Закрыть",children:"Отмена"})]})]})]})]}),e.jsx("button",{type:"button",id:"close-mortgage-form-btn",className:"modal-call__btn-close","data-bs-dismiss":"modal","aria-label":"Закрыть",value:"Send",children:e.jsx("img",{src:A,alt:"Закрыть"})})]})})})})})}export{J as default};
