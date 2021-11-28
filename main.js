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
    document.getElementById(
        "lightTableMenuNav"
    ).innerHTML = `منو را به چپ بکشید<svg class="svg-inline--fa fa-angle-double-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>`;
    loader();
    // کارت ویزیت ساده
    const firstProduct = {
        product: [
            {
                title: "گلاسه بدون روکش",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 58e3,
                href:
                    "https://chaparvan.com/product/MjU1NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%DB%8C%DA%A9%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 68e3,
                href:
                    "https://chaparvan.com/product/MjU1NjQ1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "سلفون براق",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 82e3,
                href:
                    "https://chaparvan.com/product/MjU1NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 74e3,
                href:
                    "https://chaparvan.com/product/MjU1NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 69e3,
                href:
                    "https://chaparvan.com/product/MjU1NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 105e3,
                href:
                    "https://chaparvan.com/product/MjU1NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 97e3,
                href:
                    "https://chaparvan.com/product/MjU1NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 92e3,
                href:
                    "https://chaparvan.com/product/MjU1NjUz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "سلفون مات",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 82e3,
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
                price: 74e3,
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
                price: 69e3,
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
                price: 105e3,
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
                price: 97e3,
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
                price: 92e3,
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
                price: 7e4,
                href:
                    "https://chaparvan.com/product/MjU1NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 65e3,
                href:
                    "https://chaparvan.com/product/MjU1NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 87e3,
                href:
                    "https://chaparvan.com/product/MjU1NjYy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 82e3,
                href:
                    "https://chaparvan.com/product/MjU1NjYz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-%DB%8C%D9%88%D9%88%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "سلفون براق دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "1",
                price: 147e3,
                href:
                    "https://chaparvan.com/product/MjU1NjY0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "3",
                price: 135e3,
                href:
                    "https://chaparvan.com/product/MjU1NjY1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 127e3,
                href:
                    "https://chaparvan.com/product/MjU1NjY2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "سلفون مات دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "1",
                price: 147e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzcy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "3",
                price: 135e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzcz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 127e3,
                href:
                    "https://chaparvan.com/product/MjU3NzI4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "کتان امباس",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "2",
                price: 109e3,
                href: "https://chaparvan.com/product/MjU1Nzc0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 104e3,
                href: "https://chaparvan.com/product/MjU1Nzc1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "2",
                price: 113e3,
                href: "https://chaparvan.com/product/MjU1Nzc2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-2%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 108e3,
                href: "https://chaparvan.com/product/MjU1Nzc3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "کتان آلمان",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 16e4,
                href:
                    "https://chaparvan.com/product/MjU1Nzc4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 155e3,
                href: "https://chaparvan.com/product/MjU1Nzc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 165e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 16e4,
                href:
                    "https://chaparvan.com/product/MjU1Nzgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%D9%88-7-%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "کتان دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "8",
                price: 152e3,
                href: "https://chaparvan.com/product/MjU1Nzgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "کرافت دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "15",
                price: 152e3,
                href: "https://chaparvan.com/product/MjU1Nzgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "کرافت مربع",
                side: "دو رو",
                size: "5.5 * 5.5",
                circulation: "1000",
                delivery: "17",
                price: 36e4,
                href: "https://chaparvan.com/product/MjU1Nzg0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "سوسماری",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 93e3,
                href: "https://chaparvan.com/product/MjU1Nzg1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 101e3,
                href: "https://chaparvan.com/product/MjU1Nzg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%88%D8%B3%D9%85%D8%A7%D8%B1%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "مقوا پشت طوسی فیلتر دار",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 67e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzg3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%D9%BE%D8%B4%D8%AA-%D8%B7%D9%88%D8%B3%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%AF%D8%A7%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "مقوا کارتی",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "10",
                price: 104e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzg4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "10",
                price: 109e3,
                href:
                    "https://chaparvan.com/product/MjU1Nzg5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%85%D9%82%D9%88%D8%A7-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
        ],
    };
    // کارت ویزیت فانتزی
    const secondProduct = {
        product: [
            {
                title: "طرح چرم",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 19e4,
                href: "https://chaparvan.com/product/MjU3NjA0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "طرح چرم دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "15",
                price: 115e3,
                href:
                    "https://chaparvan.com/product/MjU3NjA3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B7%D8%B1%D8%AD-%DA%86%D8%B1%D9%85-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت امباس",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "15",
                price: 285e3,
                href:
                    "https://chaparvan.com/product/MjU3NjMy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D8%A7%D9%85%D8%A8%D8%A7%D8%B3-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "کارتی 300 گرم نقره کوب",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 22e4,
                href:
                    "https://chaparvan.com/product/MjU3NjMz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 225e3,
                href:
                    "https://chaparvan.com/product/MjU3NjM0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-300%DA%AF%D8%B1%D9%85-%D9%86%D9%82%D8%B1%D9%87-%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "کتان طلاکوب",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 235e3,
                href:
                    "https://chaparvan.com/product/MjU3NjM2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%DB%8C%DA%A9%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 245e3,
                href:
                    "https://chaparvan.com/product/MjU3NjM3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-%D8%AF%D9%88%D8%B1%D9%88-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "کتان دورگرد طلاکوب",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "15",
                price: 34e4,
                href:
                    "https://chaparvan.com/product/MjU3NjM4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%AA%D8%A7%D9%86-%D8%AF%D8%B1%D9%88%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-15%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت برجسته",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "4",
                price: 263e3,
                href: "https://chaparvan.com/product/MjY1NzA2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-4%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 255e3,
                href: "https://chaparvan.com/product/MjY1NzA1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-7%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت برجسته مربع",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "4",
                price: 2e5,
                href:
                    "https://chaparvan.com/product/MjY1NzA3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%85%D8%B1%D8%A8%D8%B9-4%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 19e4,
                href:
                    "https://chaparvan.com/product/MjY1NzA4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%85%D8%B1%D8%A8%D8%B9-7%D8%B1%D9%88%D8%B2%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت برجسته قالب خاص",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 465e3,
                href:
                    "https://chaparvan.com/product/MjU3NjM5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%AC%D8%B3%D8%AA%D9%87-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "سلفون مات مخملی",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 2e5,
                href:
                    "https://chaparvan.com/product/MjU3NjQw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%DB%8C%DA%A9%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 21e4,
                href:
                    "https://chaparvan.com/product/MjU3NjQx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%D9%88-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "سلفون مات مخملی دورگرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "8",
                price: 276e3,
                href:
                    "https://chaparvan.com/product/MjU3NjQ4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "سلفون مات مخملی دورگرد طلاکوب",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "11",
                price: 1495e3,
                href:
                    "https://chaparvan.com/product/MjU3NjQ5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-11%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "سلفون مات مخملی دورگرد موضعی",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "11",
                price: 309e3,
                href:
                    "https://chaparvan.com/product/MjU3NjUw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D9%85%D8%AE%D9%85%D9%84%DB%8C-%D8%AF%D9%88%D8%B1%DA%AF%D8%B1%D8%AF-%D9%85%D9%88%D8%B6%D8%B9%DB%8C-11%D8%B1%D9%88%D8%B2%D9%87-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات سلفونی",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "4",
                price: 26e4,
                href:
                    "https://chaparvan.com/product/MjU3NjUx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 25e4,
                href:
                    "https://chaparvan.com/product/MjU3NjUy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت مات سلفونی مربع",
                side: "دو رو",
                size: "6 * 6",
                circulation: "1000",
                delivery: "4",
                price: 2e5,
                href:
                    "https://chaparvan.com/product/MjU3NjU0=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 6",
                circulation: "1000",
                delivery: "9",
                price: 19e4,
                href:
                    "https://chaparvan.com/product/MjU3NjU1=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%D9%86%DB%8C%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B3%D9%84%D9%81%D9%88%D9%86%DB%8C-%D9%85%D8%B1%D8%A8%D8%B9-9%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت براق",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "3",
                price: 251e3,
                href:
                    "https://chaparvan.com/product/MjU3NjU3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 241e3,
                href:
                    "https://chaparvan.com/product/MjU3NjU4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت براق دوگوش گرد",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 245e3,
                href:
                    "https://chaparvan.com/product/MjU3NjU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%AF%D9%88-%DA%AF%D9%88%D8%B4-%DA%AF%D8%B1%D8%AF-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت براق طلاکوب",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "4",
                price: 42e4,
                href:
                    "https://chaparvan.com/product/MjU3NjYw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 4e5,
                href:
                    "https://chaparvan.com/product/MjU3NjYx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت براق گرد",
                side: "دو رو",
                size: "6 * 6",
                circulation: "1000",
                delivery: "10",
                price: 17e4,
                href:
                    "https://chaparvan.com/product/MjU3Njc5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%DA%AF%D8%B1%D8%AF-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت براق مربع",
                side: "دو رو",
                size: "6 * 6",
                circulation: "1000",
                delivery: "10",
                price: 185e3,
                href:
                    "https://chaparvan.com/product/MjU3Njgw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت براق ویزیتی",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "4",
                price: 21e4,
                href:
                    "https://chaparvan.com/product/MjU3Njgx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-4%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "8",
                price: 198e3,
                href:
                    "https://chaparvan.com/product/MjU3Njgy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-8%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت براق طرح موج",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 24e4,
                href:
                    "https://chaparvan.com/product/MjU3Njgz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت براق قالب خاص",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "8",
                price: 455e3,
                href: "https://chaparvan.com/product/MjU3NzE2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D8%A8%D8%B1%D8%A7%D9%82-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "3",
                price: 358e3,
                href: "https://chaparvan.com/product/MjU3NzE3=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 351e3,
                href: "https://chaparvan.com/product/MjU3NzE4=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لمینت مات طلاکوب",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "12",
                price: 525e3,
                href:
                    "https://chaparvan.com/product/MjU3NzE5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات دایره",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 23e4,
                href:
                    "https://chaparvan.com/product/MjU3NzIw=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%AF%D8%A7%DB%8C%D8%B1%D9%87-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات مربع",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 23e4,
                href:
                    "https://chaparvan.com/product/MjU3NzIx=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%85%D8%B1%D8%A8%D8%B9-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات ویزیتی",
                side: "دو رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "10",
                price: 28e4,
                href:
                    "https://chaparvan.com/product/MjU3NzIy=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لمینت مات طرح موج",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "10",
                price: 345e3,
                href:
                    "https://chaparvan.com/product/MjU3NzIz=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%84%D9%85%DB%8C%D9%86%D8%AA-%D9%85%D8%A7%D8%AA-%D8%B7%D8%B1%D8%AD-%D9%85%D9%88%D8%AC-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "کرافت قالب خاص",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "17",
                price: 36e4,
                href:
                    "https://chaparvan.com/product/MjU3NzI2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%DA%A9%D8%B1%D8%A7%D9%81%D8%AA-%D9%82%D8%A7%D9%84%D8%A8-%D8%AE%D8%A7%D8%B5-17%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
        ],
    }; // کارت ویزیت مدیریتی
    // کارت ویزیت مدیریتی
    const thirdProduct = {
        product: [
            {
                title: "پی وی سی 760 میکرون",
                side: "دو رو",
                size: "6 * 9",
                circulation: "1000",
                delivery: "7",
                price: 141e4,
                href:
                    "https://chaparvan.com/product/MjU3ODU5=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-760-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "پی وی سی 300 میکرون",
                side: "دو رو",
                size: "6 * 9",
                circulation: "500",
                delivery: "10",
                price: 305e3,
                href:
                    "https://chaparvan.com/product/MjU3ODg2=/%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%BE%DB%8C-%D9%88%DB%8C-%D8%B3%DB%8C-300-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D9%86-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
        ],
    };
    // لیبل
    const fourthProduct = {
        product: [
            {
                title: "لیبل بدون روکش",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 11e4,
                href: "https://chaparvan.com/product/MjU3OTAw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 102e3,
                href: "https://chaparvan.com/product/MjU3OTAx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 95e3,
                href: "https://chaparvan.com/product/MjU3OTAy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لیبل سلفون براق",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 12e4,
                href: "https://chaparvan.com/product/MjU4MDUw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 105e3,
                href: "https://chaparvan.com/product/MjU4MDUx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 1e5,
                href: "https://chaparvan.com/product/MjU4MDUy=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لیبل سلفون مات",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 1e5,
                href: "https://chaparvan.com/product/MjU4MDUz=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لیبل یووی",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "1",
                price: 109e3,
                href: "https://chaparvan.com/product/MjU4MDU0=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "3",
                price: 1e5,
                href: "https://chaparvan.com/product/MjU4MDU1=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "7",
                price: 96e3,
                href: "https://chaparvan.com/product/MjU4MDU2=/%D9%84%DB%8C%D8%A8%D9%84-%DB%8C%D9%88%D9%88%DB%8C-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "بدون روکش طلاکوب",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "15",
                price: 16e4,
                href: "https://chaparvan.com/product/MjU4MDU3=/%D9%84%DB%8C%D8%A8%D9%84-%D8%A8%D8%AF%D9%88%D9%86-%D8%B1%D9%88%DA%A9%D8%B4-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لیبل سلفون براق طلاکوب",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "5",
                price: 19e4,
                href: "https://chaparvan.com/product/MjU4MDU4=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-5%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "10",
                price: 18e4,
                href: "https://chaparvan.com/product/MjU4MDU5=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D8%A8%D8%B1%D8%A7%D9%82-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "لیبل سلفون مات طلاکوب",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "12",
                price: 175e3,
                href: "https://chaparvan.com/product/MjU4MDYx=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B3%D9%84%D9%81%D9%88%D9%86-%D9%85%D8%A7%D8%AA-%D8%B7%D9%84%D8%A7%DA%A9%D9%88%D8%A8-12%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "لیبل شیشه ای",
                side: "یک رو",
                size: "4.8 * 8.5",
                circulation: "1000",
                delivery: "10",
                price: 45e4,
                href: "https://chaparvan.com/product/MjU4MDYw=/%D9%84%DB%8C%D8%A8%D9%84-%D8%B4%DB%8C%D8%B4%D9%87-%D8%A7%DB%8C-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
        ],
    };
    // تراکت تحریر
    const fifthProduct = {
        product: [
            {
                title: "تحریر ایرانی 80 گرم",
                side: "یک رو",
                size: "A6",
                circulation: "1000",
                delivery: "10",
                price: 65e3,
                href: "https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "2000",
                delivery: "10",
                price: 105e3,
                href: "https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "5000",
                delivery: "10",
                price: 21e4,
                href: "https://chaparvan.com/product/MjU3ODg3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "1000",
                delivery: "10",
                price: 135e3,
                href: "https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "2000",
                delivery: "10",
                price: 21e4,
                href: "https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "5000",
                delivery: "10",
                price: 42e4,
                href: "https://chaparvan.com/product/MjU3ODg5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "1000",
                delivery: "10",
                price: 265e3,
                href: "https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "2000",
                delivery: "10",
                price: 42e4,
                href: "https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "5000",
                delivery: "10",
                price: 84e4,
                href: "https://chaparvan.com/product/MjU3ODkx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%DB%8C%DA%A9%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "1000",
                delivery: "10",
                price: 95e3,
                href: "https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "2000",
                delivery: "10",
                price: 14e4,
                href: "https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "5000",
                delivery: "10",
                price: 25e4,
                href: "https://chaparvan.com/product/MjU3ODg4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A6-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "1000",
                delivery: "10",
                price: 19e4,
                href: "https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "2000",
                delivery: "10",
                price: 28e4,
                href: "https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "5000",
                delivery: "10",
                price: 51e4,
                href: "https://chaparvan.com/product/MjU3ODkw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A5-%D8%AF%D9%88%D8%B1%D9%88-10%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C-",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "1000",
                delivery: "10",
                price: 38e4,
                href: "https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "2000",
                delivery: "10",
                price: 555e3,
                href: "https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "1000",
                delivery: "10",
                price: 101e4,
                href: "https://chaparvan.com/product/MjU3ODky=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-A4-%D8%AF%D9%88%D8%B1%D9%88",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "تحریر 80 گرم خارجی",
                side: "یک رو",
                size: "A6",
                circulation: "1000",
                delivery: "1",
                price: 1e5,
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
                price: 145e3,
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
                price: 8e4,
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
                price: 129e3,
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
                price: 26e4,
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
                price: 7e4,
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
                price: 118e3,
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
                price: 245e3,
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
                price: 185e3,
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
                price: 27e4,
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
                price: 156e3,
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
                price: 25e4,
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
                price: 515e3,
                href: "https://chaparvan.com/product/MjU3Nzcz=/%DA%86%D8%A7%D9%BE-%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "1000",
                delivery: "7",
                price: 146e3,
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
                price: 235e3,
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
                price: 495e3,
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
                price: 335e3,
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
                price: 503e3,
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
                price: 3e5,
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
                price: 483e3,
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
                price: 985e3,
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
                price: 228e3,
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
                price: 464e3,
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
                price: 98e4,
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
                price: 121e3,
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
                price: 194e3,
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
                price: 378e3,
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
                price: 116e3,
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
                price: 174e3,
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
                price: 354e3,
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
                price: 234e3,
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
                price: 373e3,
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
                price: 739e3,
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
                price: 224e3,
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
                price: 358e3,
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
                price: 72e4,
                href: "https://chaparvan.com/product/MjU3Nzkz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "1000",
                delivery: "1",
                price: 13e4,
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
                price: 18e4,
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
                price: 107e3,
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
                price: 161e3,
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
                price: 3e5,
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
                price: 98e3,
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
                price: 152e3,
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
                price: 285e3,
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
                price: 24e4,
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
                price: 336e3,
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
                price: 21e4,
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
                price: 315e3,
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
                price: 595e3,
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
                price: 2e5,
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
                price: 3e5,
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
                price: 575e3,
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
                price: 448e3,
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
                price: 63e4,
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
                price: 41e4,
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
                price: 61e4,
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
                price: 114e4,
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
                price: 395e3,
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
                price: 59e4,
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
                price: 115e4,
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
                price: 147e3,
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
                price: 256e3,
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
                price: 445e3,
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
                price: 17e4,
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
                price: 247e3,
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
                price: 44e4,
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
                price: 34e4,
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
                price: 5e5,
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
                price: 893e3,
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
                price: 329e3,
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
                price: 487e3,
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
                price: 873e3,
                href: "https://chaparvan.com/product/MjU3Nzk1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-B5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
        ],
    };
    // تراکت گلاسه
    const sixthProduct = {
        product: [
            {
                title: "تراکت گلاسه 135 گرم",
                side: "یک رو",
                size: "A6",
                circulation: "1000",
                delivery: "1",
                price: 125e3,
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
                price: 19e4,
                href: "https://chaparvan.com/product/MjU3Nzk3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "1000",
                delivery: "3",
                price: 1e5,
                href: "https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "2000",
                delivery: "3",
                price: 175e3,
                href: "https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "5000",
                delivery: "3",
                price: 38e4,
                href: "https://chaparvan.com/product/MjU3Nzk4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "1000",
                delivery: "7",
                price: 95e3,
                href: "https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "2000",
                delivery: "7",
                price: 165e3,
                href: "https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6",
                circulation: "5000",
                delivery: "7",
                price: 365e3,
                href: "https://chaparvan.com/product/MjU3Nzk5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "1000",
                delivery: "1",
                price: 23e4,
                href: "https://chaparvan.com/product/MjU3ODAz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "2000",
                delivery: "1",
                price: 365e3,
                href: "https://chaparvan.com/product/MjU3ODAz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "1000",
                delivery: "3",
                price: 2e5,
                href: "https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "2000",
                delivery: "3",
                price: 34e4,
                href: "https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "5000",
                delivery: "3",
                price: 755e3,
                href: "https://chaparvan.com/product/MjU3ODA0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "1000",
                delivery: "7",
                price: 19e4,
                href: "https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "2000",
                delivery: "7",
                price: 33e4,
                href: "https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5",
                circulation: "5000",
                delivery: "7",
                price: 735e3,
                href: "https://chaparvan.com/product/MjU3ODA1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "1000",
                delivery: "1",
                price: 43e4,
                href: "https://chaparvan.com/product/MjU3ODQ1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "2000",
                delivery: "1",
                price: 71e4,
                href: "https://chaparvan.com/product/MjU3ODQ1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "1000",
                delivery: "3",
                price: 405e3,
                href: "https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "2000",
                delivery: "3",
                price: 685e3,
                href: "https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "5000",
                delivery: "3",
                price: 155e4,
                href: "https://chaparvan.com/product/MjU3ODQ2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "1000",
                delivery: "7",
                price: 385e3,
                href: "https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "2000",
                delivery: "7",
                price: 67e4,
                href: "https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4",
                circulation: "5000",
                delivery: "7",
                price: 15e5,
                href: "https://chaparvan.com/product/MjU3ODQ3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "1000",
                delivery: "3",
                price: 15e4,
                href: "https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "2000",
                delivery: "3",
                price: 26e4,
                href: "https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "5000",
                delivery: "3",
                price: 56e4,
                href: "https://chaparvan.com/product/MjU3ODUx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "1000",
                delivery: "7",
                price: 145e3,
                href: "https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "2000",
                delivery: "7",
                price: 25e4,
                href: "https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B6",
                circulation: "5000",
                delivery: "7",
                price: 54e4,
                href: "https://chaparvan.com/product/MjU3ODUy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "1000",
                delivery: "3",
                price: 3e5,
                href: "https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "2000",
                delivery: "3",
                price: 52e4,
                href: "https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "5000",
                delivery: "3",
                price: 11e5,
                href: "https://chaparvan.com/product/MjU3ODU1=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "1000",
                delivery: "7",
                price: 29e4,
                href: "https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "2000",
                delivery: "7",
                price: 5e5,
                href: "https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "B5",
                circulation: "5000",
                delivery: "7",
                price: 108e4,
                href: "https://chaparvan.com/product/MjU3ODU2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "1000",
                delivery: "1",
                price: 149e3,
                href: "https://chaparvan.com/product/MjU3ODAw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "2000",
                delivery: "1",
                price: 22e4,
                href: "https://chaparvan.com/product/MjU3ODAw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "1000",
                delivery: "3",
                price: 125e3,
                href: "https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "2000",
                delivery: "3",
                price: 208e3,
                href: "https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "5000",
                delivery: "3",
                price: 42e4,
                href: "https://chaparvan.com/product/MjU3ODAx=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "1000",
                delivery: "7",
                price: 12e4,
                href: "https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "2000",
                delivery: "7",
                price: 2e5,
                href: "https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6",
                circulation: "5000",
                delivery: "7",
                price: 405e3,
                href: "https://chaparvan.com/product/MjU3ODAy=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A6-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "1000",
                delivery: "1",
                price: 285e3,
                href: "https://chaparvan.com/product/MjU3ODA2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "2000",
                delivery: "1",
                price: 43e4,
                href: "https://chaparvan.com/product/MjU3ODA2=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "1000",
                delivery: "3",
                price: 26e4,
                href: "https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "2000",
                delivery: "3",
                price: 41e4,
                href: "https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "5000",
                delivery: "3",
                price: 835e3,
                href: "https://chaparvan.com/product/MjU3ODA3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "1000",
                delivery: "7",
                price: 25e4,
                href: "https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "2000",
                delivery: "7",
                price: 4e5,
                href: "https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5",
                circulation: "5000",
                delivery: "7",
                price: 815e3,
                href: "https://chaparvan.com/product/MjU3ODA4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A5-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "1000",
                delivery: "1",
                price: 545e3,
                href: "https://chaparvan.com/product/MjU3ODQ4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "2000",
                delivery: "1",
                price: 835e3,
                href: "https://chaparvan.com/product/MjU3ODQ4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "1000",
                delivery: "3",
                price: 51e4,
                href: "https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "2000",
                delivery: "3",
                price: 82e4,
                href: "https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "5000",
                delivery: "3",
                price: 168e4,
                href: "https://chaparvan.com/product/MjU3ODQ5=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "1000",
                delivery: "7",
                price: 495e3,
                href: "https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "2000",
                delivery: "7",
                price: 81e4,
                href: "https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4",
                circulation: "5000",
                delivery: "7",
                price: 1635e3,
                href: "https://chaparvan.com/product/MjU3ODUw=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-A4-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "1000",
                delivery: "3",
                price: 205e3,
                href: "https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "2000",
                delivery: "3",
                price: 325e3,
                href: "https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "5000",
                delivery: "3",
                price: 635e3,
                href: "https://chaparvan.com/product/MjU3ODUz=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "1000",
                delivery: "7",
                price: 2e5,
                href: "https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "2000",
                delivery: "7",
                price: 315e3,
                href: "https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B6",
                circulation: "5000",
                delivery: "7",
                price: 62e4,
                href: "https://chaparvan.com/product/MjU3ODU0=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B6-(17*12)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "1000",
                delivery: "3",
                price: 41e4,
                href: "https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "2000",
                delivery: "3",
                price: 63e4,
                href: "https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "5000",
                delivery: "3",
                price: 126e4,
                href: "https://chaparvan.com/product/MjU3ODU3=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "1000",
                delivery: "7",
                price: 4e5,
                href: "https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "2000",
                delivery: "7",
                price: 63e4,
                href: "https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "B5",
                circulation: "5000",
                delivery: "7",
                price: 124e4,
                href: "https://chaparvan.com/product/MjU3ODU4=/%D8%AA%D8%B1%D8%A7%DA%A9%D8%AA-%DA%AF%D9%84%D8%A7%D8%B3%D9%87-B5-(24*17)-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
        ],
    };
    // سربرگ
    const seventhProduct = {
        product: [
            {
                title: "سربرگ تحریر 80 گرم",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 125e3,
                href: "https://chaparvan.com/product/MjYxNzU4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 185e3,
                href: "https://chaparvan.com/product/MjYxNzU4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 102e3,
                href: "https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 17e4,
                href: "https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "5000",
                delivery: "3",
                price: 34e4,
                href: "https://chaparvan.com/product/MjYxNzU5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 97e3,
                href: "https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 16e4,
                href: "https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A6 سایز دقیق",
                circulation: "5000",
                delivery: "7",
                price: 325e3,
                href: "https://chaparvan.com/product/MjYxNzYw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 23e4,
                href: "https://chaparvan.com/product/MjYxNzY0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 35e4,
                href: "https://chaparvan.com/product/MjYxNzY0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 205e3,
                href: "https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 312e3,
                href: "https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "5000",
                delivery: "3",
                price: 67e4,
                href: "https://chaparvan.com/product/MjYxNzY1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 195e3,
                href: "https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 315e3,
                href: "https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A5 سایز دقیق",
                circulation: "5000",
                delivery: "7",
                price: 65e4,
                href: "https://chaparvan.com/product/MjYxNzY2=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 435e3,
                href: "https://chaparvan.com/product/MjYxNzcw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 67e4,
                href: "https://chaparvan.com/product/MjYxNzcw=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 405e3,
                href: "https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 655e3,
                href: "https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 132e4,
                href: "https://chaparvan.com/product/MjYxNzcx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 393e3,
                href: "https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 635e3,
                href: "https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "یک رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 1305e3,
                href: "https://chaparvan.com/product/MjYxNzcy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%DB%8C%DA%A9%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 166e3,
                href: "https://chaparvan.com/product/MjYxNzYx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 232e3,
                href: "https://chaparvan.com/product/MjYxNzYx=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 145e3,
                href: "https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 218e3,
                href: "https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "5000",
                delivery: "3",
                price: 34e4,
                href: "https://chaparvan.com/product/MjYxNzYy=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 14e4,
                href: "https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 208e3,
                href: "https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A6 سایز دقیق",
                circulation: "5000",
                delivery: "7",
                price: 385e3,
                href: "https://chaparvan.com/product/MjYxNzYz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 315e3,
                href: "https://chaparvan.com/product/MjYxNzY3=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 445e3,
                href: "https://chaparvan.com/product/MjYxNzY3=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 29e4,
                href: "https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 392e3,
                href: "https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "5000",
                delivery: "3",
                price: 718e3,
                href: "https://chaparvan.com/product/MjYxNzY4=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 274e3,
                href: "https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 415e3,
                href: "https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A5 سایز دقیق",
                circulation: "5000",
                delivery: "7",
                price: 77e4,
                href: "https://chaparvan.com/product/MjYxNzY5=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1-%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "1",
                price: 59e4,
                href: "https://chaparvan.com/product/MjYxNzcz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "1",
                price: 885e3,
                href: "https://chaparvan.com/product/MjYxNzcz=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-1%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "3",
                price: 57e4,
                href: "https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "3",
                price: 83e4,
                href: "https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "5000",
                delivery: "3",
                price: 1575e3,
                href: "https://chaparvan.com/product/MjYxNzc0=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-3%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "1000",
                delivery: "7",
                price: 565e3,
                href: "https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "2000",
                delivery: "7",
                price: 815e3,
                href: "https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
            {
                title: "",
                side: "دو رو",
                size: "A4 سایز دقیق",
                circulation: "5000",
                delivery: "7",
                price: 155e4,
                href: "https://chaparvan.com/product/MjYxNzc1=/%D8%B3%D8%B1%D8%A8%D8%B1%DA%AF-%D8%AA%D8%AD%D8%B1%DB%8C%D8%B1--%D8%AF%D9%88%D8%B1%D9%88-7%D8%B1%D9%88%D8%B2-%DA%A9%D8%A7%D8%B1%DB%8C",
                btn: "خرید",
                classHtml: "white",
            },
        ],
    };
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
          <td class="money">${Number(firstProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(secondProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(thirdProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(fourthProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(fifthProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(sixthProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(seventhProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(eighthProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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
          <td class="money">${Number(ninthProduct.product[i].price.toFixed(1)).toLocaleString()}</td>
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

    document.head.innerHTML += '<link rel="stylesheet" href="https://chaparvan.github.io/source/style.css">';

    document.getElementById("navbar-new").children[0].setAttribute("onclick", "changeItem(this ,'#firstProduct')");
    document.getElementById("navbar-new").children[1].setAttribute("onclick", "changeItem(this ,'#secondProduct')");
    document.getElementById("navbar-new").children[2].setAttribute("onclick", "changeItem(this ,'#thirdProduct')");
    document.getElementById("navbar-new").children[3].setAttribute("onclick", "changeItem(this ,'#fourthProduct')");
    document.getElementById("navbar-new").children[4].setAttribute("onclick", "changeItem(this ,'#fifthProduct')");
    document.getElementById("navbar-new").children[5].setAttribute("onclick", "changeItem(this ,'#sixthProduct')");
    document.getElementById("navbar-new").children[6].setAttribute("onclick", "changeItem(this ,'#seventhProduct')");
    document.getElementById("navbar-new").children[7].setAttribute("onclick", "changeItem(this ,'#eighthProduct')");
    document.getElementById("navbar-new").children[8].setAttribute("onclick", "changeItem(this ,'#ninthProduct')");

    document.querySelector("html").style.scrollBehavior = "smooth"; //scroll-behavior: smooth;
}
if (document.getElementById("quickAccess")) {
    document.querySelector("html").style.scrollBehavior = "smooth"; //scroll-behavior: smooth;
}
if (document.getElementById("boxQuestionAnswer")) {
    let tgQuestionTab = document.getElementsByClassName("question");
    let tgQuestionTabi;
    for (tgQuestionTabi = 0; tgQuestionTabi < tgQuestionTab.length; tgQuestionTabi++) {
        tgQuestionTab[tgQuestionTabi].addEventListener("click", function () {
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
if (document.getElementById("splide")) {
    !(function () {
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
    $(function () {
        let isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;

        let isMobile2 = window.matchMedia("only screen and (max-width: 768px)").matches;

        if (isMobile2) {
            new Splide("#splide", {
                perPage: 1,
                direction: "rtl",
                pagination: false,
                rewind: true,
                perMove: 1,
            }).mount();
        } else if (isMobile) {
            new Splide("#splide", {
                perPage: 2,
                direction: "rtl",
                pagination: false,
                rewind: true,
                perMove: 1,
            }).mount();
        } else {
            new Splide("#splide", {
                perPage: 4,
                direction: "rtl",
                pagination: false,
                rewind: true,
                perMove: 1,
            }).mount();
        }
    });
}

let showMoreText = () => {
    let box = document.querySelector("#textBox");
    if (box.offsetHeight == 300) {
        box.style.height = `${box.scrollHeight + 65}px`;
        this.innerText = "مشاهده کمتر";
    } else {
        box.style.height = `300px`;
        this.innerText = "مشاهده بیشتر";
    }
};
if (document.getElementById("textBox")) {
    document.querySelector("#showMoreText").addEventListener("click", showMoreText);
}
