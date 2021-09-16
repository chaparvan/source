let changeItem = (self, id) => {
  //change navbar active item
  let navLi = document.querySelectorAll(".navbar-new li");
  [].map.call(navLi, (el) => {
    el.classList.remove("active");
  });
  self.classList.add("active");
  // change table
  let table = document.querySelectorAll(".table tbody");
  [].map.call(table, (el) => {
    el.classList.remove("display-table-row-group");
  });
  document.querySelector(id).classList.add("display-table-row-group");
};
function loader() {
  setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("headerNewTable").style.display = "block";
  document.getElementById("sectionNewTable").style.display = "block";
}
if (document.getElementById("firstProduct")) {
  document.getElementById("loader").innerHTML = `<span></span>
<span></span>
<span></span>`;
document.getElementById("lightTableMenuNav").innerHTML = `منو را به چپ بکشید<svg class="svg-inline--fa fa-angle-double-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>`;
 loader() 
  // کارت ویزیت ساده
const firstProduct={product:[{title:"گلاسه بدون روکش",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:56e3,href:"https://chaparvan.com/product/MjU1NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%DB%8C%DA%A9%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjQ1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون براق",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:79e3,href:"https://chaparvan.com/product/MjU1NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:71e3,href:"https://chaparvan.com/product/MjU1NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:1e5,href:"https://chaparvan.com/product/MjU1NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:92e3,href:"https://chaparvan.com/product/MjU1NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:87e3,href:"https://chaparvan.com/product/MjU1NjUz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:79e3,href:"https://chaparvan.com/product/MjU1NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:71e3,href:"https://chaparvan.com/product/MjU1NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjU2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:1e5,href:"https://chaparvan.com/product/MjU1NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:92e3,href:"https://chaparvan.com/product/MjU1NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:87e3,href:"https://chaparvan.com/product/MjU1NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"گلاسه یووی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:7e4,href:"https://chaparvan.com/product/MjU1NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:61e3,href:"https://chaparvan.com/product/MjU1NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:86e3,href:"https://chaparvan.com/product/MjU1NjYy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:8e4,href:"https://chaparvan.com/product/MjU1NjYz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون براق دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"1",price:14e4,href:"https://chaparvan.com/product/MjU1NjY0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:13e4,href:"https://chaparvan.com/product/MjU1NjY1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:12e4,href:"https://chaparvan.com/product/MjU1NjY2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"1",price:14e4,href:"https://chaparvan.com/product/MjU1Nzcy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:13e4,href:"https://chaparvan.com/product/MjU1Nzcz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:12e4,href:"https://chaparvan.com/product/MjU3NzI4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان امباس",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"2",price:108e3,href:"https://chaparvan.com/product/MjU1Nzc0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:103e3,href:"https://chaparvan.com/product/MjU1Nzc1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"2",price:112e3,href:"https://chaparvan.com/product/MjU1Nzc2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:107e3,href:"https://chaparvan.com/product/MjU1Nzc3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان آلمان",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:156e3,href:"https://chaparvan.com/product/MjU1Nzc4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:151e3,href:"https://chaparvan.com/product/MjU1Nzc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:161e3,href:"https://chaparvan.com/product/MjU1Nzgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:156e3,href:"https://chaparvan.com/product/MjU1Nzgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:145e3,href:"https://chaparvan.com/product/MjU1Nzgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کرافت دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:147e3,href:"https://chaparvan.com/product/MjU1Nzgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کرافت مربع",side:"دو رو",size:"5.5 * 5.5",circulation:"1000",delivery:"17",price:345e3,href:"https://chaparvan.com/product/MjU1Nzg0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سوسماری",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:88e3,href:"https://chaparvan.com/product/MjU1Nzg1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:96e3,href:"https://chaparvan.com/product/MjU1Nzg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"مقوا پشت طوسی فیلتر دار",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:66e3,href:"https://chaparvan.com/product/MjU1Nzg3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%D9%BE%D8%B4%D8%AA-%D8%B7%D9%88%D8%B3%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%AF%D8%A7%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"مقوا کارتی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:1e5,href:"https://chaparvan.com/product/MjU1Nzg4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:105e3,href:"https://chaparvan.com/product/MjU1Nzg5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"}]};  
  // کارت ویزیت فانتزی
const secondProduct={product:[{title:"طرح چرم",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:19e4,href:"https://chaparvan.com/product/MjU3NjA0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"طرح چرم دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:115e3,href:"https://chaparvan.com/product/MjU3NjA3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت امباس",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:285e3,href:"https://chaparvan.com/product/MjU3NjMy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D8%A7%D9%85%D8%A8%D8%A7%D8%B3-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کارتی 300 گرم نقره کوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:22e4,href:"https://chaparvan.com/product/MjU3NjMz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:225e3,href:"https://chaparvan.com/product/MjU3NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:235e3,href:"https://chaparvan.com/product/MjU3NjM2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:245e3,href:"https://chaparvan.com/product/MjU3NjM3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%D8%AF%D9%88%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان دورگرد طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:34e4,href:"https://chaparvan.com/product/MjU3NjM4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D8%B1%D9%88%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت برجسته",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:263e3,href:"https://chaparvan.com/product/MjY1NzA2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-4%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:255e3,href:"https://chaparvan.com/product/MjY1NzA1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-7%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت برجسته مربع",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:2e5,href:"https://chaparvan.com/product/MjY1NzA3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%85%D8%B1%D8%A8%D8%B9-4%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:19e4,href:"https://chaparvan.com/product/MjY1NzA4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%85%D8%B1%D8%A8%D8%B9-7%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت برجسته قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:465e3,href:"https://chaparvan.com/product/MjU3NjM5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:2e5,href:"https://chaparvan.com/product/MjU3NjQw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:21e4,href:"https://chaparvan.com/product/MjU3NjQx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات مخملی دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:276e3,href:"https://chaparvan.com/product/MjU3NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی دورگرد طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"11",price:1495e3,href:"https://chaparvan.com/product/MjU3NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-11%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی دورگرد موضعی",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"11",price:309e3,href:"https://chaparvan.com/product/MjU3NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D9%85%D9%88%D8%B6%D8%B9%DB%8C-11%D8%B1%D9%88%D8%B2%D9%87-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات سلفونی",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:26e4,href:"https://chaparvan.com/product/MjU3NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:25e4,href:"https://chaparvan.com/product/MjU3NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت مات سلفونی مربع",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"4",price:2e5,href:"https://chaparvan.com/product/MjU3NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"9",price:19e4,href:"https://chaparvan.com/product/MjU3NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-9%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:251e3,href:"https://chaparvan.com/product/MjU3NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:241e3,href:"https://chaparvan.com/product/MjU3NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق دوگوش گرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:245e3,href:"https://chaparvan.com/product/MjU3NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88-%DA%AF%D9%88%D8%B4-%DA%AF%D8%B1%D8%AF-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:42e4,href:"https://chaparvan.com/product/MjU3NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:4e5,href:"https://chaparvan.com/product/MjU3NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق گرد",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"10",price:17e4,href:"https://chaparvan.com/product/MjU3Njc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق مربع",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"10",price:185e3,href:"https://chaparvan.com/product/MjU3Njgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق ویزیتی",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"4",price:21e4,href:"https://chaparvan.com/product/MjU3Njgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"8",price:198e3,href:"https://chaparvan.com/product/MjU3Njgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق طرح موج",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:24e4,href:"https://chaparvan.com/product/MjU3Njgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:455e3,href:"https://chaparvan.com/product/MjU3NzE2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5",btn:"خرید",classHtml:""},{title:"لمینت مات",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:358e3,href:"https://chaparvan.com/product/MjU3NzE3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:351e3,href:"https://chaparvan.com/product/MjU3NzE4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت مات طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"12",price:525e3,href:"https://chaparvan.com/product/MjU3NzE5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات دایره",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:23e4,href:"https://chaparvan.com/product/MjU3NzIw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D8%A7%DB%8C%D8%B1%D9%87-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات مربع",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:23e4,href:"https://chaparvan.com/product/MjU3NzIx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات ویزیتی",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:28e4,href:"https://chaparvan.com/product/MjU3NzIy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات طرح موج",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:345e3,href:"https://chaparvan.com/product/MjU3NzIz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کرافت قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"17",price:36e4,href:"https://chaparvan.com/product/MjU3NzI2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};  // کارت ویزیت مدیریتی
 // کارت ویزیت مدیریتی
  const thirdProduct={product:[{title:"پی وی سی 760 میکرون",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:141e4,href:"https://chaparvan.com/product/MjU3ODU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-760-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"پی وی سی 300 میکرون",side:"دو رو",size:"6 * 9",circulation:"500",delivery:"10",price:305e3,href:"https://chaparvan.com/product/MjU3ODg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-300-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};
  // لیبل
  const fourthProduct={product:[{title:"لیبل بدون روکش",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:11e4,href:"https://chaparvan.com/product/MjU3OTAw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:102e3,href:"https://chaparvan.com/product/MjU3OTAx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:95e3,href:"https://chaparvan.com/product/MjU3OTAy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون براق",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:12e4,href:"https://chaparvan.com/product/MjU4MDUw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:105e3,href:"https://chaparvan.com/product/MjU4MDUx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:1e5,href:"https://chaparvan.com/product/MjU4MDUy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون مات",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:1e5,href:"https://chaparvan.com/product/MjU4MDUz=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لیبل یووی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:109e3,href:"https://chaparvan.com/product/MjU4MDU0=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:1e5,href:"https://chaparvan.com/product/MjU4MDU1=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:96e3,href:"https://chaparvan.com/product/MjU4MDU2=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"بدون روکش طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:16e4,href:"https://chaparvan.com/product/MjU4MDU3=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8",btn:"خرید",classHtml:""},{title:"لیبل سلفون براق طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"5",price:19e4,href:"https://chaparvan.com/product/MjU4MDU4=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-5%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:18e4,href:"https://chaparvan.com/product/MjU4MDU5=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون مات طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:175e3,href:"https://chaparvan.com/product/MjU4MDYx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لیبل شیشه ای",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:45e4,href:"https://chaparvan.com/product/MjU4MDYw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B4%DB%8C%D8%B4%D9%87-%D8%A7%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};
  // تراکت تحریر
const fifthProduct={product:[{title:"تحریر ایرانی 80 گرم",side:"یک رو",size:"A6",circulation:"1000",delivery:"10",price:65e3,href:"https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"10",price:105e3,href:"https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"5000",delivery:"10",price:21e4,href:"https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"10",price:135e3,href:"https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"10",price:21e4,href:"https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"5000",delivery:"10",price:42e4,href:"https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"10",price:265e3,href:"https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"10",price:42e4,href:"https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"5000",delivery:"10",price:84e4,href:"https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"10",price:95e3,href:"https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"10",price:14e4,href:"https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"5000",delivery:"10",price:25e4,href:"https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"10",price:19e4,href:"https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"10",price:28e4,href:"https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"5000",delivery:"10",price:51e4,href:"https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"10",price:38e4,href:"https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"10",price:555e3,href:"https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"10",price:101e4,href:"https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",btn:"خرید",classHtml:"white"},{title:"تحریر 80 گرم خارجی",side:"یک رو",size:"A6",circulation:"1000",delivery:"1",price:1e5,href:"https://chaparvan.com/product/MjU3NzM5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"1",price:145e3,href:"https://chaparvan.com/product/MjU3NzM5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"1000",delivery:"3",price:8e4,href:"https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"3",price:129e3,href:"https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"5000",delivery:"3",price:26e4,href:"https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"1000",delivery:"7",price:7e4,href:"https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"7",price:118e3,href:"https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"5000",delivery:"7",price:245e3,href:"https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"1",price:185e3,href:"https://chaparvan.com/product/MjU3Nzcx=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"1",price:27e4,href:"https://chaparvan.com/product/MjU3Nzcx=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"3",price:156e3,href:"https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"3",price:25e4,href:"https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"5000",delivery:"3",price:515e3,href:"https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"7",price:146e3,href:"https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"7",price:235e3,href:"https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"5000",delivery:"7",price:495e3,href:"https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"1",price:335e3,href:"https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"1",price:503e3,href:"https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"3",price:3e5,href:"https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"3",price:483e3,href:"https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"5000",delivery:"3",price:985e3,href:"https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"7",price:228e3,href:"https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"7",price:464e3,href:"https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"5000",delivery:"7",price:98e4,href:"https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"1000",delivery:"3",price:121e3,href:"https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"2000",delivery:"3",price:194e3,href:"https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"5000",delivery:"3",price:378e3,href:"https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"1000",delivery:"7",price:116e3,href:"https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"2000",delivery:"7",price:174e3,href:"https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"5000",delivery:"7",price:354e3,href:"https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"1000",delivery:"3",price:234e3,href:"https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"2000",delivery:"3",price:373e3,href:"https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"5000",delivery:"3",price:739e3,href:"https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"1000",delivery:"7",price:224e3,href:"https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"2000",delivery:"7",price:358e3,href:"https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"5000",delivery:"7",price:72e4,href:"https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"1",price:13e4,href:"https://chaparvan.com/product/MjU3NzY4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"1",price:18e4,href:"https://chaparvan.com/product/MjU3NzY4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"3",price:107e3,href:"https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"3",price:161e3,href:"https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"5000",delivery:"3",price:3e5,href:"https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"7",price:98e3,href:"https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"7",price:152e3,href:"https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"5000",delivery:"7",price:285e3,href:"https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"1",price:24e4,href:"https://chaparvan.com/product/MjU3Nzc3=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"1",price:336e3,href:"hhttps://chaparvan.com/product/MjU3Nzc3=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"3",price:21e4,href:"https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"3",price:315e3,href:"https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"5000",delivery:"3",price:595e3,href:"https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"7",price:2e5,href:"https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"7",price:3e5,href:"https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"5000",delivery:"7",price:575e3,href:"https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"1",price:448e3,href:"https://chaparvan.com/product/MjU3Nzgz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"1",price:63e4,href:"https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"3",price:41e4,href:"https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"3",price:61e4,href:"https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"5000",delivery:"3",price:114e4,href:"https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"7",price:395e3,href:"https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"7",price:59e4,href:"https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"5000",delivery:"7",price:115e4,href:"https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"1000",delivery:"3",price:147e3,href:"https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"2000",delivery:"3",price:256e3,href:"https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"5000",delivery:"3",price:445e3,href:"https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"1000",delivery:"7",price:17e4,href:"https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"2000",delivery:"7",price:247e3,href:"https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"5000",delivery:"7",price:44e4,href:"https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"1000",delivery:"3",price:34e4,href:"https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"2000",delivery:"3",price:5e5,href:"https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"5000",delivery:"3",price:893e3,href:"https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"1000",delivery:"7",price:329e3,href:"https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"2000",delivery:"7",price:487e3,href:"https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"5000",delivery:"7",price:873e3,href:"https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"}]};  
  // تراکت گلاسه
  const sixthProduct={product:[{title:"تراکت گلاسه 135 گرم",side:"یک رو",size:"A6",circulation:"1000",delivery:"1",price:125e3,href:"https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"1",price:19e4,href:"https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"1000",delivery:"3",price:1e5,href:"https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"3",price:175e3,href:"https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"5000",delivery:"3",price:38e4,href:"https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"1000",delivery:"7",price:95e3,href:"https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"2000",delivery:"7",price:165e3,href:"https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6",circulation:"5000",delivery:"7",price:365e3,href:"https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"1",price:23e4,href:"https://chaparvan.com/product/MjU3ODAz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"1",price:365e3,href:"https://chaparvan.com/product/MjU3ODAz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"3",price:2e5,href:"https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"3",price:34e4,href:"https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"5000",delivery:"3",price:755e3,href:"https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"1000",delivery:"7",price:19e4,href:"https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"2000",delivery:"7",price:33e4,href:"https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5",circulation:"5000",delivery:"7",price:735e3,href:"https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"1",price:43e4,href:"https://chaparvan.com/product/MjU3ODQ1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"1",price:71e4,href:"https://chaparvan.com/product/MjU3ODQ1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"3",price:405e3,href:"https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"3",price:685e3,href:"https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"5000",delivery:"3",price:155e4,href:"https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"1000",delivery:"7",price:385e3,href:"https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"2000",delivery:"7",price:67e4,href:"https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4",circulation:"5000",delivery:"7",price:15e5,href:"https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"1000",delivery:"3",price:15e4,href:"https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"2000",delivery:"3",price:26e4,href:"https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"5000",delivery:"3",price:56e4,href:"https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"1000",delivery:"7",price:145e3,href:"https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"2000",delivery:"7",price:25e4,href:"https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B6",circulation:"5000",delivery:"7",price:54e4,href:"https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"1000",delivery:"3",price:3e5,href:"https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"2000",delivery:"3",price:52e4,href:"https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"5000",delivery:"3",price:11e5,href:"https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"1000",delivery:"7",price:29e4,href:"https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"2000",delivery:"7",price:5e5,href:"https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"B5",circulation:"5000",delivery:"7",price:108e4,href:"https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"1",price:149e3,href:"https://chaparvan.com/product/MjU3ODAw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"1",price:22e4,href:"https://chaparvan.com/product/MjU3ODAw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"3",price:125e3,href:"https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"3",price:208e3,href:"https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"5000",delivery:"3",price:42e4,href:"https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"1000",delivery:"7",price:12e4,href:"https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"2000",delivery:"7",price:2e5,href:"https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6",circulation:"5000",delivery:"7",price:405e3,href:"https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"1",price:285e3,href:"https://chaparvan.com/product/MjU3ODA2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"1",price:43e4,href:"https://chaparvan.com/product/MjU3ODA2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"3",price:26e4,href:"https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"3",price:41e4,href:"https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"5000",delivery:"3",price:835e3,href:"https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"1000",delivery:"7",price:25e4,href:"https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"2000",delivery:"7",price:4e5,href:"https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5",circulation:"5000",delivery:"7",price:815e3,href:"https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"1",price:545e3,href:"https://chaparvan.com/product/MjU3ODQ4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"1",price:835e3,href:"https://chaparvan.com/product/MjU3ODQ4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"3",price:51e4,href:"https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"3",price:82e4,href:"https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"5000",delivery:"3",price:168e4,href:"https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"1000",delivery:"7",price:495e3,href:"https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"2000",delivery:"7",price:81e4,href:"https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4",circulation:"5000",delivery:"7",price:1635e3,href:"https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"1000",delivery:"3",price:205e3,href:"https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"2000",delivery:"3",price:325e3,href:"https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"5000",delivery:"3",price:635e3,href:"https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"1000",delivery:"7",price:2e5,href:"https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"2000",delivery:"7",price:315e3,href:"https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B6",circulation:"5000",delivery:"7",price:62e4,href:"https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"1000",delivery:"3",price:41e4,href:"https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"2000",delivery:"3",price:63e4,href:"https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"5000",delivery:"3",price:126e4,href:"https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"1000",delivery:"7",price:4e5,href:"https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"2000",delivery:"7",price:63e4,href:"https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"B5",circulation:"5000",delivery:"7",price:124e4,href:"https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"}]};
  // سربرگ
 const seventhProduct={product:[{title:"سربرگ تحریر 80 گرم",side:"یک رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"1",price:125e3,href:"https://chaparvan.com/product/MjYxNzU4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"1",price:185e3,href:"https://chaparvan.com/product/MjYxNzU4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"3",price:102e3,href:"https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"3",price:17e4,href:"https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"5000",delivery:"3",price:34e4,href:"https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"7",price:97e3,href:"https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"7",price:16e4,href:"https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A6 سایز دقیق",circulation:"5000",delivery:"7",price:325e3,href:"https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"1",price:23e4,href:"https://chaparvan.com/product/MjYxNzY0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"1",price:35e4,href:"https://chaparvan.com/product/MjYxNzY0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"3",price:205e3,href:"https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"3",price:312e3,href:"https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"5000",delivery:"3",price:67e4,href:"https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"7",price:195e3,href:"https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"7",price:315e3,href:"https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A5 سایز دقیق",circulation:"5000",delivery:"7",price:65e4,href:"https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"1",price:435e3,href:"https://chaparvan.com/product/MjYxNzcw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"1",price:67e4,href:"https://chaparvan.com/product/MjYxNzcw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"3",price:405e3,href:"https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"3",price:655e3,href:"https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"3",price:132e4,href:"https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"7",price:393e3,href:"https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"7",price:635e3,href:"https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"7",price:1305e3,href:"https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"1",price:166e3,href:"https://chaparvan.com/product/MjYxNzYx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"1",price:232e3,href:"https://chaparvan.com/product/MjYxNzYx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"3",price:145e3,href:"https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"3",price:218e3,href:"https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"5000",delivery:"3",price:34e4,href:"https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"1000",delivery:"7",price:14e4,href:"https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"2000",delivery:"7",price:208e3,href:"https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A6 سایز دقیق",circulation:"5000",delivery:"7",price:385e3,href:"https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"1",price:315e3,href:"https://chaparvan.com/product/MjYxNzY3=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"1",price:445e3,href:"https://chaparvan.com/product/MjYxNzY3=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"3",price:29e4,href:"https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"3",price:392e3,href:"https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"5000",delivery:"3",price:718e3,href:"https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"1000",delivery:"7",price:274e3,href:"https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"2000",delivery:"7",price:415e3,href:"https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A5 سایز دقیق",circulation:"5000",delivery:"7",price:77e4,href:"https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"1",price:59e4,href:"https://chaparvan.com/product/MjYxNzcz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"1",price:885e3,href:"https://chaparvan.com/product/MjYxNzcz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"3",price:57e4,href:"https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"3",price:83e4,href:"https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"5000",delivery:"3",price:1575e3,href:"https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"1000",delivery:"7",price:565e3,href:"https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"2000",delivery:"7",price:815e3,href:"https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"A4 سایز دقیق",circulation:"5000",delivery:"7",price:155e4,href:"https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"}]};
  // پاکت
   const eighthProduct = {
    product: [
      {
        title: "تراکت گلاسه 135 گرم",
        side: "یک رو",
        size: "A6",
        circulation: "1000",
        delivery: "1",
        price: 125000,
        href: "https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "2000",
        delivery: "1",
        price: 190000,
        href: "https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      ],
  };
  const ninthProduct = {
    product: [
      {
        title: "تراکت گلاسه 135 گرم",
        side: "یک رو",
        size: "A6",
        circulation: "1000",
        delivery: "1",
        price: 125000,
        href: "https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "2000",
        delivery: "1",
        price: 190000,
        href: "https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      ],
  };
  for (i = 0; i < firstProduct.product.length; i++) {
    let firstProductHtml = document.querySelector("#firstProduct");
    firstProductHtml.innerHTML += `
      <tr class="${firstProduct.product[i].classHtml}">
          <td>${firstProduct.product[i].title}</td>
          <td>${firstProduct.product[i].side}</td>
          <td>${firstProduct.product[i].size}</td>
          <td>${firstProduct.product[i].circulation}</td>
          <td>${firstProduct.product[i].delivery}</td>
          <td class="money">${Number(
            firstProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            firstProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      firstProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }

  for (i = 0; i < secondProduct.product.length; i++) {
    let secondProductHtml = document.querySelector("#secondProduct");
    secondProductHtml.innerHTML += `
      <tr class="${secondProduct.product[i].classHtml}">
          <td>${secondProduct.product[i].title}</td>
          <td>${secondProduct.product[i].side}</td>
          <td>${secondProduct.product[i].size}</td>
          <td>${secondProduct.product[i].circulation}</td>
          <td>${secondProduct.product[i].delivery}</td>
          <td class="money">${Number(
            secondProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            secondProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      secondProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < thirdProduct.product.length; i++) {
    let thirdProductHtml = document.querySelector("#thirdProduct");
    thirdProductHtml.innerHTML += `
      <tr class="${thirdProduct.product[i].classHtml}">
          <td>${thirdProduct.product[i].title}</td>
          <td>${thirdProduct.product[i].side}</td>
          <td>${thirdProduct.product[i].size}</td>
          <td>${thirdProduct.product[i].circulation}</td>
          <td>${thirdProduct.product[i].delivery}</td>
          <td class="money">${Number(
            thirdProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            thirdProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      thirdProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < fourthProduct.product.length; i++) {
    let fourthProductHtml = document.querySelector("#fourthProduct");
    fourthProductHtml.innerHTML += `
      <tr class="${fourthProduct.product[i].classHtml}">
          <td>${fourthProduct.product[i].title}</td>
          <td>${fourthProduct.product[i].side}</td>
          <td>${fourthProduct.product[i].size}</td>
          <td>${fourthProduct.product[i].circulation}</td>
          <td>${fourthProduct.product[i].delivery}</td>
          <td class="money">${Number(
            fourthProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            fourthProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      fourthProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < fifthProduct.product.length; i++) {
    let fifthProductHtml = document.querySelector("#fifthProduct");
    fifthProductHtml.innerHTML += `
      <tr class="${fifthProduct.product[i].classHtml}">
          <td>${fifthProduct.product[i].title}</td>
          <td>${fifthProduct.product[i].side}</td>
          <td>${fifthProduct.product[i].size}</td>
          <td>${fifthProduct.product[i].circulation}</td>
          <td>${fifthProduct.product[i].delivery}</td>
          <td class="money">${Number(
            fifthProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            fifthProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      fifthProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < sixthProduct.product.length; i++) {
    let sixthProductHtml = document.querySelector("#sixthProduct");
    sixthProductHtml.innerHTML += `
      <tr class="${sixthProduct.product[i].classHtml}">
          <td>${sixthProduct.product[i].title}</td>
          <td>${sixthProduct.product[i].side}</td>
          <td>${sixthProduct.product[i].size}</td>
          <td>${sixthProduct.product[i].circulation}</td>
          <td>${sixthProduct.product[i].delivery}</td>
          <td class="money">${Number(
            sixthProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            sixthProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      sixthProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < seventhProduct.product.length; i++) {
    let seventhProductHtml = document.querySelector("#seventhProduct");
    seventhProductHtml.innerHTML += `
      <tr class="${seventhProduct.product[i].classHtml}">
          <td>${seventhProduct.product[i].title}</td>
          <td>${seventhProduct.product[i].side}</td>
          <td>${seventhProduct.product[i].size}</td>
          <td>${seventhProduct.product[i].circulation}</td>
          <td>${seventhProduct.product[i].delivery}</td>
          <td class="money">${Number(
            seventhProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            seventhProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      seventhProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < eighthProduct.product.length; i++) {
    let eighthProductHtml = document.querySelector("#eighthProduct");
    eighthProductHtml.innerHTML += `
      <tr class="${eighthProduct.product[i].classHtml}">
          <td>${eighthProduct.product[i].title}</td>
          <td>${eighthProduct.product[i].side}</td>
          <td>${eighthProduct.product[i].size}</td>
          <td>${eighthProduct.product[i].circulation}</td>
          <td>${eighthProduct.product[i].delivery}</td>
          <td class="money">${Number(
            eighthProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            eighthProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      eighthProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < ninthProduct.product.length; i++) {
    let ninthProductHtml = document.querySelector("#ninthProduct");
    ninthProductHtml.innerHTML += `
      <tr class="${ninthProduct.product[i].classHtml}">
          <td>${ninthProduct.product[i].title}</td>
          <td>${ninthProduct.product[i].side}</td>
          <td>${ninthProduct.product[i].size}</td>
          <td>${ninthProduct.product[i].circulation}</td>
          <td>${ninthProduct.product[i].delivery}</td>
          <td class="money">${Number(
            ninthProduct.product[i].price.toFixed(1)
          ).toLocaleString()}</td>
          <td><a href="${
            ninthProduct.product[i].href
          }"><button class="btn btn-yellow"><svg class="svg-inline--fa fa-shopping-bag fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M.06 160v-.13l96 .06v-32C96.12 57.35 153.57 0 224.15 0s128 57.49 127.92 128.07V160h-64v-32a64 64 0 0 0-128-.08v32h64z"></path><path class="fa-primary" fill="currentColor" d="M.06 159.87l-.16 272a80 80 0 0 0 79.95 80.05l288 .16a80 80 0 0 0 80-80l.16-272zM128 247.94a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm192 .12a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>${
      ninthProduct.product[i].btn
    }</button></a></td>
      </tr>
    
    `;
  }
  for (i = 0; i < document.getElementsByTagName("td").length; i++) {
    if (document.getElementsByTagName("td")[i].innerText.length == 0) {
      document.getElementsByTagName("td")[i].style.visibility = "hidden";
      document.getElementsByTagName("td")[i + 1].classList.add("border-r");
    }
  }

  document.head.innerHTML +=
    '<link rel="stylesheet" href="https://chaparvan.github.io/source/style.css">';

  document
    .getElementById("navbar-new")
    .children[0].setAttribute("onclick", "changeItem(this ,'#firstProduct')");
  document
    .getElementById("navbar-new")
    .children[1].setAttribute("onclick", "changeItem(this ,'#secondProduct')");
  document
    .getElementById("navbar-new")
    .children[2].setAttribute("onclick", "changeItem(this ,'#thirdProduct')");
  document
    .getElementById("navbar-new")
    .children[3].setAttribute("onclick", "changeItem(this ,'#fourthProduct')");
  document
    .getElementById("navbar-new")
    .children[4].setAttribute("onclick", "changeItem(this ,'#fifthProduct')");
  document
    .getElementById("navbar-new")
    .children[5].setAttribute("onclick", "changeItem(this ,'#sixthProduct')");
  document
    .getElementById("navbar-new")
    .children[6].setAttribute("onclick", "changeItem(this ,'#seventhProduct')");
  document
    .getElementById("navbar-new")
    .children[7].setAttribute("onclick", "changeItem(this ,'#eighthProduct')");
  document
    .getElementById("navbar-new")
    .children[8].setAttribute("onclick", "changeItem(this ,'#ninthProduct')");
  
  document.querySelector('html').style.scrollBehavior = 'smooth' //scroll-behavior: smooth;
}
if (document.getElementById("quickAccess")) {
   document.querySelector('html').style.scrollBehavior = 'smooth' //scroll-behavior: smooth;
}
if (document.getElementById("boxQuestionAnswer")) {
  let tgQuestionTab = document.getElementsByClassName("question");
let tgQuestionTabi;
for (tgQuestionTabi = 0; tgQuestionTabi < tgQuestionTab.length; tgQuestionTabi++) {
  tgQuestionTab[tgQuestionTabi].addEventListener("click", function() {
    this.classList.toggle("question-active");
    var tgQuestionContent = this.nextElementSibling;
    if (tgQuestionContent.style.height) {
      tgQuestionContent.style.height = null;
    } else {
      tgQuestionContent.style.height = tgQuestionContent.scrollHeight + "px";
    } 
  });
}
}
/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */ !(function () {
    "use strict";
    var t = {
            d: function (n, e) {
                for (var i in e) t.o(e, i) && !t.o(n, i) && Object.defineProperty(n, i, { enumerable: !0, get: e[i] });
            },
            o: function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            },
            r: function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            },
        },
        n = {};
    t.r(n),
        t.d(n, {
            CREATED: function () {
                return R;
            },
            DESTROYED: function () {
                return X;
            },
            IDLE: function () {
                return F;
            },
            MOUNTED: function () {
                return B;
            },
            MOVING: function () {
                return G;
            },
        });
    function e() {
        return (e =
            Object.assign ||
            function (t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    var i = Object.keys;
    function o(t, n) {
        i(t).some(function (e, i) {
            return n(t[e], e, i);
        });
    }
    function r(t) {
        return i(t).map(function (n) {
            return t[n];
        });
    }
    function s(t) {
        return "object" == typeof t;
    }
    function a(t, n) {
        var i = e({}, t);
        return (
            o(n, function (t, n) {
                s(t) ? (s(i[n]) || (i[n] = {}), (i[n] = a(i[n], t))) : (i[n] = t);
            }),
            i
        );
    }
    function u(t) {
        return Array.isArray(t) ? t : [t];
    }
    function c(t, n, e) {
        return Math.min(Math.max(t, n > e ? e : n), n > e ? n : e);
    }
    function d(t, n) {
        var e = 0;
        return t.replace(/%s/g, function () {
            return u(n)[e++];
        });
    }
    function f(t) {
        var n = typeof t;
        return "number" === n && t > 0 ? parseFloat(t) + "px" : "string" === n ? t : "";
    }
    function l(t) {
        return t < 10 ? "0" + t : t;
    }
    function h(t, n) {
        if ("string" == typeof n) {
            var e = m("div", {});
            E(e, { position: "absolute", width: n }), w(t, e), (n = e.clientWidth), b(e);
        }
        return +n || 0;
    }
    function p(t, n) {
        return t ? t.querySelector(n.split(" ")[0]) : null;
    }
    function g(t, n) {
        return v(t, n)[0];
    }
    function v(t, n) {
        return t
            ? r(t.children).filter(function (t) {
                  return P(t, n.split(" ")[0]) || t.tagName === n;
              })
            : [];
    }
    function m(t, n) {
        var e = document.createElement(t);
        return (
            o(n, function (t, n) {
                return C(e, n, t);
            }),
            e
        );
    }
    function y(t) {
        var n = m("div", {});
        return (n.innerHTML = t), n.firstChild;
    }
    function b(t) {
        u(t).forEach(function (t) {
            if (t) {
                var n = t.parentElement;
                n && n.removeChild(t);
            }
        });
    }
    function w(t, n) {
        t && t.appendChild(n);
    }
    function x(t, n) {
        if (t && n) {
            var e = n.parentElement;
            e && e.insertBefore(t, n);
        }
    }
    function E(t, n) {
        t &&
            o(n, function (n, e) {
                null !== n && (t.style[e] = n);
            });
    }
    function _(t, n, e) {
        t &&
            u(n).forEach(function (n) {
                n && t.classList[e ? "remove" : "add"](n);
            });
    }
    function k(t, n) {
        _(t, n, !1);
    }
    function S(t, n) {
        _(t, n, !0);
    }
    function P(t, n) {
        return !!t && t.classList.contains(n);
    }
    function C(t, n, e) {
        t && t.setAttribute(n, e);
    }
    function z(t, n) {
        return t ? t.getAttribute(n) : "";
    }
    function I(t, n) {
        u(n).forEach(function (n) {
            u(t).forEach(function (t) {
                return t && t.removeAttribute(n);
            });
        });
    }
    function M(t) {
        return t.getBoundingClientRect();
    }
    var T = "slide",
        A = "loop",
        O = "fade",
        L = function (t, n) {
            var e, i;
            return {
                mount: function () {
                    (e = n.Elements.list),
                        t.on(
                            "transitionend",
                            function (t) {
                                t.target === e && i && i();
                            },
                            e
                        );
                },
                start: function (o, r, s, a, u) {
                    var c = t.options,
                        d = n.Controller.edgeIndex,
                        f = c.speed;
                    (i = u), t.is(T) && ((0 === s && r >= d) || (s >= d && 0 === r)) && (f = c.rewindSpeed || f), E(e, { transition: "transform " + f + "ms " + c.easing, transform: "translate(" + a.x + "px," + a.y + "px)" });
                },
            };
        },
        W = function (t, n) {
            function e(e) {
                var i = t.options;
                E(n.Elements.slides[e], { transition: "opacity " + i.speed + "ms " + i.easing });
            }
            return {
                mount: function () {
                    e(t.index);
                },
                start: function (t, i, o, r, s) {
                    var a = n.Elements.track;
                    E(a, { height: f(a.clientHeight) }),
                        e(i),
                        setTimeout(function () {
                            s(), E(a, { height: "" });
                        });
                },
            };
        };
    function H(t) {
        console.error("[SPLIDE] " + t);
    }
    function j(t, n) {
        if (!t) throw new Error(n);
    }
    var q = "splide",
        D = { active: "is-active", visible: "is-visible", loading: "is-loading" },
        N = {
            type: "slide",
            rewind: !1,
            speed: 400,
            rewindSpeed: 0,
            waitForTransition: !0,
            width: 0,
            height: 0,
            fixedWidth: 0,
            fixedHeight: 0,
            heightRatio: 0,
            autoWidth: !1,
            autoHeight: !1,
            perPage: 1,
            perMove: 0,
            clones: 0,
            start: 0,
            focus: !1,
            gap: 0,
            padding: 0,
            arrows: !0,
            arrowPath: "",
            pagination: !0,
            autoplay: !1,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            lazyLoad: !1,
            preloadPages: 1,
            easing: "cubic-bezier(.42,.65,.27,.99)",
            keyboard: "global",
            drag: !0,
            dragAngleThreshold: 30,
            swipeDistanceThreshold: 150,
            flickVelocityThreshold: 0.6,
            flickPower: 600,
            flickMaxPages: 1,
            direction: "ltr",
            cover: !1,
            accessibility: !0,
            slideFocus: !0,
            isNavigation: !1,
            trimSpace: !0,
            updateOnMove: !1,
            throttle: 100,
            destroy: !1,
            breakpoints: !1,
            classes: {
                root: q,
                slider: q + "__slider",
                track: q + "__track",
                list: q + "__list",
                slide: q + "__slide",
                container: q + "__slide__container",
                arrows: q + "__arrows",
                arrow: q + "__arrow",
                prev: q + "__arrow--prev",
                next: q + "__arrow--next",
                pagination: q + "__pagination",
                page: q + "__pagination__page",
                clone: q + "__slide--clone",
                progress: q + "__progress",
                bar: q + "__progress__bar",
                autoplay: q + "__autoplay",
                play: q + "__play",
                pause: q + "__pause",
                spinner: q + "__spinner",
                sr: q + "__sr",
            },
            i18n: { prev: "Previous slide", next: "Next slide", first: "Go to first slide", last: "Go to last slide", slideX: "Go to slide %s", pageX: "Go to page %s", play: "Start autoplay", pause: "Pause autoplay" },
        },
        R = 1,
        B = 2,
        F = 3,
        G = 4,
        X = 5;
    function V(t, n) {
        for (var e = 0; e < n.length; e++) {
            var i = n[e];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    var U = (function () {
            function t(t, e, i) {
                var o;
                void 0 === e && (e = {}),
                    void 0 === i && (i = {}),
                    (this.root = t instanceof Element ? t : document.querySelector(t)),
                    j(this.root, "An invalid element/selector was given."),
                    (this.Components = null),
                    (this.Event = (function () {
                        var t = [];
                        function n(t) {
                            t.elm && t.elm.removeEventListener(t.event, t.handler, t.options);
                        }
                        return {
                            on: function (n, e, i, o) {
                                void 0 === i && (i = null),
                                    void 0 === o && (o = {}),
                                    n.split(" ").forEach(function (n) {
                                        i && i.addEventListener(n, e, o), t.push({ event: n, handler: e, elm: i, options: o });
                                    });
                            },
                            off: function (e, i) {
                                void 0 === i && (i = null),
                                    e.split(" ").forEach(function (e) {
                                        t = t.filter(function (t) {
                                            return !t || t.event !== e || t.elm !== i || (n(t), !1);
                                        });
                                    });
                            },
                            emit: function (n) {
                                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                                t.forEach(function (t) {
                                    t.elm || t.event.split(".")[0] !== n || t.handler.apply(t, i);
                                });
                            },
                            destroy: function () {
                                t.forEach(n), (t = []);
                            },
                        };
                    })()),
                    (this.State =
                        ((o = R),
                        {
                            set: function (t) {
                                o = t;
                            },
                            is: function (t) {
                                return t === o;
                            },
                        })),
                    (this.STATES = n),
                    (this._o = a(N, e)),
                    (this._i = 0),
                    (this._c = i),
                    (this._e = {}),
                    (this._t = null);
            }
            var e,
                i,
                s,
                u = t.prototype;
            return (
                (u.mount = function (t, n) {
                    var e = this;
                    void 0 === t && (t = this._e),
                        void 0 === n && (n = this._t),
                        this.State.set(R),
                        (this._e = t),
                        (this._t = n),
                        (this.Components = (function (t, n, e) {
                            var i = {};
                            return (
                                o(n, function (n, e) {
                                    i[e] = n(t, i, e.toLowerCase());
                                }),
                                e || (e = t.is(O) ? W : L),
                                (i.Transition = e(t, i)),
                                i
                            );
                        })(this, a(this._c, t), n));
                    try {
                        o(this.Components, function (t, n) {
                            var i = t.required;
                            void 0 === i || i ? t.mount && t.mount() : delete e.Components[n];
                        });
                    } catch (t) {
                        return void H(t.message);
                    }
                    var i = this.State;
                    return (
                        i.set(B),
                        o(this.Components, function (t) {
                            t.mounted && t.mounted();
                        }),
                        this.emit("mounted"),
                        i.set(F),
                        this.emit("ready"),
                        E(this.root, { visibility: "visible" }),
                        this.on("move drag", function () {
                            return i.set(G);
                        }).on("moved dragged", function () {
                            return i.set(F);
                        }),
                        this
                    );
                }),
                (u.sync = function (t) {
                    return (this.sibling = t), this;
                }),
                (u.on = function (t, n, e, i) {
                    return void 0 === e && (e = null), void 0 === i && (i = {}), this.Event.on(t, n, e, i), this;
                }),
                (u.off = function (t, n) {
                    return void 0 === n && (n = null), this.Event.off(t, n), this;
                }),
                (u.emit = function (t) {
                    for (var n, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                    return (n = this.Event).emit.apply(n, [t].concat(i)), this;
                }),
                (u.go = function (t, n) {
                    return void 0 === n && (n = this.options.waitForTransition), (this.State.is(F) || (this.State.is(G) && !n)) && this.Components.Controller.go(t, !1), this;
                }),
                (u.is = function (t) {
                    return t === this._o.type;
                }),
                (u.add = function (t, n) {
                    return void 0 === n && (n = -1), this.Components.Elements.add(t, n, this.refresh.bind(this)), this;
                }),
                (u.remove = function (t) {
                    return this.Components.Elements.remove(t), this.refresh(), this;
                }),
                (u.refresh = function () {
                    return this.emit("refresh:before").emit("refresh").emit("resize"), this;
                }),
                (u.destroy = function (t) {
                    var n = this;
                    if ((void 0 === t && (t = !0), !this.State.is(R)))
                        return (
                            r(this.Components)
                                .reverse()
                                .forEach(function (n) {
                                    n.destroy && n.destroy(t);
                                }),
                            this.emit("destroy", t),
                            this.Event.destroy(),
                            this.State.set(X),
                            this
                        );
                    this.on("ready", function () {
                        return n.destroy(t);
                    });
                }),
                (e = t),
                (i = [
                    {
                        key: "index",
                        get: function () {
                            return this._i;
                        },
                        set: function (t) {
                            this._i = parseInt(t);
                        },
                    },
                    {
                        key: "length",
                        get: function () {
                            return this.Components.Elements.length;
                        },
                    },
                    {
                        key: "options",
                        get: function () {
                            return this._o;
                        },
                        set: function (t) {
                            var n = this.State.is(R);
                            n || this.emit("update"), (this._o = a(this._o, t)), n || this.emit("updated", this._o);
                        },
                    },
                    {
                        key: "classes",
                        get: function () {
                            return this._o.classes;
                        },
                    },
                    {
                        key: "i18n",
                        get: function () {
                            return this._o.i18n;
                        },
                    },
                ]) && V(e.prototype, i),
                s && V(e, s),
                t
            );
        })(),
        Y = function (t) {
            var n = z(t.root, "data-splide");
            if (n)
                try {
                    t.options = JSON.parse(n);
                } catch (t) {
                    H(t.message);
                }
            return {
                mount: function () {
                    t.State.is(R) && (t.index = t.options.start);
                },
            };
        },
        J = "rtl",
        K = "ttb",
        Q = "update.slide",
        Z = function (t, n) {
            var e = t.root,
                i = t.classes,
                s = [];
            if (!e.id) {
                window.splide = window.splide || {};
                var a = window.splide.uid || 0;
                (window.splide.uid = ++a), (e.id = "splide" + l(a));
            }
            var u = {
                mount: function () {
                    var n = this;
                    this.init(),
                        t
                            .on("refresh", function () {
                                n.destroy(), n.init();
                            })
                            .on("updated", function () {
                                S(e, c()), k(e, c());
                            });
                },
                destroy: function () {
                    s.forEach(function (t) {
                        t.destroy();
                    }),
                        (s = []),
                        S(e, c());
                },
                init: function () {
                    var t = this;
                    !(function () {
                        (u.slider = g(e, i.slider)), (u.track = p(e, "." + i.track)), (u.list = g(u.track, i.list)), j(u.track && u.list, "Track or list was not found."), (u.slides = v(u.list, i.slide));
                        var t = d(i.arrows);
                        u.arrows = { prev: p(t, "." + i.prev), next: p(t, "." + i.next) };
                        var n = d(i.autoplay);
                        (u.bar = p(d(i.progress), "." + i.bar)), (u.play = p(n, "." + i.play)), (u.pause = p(n, "." + i.pause)), (u.track.id = u.track.id || e.id + "-track"), (u.list.id = u.list.id || e.id + "-list");
                    })(),
                        k(e, c()),
                        this.slides.forEach(function (n, e) {
                            t.register(n, e, -1);
                        });
                },
                register: function (n, e, i) {
                    var o = (function (t, n, e, i) {
                        var o = t.options.updateOnMove,
                            s = "ready.slide updated.slide resized.slide moved.slide" + (o ? " move.slide" : ""),
                            a = {
                                slide: i,
                                index: n,
                                realIndex: e,
                                container: g(i, t.classes.container),
                                isClone: e > -1,
                                mount: function () {
                                    var r = this;
                                    this.isClone || (i.id = t.root.id + "-slide" + l(n + 1)),
                                        t
                                            .on(s, function () {
                                                return r.update();
                                            })
                                            .on(Q, c)
                                            .on(
                                                "click",
                                                function () {
                                                    return t.emit("click", r);
                                                },
                                                i
                                            ),
                                        o &&
                                            t.on("move.slide", function (t) {
                                                t === e && u(!0, !1);
                                            }),
                                        E(i, { display: "" }),
                                        (this.styles = z(i, "style") || "");
                                },
                                destroy: function () {
                                    t.off(s).off(Q).off("click", i), S(i, r(D)), c(), I(this.container, "style");
                                },
                                update: function () {
                                    u(this.isActive(), !1), u(this.isVisible(), !0);
                                },
                                isActive: function () {
                                    return t.index === n;
                                },
                                isVisible: function () {
                                    var n = this.isActive();
                                    if (t.is(O) || n) return n;
                                    var e = Math.ceil,
                                        o = M(t.Components.Elements.track),
                                        r = M(i);
                                    return t.options.direction === K ? o.top <= r.top && r.bottom <= e(o.bottom) : o.left <= r.left && r.right <= e(o.right);
                                },
                                isWithin: function (e, i) {
                                    var o = Math.abs(e - n);
                                    return t.is(T) || this.isClone || (o = Math.min(o, t.length - o)), o < i;
                                },
                            };
                        function u(n, e) {
                            var o = e ? "visible" : "active",
                                r = D[o];
                            n ? (k(i, r), t.emit("" + o, a)) : P(i, r) && (S(i, r), t.emit(e ? "hidden" : "inactive", a));
                        }
                        function c() {
                            C(i, "style", a.styles);
                        }
                        return a;
                    })(t, e, i, n);
                    o.mount(), s.push(o);
                },
                getSlide: function (t) {
                    return s.filter(function (n) {
                        return n.index === t;
                    })[0];
                },
                getSlides: function (t) {
                    return t
                        ? s
                        : s.filter(function (t) {
                              return !t.isClone;
                          });
                },
                getSlidesByPage: function (e) {
                    var i = n.Controller.toIndex(e),
                        o = t.options,
                        r = !1 !== o.focus ? 1 : o.perPage;
                    return s.filter(function (t) {
                        var n = t.index;
                        return i <= n && n < i + r;
                    });
                },
                add: function (t, n, e) {
                    if (("string" == typeof t && (t = y(t)), t instanceof Element)) {
                        var i = this.slides[n];
                        E(t, { display: "none" }),
                            i ? (x(t, i), this.slides.splice(n, 0, t)) : (w(this.list, t), this.slides.push(t)),
                            (function (t, n) {
                                var e = t.querySelectorAll("img"),
                                    i = e.length;
                                if (i) {
                                    var r = 0;
                                    o(e, function (t) {
                                        t.onload = t.onerror = function () {
                                            ++r === i && n();
                                        };
                                    });
                                } else n();
                            })(t, function () {
                                e && e(t);
                            });
                    }
                },
                remove: function (t) {
                    b(this.slides.splice(t, 1)[0]);
                },
                each: function (t) {
                    s.forEach(t);
                },
                get length() {
                    return this.slides.length;
                },
                get total() {
                    return s.length;
                },
            };
            function c() {
                var n = i.root,
                    e = t.options;
                return [n + "--" + e.type, n + "--" + e.direction, e.drag ? n + "--draggable" : "", e.isNavigation ? n + "--nav" : "", D.active];
            }
            function d(t) {
                return g(e, t) || g(u.slider, t);
            }
            return u;
        },
        $ = Math.floor,
        tt = function (t, n) {
            var e,
                i,
                o = {
                    mount: function () {
                        (e = t.options),
                            (i = t.is(A)),
                            t
                                .on("move", function (n) {
                                    t.index = n;
                                })
                                .on("updated refresh", function (n) {
                                    (e = n || e), (t.index = c(t.index, 0, o.edgeIndex));
                                });
                    },
                    go: function (t, e) {
                        var i = this.trim(this.parse(t));
                        n.Track.go(i, this.rewind(i), e);
                    },
                    parse: function (n) {
                        var i = t.index,
                            r = String(n).match(/([+\-<>]+)(\d+)?/),
                            s = r ? r[1] : "",
                            a = r ? parseInt(r[2]) : 0;
                        switch (s) {
                            case "+":
                                i += a || 1;
                                break;
                            case "-":
                                i -= a || 1;
                                break;
                            case ">":
                            case "<":
                                i = (function (t, n, i) {
                                    if (t > -1) return o.toIndex(t);
                                    var r = e.perMove,
                                        s = i ? -1 : 1;
                                    if (r) return n + r * s;
                                    return o.toIndex(o.toPage(n) + s);
                                })(a, i, "<" === s);
                                break;
                            default:
                                i = parseInt(n);
                        }
                        return i;
                    },
                    toIndex: function (n) {
                        if (r()) return n;
                        var i = t.length,
                            o = e.perPage,
                            s = n * o;
                        return i - o <= (s -= (this.pageLength * o - i) * $(s / i)) && s < i && (s = i - o), s;
                    },
                    toPage: function (n) {
                        if (r()) return n;
                        var i = t.length,
                            o = e.perPage;
                        return $(i - o <= n && n < i ? (i - 1) / o : n / o);
                    },
                    trim: function (t) {
                        return i || (t = e.rewind ? this.rewind(t) : c(t, 0, this.edgeIndex)), t;
                    },
                    rewind: function (t) {
                        var n = this.edgeIndex;
                        if (i) {
                            for (; t > n; ) t -= n + 1;
                            for (; t < 0; ) t += n + 1;
                        } else t > n ? (t = 0) : t < 0 && (t = n);
                        return t;
                    },
                    isRtl: function () {
                        return e.direction === J;
                    },
                    get pageLength() {
                        var n = t.length;
                        return r() ? n : Math.ceil(n / e.perPage);
                    },
                    get edgeIndex() {
                        var n = t.length;
                        return n ? (r() || e.isNavigation || i ? n - 1 : n - e.perPage) : 0;
                    },
                    get prevIndex() {
                        var n = t.index - 1;
                        return (i || e.rewind) && (n = this.rewind(n)), n > -1 ? n : -1;
                    },
                    get nextIndex() {
                        var n = t.index + 1;
                        return (i || e.rewind) && (n = this.rewind(n)), (t.index < n && n <= this.edgeIndex) || 0 === n ? n : -1;
                    },
                };
            function r() {
                return !1 !== e.focus;
            }
            return o;
        },
        nt = Math.abs,
        et = function (t, n) {
            var e,
                i,
                o,
                r = t.options.direction === K,
                s = t.is(O),
                a = t.options.direction === J,
                u = !1,
                d = a ? 1 : -1,
                f = {
                    sign: d,
                    mount: function () {
                        (i = n.Elements), (e = n.Layout), (o = i.list);
                    },
                    mounted: function () {
                        var n = this;
                        s ||
                            (this.jump(0),
                            t.on("mounted resize updated", function () {
                                n.jump(t.index);
                            }));
                    },
                    go: function (e, i, o) {
                        var r = h(e),
                            a = t.index;
                        (t.State.is(G) && u) ||
                            ((u = e !== i),
                            o || t.emit("move", i, a, e),
                            Math.abs(r - this.position) >= 1 || s
                                ? n.Transition.start(e, i, a, this.toCoord(r), function () {
                                      l(e, i, a, o);
                                  })
                                : e !== a && "move" === t.options.trimSpace
                                ? n.Controller.go(e + e - a, o)
                                : l(e, i, a, o));
                    },
                    jump: function (t) {
                        this.translate(h(t));
                    },
                    translate: function (t) {
                        E(o, { transform: "translate" + (r ? "Y" : "X") + "(" + t + "px)" });
                    },
                    cancel: function () {
                        t.is(A) ? this.shift() : this.translate(this.position), E(o, { transition: "" });
                    },
                    shift: function () {
                        var n = nt(this.position),
                            e = nt(this.toPosition(0)),
                            i = nt(this.toPosition(t.length)),
                            o = i - e;
                        n < e ? (n += o) : n > i && (n -= o), this.translate(d * n);
                    },
                    trim: function (n) {
                        return !t.options.trimSpace || t.is(A) ? n : c(n, d * (e.totalSize() - e.size - e.gap), 0);
                    },
                    toIndex: function (t) {
                        var n = this,
                            e = 0,
                            o = 1 / 0;
                        return (
                            i.getSlides(!0).forEach(function (i) {
                                var r = i.index,
                                    s = nt(n.toPosition(r) - t);
                                s < o && ((o = s), (e = r));
                            }),
                            e
                        );
                    },
                    toCoord: function (t) {
                        return { x: r ? 0 : t, y: r ? t : 0 };
                    },
                    toPosition: function (t) {
                        var n = e.totalSize(t) - e.slideSize(t) - e.gap;
                        return d * (n + this.offset(t));
                    },
                    offset: function (n) {
                        var i = t.options.focus,
                            o = e.slideSize(n);
                        return "center" === i ? -(e.size - o) / 2 : -(parseInt(i) || 0) * (o + e.gap);
                    },
                    get position() {
                        var t = r ? "top" : a ? "right" : "left";
                        return M(o)[t] - (M(i.track)[t] - e.padding[t] * d);
                    },
                };
            function l(n, e, i, r) {
                E(o, { transition: "" }), (u = !1), s || f.jump(e), r || t.emit("moved", e, i, n);
            }
            function h(t) {
                return f.trim(f.toPosition(t));
            }
            return f;
        },
        it = function (t, n) {
            var e = [],
                i = 0,
                o = n.Elements,
                r = {
                    mount: function () {
                        var n = this;
                        t.is(A) &&
                            (s(),
                            t
                                .on("refresh:before", function () {
                                    n.destroy();
                                })
                                .on("refresh", s)
                                .on("resize", function () {
                                    i !== a() && (n.destroy(), t.refresh());
                                }));
                    },
                    destroy: function () {
                        b(e), (e = []);
                    },
                    get clones() {
                        return e;
                    },
                    get length() {
                        return e.length;
                    },
                };
            function s() {
                r.destroy(),
                    (function (t) {
                        var n = o.length,
                            i = o.register;
                        if (n) {
                            for (var r = o.slides; r.length < t; ) r = r.concat(r);
                            r.slice(0, t).forEach(function (t, r) {
                                var s = u(t);
                                w(o.list, s), e.push(s), i(s, r + n, r % n);
                            }),
                                r.slice(-t).forEach(function (o, s) {
                                    var a = u(o);
                                    x(a, r[0]), e.push(a), i(a, s - t, (n + s - (t % n)) % n);
                                });
                        }
                    })((i = a()));
            }
            function a() {
                var n = t.options;
                if (n.clones) return n.clones;
                var e = n.autoWidth || n.autoHeight ? o.length : n.perPage,
                    i = n.direction === K ? "Height" : "Width",
                    r = h(t.root, n["fixed" + i]);
                return r && (e = Math.ceil(o.track["client" + i] / r)), e * (n.drag ? n.flickMaxPages + 1 : 1);
            }
            function u(n) {
                var e = n.cloneNode(!0);
                return k(e, t.classes.clone), I(e, "id"), e;
            }
            return r;
        };
    function ot(t, n) {
        var e;
        return function () {
            e ||
                (e = setTimeout(function () {
                    t(), (e = null);
                }, n));
        };
    }
    var rt = function (t, n) {
            var e,
                o,
                r = n.Elements,
                s = t.options.direction === K,
                a =
                    ((e = {
                        mount: function () {
                            t
                                .on(
                                    "resize load",
                                    ot(function () {
                                        t.emit("resize");
                                    }, t.options.throttle),
                                    window
                                )
                                .on("resize", c)
                                .on("updated refresh", u),
                                u(),
                                (this.totalSize = s ? this.totalHeight : this.totalWidth),
                                (this.slideSize = s ? this.slideHeight : this.slideWidth);
                        },
                        destroy: function () {
                            I([r.list, r.track], "style");
                        },
                        get size() {
                            return s ? this.height : this.width;
                        },
                    }),
                    (o = s
                        ? (function (t, n) {
                              var e,
                                  i,
                                  o = n.Elements,
                                  r = t.root;
                              return {
                                  margin: "marginBottom",
                                  init: function () {
                                      this.resize();
                                  },
                                  resize: function () {
                                      (i = t.options), (e = o.track), (this.gap = h(r, i.gap));
                                      var n = i.padding,
                                          s = h(r, n.top || n),
                                          a = h(r, n.bottom || n);
                                      (this.padding = { top: s, bottom: a }), E(e, { paddingTop: f(s), paddingBottom: f(a) });
                                  },
                                  totalHeight: function (n) {
                                      void 0 === n && (n = t.length - 1);
                                      var e = o.getSlide(n);
                                      return e ? M(e.slide).bottom - M(o.list).top + this.gap : 0;
                                  },
                                  slideWidth: function () {
                                      return h(r, i.fixedWidth || this.width);
                                  },
                                  slideHeight: function (t) {
                                      if (i.autoHeight) {
                                          var n = o.getSlide(t);
                                          return n ? n.slide.offsetHeight : 0;
                                      }
                                      var e = i.fixedHeight || (this.height + this.gap) / i.perPage - this.gap;
                                      return h(r, e);
                                  },
                                  get width() {
                                      return e.clientWidth;
                                  },
                                  get height() {
                                      var t = i.height || this.width * i.heightRatio;
                                      return j(t, '"height" or "heightRatio" is missing.'), h(r, t) - this.padding.top - this.padding.bottom;
                                  },
                              };
                          })(t, n)
                        : (function (t, n) {
                              var e,
                                  i = n.Elements,
                                  o = t.root,
                                  r = t.options;
                              return {
                                  margin: "margin" + (r.direction === J ? "Left" : "Right"),
                                  height: 0,
                                  init: function () {
                                      this.resize();
                                  },
                                  resize: function () {
                                      (r = t.options), (e = i.track), (this.gap = h(o, r.gap));
                                      var n = r.padding,
                                          s = h(o, n.left || n),
                                          a = h(o, n.right || n);
                                      (this.padding = { left: s, right: a }), E(e, { paddingLeft: f(s), paddingRight: f(a) });
                                  },
                                  totalWidth: function (n) {
                                      void 0 === n && (n = t.length - 1);
                                      var e = i.getSlide(n),
                                          o = 0;
                                      if (e) {
                                          var s = M(e.slide),
                                              a = M(i.list);
                                          (o = r.direction === J ? a.right - s.left : s.right - a.left), (o += this.gap);
                                      }
                                      return o;
                                  },
                                  slideWidth: function (t) {
                                      if (r.autoWidth) {
                                          var n = i.getSlide(t);
                                          return n ? n.slide.offsetWidth : 0;
                                      }
                                      var e = r.fixedWidth || (this.width + this.gap) / r.perPage - this.gap;
                                      return h(o, e);
                                  },
                                  slideHeight: function () {
                                      var t = r.height || r.fixedHeight || this.width * r.heightRatio;
                                      return h(o, t);
                                  },
                                  get width() {
                                      return e.clientWidth - this.padding.left - this.padding.right;
                                  },
                              };
                          })(t, n)),
                    i(o).forEach(function (t) {
                        e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    }),
                    e);
            function u() {
                a.init(),
                    E(t.root, { maxWidth: f(t.options.width) }),
                    r.each(function (t) {
                        t.slide.style[a.margin] = f(a.gap);
                    }),
                    c();
            }
            function c() {
                var n = t.options;
                a.resize(), E(r.track, { height: f(a.height) });
                var e = n.autoHeight ? null : f(a.slideHeight());
                r.each(function (t) {
                    E(t.container, { height: e }), E(t.slide, { width: n.autoWidth ? null : f(a.slideWidth(t.index)), height: t.container ? null : e });
                }),
                    t.emit("resized");
            }
            return a;
        },
        st = Math.abs,
        at = function (t, n) {
            var e,
                i,
                r,
                s,
                a = n.Track,
                u = n.Controller,
                d = t.options.direction === K,
                f = d ? "y" : "x",
                l = {
                    disabled: !1,
                    mount: function () {
                        var e = this,
                            i = n.Elements,
                            r = i.track;
                        t.on("touchstart mousedown", h, r)
                            .on("touchmove mousemove", g, r, { passive: !1 })
                            .on("touchend touchcancel mouseleave mouseup dragend", v, r)
                            .on("mounted refresh", function () {
                                o(i.list.querySelectorAll("img, a"), function (n) {
                                    t.off("dragstart", n).on(
                                        "dragstart",
                                        function (t) {
                                            t.preventDefault();
                                        },
                                        n,
                                        { passive: !1 }
                                    );
                                });
                            })
                            .on("mounted updated", function () {
                                e.disabled = !t.options.drag;
                            });
                    },
                };
            function h(t) {
                l.disabled || s || p(t);
            }
            function p(t) {
                (e = a.toCoord(a.position)), (i = m(t, {})), (r = i);
            }
            function g(n) {
                if (i)
                    if (((r = m(n, i)), s)) {
                        if ((n.cancelable && n.preventDefault(), !t.is(O))) {
                            var o = e[f] + r.offset[f];
                            a.translate(
                                (function (n) {
                                    if (t.is(T)) {
                                        var e = a.sign,
                                            i = e * a.trim(a.toPosition(0)),
                                            o = e * a.trim(a.toPosition(u.edgeIndex));
                                        (n *= e) < i ? (n = i - 7 * Math.log(i - n)) : n > o && (n = o + 7 * Math.log(n - o)), (n *= e);
                                    }
                                    return n;
                                })(o)
                            );
                        }
                    } else
                        (function (n) {
                            var e = n.offset;
                            if (t.State.is(G) && t.options.waitForTransition) return !1;
                            var i = (180 * Math.atan(st(e.y) / st(e.x))) / Math.PI;
                            d && (i = 90 - i);
                            return i < t.options.dragAngleThreshold;
                        })(r) && (t.emit("drag", i), (s = !0), a.cancel(), p(n));
            }
            function v() {
                (i = null),
                    s &&
                        (t.emit("dragged", r),
                        (function (e) {
                            var i = e.velocity[f],
                                o = st(i);
                            if (o > 0) {
                                var r = t.options,
                                    s = t.index,
                                    d = i < 0 ? -1 : 1,
                                    l = s;
                                if (!t.is(O)) {
                                    var h = a.position;
                                    o > r.flickVelocityThreshold && st(e.offset[f]) < r.swipeDistanceThreshold && (h += d * Math.min(o * r.flickPower, n.Layout.size * (r.flickMaxPages || 1))), (l = a.toIndex(h));
                                }
                                l === s && o > 0.1 && (l = s + d * a.sign), t.is(T) && (l = c(l, 0, u.edgeIndex)), u.go(l, r.isNavigation);
                            }
                        })(r),
                        (s = !1));
            }
            function m(t, n) {
                var e = t.timeStamp,
                    i = t.touches,
                    o = i ? i[0] : t,
                    r = o.clientX,
                    s = o.clientY,
                    a = n.to || {},
                    u = a.x,
                    c = void 0 === u ? r : u,
                    d = a.y,
                    f = { x: r - c, y: s - (void 0 === d ? s : d) },
                    l = e - (n.time || 0);
                return { to: { x: r, y: s }, offset: f, time: e, velocity: { x: f.x / l, y: f.y / l } };
            }
            return l;
        },
        ut = function (t, n) {
            var e = !1;
            function i(t) {
                e && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation());
            }
            return {
                required: t.options.drag,
                mount: function () {
                    t.on("click", i, n.Elements.track, { capture: !0 })
                        .on("drag", function () {
                            e = !0;
                        })
                        .on("dragged", function () {
                            setTimeout(function () {
                                e = !1;
                            });
                        });
                },
            };
        },
        ct = 1,
        dt = 2,
        ft = 3,
        lt = function (t, n, e) {
            var i,
                o,
                r,
                s = t.classes,
                a = t.root,
                u = n.Elements;
            function c() {
                var r = n.Controller,
                    s = r.prevIndex,
                    a = r.nextIndex,
                    u = t.length > t.options.perPage || t.is(A);
                (i.disabled = s < 0 || !u), (o.disabled = a < 0 || !u), t.emit(e + ":updated", i, o, s, a);
            }
            function d(n) {
                return y(
                    '<button class="' +
                        s.arrow +
                        " " +
                        (n ? s.prev : s.next) +
                        '" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="' +
                        (t.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                        '" />'
                );
            }
            return {
                required: t.options.arrows,
                mount: function () {
                    (i = u.arrows.prev),
                        (o = u.arrows.next),
                        (i && o) ||
                            !t.options.arrows ||
                            ((i = d(!0)),
                            (o = d(!1)),
                            (r = !0),
                            (function () {
                                var n = m("div", { class: s.arrows });
                                w(n, i), w(n, o);
                                var e = u.slider,
                                    r = "slider" === t.options.arrows && e ? e : a;
                                x(n, r.firstElementChild);
                            })()),
                        i &&
                            o &&
                            t
                                .on(
                                    "click",
                                    function () {
                                        t.go("<");
                                    },
                                    i
                                )
                                .on(
                                    "click",
                                    function () {
                                        t.go(">");
                                    },
                                    o
                                )
                                .on("mounted move updated refresh", c),
                        (this.arrows = { prev: i, next: o });
                },
                mounted: function () {
                    t.emit(e + ":mounted", i, o);
                },
                destroy: function () {
                    I([i, o], "disabled"), r && b(i.parentElement);
                },
            };
        },
        ht = "move.page",
        pt = "updated.page refresh.page",
        gt = function (t, n, e) {
            var i = {},
                o = n.Elements,
                r = {
                    mount: function () {
                        var n = t.options.pagination;
                        if (n) {
                            i = (function () {
                                var n = t.options,
                                    e = t.classes,
                                    i = m("ul", { class: e.pagination }),
                                    r = o
                                        .getSlides(!1)
                                        .filter(function (t) {
                                            return !1 !== n.focus || t.index % n.perPage == 0;
                                        })
                                        .map(function (n, r) {
                                            var s = m("li", {}),
                                                a = m("button", { class: e.page, type: "button" });
                                            return (
                                                w(s, a),
                                                w(i, s),
                                                t.on(
                                                    "click",
                                                    function () {
                                                        t.go(">" + r);
                                                    },
                                                    a
                                                ),
                                                { li: s, button: a, page: r, Slides: o.getSlidesByPage(r) }
                                            );
                                        });
                                return { list: i, items: r };
                            })();
                            var e = o.slider;
                            w("slider" === n && e ? e : t.root, i.list), t.on(ht, s);
                        }
                        t.off(pt).on(pt, function () {
                            r.destroy(), t.options.pagination && (r.mount(), r.mounted());
                        });
                    },
                    mounted: function () {
                        if (t.options.pagination) {
                            var n = t.index;
                            t.emit(e + ":mounted", i, this.getItem(n)), s(n, -1);
                        }
                    },
                    destroy: function () {
                        b(i.list),
                            i.items &&
                                i.items.forEach(function (n) {
                                    t.off("click", n.button);
                                }),
                            t.off(ht),
                            (i = {});
                    },
                    getItem: function (t) {
                        return i.items[n.Controller.toPage(t)];
                    },
                    get data() {
                        return i;
                    },
                };
            function s(n, o) {
                var s = r.getItem(o),
                    a = r.getItem(n),
                    u = D.active;
                s && S(s.button, u), a && k(a.button, u), t.emit(e + ":updated", i, s, a);
            }
            return r;
        },
        vt = "data-splide-lazy",
        mt = "data-splide-lazy-srcset",
        yt = "aria-current",
        bt = "aria-controls",
        wt = "aria-label",
        xt = "aria-hidden",
        Et = "tabindex",
        _t = { ltr: { ArrowLeft: "<", ArrowRight: ">", Left: "<", Right: ">" }, rtl: { ArrowLeft: ">", ArrowRight: "<", Left: ">", Right: "<" }, ttb: { ArrowUp: "<", ArrowDown: ">", Up: "<", Down: ">" } },
        kt = function (t, n) {
            var e = t.i18n,
                i = n.Elements,
                o = [xt, Et, bt, wt, yt, "role"];
            function r(n, e) {
                C(n, xt, !e), t.options.slideFocus && C(n, Et, e ? 0 : -1);
            }
            function s(t, n) {
                var e = i.track.id;
                C(t, bt, e), C(n, bt, e);
            }
            function a(n, i, o, r) {
                var s = t.index,
                    a = o > -1 && s < o ? e.last : e.prev,
                    u = r > -1 && s > r ? e.first : e.next;
                C(n, wt, a), C(i, wt, u);
            }
            function u(n, i) {
                i && C(i.button, yt, !0),
                    n.items.forEach(function (n) {
                        var i = t.options,
                            o = d(!1 === i.focus && i.perPage > 1 ? e.pageX : e.slideX, n.page + 1),
                            r = n.button,
                            s = n.Slides.map(function (t) {
                                return t.slide.id;
                            });
                        C(r, bt, s.join(" ")), C(r, wt, o);
                    });
            }
            function c(t, n, e) {
                n && I(n.button, yt), e && C(e.button, yt, !0);
            }
            function f(t) {
                i.each(function (n) {
                    var i = n.slide,
                        o = n.realIndex;
                    h(i) || C(i, "role", "button");
                    var r = o > -1 ? o : n.index,
                        s = d(e.slideX, r + 1),
                        a = t.Components.Elements.getSlide(r);
                    C(i, wt, s), a && C(i, bt, a.slide.id);
                });
            }
            function l(t, n) {
                var e = t.slide;
                n ? C(e, yt, !0) : I(e, yt);
            }
            function h(t) {
                return "BUTTON" === t.tagName;
            }
            return {
                required: t.options.accessibility,
                mount: function () {
                    t
                        .on("visible", function (t) {
                            r(t.slide, !0);
                        })
                        .on("hidden", function (t) {
                            r(t.slide, !1);
                        })
                        .on("arrows:mounted", s)
                        .on("arrows:updated", a)
                        .on("pagination:mounted", u)
                        .on("pagination:updated", c)
                        .on("refresh", function () {
                            I(n.Clones.clones, o);
                        }),
                        t.options.isNavigation &&
                            t
                                .on("navigation:mounted navigation:updated", f)
                                .on("active", function (t) {
                                    l(t, !0);
                                })
                                .on("inactive", function (t) {
                                    l(t, !1);
                                }),
                        ["play", "pause"].forEach(function (t) {
                            var n = i[t];
                            n && (h(n) || C(n, "role", "button"), C(n, bt, i.track.id), C(n, wt, e[t]));
                        });
                },
                destroy: function () {
                    var t = n.Arrows,
                        e = t ? t.arrows : {};
                    I(i.slides.concat([e.prev, e.next, i.play, i.pause]), o);
                },
            };
        },
        St = "move.sync",
        Pt = "mouseup touchend",
        Ct = [" ", "Enter", "Spacebar"],
        zt = {
            Options: Y,
            Breakpoints: function (t) {
                var n,
                    e,
                    i = t.options.breakpoints,
                    o = ot(s, 50),
                    r = [];
                function s() {
                    var o,
                        s = (o = r.filter(function (t) {
                            return t.mql.matches;
                        })[0])
                            ? o.point
                            : -1;
                    if (s !== e) {
                        e = s;
                        var a = t.State,
                            u = i[s] || n,
                            c = u.destroy;
                        c ? ((t.options = n), t.destroy("completely" === c)) : (a.is(X) && t.mount(), (t.options = u));
                    }
                }
                return {
                    required: i && matchMedia,
                    mount: function () {
                        (r = Object.keys(i)
                            .sort(function (t, n) {
                                return +t - +n;
                            })
                            .map(function (t) {
                                return { point: t, mql: matchMedia("(max-width:" + t + "px)") };
                            })),
                            this.destroy(!0),
                            addEventListener("resize", o),
                            (n = t.options),
                            s();
                    },
                    destroy: function (t) {
                        t && removeEventListener("resize", o);
                    },
                };
            },
            Controller: tt,
            Elements: Z,
            Track: et,
            Clones: it,
            Layout: rt,
            Drag: at,
            Click: ut,
            Autoplay: function (t, n, e) {
                var i,
                    o = [],
                    r = n.Elements,
                    s = {
                        required: t.options.autoplay,
                        mount: function () {
                            var n = t.options;
                            r.slides.length > n.perPage &&
                                ((i = (function (t, n, e) {
                                    var i,
                                        o,
                                        r,
                                        s = window.requestAnimationFrame,
                                        a = !0,
                                        u = function u(c) {
                                            a || (i || ((i = c), r && r < 1 && (i -= r * n)), (r = (o = c - i) / n), o >= n && ((i = 0), (r = 1), t()), e && e(r), s(u));
                                        };
                                    return {
                                        pause: function () {
                                            (a = !0), (i = 0);
                                        },
                                        play: function (t) {
                                            (i = 0), t && (r = 0), a && ((a = !1), s(u));
                                        },
                                    };
                                })(
                                    function () {
                                        t.go(">");
                                    },
                                    n.interval,
                                    function (n) {
                                        t.emit(e + ":playing", n), r.bar && E(r.bar, { width: 100 * n + "%" });
                                    }
                                )),
                                (function () {
                                    var n = t.options,
                                        e = t.sibling,
                                        i = [t.root, e ? e.root : null];
                                    n.pauseOnHover && (a(i, "mouseleave", ct, !0), a(i, "mouseenter", ct, !1));
                                    n.pauseOnFocus && (a(i, "focusout", dt, !0), a(i, "focusin", dt, !1));
                                    r.play &&
                                        t.on(
                                            "click",
                                            function () {
                                                s.play(dt), s.play(ft);
                                            },
                                            r.play
                                        );
                                    r.pause && a([r.pause], "click", ft, !1);
                                    t.on("move refresh", function () {
                                        s.play();
                                    }).on("destroy", function () {
                                        s.pause();
                                    });
                                })(),
                                this.play());
                        },
                        play: function (n) {
                            void 0 === n && (n = 0),
                                (o = o.filter(function (t) {
                                    return t !== n;
                                })).length || (t.emit(e + ":play"), i.play(t.options.resetProgress));
                        },
                        pause: function (n) {
                            void 0 === n && (n = 0), i.pause(), -1 === o.indexOf(n) && o.push(n), 1 === o.length && t.emit(e + ":pause");
                        },
                    };
                function a(n, e, i, o) {
                    n.forEach(function (n) {
                        t.on(
                            e,
                            function () {
                                s[o ? "play" : "pause"](i);
                            },
                            n
                        );
                    });
                }
                return s;
            },
            Cover: function (t, n) {
                function e(t) {
                    n.Elements.each(function (n) {
                        var e = g(n.slide, "IMG") || g(n.container, "IMG");
                        e && e.src && i(e, t);
                    });
                }
                function i(t, n) {
                    E(t.parentElement, { background: n ? "" : 'center/cover no-repeat url("' + t.src + '")' }), E(t, { display: n ? "" : "none" });
                }
                return {
                    required: t.options.cover,
                    mount: function () {
                        t.on("lazyload:loaded", function (t) {
                            i(t, !1);
                        }),
                            t.on("mounted updated refresh", function () {
                                return e(!1);
                            });
                    },
                    destroy: function () {
                        e(!0);
                    },
                };
            },
            Arrows: lt,
            Pagination: gt,
            LazyLoad: function (t, n, e) {
                var i,
                    r,
                    s = t.options,
                    a = "sequential" === s.lazyLoad;
                function u() {
                    (r = []), (i = 0);
                }
                function c(n) {
                    (n = isNaN(n) ? t.index : n),
                        (r = r.filter(function (t) {
                            return !t.Slide.isWithin(n, s.perPage * (s.preloadPages + 1)) || (d(t.img, t.Slide), !1);
                        }))[0] || t.off("moved." + e);
                }
                function d(n, e) {
                    k(e.slide, D.loading);
                    var i = m("span", { class: t.classes.spinner });
                    w(n.parentElement, i),
                        (n.onload = function () {
                            l(n, i, e, !1);
                        }),
                        (n.onerror = function () {
                            l(n, i, e, !0);
                        }),
                        C(n, "srcset", z(n, mt) || ""),
                        C(n, "src", z(n, vt) || "");
                }
                function f() {
                    if (i < r.length) {
                        var t = r[i];
                        d(t.img, t.Slide);
                    }
                    i++;
                }
                function l(n, i, o, r) {
                    S(o.slide, D.loading), r || (b(i), E(n, { display: "" }), t.emit(e + ":loaded", n).emit("resize")), a && f();
                }
                return {
                    required: s.lazyLoad,
                    mount: function () {
                        t.on("mounted refresh", function () {
                            u(),
                                n.Elements.each(function (t) {
                                    o(t.slide.querySelectorAll("[data-splide-lazy], [" + mt + "]"), function (n) {
                                        n.src || n.srcset || (r.push({ img: n, Slide: t }), E(n, { display: "none" }));
                                    });
                                }),
                                a && f();
                        }),
                            a || t.on("mounted refresh moved." + e, c);
                    },
                    destroy: u,
                };
            },
            Keyboard: function (t) {
                var n;
                return {
                    mount: function () {
                        t.on("mounted updated", function () {
                            var e = t.options,
                                i = t.root,
                                o = _t[e.direction],
                                r = e.keyboard;
                            n && (t.off("keydown", n), I(i, Et)),
                                r &&
                                    ("focused" === r ? ((n = i), C(i, Et, 0)) : (n = document),
                                    t.on(
                                        "keydown",
                                        function (n) {
                                            o[n.key] && t.go(o[n.key]);
                                        },
                                        n
                                    ));
                        });
                    },
                };
            },
            Sync: function (t) {
                var n = t.sibling,
                    e = n && n.options.isNavigation;
                function i() {
                    t.on(St, function (t, e, i) {
                        n.off(St).go(n.is(A) ? i : t, !1), o();
                    });
                }
                function o() {
                    n.on(St, function (n, e, o) {
                        t.off(St).go(t.is(A) ? o : n, !1), i();
                    });
                }
                function r() {
                    n.Components.Elements.each(function (n) {
                        var e = n.slide,
                            i = n.index;
                        t.off(Pt, e).on(
                            Pt,
                            function (t) {
                                (t.button && 0 !== t.button) || s(i);
                            },
                            e
                        ),
                            t.off("keyup", e).on(
                                "keyup",
                                function (t) {
                                    Ct.indexOf(t.key) > -1 && (t.preventDefault(), s(i));
                                },
                                e,
                                { passive: !1 }
                            );
                    });
                }
                function s(e) {
                    t.State.is(F) && n.go(e);
                }
                return {
                    required: !!n,
                    mount: function () {
                        i(),
                            o(),
                            e &&
                                (r(),
                                t.on("refresh", function () {
                                    setTimeout(function () {
                                        r(), n.emit("navigation:updated", t);
                                    });
                                }));
                    },
                    mounted: function () {
                        e && n.emit("navigation:mounted", t);
                    },
                };
            },
            A11y: kt,
        };
    var It = (function (t) {
        var n, e;
        function i(n, e) {
            return t.call(this, n, e, zt) || this;
        }
        return (e = t), ((n = i).prototype = Object.create(e.prototype)), (n.prototype.constructor = n), (n.__proto__ = e), i;
    })(U);
    window.Splide = It;
})();
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,a=[],s=!0,r=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return a}(t,e)||g(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){if(t){if("string"==typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=g(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var b=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},x=function t(){for(var e=!1,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var r=o.slice(1),l=r.length,c=0;c<l;c++){var h=r[c];for(var d in h)if(h.hasOwnProperty(d)){var u=h[d];if(e&&(Array.isArray(u)||b(u))){var f=Array.isArray(u)?[]:{};s[d]=t(!0,s.hasOwnProperty(d)?s[d]:f,u)}else s[d]=u}}return s},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},k="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),S=function(){var t=window.getSelection?window.getSelection():document.selection;t&&t.rangeCount&&t.getRangeAt(0).getClientRects().length&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())},C=function t(e){o(this,t),this.id=-1,this.id=e.pointerId||e.identifier||-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,this.nativePointer=e};function $(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function E(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}var P=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.start,s=void 0===a?function(){return!0}:a,r=n.move,l=void 0===r?function(){}:r,c=n.end,h=void 0===c?function(){}:c;o(this,t),this.element=e,this.startPointers=[],this.currentPointers=[],this.startCallback=s,this.moveCallback=l,this.endCallback=h,this.onStart=function(t){if(!t.button||0===t.button){var e=new C(t);if(!1===i.startCallback(e,t))return!1;t.preventDefault(),S(),i.currentPointers.push(e),i.startPointers.push(e),(t.target&&"setPointerCapture"in t.target?t.target:i.element).setPointerCapture(t.pointerId),i.element.addEventListener("pointermove",i.onMove),i.element.addEventListener("pointerup",i.onEnd),i.element.addEventListener("pointercancel",i.onEnd)}},this.onMove=function(t){for(var e=i.currentPointers.slice(),n=[],o=function(){var t=s[a],e=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(e<0)return"continue";n.push(t),i.currentPointers[e]=t},a=0,s=[new C(t)];a<s.length;a++)o();n.length&&i.moveCallback(e,i.currentPointers,t)},this.onEnd=function(t){var e=new C(t),n=i.currentPointers.findIndex((function(t){return t.id===e.id}));if(-1===n)return!1;i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i.endCallback(e,t),i.currentPointers.length||(i.element.removeEventListener("pointermove",i.onMove),i.element.removeEventListener("pointerup",i.onEnd),i.element.removeEventListener("pointercancel",i.onEnd))},this.element.addEventListener("pointerdown",this.onStart)}return s(t,[{key:"stop",value:function(){this.element.removeEventListener("pointerdown",this.onStart),this.element.removeEventListener("pointermove",this.onMove),this.element.removeEventListener("pointerup",this.onEnd),this.element.removeEventListener("pointercancel",this.onEnd)}}]),t}(),T=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode))},L=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},A=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=x(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var a=n[i],s=0,r=Object.entries(this.options[a]||{});s<r.length;s++){var l=r[s];this[a].apply(this,p(l))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=L(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(a))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var a=!1;if(!(a=o?e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):e.option("l10n.".concat(n))))return n;for(var s=0;s<i.length;s++)a=a.split(i[s][0]).join(i[s][1]);return a}))}},{key:"on",value:function(t,e){var i=this;if(b(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.on.apply(this,p(a))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(b(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.once.apply(this,p(a))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];e.call.apply(e,[i,i].concat(a))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!b(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,a=0,s=n.length;a<s;a++){var r=n[a];if(r&&(r===e||r._===e)){o=a;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.off.apply(this,p(a))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,a=y(p(this.events[t]||[]).slice());try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){a.e(t)}finally{a.f()}var r,l=y(p(this.events["*"]||[]).slice());try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){l.e(t)}finally{l.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=v(n[i],2),a=o[0],s=o[1];!1===this.options[a]||this.plugins[a]||(this.options[a]=x({},s.defaults||{},this.options[a]),e[a]=new s(this))}for(var r=0,l=Object.entries(e);r<l.length;r++){var c=v(l[r],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),O={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},z=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,x(!0,{},O,a))).state="init",i.$container=t;for(var s=0,r=["onLoad","onWheel","onClick"];s<r.length;s++){var l=r[s];i[l]=i[l].bind(d(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,p(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origHeight:0,origWidth:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented)if(this.option("textSelection")&&window.getSelection().toString().length)t.stopPropagation();else{var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:a,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new P(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(!(t.velocity.scale<0)){if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.target.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),a=0;a<n.length;a++){var s=n[a];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var r=o.getBoundingClientRect();if(e>=r.left&&i>=r.top&&e<=r.right&&i<=r.bottom)return s}}return!1}(n.target,n.clientX,n.clientY))return!1;if(T(n.target))return!1}return!1!==t.trigger("touchStart",n)&&(t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0)}},move:function(i,n,o){if("pointerdown"===t.state)if(0!=t.trigger("touchMove",o)){if(!(n.length<2&&1==t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){o.preventDefault(),o.stopPropagation();var a=E(i[0],i[1]),s=E(n[0],n[1]),r=s.clientX-a.clientX,l=s.clientY-a.clientY,c=$(i[0],i[1]),h=$(n[0],n[1]),d=c?h/c:1;t.dragOffset.x+=r,t.dragOffset.y+=l,t.dragOffset.scale*=d,t.dragOffset.time=Date.now()-t.dragPosition.time;var u=1===t.dragStart.scale&&t.option("lockAxis");if(u&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return;if("xy"===u){var f=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=f>45&&f<135?"y":"x"}else t.lockAxis=u}if(t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=E(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var a=t.option("minScale");if(t.transform.scale<a)t.zoomTo(a,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var r=t.dragPosition.midPoint||n,l=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:r.clientX-l.left,y:r.clientY-l.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new k((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,a=this.$viewport,s=this.$content instanceof HTMLImageElement,r=this.option("zoom"),l=this.option("resizeParent",r),c=(e=this.$content,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),h=function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(this.$content);Object.assign(o.style,{width:"",height:"",maxWidth:"",maxHeight:""}),l&&Object.assign(a.style,{width:"",height:""});var d=this.option("ratio"),u=c=w(c*d),f=h=w(h*d),v=o.getBoundingClientRect(),p=a.getBoundingClientRect(),g=a==n?p:n.getBoundingClientRect(),m=Math.max(a.offsetWidth,w(p.width)),y=Math.max(a.offsetHeight,w(p.height)),b=window.getComputedStyle(a);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,r){if(Math.abs(c-v.width)>.1||Math.abs(h-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(c,h,Math.min(c,v.width),Math.min(h,v.height));u=w(x.width),f=w(x.height)}Object.assign(o.style,{width:"".concat(u,"px"),height:"".concat(f,"px"),transform:""})}if(l&&(Object.assign(a.style,{width:"".concat(u,"px"),height:"".concat(f,"px")}),this.viewport=i(i({},this.viewport),{},{width:u,height:f})),s&&r&&"function"!=typeof this.options.maxScale){var k=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:k}}this.content=i(i({},this.content),{},{origWidth:c,origHeight:h,fitWidth:u,fitHeight:f,width:u,height:f,scale:1,isZoomable:r}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,a=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=w(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===a&&(a=this.content.height*s*.5);var r=this.getZoomDelta(t,n,a),l=r.deltaX,c=r.deltaY;n=this.content.x-l,a=this.content.y-c,this.panTo({x:n,y:a,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,a=e>0&&n?e/n:0,s=i>0&&o?i/o:0,r=this.content.fitWidth*t,l=this.content.fitHeight*t,c=(r-n)*a,h=(l-o)*s;return{deltaX:c,deltaY:h}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,a=void 0===o?this.content.y:o,s=t.scale,r=t.friction,l=void 0===r?this.option("friction"):r,c=t.ignoreBounds,h=void 0!==c&&c;if(s=s||this.content.scale||1,!h){var d=this.getBounds(s),u=d.boundX,f=d.boundY;u&&(n=Math.max(Math.min(n,u.to),u.from)),f&&(a=Math.max(Math.min(a,f.to),f.from))}this.friction=l,this.transform=i(i({},this.transform),{},{x:n,y:a,scale:s}),l?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(a-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return this.endAnimation(),void this.trigger("endAnimation");this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth,o=this.content.fitHeight,a=n*t,s=o*t,r=this.viewport.width,l=this.viewport.height;if(n<=r){var c=.5*(r-a),h=.5*(a-n);e.from=w(c-h),e.to=w(c+h)}else e.from=w(r-a);if(o<=l){var d=.5*(l-s),u=.5*(s-o);i.from=w(d-u),i.to=w(d+u)}else i.from=w(l-a);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),a=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=a.boundX,r=a.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),r&&(i=this.content.y<r.from,n=this.content.y>r.to),t||e){var l=((t?s.from:s.to)-this.content.x)*o,c=this.content.x+(this.velocity.x+l)/this.friction;c>=s.from&&c<=s.to&&(l+=this.velocity.x),this.velocity.x=l,this.recalculateTransform()}if(i||n){var h=((i?r.from:r.to)-this.content.y)*o,d=this.content.y+(h+this.velocity.y)/this.friction;d>=r.from&&d<=r.to&&(h+=this.velocity.y),this.velocity.y=h,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),a=o.boundX,s=o.boundY;if(a&&(t=this.dragPosition.x<a.from,e=this.dragPosition.x>a.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var r=t?a.from:a.to,l=r-this.dragPosition.x;this.dragPosition.x=r-.3*l}if((i||n)&&(!i||!n)){var c=i?s.from:s.to,h=c-this.dragPosition.y;this.dragPosition.y=c-.3*h}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,a,s;(t?(e=w(this.transform.x),n=w(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=w(this.content.x),n=w(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=w(this.content.x),n=w(this.content.y),t&&this.option("zoom"))?(a=w(this.content.fitWidth*o),s=w(this.content.fitHeight*o),this.content.width=a,this.content.height=s,this.transform=i(i({},this.transform),{},{width:a,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(a,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor()}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(A);z.version="4.0.4",z.Plugins={};var _=function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<e))return i=n,t.apply(void 0,arguments)}},M=function(){function t(e){o(this,t),this.$container=null,this.$prev=null,this.$next=null,this.carousel=e,this.onRefresh=this.onRefresh.bind(this)}return s(t,[{key:"option",value:function(t){return this.carousel.option("Navigation.".concat(t))}},{key:"createButton",value:function(t){var e,i=this,n=document.createElement("button");n.setAttribute("title",this.carousel.localize("{{".concat(t.toUpperCase(),"}}")));var o=this.option("classNames.button")+" "+this.option("classNames.".concat(t));return(e=n.classList).add.apply(e,p(o.split(" "))),n.setAttribute("tabindex","0"),n.innerHTML=this.carousel.localize(this.option("".concat(t,"Tpl"))),n.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),i.carousel["slide".concat("next"===t?"Next":"Prev")]()})),n}},{key:"build",value:function(){this.$container||(this.$container=document.createElement("div"),this.$container.classList.add(this.option("classNames.main")),this.carousel.$container.appendChild(this.$container)),this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}},{key:"onRefresh",value:function(){var t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}},{key:"cleanup",value:function(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.carousel.on("refresh change",this.onRefresh)}},{key:"detach",value:function(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}]),t}();M.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};var I=function(){function t(e){o(this,t),this.carousel=e,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}return s(t,[{key:"buildList",value:function(){var t=this;if(!(this.carousel.pages.length<2)){var e=document.createElement("ol");return e.classList.add("carousel__dots"),e.addEventListener("click",(function(e){if("page"in e.target.dataset){e.preventDefault(),e.stopPropagation();var i=parseInt(e.target.dataset.page,10),n=t.carousel;i!==n.page&&(n.pages.length<3&&n.option("infinite")?n[0==i?"slidePrev":"slideNext"]():n.slideTo(i))}})),this.$list=e,this.carousel.$container.appendChild(e),this.carousel.$container.classList.add("has-dots"),e}}},{key:"removeList",value:function(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}},{key:"rebuildDots",value:function(){var t=this,e=this.$list,i=!!e,n=this.carousel.pages.length;if(n<2)i&&this.removeList();else{i||(e=this.buildList());var o=this.$list.children.length;if(o>n)for(var a=n;a<o;a++)this.$list.removeChild(this.$list.lastChild);else{for(var s=function(e){var i=document.createElement("li");i.classList.add("carousel__dot"),i.dataset.page=e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("title",t.carousel.localize("{{GOTO}}",[["%d",e+1]])),i.addEventListener("keydown",(function(t){var e,n=t.code;"Enter"===n||"NumpadEnter"===n?e=i:"ArrowRight"===n?e=i.nextSibling:"ArrowLeft"===n&&(e=i.previousSibling),e&&e.click()})),t.$list.appendChild(i)},r=o;r<n;r++)s(r);this.setActiveDot()}}}},{key:"setActiveDot",value:function(){if(this.$list){this.$list.childNodes.forEach((function(t){t.classList.remove("is-selected")}));var t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}}},{key:"onChange",value:function(){this.setActiveDot()}},{key:"onRefresh",value:function(){this.rebuildDots()}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.removeList(),this.carousel.off(this.events),this.carousel=null}}]),t}(),F=function(){function t(e){o(this,t),this.carousel=e,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}return s(t,[{key:"addAsTargetFor",value:function(t){this.target=this.carousel,this.nav=t,this.attachEvents()}},{key:"addAsNavFor",value:function(t){this.target=t,this.nav=this.carousel,this.attachEvents()}},{key:"attachEvents",value:function(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}},{key:"onNavReady",value:function(){this.onTargetChange(!0)}},{key:"onNavClick",value:function(t,e,i){var n=i.target.closest(".carousel__slide");if(n){i.stopPropagation();var o=parseInt(n.dataset.index,10),a=this.target.findPageForSlide(o);this.target.page!==a&&this.target.slideTo(a,{friction:this.friction}),this.markSelectedSlide(o)}}},{key:"onNavCreateSlide",value:function(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}},{key:"onTargetChange",value:function(){var t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}},{key:"markSelectedSlide",value:function(t){this.selectedIndex=t,p(this.nav.slides).filter((function(t){return t.$el&&t.$el.classList.remove("is-nav-selected")}));var e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}},{key:"attach",value:function(t){var e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}},{key:"detach",value:function(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}]),t}();F.defaults={friction:.92};var R={Navigation:M,Dots:I,Sync:F},N={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}},D=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),a=x(!0,{},N,a),(i=e.call(this,a)).state="init",i.$container=t,!(i.$container instanceof HTMLElement))throw new Error("No root element provided");return i.slideNext=_(i.slideNext.bind(d(i)),250),i.slidePrev=_(i.slidePrev.bind(d(i)),250),i.init(),i}return s(n,[{key:"init",value:function(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(n.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform="translate3d(".concat(-1*this.pages[this.page].left,"px, 0px, 0) scale(1)")),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}},{key:"initLayout",value:function(){var t,e,i=this.option("prefix"),n=this.option("classNames");(this.$viewport=this.option("viewport")||this.$container.querySelector(".".concat(i).concat(n.viewport)),this.$viewport)||(this.$viewport=document.createElement("div"),this.$viewport.classList.add(i+n.viewport),(t=this.$viewport).append.apply(t,p(this.$container.childNodes)),this.$container.appendChild(this.$viewport));(this.$track=this.option("track")||this.$container.querySelector(".".concat(i).concat(n.track)),this.$track)||(this.$track=document.createElement("div"),this.$track.classList.add(i+n.track),(e=this.$track).append.apply(e,p(this.$viewport.childNodes)),this.$viewport.appendChild(this.$track))}},{key:"initSlides",value:function(){var t=this;this.slides=[],this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e){var i={$el:e,isDom:!0};t.slides.push(i),t.trigger("createSlide",i,t.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=x(!0,p(this.slides),this.options.slides))}},{key:"updateMetrics",value:function(){var t,e=this,n=0,o=[];this.slides.forEach((function(i,a){var s=i.$el,r=i.isDom||!t?e.getSlideMetrics(s):t;i.index=a,i.width=r,i.left=n,t=r,n+=r,o.push(a)}));var a=Math.max(this.$track.offsetWidth,w(this.$track.getBoundingClientRect().width)),s=getComputedStyle(this.$track);a-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),this.contentWidth=n,this.viewportWidth=a;var r=[],l=this.option("slidesPerPage");if(Number.isInteger(l)&&n>a)for(var c=0;c<this.slides.length;c+=l)r.push({indexes:o.slice(c,c+l),slides:this.slides.slice(c,c+l)});else for(var h=0,d=0,u=0;u<this.slides.length;u+=1){var f=this.slides[u];(!r.length||d+f.width>a)&&(r.push({indexes:[],slides:[]}),h=r.length-1,d=0),d+=f.width,r[h].indexes.push(u),r[h].slides.push(f)}var v=this.option("center"),g=this.option("fill");r.forEach((function(t,i){t.index=i,t.width=t.slides.reduce((function(t,e){return t+e.width}),0),t.left=t.slides[0].left,v&&(t.left+=.5*(a-t.width)*-1),g&&!e.option("infiniteX",e.option("infinite"))&&n>a&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,n-a))}));var m,y=[];r.forEach((function(t){var e=i({},t);m&&e.left===m.left?(m.width+=e.width,m.slides=[].concat(p(m.slides),p(e.slides)),m.indexes=[].concat(p(m.indexes),p(e.indexes))):(e.index=y.length,m=e,y.push(e))})),this.pages=y;var b=this.page;if(null===b){var x=this.option("initialSlide");b=null!==x?this.findPageForSlide(x):this.option("initialPage",0),y[b]||(b=y.length&&b>y.length?y[y.length-1].index:0),this.page=b,this.pageIndex=b}this.updatePanzoom(),this.trigger("refresh")}},{key:"getSlideMetrics",value:function(t){if(!t){var e,i=this.slides[0];if((t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",t.classList.add(this.option("prefix")+this.option("classNames.slide")),i.customClass)(e=t.classList).add.apply(e,p(i.customClass.split(" ")));this.$track.prepend(t)}var n=Math.max(t.offsetWidth,w(t.getBoundingClientRect().width)),o=t.currentStyle||window.getComputedStyle(t);return n=n+(parseFloat(o.marginLeft)||0)+(parseFloat(o.marginRight)||0),t.dataset.isTestEl&&t.remove(),n}},{key:"findPageForSlide",value:function(t){var e=this.pages.find((function(e){return e.indexes.indexOf(t)>-1}));return e?e.index:null}},{key:"slideNext",value:function(){this.slideTo(this.pageIndex+1)}},{key:"slidePrev",value:function(){this.slideTo(this.pageIndex-1)}},{key:"slideTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?-1*this.setPage(t,!0):i,o=e.y,a=void 0===o?0:o,s=e.friction,r=void 0===s?this.option("friction"):s;this.Panzoom.content.x===n&&!this.Panzoom.velocity.x&&r||(this.Panzoom.panTo({x:n,y:a,friction:r,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}},{key:"initPanzoom",value:function(){var t=this;this.Panzoom&&this.Panzoom.destroy();var e=x(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:function(){return t.option("textSelection",!1)},panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new z(this.$container,e),this.Panzoom.on({"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Panzoom.".concat(e)].concat(n))},afterUpdate:function(){t.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:function(){t.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}},{key:"updatePanzoom",value:function(){this.Panzoom&&(this.Panzoom.content=i(i({},this.Panzoom.content),{},{fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth}),this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}},{key:"manageSlideVisiblity",value:function(){var t=this,e=this.contentWidth,i=this.viewportWidth,n=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0,o=this.option("preload"),a=this.option("infiniteX",this.option("infinite")),s=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),r=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((function(l){var c,h,d=0;c=n-s,h=n+i+r,c-=o*(i+s+r),h+=o*(i+s+r);var u=l.left+l.width>c&&l.left<h;c=n+e-s,h=n+e+i+r,c-=o*(i+s+r);var f=a&&l.left+l.width>c&&l.left<h;c=n-e-s,h=n-e+i+r,c-=o*(i+s+r);var v=a&&l.left+l.width>c&&l.left<h;f||u||v?(t.createSlideEl(l),u&&(d=0),f&&(d=-1),v&&(d=1),l.left+l.width>n&&l.left<=n+i+r&&(d=0)):t.removeSlideEl(l),l.hasDiff=d}));var l=0,c=0;this.slides.forEach((function(t,i){var n=0;t.$el?(i!==l||t.hasDiff?n=c+t.hasDiff*e:c=0,t.$el.style.left=Math.abs(n)>.1?"".concat(c+t.hasDiff*e,"px"):"",l++):c+=t.width})),this.markSelectedSlides()}},{key:"createSlideEl",value:function(t){if(t){if(!t.$el){var e,i=document.createElement("div");if(i.dataset.index=t.index,i.classList.add(this.option("prefix")+this.option("classNames.slide")),t.customClass)(e=i.classList).add.apply(e,p(t.customClass.split(" ")));t.html&&(i.innerHTML=t.html);var n=[];this.slides.forEach((function(t,e){t.$el&&n.push(e)}));var o=t.index,a=null;if(n.length){var s=n.reduce((function(t,e){return Math.abs(e-o)<Math.abs(t-o)?e:t}));a=this.slides[s]}return this.$track.insertBefore(i,a&&a.$el?a.index<t.index?a.$el.nextSibling:a.$el:null),t.$el=i,this.trigger("createSlide",t,o),t}var r;parseInt(t.$el.dataset.index,10)!==t.index&&(t.$el.dataset.index=t.index,t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t){var e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage="url('".concat(e,"')")})),(r=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage="url('".concat(r,"')")),t.state="ready")}}},{key:"removeSlideEl",value:function(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}},{key:"markSelectedSlides",value:function(){var t=this,e=this.option("classNames.slideSelected"),i="aria-hidden";this.slides.forEach((function(n,o){var a=n.$el;if(a){var s=t.pages[t.page];s&&s.indexes&&s.indexes.indexOf(o)>-1?(e&&!a.classList.contains(e)&&(a.classList.add(e),t.trigger("selectSlide",n)),a.removeAttribute(i)):(e&&a.classList.contains(e)&&(a.classList.remove(e),t.trigger("unselectSlide",n)),a.setAttribute(i,!0))}}))}},{key:"updatePage",value:function(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}},{key:"onBeforeTransform",value:function(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}},{key:"manageInfiniteTrack",value:function(){var t=this.contentWidth,e=this.viewportWidth;if(!(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)){var i=this.Panzoom,n=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,n=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,n=!0),n&&"pointerdown"===i.state&&i.resetDragPosition(),n}}},{key:"onTouchEnd",value:function(t,e){var i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){var n=v(this.getPageFromPosition(-1*t.transform.x),2)[1];this.setPage(n)}else this.slideToClosest()}},{key:"slideToClosest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getPageFromPosition(-1*this.Panzoom.content.x),i=v(e,2),n=i[1];this.slideTo(n,t)}},{key:"getPageFromPosition",value:function(t){var e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);var i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;var n=this.slides.find((function(e){return e.left<=t&&e.left+e.width>t}));if(n){var o=this.findPageForSlide(n.index);return[o,o+i*e]}return[0,0]}},{key:"setPage",value:function(t,e){var i=0,n=parseInt(t,10)||0,o=this.page,a=this.pageIndex,s=this.pages.length,r=this.contentWidth,l=this.viewportWidth;if(t=(n%s+s)%s,this.option("infiniteX",this.option("infinite"))&&r>l){var c=Math.floor(n/s)||0,h=r;if(i=this.pages[t].left+c*h,!0===e&&s>2){var d=-1*this.Panzoom.content.x,u=i-h,f=i+h,v=Math.abs(d-i),p=Math.abs(d-u),g=Math.abs(d-f);g<v&&g<=p?(i=f,n+=s):p<v&&p<g&&(i=u,n-=s)}}else t=n=Math.max(0,Math.min(n,s-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=n,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=a,this.trigger("change",t,o)),i}},{key:"destroy",value:function(){var t=this;this.state="destroy",this.slides.forEach((function(e){t.removeSlideEl(e)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}]),n}(A);D.version="4.0.4",D.Plugins=R;var B=!("undefined"==typeof window||!window.document||!window.document.createElement),H=function(){function t(e){o(this,t),this.fancybox=e,this.viewport=null,this.pendingUpdate=null;for(var i=0,n=["onReady","onResize","onTouchstart","onTouchmove"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}}return s(t,[{key:"onReady",value:function(){var t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1})}},{key:"onResize",value:function(){this.updateViewport()}},{key:"updateViewport",value:function(){var t=this.fancybox,e=this.viewport,i=e.scale||1,n=t.$container;if(n){var o="",a="",s="";i-1>.1&&(o="".concat(e.width*i,"px"),a="".concat(e.height*i,"px"),s="translate3d(".concat(e.offsetLeft,"px, ").concat(e.offsetTop,"px, 0) scale(").concat(1/i,")")),n.style.width=o,n.style.height=a,n.style.transform=s}}},{key:"onTouchstart",value:function(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}},{key:"onTouchmove",value:function(t){var e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(!(t.touches.length>1||1!==i)){var n=t.target,o=T(n);if(o){var a=window.getComputedStyle(o),s=parseInt(a.getPropertyValue("height"),10),r=t.touches?t.touches[0].screenY:t.screenY,l=e<=r&&0===o.scrollTop,c=e>=r&&o.scrollHeight-o.scrollTop===s;(l||c)&&t.preventDefault()}else t.preventDefault()}}},{key:"cleanup",value:function(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);var t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1)}},{key:"attach",value:function(){this.fancybox.on("initLayout",this.onReady)}},{key:"detach",value:function(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}}]),t}(),W=function(){function t(e){o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var i=0,n=["onPrepare","onClosing","onKeydown"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}return s(t,[{key:"onPrepare",value:function(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}},{key:"onClosing",value:function(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}},{key:"onKeydown",value:function(t,e){e===t.option("Thumbs.key")&&this.toggle()}},{key:"build",value:function(){var t=this;if(!this.$container){var e=document.createElement("div");e.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel.nextSibling),this.Carousel=new D(e,x(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",(function(e,i){i.preventDefault(),t.fancybox[i.deltaY<0?"prev":"next"]()})),this.$container=e,this.state="visible"}}},{key:"getSlides",value:function(){var t,e=[],i=y(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n.thumb;o&&e.push({html:'<div class="fancybox__thumb" style="background-image:url(\''.concat(o,"')\"></div>"),customClass:"has-thumb has-".concat(n.type||"image")})}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"toggle",value:function(){return"visible"===this.state?(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",void(this.state="hidden")):"hidden"===this.state?(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),void(this.state="visible")):void this.build()}},{key:"show",value:function(){this.state="hidden",this.toggle()}},{key:"hide",value:function(){this.state="visible",this.toggle()}},{key:"cleanup",value:function(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();W.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{}};var j=function(t){return Object.entries(t).map((function(t){return t.map(encodeURIComponent).join("=")})).join("&")},X={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}},q=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}return s(t,[{key:"onInit",value:function(){var t,e=y(this.fancybox.items);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.processType(i)}}catch(t){e.e(t)}finally{e.f()}}},{key:"processType",value:function(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;var e=t.src||"",i=t.type||this.fancybox.options.type,n=null;if(!e||"string"==typeof e){if(n=e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){var o=j(this.fancybox.option("Html.youtube")),a=encodeURIComponent(n[1]);t.videoId=a,t.src="https://www.youtube-nocookie.com/embed/".concat(a,"?").concat(o),t.thumb=t.thumb||"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),t.vendor="youtube",i="video"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){var s=j(this.fancybox.option("Html.vimeo")),r=encodeURIComponent(n[1]);t.videoId=r,t.src="https://player.vimeo.com/video/".concat(r,"?").concat(s),t.vendor="vimeo",i="video"}else(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src="//maps.google.".concat(n[1],"/?ll=").concat((n[2]?n[2]+"&z="+Math.floor(n[3])+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&"),"&output=").concat(n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"),i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src="//maps.google.".concat(n[1],"/maps?q=").concat(n[2].replace("query=","q=").replace("api=1",""),"&output=embed"),i="map");i||("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.format=t.format||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),t.type=i||this.fancybox.option("defaultType","image"),"html5video"!==i&&"video"!==i||(t.video=x({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||X.video.ratio)}}},{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&(t.setContent(e),e.index===t.fancybox.getSlide().index&&t.playVideo(e))}))}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"loadInlineContent",value:function(t){var e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){var i=t.src.split("#",2),n=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(n)}if(e){if("clone"===t.type||e.$placeHolder){var o=(e=e.cloneNode(!0)).getAttribute("id");o=o?"".concat(o,"--clone"):"clone-".concat(this.fancybox.id,"-").concat(t.index),e.setAttribute("id",o)}else{var a=document.createElement("div");a.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(a,e),e.$placeHolder=a}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"loadAjaxContent",value:function(t){var e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))},i.open("GET",t.src),i.send(t.ajax||null),t.xhr=i}},{key:"loadIframeContent",value:function(t){var e=this,i=this.fancybox,n=document.createElement("iframe");if(n.className="fancybox__iframe",n.setAttribute("id","fancybox__iframe_".concat(i.id,"_").concat(t.index)),n.setAttribute("allow","autoplay; fullscreen"),n.setAttribute("scrolling","auto"),t.$iframe=n,"iframe"!==t.type||!1===t.preload)return n.setAttribute("src",t.src),void this.fancybox.setContent(t,n);i.showLoading(t);var o=document.createElement("div");o.style.visibility="hidden",this.fancybox.setContent(t,o),o.appendChild(n),n.onerror=function(){i.setError(t,"{{IFRAME_ERROR}}")},n.onload=function(){i.hideLoading(t);var o=!1;"yes"!==n.dataset.ready&&(n.dataset.ready="yes",o=!0),n.src.length&&(n.parentNode.style.visibility="",!1!==t.autoSize&&e.autoSizeIframe(n),o&&i.revealContent(t))},n.setAttribute("src",t.src)}},{key:"setAspectRatio",value:function(t){var e=t.$content,i=t.ratio;if(e){var n=t._width,o=t._height;if(i||n&&o){Object.assign(e.style,{width:n&&o?"100%":"",height:n&&o?"100%":"",maxWidth:"",maxHeight:""});var a=e.offsetWidth,s=e.offsetHeight;if(o=o||s,(n=n||a)>a||o>s){var r=Math.min(a/n,s/o);n*=r,o*=r}Math.abs(n/o-i)>.01&&(i<n/o?n=o*i:o=n/i),Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(o,"px")})}}}},{key:"autoSizeIframe",value:function(t){if(t.dataset&&"yes"===t.dataset.ready){var e=t.parentNode.style;e.flex="1 1 auto",e.width="",e.height="";try{var i=t.contentWindow.document,n=i.getElementsByTagName("html")[0],o=i.body,a=window.getComputedStyle(t.parentNode),s=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),r=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom);o.style.overflow="hidden";var l=n.scrollWidth;e.width="".concat(l+s,"px"),o.style.overflow="",e.flex="",e.flexShrink="0",e.height="".concat(o.scrollHeight,"px");var c=n.scrollHeight;e.height="".concat(c+r,"px")}catch(t){e=""}}}},{key:"onRefresh",value:function(t,e){var i=this;e.slides.forEach((function(t){t.$el&&(t.$iframe&&!1!==t.autoSize&&i.autoSizeIframe(t.$iframe),t.ratio&&i.setAspectRatio(t))}))}},{key:"setContent",value:function(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"iframe":case"pdf":case"video":case"map":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}},{key:"onSelectSlide",value:function(t,e,i){"ready"===t.state&&this.playVideo(i)}},{key:"playVideo",value:function(t){if("html5video"===t.type&&t.video.autoplay)try{var e=t.$el.querySelector("video");if(e){var i=e.play();void 0!==i&&i.then((function(){})).catch((function(t){e.muted=!0,e.play()}))}}catch(t){}if("video"===t.type&&t.$iframe&&t.$iframe.contentWindow){!function e(){if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){var i;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(i="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(i&&t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"));"youtube"===t.vendor&&(i={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"))}t.poller=setTimeout(e,250)}()}}},{key:"onUnselectSlide",value:function(t,e,i){if("html5video"!==i.type){var n=!1;"vimeo"==i.vendor?n={method:"pause",value:"true"}:"youtube"===i.vendor&&(n={event:"command",func:"pauseVideo"}),n&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(n),"*"),clearTimeout(i.poller)}else try{i.$el.querySelector("video").pause()}catch(t){}}},{key:"onRemoveSlide",value:function(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);var n=i.$content;"inline"===i.type&&n&&(n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none"),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null));var o=n&&n.$placeHolder;o&&(o.parentNode.insertBefore(n,o),o.remove(),n.$placeHolder=null)}},{key:"onMessage",value:function(t){try{var e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event){var i,n=y(document.getElementsByClassName("fancybox__iframe"));try{for(n.s();!(i=n.n()).done;){var o=i.value;o.contentWindow===t.source&&(o.isReady=1)}}catch(t){n.e(t)}finally{n.f()}}}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}},{key:"attach",value:function(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}},{key:"detach",value:function(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}]),t}();q.defaults=X;var Y=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}return s(t,[{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&t.setContent(e)}))}},{key:"onDone",value:function(t,e){this.handleCursor(e)}},{key:"onClosing",value:function(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((function(t){t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"onRemoveSlide",value:function(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}},{key:"setContent",value:function(t){var e=this;if(!(t.isDom||t.html||t.type&&"image"!==t.type||t.$image)){t.type="image",t.state="loading";var i=document.createElement("div");i.style.visibility="hidden";var n=document.createElement("img");n.addEventListener("load",(function(i){i.stopImmediatePropagation(),e.onImageStatusChange(t)})),n.addEventListener("error",(function(){e.onImageStatusChange(t)})),n.src=t.src,n.alt="",n.draggable=!1,n.classList.add("fancybox__image"),t.srcset&&n.setAttribute("srcset",t.srcset),t.sizes&&n.setAttribute("sizes",t.sizes),t.$image=n;var o=this.fancybox.option("Image.wrap");if(o){var a=document.createElement("div");a.classList.add("string"==typeof o?o:"fancybox__image-wrap"),a.appendChild(n),i.appendChild(a),t.$wrap=a}else i.appendChild(n);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,i),n.complete||n.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}}},{key:"onImageStatusChange",value:function(t){var e=this,i=t.$image;i&&"loading"===t.state&&(i.complete&&i.naturalWidth&&i.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(function(i){return e.onWheel(t,i)}),{passive:!1}),t.$content.addEventListener("click",(function(i){return e.onClick(t,i)}),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}},{key:"initSlidePanzoom",value:function(t){var e=this;t.Panzoom||(t.Panzoom=new z(t.$el,x(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(function(){e.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(function(){"zoomIn"===t.state&&e.fancybox.done(t),e.handleCursor(t),e.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(function(){e.handleCursor(t),e.fancybox.trigger("Image.afterUpdate",t)})))}},{key:"revealContent",value:function(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}},{key:"getZoomInfo",value:function(t){var e=t.$thumb.getBoundingClientRect(),i=e.width,n=e.height,o=t.$content.getBoundingClientRect(),a=o.width,s=o.height,r=o.top-e.top,l=o.left-e.left,c=this.fancybox.option("Image.zoomOpacity");return"auto"===c&&(c=Math.abs(i/n-a/s)>.1),{top:r,left:l,scale:e.width/a,opacity:c}}},{key:"canZoom",value:function(t){var e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;var n=t.$thumb;if(!n||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");var o,a=n.getBoundingClientRect();if(this.fancybox.option("Image.ignoreCoveredThumbnail")){var s=document.elementFromPoint(a.left+1,a.top+1)===n,r=document.elementFromPoint(a.right-1,a.bottom-1)===n;o=s&&r}else o=document.elementFromPoint(a.left+.5*a.width,a.top+.5*a.height)===n;return i.classList.remove("fancybox__no-click"),o}},{key:"zoomIn",value:function(){var t=this.fancybox,e=t.getSlide(),i=e.Panzoom,n=this.getZoomInfo(e),o=n.top,a=n.left,s=n.scale,r=n.opacity;e.state="zoomIn",t.trigger("reveal",e),i.panTo({x:-1*a,y:-1*o,scale:s,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",!0===r&&i.on("afterTransform",(function(t){"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-s)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}},{key:"zoomOut",value:function(){var t=this,e=this.fancybox,i=e.getSlide(),n=i.Panzoom;if(n){i.state="zoomOut",e.state="customClosing",i.$caption&&(i.$caption.style.visibility="hidden");var o=this.fancybox.option("Image.zoomFriction"),a=function(e){var a=t.getZoomInfo(i),s=a.top,r=a.left,l=a.scale,c=a.opacity;e||c||(o*=.82),n.panTo({x:-1*r,y:-1*s,scale:l,friction:o,ignoreBounds:!0}),o*=.98};window.addEventListener("scroll",a),n.on("endAnimation",(function(){window.removeEventListener("scroll",a),e.destroy()})),a()}}},{key:"handleCursor",value:function(t){if("image"===t.type){var e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),n=t.$el.classList;if(e&&"toggleZoom"===i)n[e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?"add":"remove"](this.fancybox.option("Image.canZoomInClass"));else"close"===i&&n.add(this.fancybox.option("Image.canZoomOutClass"))}}},{key:"onWheel",value:function(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}},{key:"onClick",value:function(t,e){var i=this;if("ready"===this.fancybox.state){var n=t.Panzoom;if(!n||!n.dragPosition.midPoint&&0===n.dragOffset.x&&0===n.dragOffset.y&&1===n.dragOffset.scale){if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;var o=function(n){switch(n){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":i.fancybox.close();break;case"next":e.stopPropagation(),i.fancybox.next()}},a=this.fancybox.option("Image.click"),s=this.fancybox.option("Image.doubleClick");s?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,o(s)):this.clickTimer=setTimeout((function(){i.clickTimer=null,o(a)}),300):o(a)}}}},{key:"onPageChange",value:function(t,e){var i=t.getSlide();e.slides.forEach((function(t){t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events)}}]),t}();Y.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};var U=function(){var t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}},V=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onChange","onClosing"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}return s(t,[{key:"onChange",value:function(){var t=this,e=this.fancybox,i=e.Carousel;this.timer&&clearTimeout(this.timer);var n=null===i.prevPage,o=e.getSlide(),a=o.$trigger&&o.$trigger.dataset,s=window.location.hash.substr(1),r=!1;if(o.slug)r=o.slug;else{var l=a&&a.fancybox;l&&l.length&&"true"!==l&&(r=l+(i.slides.length>1?"-"+(o.index+1):""))}n&&(this.origHash=s!==r?this.origHash:""),r&&s!==r&&(this.timer=setTimeout((function(){try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+"#"+r),n&&(t.hasCreatedHistory=!0)}catch(t){}}),300))}},{key:"onClosing",value:function(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose){if(!this.hasCreatedHistory)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash?"#"+this.origHash:""))}catch(t){}window.history.back()}}},{key:"attach",value:function(t){t.on(this.events)}},{key:"detach",value:function(t){t.off(this.events)}}],[{key:"startFromUrl",value:function(){if(t.Fancybox&&!t.Fancybox.getInstance()){var e=U(),i=e.hash,n=e.slug,o=e.index;if(n){var a=document.querySelector('[data-slug="'.concat(i,'"]'));if(a&&a.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),!t.Fancybox.getInstance()){var s=document.querySelectorAll('[data-fancybox="'.concat(n,'"]'));s.length&&(null===o&&1===s.length?a=s[0]:o&&(a=s[o-1]),a&&a.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}}}}},{key:"onHashChange",value:function(){var e=U(),i=e.slug,n=e.index,o=t.Fancybox.getInstance();if(o){if(i){var a,s=o.Carousel,r=y(s.slides);try{for(r.s();!(a=r.n()).done;){var l=a.value;if(l.slug&&l.slug===i)return s.slideTo(l.index)}}catch(t){r.e(t)}finally{r.f()}var c=o.getSlide(),h=c.$trigger&&c.$trigger.dataset;if(h&&h.fancybox===i)return s.slideTo(n-1)}o.plugins.Hash.hasSilentClose=!0,o.close()}t.startFromUrl()}},{key:"create",value:function(e){function i(){window.addEventListener("hashchange",t.onHashChange,!1),t.startFromUrl()}t.Fancybox=e,B&&window.requestAnimationFrame((function(){/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)}))}},{key:"destroy",value:function(){window.removeEventListener("hashchange",t.onHashChange,!1)}}]),t}(),Z={pageXOffset:0,pageYOffset:0,element:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate:function(t){Z.pageXOffset=window.pageXOffset,Z.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},G=function(){function t(e){o(this,t),this.fancybox=e,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}return s(t,[{key:"isActive",value:function(){return this.active}},{key:"setTimer",value:function(){var t=this;if(this.active&&!this.timer){var e=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((function(){t.timer=null,t.fancybox.option("infinite")||t.fancybox.getSlide().index!==t.fancybox.Carousel.slides.length-1?t.fancybox.next():t.fancybox.jumpTo(0,{friction:0})}),e);var i=this.$progress;i||((i=document.createElement("div")).classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(i,this.fancybox.$carousel),this.$progress=i,i.offsetHeight),i.style.transitionDuration="".concat(e,"ms"),i.style.transform="scaleX(1)"}}},{key:"clearTimer",value:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}},{key:"activate",value:function(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}},{key:"handleVisibilityChange",value:function(){this.deactivate()}},{key:"deactivate",value:function(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}},{key:"toggle",value:function(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}]),t}(),K={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',tabindex:-1,position:"left"},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.prev()}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.next()}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),Z.element()?Z.deactivate():Z.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();var e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();var e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',tabindex:0,click:function(t){t.stopPropagation(),t.preventDefault(),this.fancybox.close()}}}},J=function(){function t(e){var i=this;o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var n=0,a=["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"];n<a.length;n++){var s=a[n];this[s]=this[s].bind(this)}this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":function(){return i.onRefresh()},"Image.startAnimation":function(t,e){return i.onRefresh(e)},"Image.afterUpdate":function(t,e){return i.onRefresh(e)}}}return s(t,[{key:"onInit",value:function(){if(this.fancybox.option("Toolbar.autoEnable")){var t,e=!1,i=y(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){if("image"===t.value.type){e=!0;break}}}catch(t){i.e(t)}finally{i.f()}if(!e)return void(this.state="disabled")}var n,o=y(this.fancybox.option("Toolbar.display"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if("close"===(b(a)?a.id:a)){this.fancybox.options.closeButton=!1;break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"onPrepare",value:function(){if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new G(this.fancybox),!this.fancybox.Carousel.prevPage&&(this.fancybox.option("slideshow.autoStart")&&this.Slideshow.activate(),this.fancybox.option("fullscreen.autoStart")&&!Z.element())))try{Z.activate(this.fancybox.$container)}catch(t){}}},{key:"onFsChange",value:function(){window.scrollTo(Z.pageXOffset,Z.pageYOffset)}},{key:"onSettle",value:function(){this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.getSlide().index!==this.fancybox.Carousel.slides.length-1||this.fancybox.option("infinite")?"done"===this.fancybox.getSlide().state&&this.Slideshow.setTimer():this.Slideshow.deactivate())}},{key:"onChange",value:function(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}},{key:"onDone",value:function(t,e){e.index===t.getSlide().index&&(this.update(),this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.option("infinite")||e.index!==this.fancybox.Carousel.slides.length-1?this.Slideshow.setTimer():this.Slideshow.deactivate()))}},{key:"onRefresh",value:function(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}},{key:"onKeydown",value:function(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}},{key:"onClosing",value:function(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}},{key:"createElement",value:function(t){var e,i;("div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button")).classList.add("carousel__button"),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class)&&(i=e.classList).add.apply(i,p(t.class.split(" ")));t.label&&e.setAttribute("title",this.fancybox.localize("{{".concat(t.label,"}}"))),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");var n=e.querySelector("svg");return n&&(n.setAttribute("role","img"),n.setAttribute("tabindex","-1"),n.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}},{key:"build",value:function(){var t=this;this.cleanup();var e,i=this.fancybox.option("Toolbar.items"),n=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs,a=y(this.fancybox.option("Toolbar.display"));try{var s=function(){var a=e.value,s=void 0,r=void 0;if(b(a)?(s=a.id,r=x({},i[s],a)):r=i[s=a],["counter","next","prev","slideshow"].includes(s)&&t.fancybox.items.length<2)return"continue";if("fullscreen"===s){if(!document.fullscreenEnabled||window.fullScreen)return"continue";document.addEventListener("fullscreenchange",t.onFsChange)}if("thumbs"===s&&(!o||"disabled"===o.state))return"continue";if(!r)return"continue";var l=r.position||"right",c=n.find((function(t){return t.position===l}));c&&c.items.push(r)};for(a.s();!(e=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}var r=document.createElement("div");r.classList.add("fancybox__toolbar");for(var l=0,c=n;l<c.length;l++){var h=c[l];if(h.items.length){var d=document.createElement("div");d.classList.add("fancybox__toolbar__items"),d.classList.add("fancybox__toolbar__items--".concat(h.position));var u,f=y(h.items);try{for(f.s();!(u=f.n()).done;){var v=u.value;d.appendChild(this.createElement(v))}}catch(t){f.e(t)}finally{f.f()}r.appendChild(d)}}this.fancybox.$carousel.parentNode.insertBefore(r,this.fancybox.$carousel),this.$container=r}},{key:"update",value:function(){var t,e=this.fancybox.getSlide(),i=e.index,n=this.fancybox.items.length,o=e.downloadSrc||("image"!==e.type||e.error?null:e.src),a=y(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));try{for(a.s();!(t=a.n()).done;){var s=t.value;o?(s.removeAttribute("disabled"),s.removeAttribute("tabindex"),s.setAttribute("href",o),s.setAttribute("download",o),s.setAttribute("target","_blank")):(s.setAttribute("disabled",""),s.setAttribute("tabindex",-1),s.removeAttribute("href"),s.removeAttribute("download"))}}catch(t){a.e(t)}finally{a.f()}var r,l=e.Panzoom,c=l&&l.option("maxScale")>l.option("baseScale"),h=y(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));try{for(h.s();!(r=h.n()).done;){var d=r.value;c?d.removeAttribute("disabled"):d.setAttribute("disabled","")}}catch(t){h.e(t)}finally{h.f()}var u,f=y(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));try{for(f.s();!(u=f.n()).done;){u.value.innerHTML=e.index+1}}catch(t){f.e(t)}finally{f.f()}var v,p=y(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));try{for(p.s();!(v=p.n()).done;){v.value.innerHTML=n}}catch(t){p.e(t)}finally{p.f()}if(!this.fancybox.option("infinite")){var g,m=y(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));try{for(m.s();!(g=m.n()).done;){var b=g.value;0===i?b.setAttribute("disabled",""):b.removeAttribute("disabled")}}catch(t){m.e(t)}finally{m.f()}var x,w=y(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));try{for(w.s();!(x=w.n()).done;){var k=x.value;i===n-1?k.setAttribute("disabled",""):k.removeAttribute("disabled")}}catch(t){w.e(t)}finally{w.f()}}}},{key:"cleanup",value:function(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();J.defaults=K;var Q={ScrollLock:H,Thumbs:W,Html:q,Toolbar:J,Image:Y,Hash:V},tt={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},et={},it=0,nt=function(t){l(i,t);var e=f(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,i),(n=e.call(this,x(!0,{},tt,a))).bindHandlers(),n.state="init",n.setItems(t),n.attachPlugins(i.Plugins),n.trigger("init"),!0===n.option("hideScrollbar")&&n.hideScrollbar(),n.initLayout(),n.initCarousel(),n.attachEvents(),et[n.id]=d(n),n.trigger("prepare"),n.state="ready",n.trigger("ready"),n.$container.setAttribute("aria-hidden","false"),n.option("trapFocus")&&n.focus(),n}return s(i,[{key:"bindHandlers",value:function(){for(var t=0,e=["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onTouchMove","onTouchEnd","onTransform"];t<e.length;t++){var i=e[t];this[i]=this[i].bind(this)}}},{key:"attachEvents",value:function(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}},{key:"detachEvents",value:function(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}},{key:"initLayout",value:function(){var t=this;this.$root=this.option("parentEl")||document.body;var e=this.option("template.main");e&&(this.$root.insertAdjacentHTML("beforeend",this.localize(e)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=function(){return t.$container.scrollLeft=0,!1},Object.entries({class:"fancybox__container",role:"dialog","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((function(e){var i;return(i=t.$container).setAttribute.apply(i,p(e))})),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++it,this.$container.setAttribute("id","fancybox-"+this.id));var i,n=this.options.mainClass;n&&(i=this.$container.classList).add.apply(i,p(n.split(" ")));return document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}},{key:"setItems",value:function(t){var e,i=[],n=y(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=o.$trigger;if(a){var s=a.dataset||{};o.src=s.src||a.getAttribute("href")||o.src,o.type=s.type||o.type,!o.src&&a instanceof HTMLImageElement&&(o.src=a.currentSrc||o.$trigger.src)}var r=o.$thumb;if(!r){var l=o.$trigger&&o.$trigger.origTarget;l&&(r=l instanceof HTMLImageElement?l:l.querySelector("img")),!r&&o.$trigger&&(r=o.$trigger instanceof HTMLImageElement?o.$trigger:o.$trigger.querySelector("img"))}o.$thumb=r||null;var c=o.thumb;!c&&o.$thumb&&(c=r.currentSrc||r.src),c||"image"!==o.type||(c=o.src),o.thumb=c||null,o.caption=o.caption||"",i.push(o)}}catch(t){n.e(t)}finally{n.f()}this.items=i}},{key:"initCarousel",value:function(){var t=this;return this.Carousel=new D(this.$carousel,x(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:function(){return t.Carousel&&t.Carousel.pages&&t.Carousel.pages.length<2&&!t.options.dragToClose},lockAxis:function(){if(t.Carousel){var e="x";return t.options.dragToClose&&(e+="y"),e}}},on:{"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Carousel.".concat(e)].concat(n))},init:function(e){return t.Carousel=e},createSlide:this.onCreateSlide}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}},{key:"onCreateSlide",value:function(t,e){var i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){var n=document.createElement("div"),o="fancybox__caption_".concat(this.id,"_").concat(e.index);n.className="fancybox__caption",n.innerHTML=i,n.setAttribute("id",o),e.$caption=e.$el.appendChild(n),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",o)}}},{key:"onFocus",value:function(t){this.focus(t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented&&(!t.target.closest(".fancybox__content")&&!getSelection().toString().length&&!1!==this.trigger("click",t)))switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}},{key:"onTouchMove",value:function(){var t=this.getSlide().Panzoom;return!t||1===t.content.scale}},{key:"onTouchEnd",value:function(t){var e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut".concat(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}},{key:"onTransform",value:function(t){if(this.$backdrop){var e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}},{key:"onMousedown",value:function(){document.body.classList.add("is-using-mouse")}},{key:"onKeydown",value:function(t){if(i.getInstance().id===this.id){document.body.classList.remove("is-using-mouse");var e=t.key,n=this.option("keyboard");if(n&&!t.ctrlKey&&!t.altKey&&!t.shiftKey){var o=document.activeElement&&document.activeElement.classList,a=o&&o.contains("carousel__button");if("Escape"!==e&&!a)if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(t.target.nodeName))return;if(!1!==this.trigger("keydown",e,t)){var s=n[e];"function"==typeof this[s]&&this[s]()}}}}},{key:"getSlide",value:function(){var t=this.Carousel;if(!t)return null;var e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}},{key:"focus",value:function(t){var e=this,n=function(t){if(t){e.ignoreFocusChange=!0;try{t.setActive?t.setActive():i.preventScrollSupported?t.focus({preventScroll:!0}):t.focus()}catch(t){}e.ignoreFocusChange=!1}};if(!(this.ignoreFocusChange||["init","closing","customClosing","destroy"].indexOf(this.state)>-1)){var o=this.getSlide().$el;if(o){t&&t.preventDefault();for(var a,s,r=[],l=0,c=Array.from(this.$container.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']));l<c.length;l++){var h=c[l],d=o.contains(h);d||!this.Carousel.$viewport.contains(h)?(r.push(h),void 0!==h.dataset.origTabindex&&(h.tabIndex=h.dataset.tabindex,h.removeAttribute("data-tabindex")),h.hasAttribute("autoFocus")||!a&&d?a=h:h.matches(".fancybox__button--close")&&(s=h)):(h.dataset.origTabindex=void 0===h.dataset.origTabindex?h.getAttribute("tabindex"):h.dataset.origTabindex,h.tabIndex=-1)}if(r.indexOf(document.activeElement)>-1)this.lastFocus=document.activeElement;else if(t){if(!o.contains(document.activeElement)){if(this.lastFocus===r[0])n(r[r.length-1]);else{var u=r.indexOf(this.lastFocus);u<r.length-2?n(r[u+1]):n(r[0])}this.lastFocus=document.activeElement}}else n(a||s||r[0])}}}},{key:"hideScrollbar",value:function(){if(B){var t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll",i=document.getElementById(e);i||t>0&&((i=document.createElement("style")).id=e,i.type="text/css",i.innerHTML=".compensate-for-scrollbar {padding-right: ".concat(t,"px;}"),document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}}},{key:"revealScrollbar",value:function(){document.body.classList.remove("compensate-for-scrollbar");var t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}},{key:"clearContent",value:function(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t._className&&t.$el.classList.remove(t._className)}},{key:"setContent",value:function(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(i=document.createElement("div")).appendChild(e):i=e;else{var a=document.createRange().createContextualFragment(e);(i=document.createElement("div")).appendChild(a)}if(!(i instanceof Element))throw new Error("Element expected");return t._className="has-".concat(n.suffix||t.type||"unknown"),o.classList.add(t._className),i.classList.add("fancybox__content"),"none"!==i.style.display&&"none"!==getComputedStyle(i).getPropertyValue("display")||(i.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&i.setAttribute("id",t.id),t.$content=i,o.prepend(i),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),i}},{key:"manageCloseButton",value:function(t){var e=this,i=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(i&&("top"!==i||!this.$closeButton)){var n=document.createElement("button");n.classList.add("carousel__button","is-close"),n.setAttribute("title",this.options.l10n.CLOSE),n.innerHTML=this.option("template.closeButton"),n.addEventListener("click",(function(t){return e.close(t)})),"inside"===i?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(n)):this.$closeButton=this.$container.insertBefore(n,this.$container.firstChild)}}},{key:"revealContent",value:function(t){var e=this;this.trigger("reveal",t),t.$content.style.visibility="";var i=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(i=void 0===t.showClass?this.option("showClass"):t.showClass),i?(t.state="animating",this.animateCSS(t.$content,i,(function(){e.done(t)}))):this.done(t)}},{key:"animateCSS",value:function(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),t&&e){t.addEventListener("animationend",(function n(o){o.currentTarget===this&&(t.removeEventListener("animationend",n),i&&i(),t.classList.remove(e))})),t.classList.add(e)}else"function"==typeof i&&i()}},{key:"done",value:function(t){t.state="done",this.trigger("done",t);var e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}},{key:"setError",value:function(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);var i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}},{key:"showLoading",value:function(t){var e=this;t.state="loading",t.$el.classList.add("is-loading");var i=t.$el.querySelector(".fancybox__spinner");i||((i=document.createElement("div")).classList.add("fancybox__spinner"),i.innerHTML=this.option("template.spinner"),i.addEventListener("click",(function(){e.Carousel.Panzoom.velocity||e.close()})),t.$el.prepend(i))}},{key:"hideLoading",value:function(t){var e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}},{key:"next",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}},{key:"prev",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}},{key:"jumpTo",value:function(){var t;this.Carousel&&(t=this.Carousel).slideTo.apply(t,arguments)}},{key:"close",value:function(t){var e=this;if(t&&t.preventDefault(),!["closing","customClosing","destroy"].includes(this.state)&&!1!==this.trigger("shouldClose",t)&&(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"!==this.state)){this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");var i=this.getSlide();if(this.Carousel.slides.forEach((function(t){t.$content&&t.index!==i.index&&e.Carousel.trigger("removeSlide",t)})),"closing"===this.state){var n=void 0===i.hideClass?this.option("hideClass"):i.hideClass;this.animateCSS(i.$content,n,(function(){e.destroy()}),!0)}}}},{key:"destroy",value:function(){this.state="destroy",this.trigger("destroy");var t=this.option("placeFocusBack")?this.getSlide().$trigger:null;if(this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t)if(i.preventScrollSupported)t.focus({preventScroll:!0});else{var e=document.body.scrollTop;t.focus(),document.body.scrollTop=e}delete et[this.id];var n=i.getInstance();n?n.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}}],[{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i(t,e)}},{key:"fromEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.defaultPrevented&&!(t.button&&0!==t.button||t.ctrlKey||t.metaKey||t.shiftKey)){var n,o,a,s=t.target;if((s.matches("[data-fancybox-trigger]")||(s=s.closest("[data-fancybox-trigger]")))&&(n=s&&s.dataset&&s.dataset.fancyboxTrigger),n){var r=document.querySelectorAll('[data-fancybox="'.concat(n,'"]')),l=parseInt(s.dataset.fancyboxIndex,10)||0;s=r.length?r[l]:s}s||(s=t.target),Array.from(i.openers.keys()).reverse().some((function(e){a=s;var i=!1;try{a instanceof Element&&("string"==typeof e||e instanceof String)&&(i=a.matches(e)||(a=a.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),o=e,!0)}));var c=!1;if(o){e.event=t,e.target=a,a.origTarget=t.target,c=i.fromOpener(o,e);var h=i.getInstance();h&&"ready"===h.state&&t.detail&&document.body.classList.add("is-using-mouse")}return c}}},{key:"fromOpener",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){for(var e=["false","0","no","null","undefined"],i=["true","1","yes"],n=Object.assign({},t.dataset),o={},a=0,s=Object.entries(n);a<s.length;a++){var r=v(s[a],2),l=r[0],c=r[1];if("fancybox"!==l)if("width"===l||"height"===l)o["_".concat(l)]=c;else if("string"==typeof c||c instanceof String)if(e.indexOf(c)>-1)o[l]=!1;else if(i.indexOf(o[l])>-1)o[l]=!0;else try{o[l]=JSON.parse(c)}catch(t){o[l]=c}else o[l]=c}return t instanceof Element&&(o.$trigger=t),o},o=[],a=e.startIndex||0,s=e.target||null,r=void 0===(e=x({},e,i.openers.get(t))).groupAttr?"data-fancybox":e.groupAttr,l=r&&s&&s.getAttribute("".concat(r)),c=void 0!==e.groupAll&&e.groupAll;if(c||l?(o=[].slice.call(document.querySelectorAll(t)),c||(o=o.filter((function(t){return t.getAttribute("".concat(r))===l})))):o=[s],!o.length)return!1;var h=i.getInstance();return!(h&&o.indexOf(h.options.$trigger)>-1)&&(a=s?o.indexOf(s):a,new i(o=o.map(n),x({},e,{startIndex:a,$trigger:s})))}},{key:"bind",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){document.body.addEventListener("click",i.fromEvent,!1)}B&&(i.openers.size||(/complete|interactive|loaded/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n)),i.openers.set(t,e))}},{key:"unbind",value:function(t){i.openers.delete(t),i.openers.size||i.destroy()}},{key:"destroy",value:function(){for(var t;t=i.getInstance();)t.destroy();i.openers=new Map,document.body.removeEventListener("click",i.fromEvent,!1)}},{key:"getInstance",value:function(t){return t?et[t]:Object.values(et).reverse().find((function(t){return!["closing","customClosing","destroy"].includes(t.state)&&t}))||null}},{key:"close",value:function(){for(var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=null;e=i.getInstance();)if(e.close(),!t)return}}]),i}(A);nt.version="4.0.4",nt.defaults=tt,nt.openers=new Map,nt.Plugins=Q,nt.bind("[data-fancybox]");for(var ot=0,at=Object.entries(nt.Plugins||{});ot<at.length;ot++){var st=v(at[ot],2);st[0];var rt=st[1];"function"==typeof rt.create&&rt.create(nt)}t.Carousel=D,t.Fancybox=nt,t.Panzoom=z}));
