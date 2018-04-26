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


const buttonHolder = document.querySelector('.show-more');
const blog_post = document.querySelector('.blog-post.style2'); 
const popularItemPost = document.querySelector('.popular-post>li')

extendItems(blog_post, 6, buttonHolder);
extendItems(popularItemPost, 3);
