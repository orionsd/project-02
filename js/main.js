var mainpr_cont = document.querySelector('.main-products');

var  packages = [ { image: "img/prod-item-01.png", span: "СТАНДАРТНЫЙ ПАКЕТ", time: "08 впреля 2012"},
                  { image: "img/prod-item-02.png", span: "НОВЫЙ ЦФТ-БАНК", time: "08 впреля 2012"},
                  { image: "img/prod-item-03.png", span: "КАТАЛОГ РАЗРАБОТОК", time: "08 впреля 2012"},
                  { image: "img/prod-item-03.png", span: "РАЗРАБОТОК", time: "10"}, 
                  { image: "img/prod-item-03.png", span: "РАЗРАБОТОК", time: "10"}  ];

function getrandomIndex(max, count) {
  var arr = []; 
   for (var j = 0; j<count;) 
   {
         var k = Math.random()*max;
         k = Math.floor(k);

         if (arr.indexOf(k) == -1) 
         {
             arr.push(k);                
                      j++;
         }  
   }
  return arr;
}

/*  main-products*/

function createBlocks(number) { 

    var block = document.createElement("a");  
    var block_img = block.appendChild(document.createElement("img"));
    var block_name = block.appendChild(document.createElement("span"));
    var block_date = block.appendChild(document.createElement("time"));
    var i = number;

    var block_add = mainpr_cont.appendChild(block);  

    block.href = "#";
    block.classList.add("main-products__item"); 

    block_img.classList.add("main-products__item-img"); 
    block_img.src = packages[i].image;

    block_name.classList.add("main-products__item-name"); 
    block_name.innerHTML = packages[i].span;

    block_date.classList.add("main-products__item-date"); 
    block_date.innerHTML = packages[i].time;

    return block
}


function modifyBlock(block_num,random_number){

    var i = random_number;
    var block = arr_block[block_num]

    var block_img =  document.getElementsByClassName("main-products__item-img")[block_num];
    var block_name =  document.getElementsByClassName("main-products__item-name")[block_num];
    var block_date =  document.getElementsByClassName("main-products__item-date")[block_num];

    block_img.src = packages[i].image;
    block_name.innerHTML = packages[i].span;
    block_date.innerHTML = packages[i].time;
}

var arr_block = [];
function launch()

{ 
    var arr_m = getrandomIndex(4, 3);
    for (var l = 0; l < arr_m.length; l++) 
    {
        if(arr_block.length > 2){modifyBlock(l,arr_m[l]);}
        else{ arr_block[l] = createBlocks(arr_m[l]);}
    }
}

launch();

setInterval(launch, 2000);


       

