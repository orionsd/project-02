var mainpr_cont = document.querySelector('.main-products');

var slider_mask = document.createElement("div");

slider_mask.classList.add("slider-mask");
mainpr_cont.appendChild(slider_mask);

var activeNum = 2;

var paths =

{
    "979fd423-31f5-43a5-8509-9e5c493d5322": "img/prod-item-01.png",
    "0419a346-6390-4de5-92d9-c6b925ce6a6d": "img/prod-item-02.png",
    "335d22af-2800-44b4-8da7-042b86db317c": "img/prod-item-03.png",
    "d488d96e-7db1-4df6-b2e8-6998e8bf253b": "img/prod-item-02.png",
    "e0bc125c-a6e8-4191-9e2a-2ec531d4ca03": "img/prod-item-01.png",
    "ffcb58eb-771f-475a-8d7d-ba204fc9e269": "img/prod-item-03.png"
};


var leng = 0;
for (var s in paths) {
    leng++;
}


/*  main-products*/


function insertBlock(i, apps) {

    if (i < leng) {

        var block = document.createElement("a");
        slider.appendChild(block);

        var block_img = block.appendChild(document.createElement("img"));
        var block_name = block.appendChild(document.createElement("span"));
        var block_date = block.appendChild(document.createElement("time"));

        block.href = "#";
        block.classList.add("main-products__item");

        block_img.classList.add("main-products__item-img");

        var guid = apps[i].guid;
        var path = paths[guid];

        block_img.src = path;

        block_name.classList.add("main-products__item-name");
        block_name.innerHTML = apps[i].title;

        block_date.classList.add("main-products__item-date");
        var date = apps[i].lastUpdate;



    }


    block_date.innerHTML = timeConverter(date);


    function timeConverter(lastUpdate) {
        var a = new Date(lastUpdate * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year + ' ';
        return time;
    }

};

/*Slider*/


var slider = slider_mask.appendChild(document.createElement("div"));
slider.classList.add("slider");

var slide_width = 358;

var btn_next = document.querySelector(".slider__arrow-next");
var btn_prev = document.querySelector(".slider__arrow-prev");
var slider_move = document.querySelector(".slider");

slider_move.style.left = 0 + "px";


btn_next.onclick = function () {

    var hor = parseInt(slider_move.style.left);
    var max_l = (leng - 3) * ( -1 * (slide_width));


    if (parseInt(slider_move.style.left) > max_l) {
        slider_move.style.left = hor - slide_width + "px";

        activeNum += 1;
        makeMeRed(activeNum);

    }

};

btn_prev.onclick = function () {

    var hor = parseInt(slider_move.style.left);
    if ((parseInt(slider_move.style.left)) < 0) {
        slider_move.style.left = hor + slide_width + "px";
        activeNum -= 1;
        makeMeRed(activeNum);
    }

};

var circle_btn = [];
for (var j = 1; j < 6; j++) {

    circle_btn[j] = document.getElementsByClassName('circles__item')[j];
}

circle_btn[1].onclick = function () {

    slider_move.style.left = (slide_width) * 0 + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn[2].onclick = function () {
    slider_move.style.left = (slide_width) * (-1) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn[3].onclick = function () {

    slider_move.style.left = (slide_width) * (-2) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

circle_btn[4].onclick = function () {

    slider_move.style.left = (slide_width) * (-3) + "px";
    circle_toggle();
    this.classList.add("crl-active");
    console.log(parseInt(slider_move.style.left));

};

function circle_toggle() {

    for (var i = 1; i < circle_btn.length; i++) {
        circle_btn[i].classList.remove("crl-active");
        console.log(circle_btn.length.className);
    }
}

function makeMeRed(i) {

    for (var j = 1; j < circle_btn.length; j++) {
        circle_btn[j].classList.remove("crl-active");
    }
    circle_btn[i - 1].classList.add("crl-active");

}

/*console.log(btn_next);*/

/*Ajax*/


function getContent() {

    /*console.log("getContent");*/

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "api/app_packages.json", true);
    xhr.send();
    xhr.onload = function () {

        if (xhr.status === 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            var data = xhr.responseText;
        }

        var apps = JSON.parse(data); //apps - object
        var li = apps.length;

        /*  console.log(li);*/

        for (var i = 0; i < li; i++)
            insertBlock(i, apps);

    };

}












   



