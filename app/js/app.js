var aside_nav = document.querySelector('.aside-nav');

var links = [{name: "Стандартный пакет"},
    {name: "Новый ЦФТ-Банк"},
    {name: "Cash Management"},
    {name: "Аренда сейфов"},
    {name: "Банковские гарантии"},
    {name: "Казначейство"},
    {name: "Страхование"},
    {name: "Факторинговое обслуживание"},
    {name: "Переводы средств"},
    {name: "Расчетный центр"},
    {name: "Пластиковые карты"},
    {name: "Финансовый мониторинг"},
    {name: "Депозиты и вклады"},
    {name: "Инвестиции"}
];

function createBlocks_app() {


    for (var l = 0; l < links.length; l++) {

        var block_link = aside_nav.appendChild(document.createElement("li"));
        var block_a = block_link.appendChild(document.createElement("a"));

        block_link.classList.add("aside-nav__item");
        block_a.setAttribute("id", l)
        block_a.classList.add("aside-nav__link");
        block_a.href = "#";
        block_a.innerHTML = links[l].name;

        block_a.onclick = function () {

            app_main.innerHTML = "";
            insertBlock_app(this.id);
        }
    }
}

createBlocks_app();

var cell = [];

var paths =

{
    "979fd423-31f5-43a5-8509-9e5c493d5322": "img/prod-item-01.png",
    "0419a346-6390-4de5-92d9-c6b925ce6a6d": "img/prod-item-02.png",
    "335d22af-2800-44b4-8da7-042b86db317c": "img/prod-item-03.png",
    "d488d96e-7db1-4df6-b2e8-6998e8bf253b": "img/prod-item-02.png",
    "e0bc125c-a6e8-4191-9e2a-2ec531d4ca03": "img/prod-item-01.png",
    "ffcb58eb-771f-475a-8d7d-ba204fc9e269": "img/prod-item-03.png"
};

var app_main = document.querySelector(".app-main");


var leng = 0;
for (var s in paths) {
    leng++;
}

function insertBlock_app(i) {

    //console.log(i);

    if (i < leng) {

        var clear = document.createElement("div");
        var app_card = document.createElement("div");
        var app_mfunctions = document.createElement("ul");
        var m_nav_app = document.createElement("div");
        var m_nav_func = document.createElement("div");
        var m_nav_title = document.createElement("span");
        var m_nav_title_func = document.createElement("span");

        app_main.appendChild(clear);
        clear.classList.add("clear");

        app_main.appendChild(m_nav_app);
        m_nav_app.classList.add("m-nav");
        m_nav_app.classList.add("m-nav__app");

        m_nav_app.appendChild(m_nav_title);
        m_nav_title.classList.add("m-nav__title");

        app_main.insertBefore(app_card, clear);

        app_main.appendChild(app_card);
        app_card.classList.add("app-main__card");

        var app_desc = document.createElement("div");
        app_card.appendChild(app_desc);
        app_desc.classList.add("app-main__description");

        var app_date = app_desc.appendChild(document.createElement("time"));
        var app_text = app_desc.appendChild(document.createElement("p"));
        var app_req = app_desc.appendChild(document.createElement("p"));
        var app_price = app_desc.appendChild(document.createElement("span"));

        app_main.appendChild(clear);
        clear.classList.add("clear");


        app_main.appendChild(app_mfunctions);

        app_mfunctions.appendChild(m_nav_func);

        //console.log(m_nav_title);
        m_nav_title.innerHTML = apps[i].title;

        m_nav_title_func.innerHTML = "Основные функции";

        app_desc.appendChild(app_date);
        app_date.classList.add("app-main__time");
        var date = apps[i].lastUpdate;
        app_date.innerHTML = timeConverter(date);

        app_desc.appendChild(app_text);
        app_text.classList.add("app-main__text");
        app_text.innerHTML = apps[i].description;

        app_desc.appendChild(app_req);
        app_req.classList.add("app-main__text");
        app_req.innerHTML = apps[i].requirements;

        app_desc.appendChild(app_price);
        app_price.classList.add("app-main__price");
        app_price.innerHTML = apps[i].price + "$";

           app_main.appendChild(app_mfunctions);
         app_mfunctions.classList.add("app-main__functions");



        app_main.appendChild(app_mfunctions);

        for (var h = 0; h < apps[i].features.length; h++) {
            var app_mfunc_list = app_mfunctions.appendChild(document.createElement("li"));
            app_mfunc_list.innerHTML = apps[i].features[h];
            app_mfunc_list.classList.add("app-main__functions-item");
        }


        var app_imgcont = document.createElement("div");
        app_card.appendChild(app_imgcont);
        app_imgcont.classList.add("app-main__img-cont");


        m_nav_func.classList.add("m-nav");
        m_nav_func.classList.add("m-nav__app");
        m_nav_func.classList.add("m-nav__func");


        m_nav_func.appendChild(m_nav_title_func);
        m_nav_title_func.classList.add("m-nav__title");
        m_nav_title_func.classList.add("m-nav__title_func");


        var app_img = app_imgcont.appendChild(document.createElement("img"));
        var app_btn = app_imgcont.appendChild(document.createElement("a"));

        app_img.classList.add("app__item-img");

        var guid = apps[i].guid;
        var path = paths[guid];

        app_img.src = path;

        app_btn.classList.add("btn");
        app_btn.classList.add("app-main__bin-btn");
        app_btn.innerHTML = "В корзину";

            app_btn.onclick = function () {

            cart.add(apps[i].id, apps[i].title, apps[i].price);
           /* console.log(cart);*/


            var num = cart.cell.length-1;

            var k = document.querySelector('.table_popup');
            document.querySelector('.table_popup').insertBefore(t.content.cloneNode(true),document.querySelector('.table__row-02'));
            document.querySelector('.table__row-02').setAttribute("id","elem"+num);
            document.querySelector('.table__close_app').setAttribute("id","cb"+num);

            var table_id = k.querySelector('#elem'+i);
            var table_title = k.querySelector('.table__title_app');
            var table_price = k.querySelector('.table__price_app');
            table_title.innerHTML = cart.cell[num].title;
            table_price.innerHTML = cart.cell[num].price;

            var rem_btn = document.querySelector("#cb"+num);
            rem_btn.onclick = function ()
            {
                var elem = document.querySelector("#elem"+num);
                k.removeChild(elem)
            }

        }

        app_date.innerHTML = timeConverter(date);


        function timeConverter(lastUpdate) {
            var a = new Date(lastUpdate * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var time = date + ' ' + month + ' ' + year + ' ';
            return time;
        }

    }
};

var apps = [];
var cart;


function getContent() {

/* return new Promise(function(resolve, reject) {*/

    //console.log("getContent");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "api/app_packages.json", true);
    xhr.send();

    xhr.onload = function () {

        if (xhr.status === 200) {
            var data = xhr.responseText;
            /*alert(xhr.status + ': ' + xhr.statusText);*/
           /* resolve(this.response);*/
      }       /* else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
*/

   /*makeList("api/app_packages.json").then {*/

        apps = JSON.parse(data); //apps - object
        var li = apps.length;

        //console.log(apps);

        cart = new Cart();
        //console.log(cart);

        insertBlock_app(0);



}

    /*    function onload("api/app_packages.json") */

}

        function inStorage() {
        localStorage.setItem("key", JSON.stringify(cart));
        }


        function outStorage() {
                var currentItem = localStorage.getItem('key');
                outcome = JSON.parse(currentItem);
                console.log(outcome);
        }

  /*Cart*/

function Cart() {
    this.cell = [];

}

Cart.prototype.create = function () {

};

var k = 0;

Cart.prototype.add = function (id, title, price) {

    this.cell.push({id, title, price});

   //console.log(this.cell);
    k = this.cell.length - 1;

   // console.log(this.cell[k]);

};

Cart.prototype.remove = function (id) {

    for (var j = 0; j < this.cell.length; j++) {

        if (this.cell[j].id == id) {
            this.cell[j].remove();
        }
    }
};

/*POPUP*/

var cart_btn = document.querySelector('.nav__link_cart');


var ouibounce = document.querySelector('.om');
var sb = document.querySelector('.column-01__btn');
var pop = document.querySelector('.popup');
var under = document.querySelector('.underlay');
var cross_btn = document.querySelector('.popup__cross-btn');


cart_btn.onclick = function() {

    ouibounce.classList.remove('om');
    ouibounce.classList.remove('fade-out');
    ouibounce.classList.add('fade-in');


  inStorage();
  outStorage()


};

cross_btn.onclick = function() {
    ouibounce.classList.remove('fade-in');
    ouibounce.classList.add('fade-out');
};

under.onclick = function() {
    ouibounce.classList.remove('fade-in');
    ouibounce.classList.add('fade-out');
};


/*Template*/

/*var template_row = document.querySelector('#');*/

var t = document.querySelector('#template_row');

var table_price = document.querySelector('.table__price_app');
var table_price_overall = document.querySelector('.table__price_app-02');

