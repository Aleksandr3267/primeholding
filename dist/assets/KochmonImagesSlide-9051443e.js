import{r as h,j as e,c as N,A as t}from"./index-d83cef06.js";const n="/assets/imageSlide1-0d9b87f3.webp",w="/assets/imageSlide2-36fe6679.webp",v="/assets/imageSlide3-75fadcf7.webp",u="/assets/imageSlide4-2b60ee7e.webp",L="/assets/imageSlide5-59b30dab.webp",f="/assets/imageSlide6-df209096.webp",S="/assets/imageSlide7-aecf5a3a.webp",b="/assets/imageSlide8-ed58eb2f.webp",M="/assets/imageSlide9-ca62df26.webp",Z="/assets/imageSlide10-72563a15.webp",B="/assets/imageSlide11-909d0844.webp",q="/assets/imageSlide12-70cb0fa4.webp";function I({id:x,dataSpeed:p}){const[a,c]=h.useState(0);h.useEffect(()=>{const s=document.querySelectorAll("[data-progress-item]"),r=document.querySelector("[data-progress-block-img]"),m=document.querySelector("[data-progress-block-text]");if(s.length>0){s[a].classList.add("images-right__item--animated"),s[a].classList.add("images-right__item--active");let i=a+1,o=setTimeout(()=>{s[a].classList.remove("images-right__item--animated"),s[a].classList.remove("images-right__item--active"),i===s.length&&(i=0),s[i].classList.add("images-right__item--animated"),s[i].classList.add("images-right__item--active");const g=s[i].querySelector("[data-progress-item-img]"),l=s[i].querySelector("[data-progress-item-text]");d(r,g,m,l),c(i)},5e3),_=document.querySelectorAll(".images-right__item-title");for(let g=0;g<_.length;g++)_[g].addEventListener("click",function(){clearTimeout(o),s[a].classList.remove("images-right__item--animated"),s[a].classList.remove("images-right__item--active"),i=g,s[i].classList.add("images-right__item--animated"),s[i].classList.add("images-right__item--active");const l=s[i].querySelector("[data-progress-item-img]"),j=s[i].querySelector("[data-progress-item-text]");d(r,l,m,j),c(i)})}},[a]);const d=(s,r,m,i)=>{s.classList.add("images-img__img--animated"),m.classList.add("images-text__text--animated"),setTimeout(()=>{s.src=r.src,s.classList.remove("images-img__img--animated"),m.textContent=i.textContent,m.classList.remove("images-text__text--animated")},300)};return e.jsx("section",{id:x,className:"images","data-speed":p,children:e.jsx("div",{className:"container container-lg",children:e.jsxs("div",{className:"images__content","data-progress-block":!0,children:[e.jsx(N,{className:"images-img",children:e.jsx("img",{src:n,alt:"Детская площадка",className:"images-img__img img-cover","data-progress-block-img":!0})}),e.jsxs("div",{className:"images-right",children:[e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Многоквартирные жилые дома"}),e.jsx("img",{className:"images-right__item-img",src:n,alt:"Детская площадка","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Современные, комфортабельные квартиры, обеспечивающие уют и безопасность для вашей семьи."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Медицинские центры"}),e.jsx("img",{className:"images-right__item-img",src:w,alt:"Охраняемая территория","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Медицинский центр в шаговой доступности, поддерживающий ваше благополучие."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"мечеть"}),e.jsx("img",{className:"images-right__item-img",src:v,alt:"Подземный и гостевой паркинг","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Духовный центр, где вы сможете находить покой и вдохновение."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"БИЗНЕС И ТОРГОВЫЙ ЦЕНТРЫ"}),e.jsx("img",{className:"images-right__item-img",src:u,alt:"Подземный и гостевой паркинг","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Бизнес и торговые центры с инновационной атмосферой, предоставляющий новые возможности для предпринимателей и увлекательный опыт шопинга."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"отель международного класса"}),e.jsx("img",{className:"images-right__item-img",src:L,alt:"Транспортная доступность","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Роскошное проживание для гостей и туристов, создающее идеальное место для отдыха и работы."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Кафе и рестораны"}),e.jsx("img",{className:"images-right__item-img",src:f,alt:"Уникальный пешеходный мост","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Кафе и рестораны с разнообразным меню для ваших гастрономических радостей."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Офисные помещения"}),e.jsx("img",{className:"images-right__item-img",src:S,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Офисные помещения, способствующие эффективной работе и вдохновению."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Аптеки"}),e.jsx("img",{className:"images-right__item-img",src:b,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Аптеки с широким ассортиментом медикаментов и товаров."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Детские сады"}),e.jsx("img",{className:"images-right__item-img",src:M,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Детские сады, наполненные радостью, играми и учебой."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"школы"}),e.jsx("img",{className:"images-right__item-img",src:Z,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Школы, где каждый ученик открывает перед собой мир знаний."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"Многоуровневые паркинги"}),e.jsx("img",{className:"images-right__item-img",src:B,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Многоуровневые паркинги, предоставляющие удобное место для парковки и сохранности вашего транспорта."})]}),e.jsxs("div",{className:"images-right__item","data-progress-item":!0,children:[e.jsx("svg",{className:"images-right__item-svg",width:10,height:10,viewBox:"0 0 10 10",fill:"#212121",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 5L5 0L0 5L5 10L10 5Z"})}),e.jsx("span",{className:"images-right__item-line",children:e.jsx("span",{className:"images-right__item-line__progress"})}),e.jsx(t,{as:"p",className:"text-fade-in images-right__item-title",children:"ЗАРЯДКА ЭЛЕКТРОМОБИЛЕЙ"}),e.jsx("img",{className:"images-right__item-img",src:q,alt:"Центр детского творчества","data-progress-item-img":!0}),e.jsx("p",{className:"images-right__item-text","data-progress-item-text":!0,children:"Инфраструктура для удобной зарядки электромобилей, способствующая заботе о окружающей среде и инновационной мобильности."})]}),e.jsx(t,{as:"div",className:"text-fade-in images-right__text-block",children:e.jsx("p",{className:" images-right__text block-text","data-progress-block-text":!0})})]})]})})})}export{I as default};
