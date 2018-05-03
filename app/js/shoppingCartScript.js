function extendItems(item, number, before){
    console.log(item);
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

const tdElement = document.querySelector('.tr-item');
extendItems(tdElement, 2);
const commentItem = document.querySelector('.comment-li');
extendItems(commentItem, 6);