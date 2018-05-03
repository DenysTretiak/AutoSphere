
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

const commentItem = document.querySelector('.comment-li');
extendItems(commentItem, 6);