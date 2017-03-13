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
    {name: "Инвестиции"},
];


function createBlocks_app() {

    for (var l = 0; l < links.length; l++) {

        var block_link = aside_nav.appendChild(document.createElement("li"));
        var block_a = block_link.appendChild(document.createElement("a"));

        block_link.classList.add("aside-nav__item");

        block_a.classList.add("aside-nav__link");
        block_a.href = "#";

        block_a.innerHTML = links[l].name;
    }

}


createBlocks_app();


