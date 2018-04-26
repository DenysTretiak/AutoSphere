function extendItems(item, number, before){
   for(i = 0; i<number; i++){
       if(item){
        let sidebarItem = item.cloneNode(true);
        if(before){
            item.parentNode.insertBefore(sidebarItem, before);
            continue;
        }
        item.parentNode.appendChild(sidebarItem);   
       }
       
   }
}


const sidebarItem = document.querySelector('.sidebar-product');
const productPost = document.querySelector('.product-post');
const showMore = document.querySelector('.show-more');
const productGridPost = document.querySelector('.mt-productlisthold>li');
extendItems(sidebarItem, 3);
extendItems(productPost, 4, showMore);
extendItems(productGridPost, 8);

const listViewBtn = document.querySelector('.view-list');
const gridViewBtn = document.querySelector('.view-grid');
const productList = document.querySelectorAll('.product-post');
const productGrid = document.querySelector('.mt-productlisthold');

if(listViewBtn){
    listViewBtn.addEventListener('click', function(){
        productList.forEach(item=>{
           item.style.display = 'block';
        })
       //  productList.style.display = 'block';
        productGrid.style.display = 'none';
   });
}

if(gridViewBtn){
    gridViewBtn.addEventListener('click', function(){
        console.log(productList);
        productList.forEach(item=>{
            item.style.display = 'none';
         })
        productGrid.style.display = 'block';
    })
}

