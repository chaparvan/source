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
  setTimeout(showPage, 2000);
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
  const firstProduct={product:[{title:"گلاسه بدون روکش",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:56e3,href:"https://chaparvan.com/product/MjU1NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%DB%8C%DA%A9%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjQ1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون براق",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:79e3,href:"https://chaparvan.com/product/MjU1NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:71e3,href:"https://chaparvan.com/product/MjU1NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:1e5,href:"https://chaparvan.com/product/MjU1NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:92e3,href:"https://chaparvan.com/product/MjU1NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:87e3,href:"https://chaparvan.com/product/MjU1NjUz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:79e3,href:"https://chaparvan.com/product/MjU1NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:71e3,href:"https://chaparvan.com/product/MjU1NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:66e3,href:"https://chaparvan.com/product/MjU1NjU2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:1e5,href:"https://chaparvan.com/product/MjU1NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:92e3,href:"https://chaparvan.com/product/MjU1NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:87e3,href:"https://chaparvan.com/product/MjU1NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"گلاسه یووی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:7e4,href:"https://chaparvan.com/product/MjU1NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:61e3,href:"https://chaparvan.com/product/MjU1NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:86e3,href:"https://chaparvan.com/product/MjU1NjYy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:8e4,href:"https://chaparvan.com/product/MjU1NjYz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون براق دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"1",price:14e4,href:"https://chaparvan.com/product/MjU1NjY0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:13e4,href:"https://chaparvan.com/product/MjU1NjY1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:12e4,href:"https://chaparvan.com/product/MjU1NjY2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"1",price:14e4,href:"https://chaparvan.com/product/MjU1Nzcy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:13e4,href:"https://chaparvan.com/product/MjU1Nzcz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:12e4,href:"https://chaparvan.com/product/MjU3NzI4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان امباس",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"2",price:108e3,href:"https://chaparvan.com/product/MjU1Nzc0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:103e3,href:"https://chaparvan.com/product/MjU1Nzc1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"2",price:112e3,href:"https://chaparvan.com/product/MjU1Nzc2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:107e3,href:"https://chaparvan.com/product/MjU1Nzc3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان آلمان",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:156e3,href:"https://chaparvan.com/product/MjU1Nzc4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:151e3,href:"https://chaparvan.com/product/MjU1Nzc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:161e3,href:"https://chaparvan.com/product/MjU1Nzgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:156e3,href:"https://chaparvan.com/product/MjU1Nzgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:145e3,href:"https://chaparvan.com/product/MjU1Nzgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کرافت دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:147e3,href:"https://chaparvan.com/product/MjU1Nzgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کرافت مربع",side:"دو رو",size:"5.5 * 5.5",circulation:"1000",delivery:"17",price:3e5,href:"https://chaparvan.com/product/MjU1Nzg0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سوسماری",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:88e3,href:"https://chaparvan.com/product/MjU1Nzg1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:96e3,href:"https://chaparvan.com/product/MjU1Nzg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"مقوا پشت طوسی فیلتر دار",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:66e3,href:"https://chaparvan.com/product/MjU1Nzg3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%D9%BE%D8%B4%D8%AA-%D8%B7%D9%88%D8%B3%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%AF%D8%A7%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"مقوا کارتی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:1e5,href:"https://chaparvan.com/product/MjU1Nzg4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:105e3,href:"https://chaparvan.com/product/MjU1Nzg5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"}]};
  // کارت ویزیت فانتزی
  const secondProduct={product:[{title:"طرح چرم",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:19e4,href:"https://chaparvan.com/product/MjU3NjA0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"طرح چرم دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:115e3,href:"https://chaparvan.com/product/MjU3NjA3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت امباس",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:285e3,href:"https://chaparvan.com/product/MjU3NjMy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D8%A7%D9%85%D8%A8%D8%A7%D8%B3-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"کارتی 300 گرم نقره کوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:22e4,href:"https://chaparvan.com/product/MjU3NjMz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:225e3,href:"https://chaparvan.com/product/MjU3NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:235e3,href:"https://chaparvan.com/product/MjU3NjM2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:245e3,href:"https://chaparvan.com/product/MjU3NjM3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%D8%AF%D9%88%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"کتان دورگرد طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"15",price:34e4,href:"https://chaparvan.com/product/MjU3NjM4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D8%B1%D9%88%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت برجسته قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:4e5,href:"https://chaparvan.com/product/MjU3NjM5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:2e5,href:"https://chaparvan.com/product/MjU3NjQw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:21e4,href:"https://chaparvan.com/product/MjU3NjQx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"سلفون مات مخملی دورگرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:276e3,href:"https://chaparvan.com/product/MjU3NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی دورگرد طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"11",price:1495e3,href:"https://chaparvan.com/product/MjU3NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-11%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"سلفون مات مخملی دورگرد موضعی",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"11",price:309e3,href:"https://chaparvan.com/product/MjU3NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D9%85%D9%88%D8%B6%D8%B9%DB%8C-11%D8%B1%D9%88%D8%B2%D9%87-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات سلفونی",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:26e4,href:"https://chaparvan.com/product/MjU3NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:25e4,href:"https://chaparvan.com/product/MjU3NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت مات سلفونی مربع",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"4",price:2e5,href:"https://chaparvan.com/product/MjU3NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"9",price:19e4,href:"https://chaparvan.com/product/MjU3NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-9%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:251e3,href:"https://chaparvan.com/product/MjU3NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:241e3,href:"https://chaparvan.com/product/MjU3NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق دوگوش گرد",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:245e3,href:"https://chaparvan.com/product/MjU3NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88-%DA%AF%D9%88%D8%B4-%DA%AF%D8%B1%D8%AF-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"4",price:42e4,href:"https://chaparvan.com/product/MjU3NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:4e5,href:"https://chaparvan.com/product/MjU3NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق گرد",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"10",price:17e4,href:"https://chaparvan.com/product/MjU3Njc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق مربع",side:"دو رو",size:"6 * 6",circulation:"1000",delivery:"10",price:185e3,href:"https://chaparvan.com/product/MjU3Njgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق ویزیتی",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"4",price:21e4,href:"https://chaparvan.com/product/MjU3Njgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"8",price:198e3,href:"https://chaparvan.com/product/MjU3Njgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت براق طرح موج",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:24e4,href:"https://chaparvan.com/product/MjU3Njgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت براق قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"8",price:405e3,href:"https://chaparvan.com/product/MjU3NzE2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5",btn:"خرید",classHtml:""},{title:"لمینت مات",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"3",price:358e3,href:"https://chaparvan.com/product/MjU3NzE3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:351e3,href:"https://chaparvan.com/product/MjU3NzE4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لمینت مات طلاکوب",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"12",price:525e3,href:"https://chaparvan.com/product/MjU3NzE5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات دایره",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:23e4,href:"https://chaparvan.com/product/MjU3NzIw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D8%A7%DB%8C%D8%B1%D9%87-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات مربع",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:23e4,href:"https://chaparvan.com/product/MjU3NzIx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات ویزیتی",side:"دو رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:28e4,href:"https://chaparvan.com/product/MjU3NzIy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات طرح موج",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"10",price:345e3,href:"https://chaparvan.com/product/MjU3NzIz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لمینت مات قالب خاص",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"17",price:315e3,href:"https://chaparvan.com/product/MjU3NzI2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};
  // کارت ویزیت مدیریتی
  const thirdProduct={product:[{title:"پی وی سی 760 میکرون",side:"دو رو",size:"6 * 9",circulation:"1000",delivery:"7",price:141e4,href:"https://chaparvan.com/product/MjU3ODU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-760-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"پی وی سی 300 میکرون",side:"دو رو",size:"6 * 9",circulation:"500",delivery:"10",price:305e3,href:"https://chaparvan.com/product/MjU3ODg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-300-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};
  // لیبل
  const fourthProduct={product:[{title:"لیبل بدون روکش",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:11e4,href:"https://chaparvan.com/product/MjU3OTAw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:102e3,href:"https://chaparvan.com/product/MjU3OTAx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:95e3,href:"https://chaparvan.com/product/MjU3OTAy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون براق",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:12e4,href:"https://chaparvan.com/product/MjU4MDUw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:105e3,href:"https://chaparvan.com/product/MjU4MDUx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:1e5,href:"https://chaparvan.com/product/MjU4MDUy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون مات",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:1e5,href:"https://chaparvan.com/product/MjU4MDUz=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لیبل یووی",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"1",price:109e3,href:"https://chaparvan.com/product/MjU4MDU0=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"3",price:1e5,href:"https://chaparvan.com/product/MjU4MDU1=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"7",price:96e3,href:"https://chaparvan.com/product/MjU4MDU2=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"بدون روکش طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"15",price:16e4,href:"https://chaparvan.com/product/MjU4MDU3=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8",btn:"خرید",classHtml:""},{title:"لیبل سلفون براق طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"5",price:19e4,href:"https://chaparvan.com/product/MjU4MDU4=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-5%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",btn:"خرید",classHtml:""},{title:"",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:18e4,href:"https://chaparvan.com/product/MjU4MDU5=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:"white"},{title:"لیبل سلفون مات طلاکوب",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"12",price:175e3,href:"https://chaparvan.com/product/MjU4MDYx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""},{title:"لیبل شیشه ای",side:"یک رو",size:"4.8 * 8.5",circulation:"1000",delivery:"10",price:45e4,href:"https://chaparvan.com/product/MjU4MDYw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B4%DB%8C%D8%B4%D9%87-%D8%A7%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",btn:"خرید",classHtml:""}]};
  // تراکت تحریر
  const fifthProduct = {
    product: [
      {
        title: "تراکت تحریر 80 گرم",
        side: "یک رو",
        size: "A6",
        circulation: "1000",
        delivery: "1",
        price: 100000,
        href: "https://chaparvan.com/product/MjU3NzM5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "2000",
        delivery: "1",
        price: 145000,
        href: "https://chaparvan.com/product/MjU3NzM5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "1000",
        delivery: "3",
        price: 80000,
        href: "https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "2000",
        delivery: "3",
        price: 129000,
        href: "https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "5000",
        delivery: "3",
        price: 260000,
        href: "https://chaparvan.com/product/MjU3NzQy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "1000",
        delivery: "7",
        price: 70000,
        href: "https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "2000",
        delivery: "7",
        price: 118000,
        href: "https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A6",
        circulation: "5000",
        delivery: "7",
        price: 245000,
        href: "https://chaparvan.com/product/MjU3NzQ0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "1000",
        delivery: "1",
        price: 185000,
        href: "https://chaparvan.com/product/MjU3Nzcx=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "2000",
        delivery: "1",
        price: 270000,
        href: "https://chaparvan.com/product/MjU3Nzcx=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "1000",
        delivery: "3",
        price: 156000,
        href: "https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "2000",
        delivery: "3",
        price: 250000,
        href: "https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "5000",
        delivery: "3",
        price: 515000,
        href: "https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },{
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "1000",
        delivery: "7",
        price: 146000,
        href: "https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "2000",
        delivery: "7",
        price: 235000,
        href: "https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A5",
        circulation: "5000",
        delivery: "7",
        price: 495000,
        href: "https://chaparvan.com/product/MjU3Nzc0=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "1000",
        delivery: "1",
        price: 335000,
        href: "https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "2000",
        delivery: "1",
        price: 503000,
        href: "https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "1000",
        delivery: "3",
        price: 300000,
        href: "https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "2000",
        delivery: "3",
        price: 483000,
        href: "https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "5000",
        delivery: "3",
        price: 985000,
        href: "https://chaparvan.com/product/MjU3Nzgx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "1000",
        delivery: "7",
        price: 228000,
        href: "https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "2000",
        delivery: "7",
        price: 464000,
        href: "https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "A4",
        circulation: "5000",
        delivery: "7",
        price: 980000,
        href: "https://chaparvan.com/product/MjU3Nzgy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "1000",
        delivery: "3",
        price: 121000,
        href: "https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "2000",
        delivery: "3",
        price: 194000,
        href: "https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "5000",
        delivery: "3",
        price: 378000,
        href: "https://chaparvan.com/product/MjU3Nzg2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "1000",
        delivery: "7",
        price: 116000,
        href: "https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "2000",
        delivery: "7",
        price: 174000,
        href: "https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B6",
        circulation: "5000",
        delivery: "7",
        price: 354000,
        href: "https://chaparvan.com/product/MjU3Nzg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "1000",
        delivery: "3",
        price: 234000,
        href: "https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "2000",
        delivery: "3",
        price: 373000,
        href: "https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "5000",
        delivery: "3",
        price: 739000,
        href: "https://chaparvan.com/product/MjU3Nzky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "1000",
        delivery: "7",
        price: 224000,
        href: "https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "2000",
        delivery: "7",
        price: 358000,
        href: "https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "B5",
        circulation: "5000",
        delivery: "7",
        price: 720000,
        href: "https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      /*---------------------------------*/
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "1000",
        delivery: "1",
        price: 130000,
        href: "https://chaparvan.com/product/MjU3NzY4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "2000",
        delivery: "1",
        price: 180000,
        href: "https://chaparvan.com/product/MjU3NzY4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "1000",
        delivery: "3",
        price: 107000,
        href: "https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "2000",
        delivery: "3",
        price: 161000,
        href: "https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "5000",
        delivery: "3",
        price: 300000,
        href: "https://chaparvan.com/product/MjU3NzY5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "1000",
        delivery: "7",
        price: 98000,
        href: "https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "2000",
        delivery: "7",
        price: 152000,
        href: "https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A6",
        circulation: "5000",
        delivery: "7",
        price: 285000,
        href: "https://chaparvan.com/product/MjU3Nzcw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "1000",
        delivery: "1",
        price: 240000,
        href: "https://chaparvan.com/product/MjU3Nzc3=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "2000",
        delivery: "1",
        price: 336000,
        href: "hhttps://chaparvan.com/product/MjU3Nzc3=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "1000",
        delivery: "3",
        price: 210000,
        href: "https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "2000",
        delivery: "3",
        price: 315000,
        href: "https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "5000",
        delivery: "3",
        price: 595000,
        href: "https://chaparvan.com/product/MjU3Nzc4=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "1000",
        delivery: "7",
        price: 200000,
        href: "https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "2000",
        delivery: "7",
        price: 300000,
        href: "https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A5",
        circulation: "5000",
        delivery: "7",
        price: 575000,
        href: "https://chaparvan.com/product/MjU3Nzc5=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "1000",
        delivery: "1",
        price: 448000,
        href: "https://chaparvan.com/product/MjU3Nzgz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "2000",
        delivery: "1",
        price: 630000,
        href: "https://chaparvan.com/product/MjU3Nzgw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "1000",
        delivery: "3",
        price: 410000,
        href: "https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "2000",
        delivery: "3",
        price: 610000,
        href: "https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "5000",
        delivery: "3",
        price: 1140000,
        href: "https://chaparvan.com/product/MjU3Nzg0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "1000",
        delivery: "7",
        price: 395000,
        href: "https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "2000",
        delivery: "7",
        price: 590000,
        href: "https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "A4",
        circulation: "5000",
        delivery: "7",
        price: 1150000,
        href: "https://chaparvan.com/product/MjU3Nzg1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "1000",
        delivery: "3",
        price: 147000,
        href: "https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "2000",
        delivery: "3",
        price: 256000,
        href: "https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "5000",
        delivery: "3",
        price: 445000,
        href: "https://chaparvan.com/product/MjU3Nzg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "1000",
        delivery: "7",
        price: 170000,
        href: "https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "2000",
        delivery: "7",
        price: 247000,
        href: "https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B6",
        circulation: "5000",
        delivery: "7",
        price: 440000,
        href: "https://chaparvan.com/product/MjU3Nzg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "1000",
        delivery: "3",
        price: 340000,
        href: "https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "2000",
        delivery: "3",
        price: 500000,
        href: "https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "5000",
        delivery: "3",
        price: 893000,
        href: "https://chaparvan.com/product/MjU3Nzk0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "1000",
        delivery: "7",
        price: 329000,
        href: "https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "2000",
        delivery: "7",
        price: 487000,
        href: "https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "B5",
        circulation: "5000",
        delivery: "7",
        price: 873000,
        href: "https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
    ],
  };
  // پوستر
  const sixthProduct = {
    product: [
      {
        title: "کتان آلمان",
        side: "یک رو",
        size: "5.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 1560000,
        href: "#",
        btn: "خرید",
        classHtml: "",
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
