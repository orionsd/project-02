var mainpr_cont = document.querySelector('.main-products');

var slider_mask = mainpr_cont.appendChild(document.createElement("div"));
slider_mask.classList.add("slider-mask");

var slider = slider_mask.appendChild(document.createElement("div"));
slider.classList.add("slider");

var slide_width = 358;

var circle_btn_02 = document.getElementsByClassName('circles__item')[1];
var circle_btn_03 = document.getElementsByClassName('circles__item')[2];
var circle_btn_04 = document.getElementsByClassName('circles__item')[3];
var circle_btn_05 = document.getElementsByClassName('circles__item')[4];

var packages = [{image: "img/prod-item-01.png", span: "СТАНДАРТНЫЙ ПАКЕТ", time: "08 впреля 2012"},
    {image: "img/prod-item-02.png", span: "НОВЫЙ ЦФТ-БАНК", time: "08 впреля 2012"},
    {image: "img/prod-item-03.png", span: "КАТАЛОГ РАЗРАБОТОК", time: "08 впреля 2012"},
    {image: "img/prod-item-02.png", span: "РАЗРАБОТОК", time: "10"},
    {image: "img/prod-item-01.png", span: "РАЗРАБОТОК", time: "555"},
    {image: "img/prod-item-03.png", span: "РАЗРАБОТОК", time: "777"},
];

/*  main-products*/

/*function getrandomindexs(max, count) {

    var arr = [];

    for (var j = 0; j < count;) {
        var k = Math.random() * max;
        k = Math.floor(k);

        if (arr.indexOf(k) == -1) {
            arr.push(k);
            *//* console.log(k);*//*
            j++;
        }
    }

    return arr;
}

getrandomindexs(5, 3);*/


for (var i = 0; i < packages.length; i++) {

    var block = document.createElement("a");
    slider.appendChild(block);

    var block_img = block.appendChild(document.createElement("img"));
    var block_name = block.appendChild(document.createElement("span"));
    var block_date = block.appendChild(document.createElement("time"));

    block.href = "#";
    block.classList.add("main-products__item");

    block_img.classList.add("main-products__item-img");
    block_img.src = packages[i].image;

    block_name.classList.add("main-products__item-name");
    block_name.innerHTML = packages[i].span;

    block_date.classList.add("main-products__item-date");
    block_date.innerHTML = packages[i].time;

}

             /*Slider*/

var btn_next = document.querySelector(".slider__arrow-next");
var btn_prev = document.querySelector(".slider__arrow-prev");
var slider_move = document.querySelector(".slider");

slider_move.style.left = 0 + "px";

btn_next.onclick = function () {

    var hor = parseInt(slider_move.style.left);
    var max_l = (packages.length - 3) * ( -1 * (slide_width));
    console.log(max_l);

    if (parseInt(slider_move.style.left) > max_l) {

        slider_move.style.left = hor - slide_width + "px";
        console.log(parseInt(slider_move.style.left));
    }
};


btn_prev.onclick = function () {

    var hor = parseInt(slider_move.style.left);
    if ((parseInt(slider_move.style.left)) < 0) {
        slider_move.style.left = hor + slide_width + "px";
    }
    console.log(parseInt(slider_move.style.left));
};


circle_btn_02.onclick = function () {
    slider_move.style.left = (slide_width) * 0 + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn_03.onclick = function () {
    slider_move.style.left = (slide_width) * (-1) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn_04.onclick = function () {

    slider_move.style.left = (slide_width) * (-2) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn_05.onclick = function () {

    slider_move.style.left = (slide_width) * (-3) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));
};


var circle_items = [circle_btn_02, circle_btn_03, circle_btn_04, circle_btn_05];


function circle_toggle() {

    for (var i = 0; i < circle_items.length; i++) {
        circle_items[i].classList.remove("crl-active");
        console.log(circle_items[i].className);

    }

}

/*console.log(btn_next);*/




