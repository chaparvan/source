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
if (document.getElementById("firstProduct")) {
  // کارت ویزیت ساده
  const firstProduct = {
    product: [
      {
        title: "گلاسه بدون روکش",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 56000,
        href: "https://chaparvan.com/product/MjU1NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%DB%8C%DA%A9%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 66000,
        href: "https://chaparvan.com/product/MjU1NjQ1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "سلفون براق",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "1",
        price: 79000,
        href: "https://chaparvan.com/product/MjU1NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 71000,
        href: "https://chaparvan.com/product/MjU1NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 66000,
        href: "https://chaparvan.com/product/MjU1NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "1",
        price: 100000,
        href: "https://chaparvan.com/product/MjU1NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 92000,
        href: "https://chaparvan.com/product/MjU1NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 87000,
        href: "https://chaparvan.com/product/MjU1NjUz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "سلفون مات",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "1",
        price: 79000,
        href: "https://chaparvan.com/product/MjU1NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 71000,
        href: "https://chaparvan.com/product/MjU1NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 66000,
        href: "https://chaparvan.com/product/MjU1NjU2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "1",
        price: 100000,
        href: "https://chaparvan.com/product/MjU1NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 92000,
        href: "https://chaparvan.com/product/MjU1NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 87000,
        href: "https://chaparvan.com/product/MjU1NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "گلاسه یووی",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 70000,
        href: "https://chaparvan.com/product/MjU1NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "یک رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 61000,
        href: "https://chaparvan.com/product/MjU1NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "3",
        price: 86000,
        href: "https://chaparvan.com/product/MjU1NjYy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "4.8 * 8.5",
        circulation: "1000",
        delivery: "7",
        price: 80000,
        href: "https://chaparvan.com/product/MjU1NjYz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "سلفون براق دورگرد",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "1",
        price: 140000,
        href: "https://chaparvan.com/product/MjU1NjY0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "3",
        price: 130000,
        href: "https://chaparvan.com/product/MjU1NjY1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "7",
        price: 120000,
        href: "https://chaparvan.com/product/MjU1NjY2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "سلفون مات دورگرد",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "1",
        price: 140000,
        href: "https://chaparvan.com/product/MjU1Nzcy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "",
      },
      {
        title: "",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "3",
        price: 130000,
        href: "https://chaparvan.com/product/MjU1Nzcz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
      {
        title: "",
        side: "دو رو",
        size: "6 * 9",
        circulation: "1000",
        delivery: "7",
        price: 120000,
        href: "https://chaparvan.com/product/MjU3NzI4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
        btn: "خرید",
        classHtml: "white",
      },
    ],
  };
  // کارت ویزیت
  const secondProduct = {
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
  // لیبل
  const thirdProduct = {
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
  // سربرگ
  const fourthProduct = {
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
  // پاکت
  const fifthProduct = {
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
}
