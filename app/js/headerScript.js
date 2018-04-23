function deletePlaceholder(elem, text){
   elem.addEventListener('focus', function(){
         elem.placeholder='';
   });

   elem.addEventListener('blur', function(){
    elem.placeholder = text; 
  });
}

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

const cartRow = document.querySelectorAll('.cart-row')[1];
const cartTotal = document.querySelectorAll('.cart-row-total')[1];
const hederSearch = document.querySelector('.mt-search');

extendItems(cartRow, 2, cartTotal);
deletePlaceholder(hederSearch, 'поиск по товарам');

document.addEventListener('click', function(event){
  console.log(event.target);
})