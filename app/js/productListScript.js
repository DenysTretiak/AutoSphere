function extendItems(item, number, before){
   console.log(item);
   for(i = 0; i<number; i++){
       let sidebarItem = item.cloneNode(true);
       if(before){
           item.parentNode.insertBefore(sidebarItem, before);
           continue;
       }
       item.parentNode.appendChild(sidebarItem); 
   }
}

const sidebarItem = document.querySelector('.mt-product4');
const productPost = document.querySelector('.product-post');
const showMore = document.querySelector('.show-more');
extendItems(sidebarItem, 3);
extendItems(productPost, 5, showMore);