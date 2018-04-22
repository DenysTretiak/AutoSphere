function deletePlaceholder(elem, text){
   elem.addEventListener('focus', function(){
         elem.placeholder='';
   });

   elem.addEventListener('blur', function(){
    elem.placeholder = text; 
  });
}

const hederSearch = document.querySelector('.mt-search');
deletePlaceholder(hederSearch, 'поиск по товарам');