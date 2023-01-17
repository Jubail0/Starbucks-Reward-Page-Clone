const menu_container = document.getElementById('menu_container');
const items_container = document.getElementById('menu');
const items = items_container.getElementsByClassName('menu_items');
const location_tag = document.getElementById('location');
const hamburger = document.getElementById('hamburger');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const overlay = document.getElementById('overlay');
const tabbed_options = document.getElementById('tabbed_options');
const option = tabbed_options.getElementsByClassName('option');
const menus_wrapper = document.getElementById('menus_wrapper');
const tabbed_menus = menus_wrapper.getElementsByClassName('tabbed_menus');


for(i=0; items.length > i; i++){
    items[i].addEventListener("click",(e)=>{  

    for (let j = 0; j < items.length; j++) {
        items[j].classList.remove("active");
        
    }
          
          e.target.classList.add("active");
          location_tag.classList.remove('active')
    
          window.document.body.style.overflow = 'visible';
          overlay.classList.remove('overlay');

          menu_container.classList.add('navSlideOut')
          menu_container.classList.remove('navSlideIn')
          line1.classList.add('animationOut')
          line3.classList.add('animation2_out')
          line1.classList.remove('animation')
          line3.classList.remove('animation2')
          line2.style.opacity = 1;
          
    })
}


location_tag.addEventListener("click",(e)=>{

  location_tag.style.height = '100%'
  location_tag.classList.add('active')

  for (let j = 0; j < items.length; j++) {
    
    items[j].classList.remove("active");
    

}

})


// hamburger toggle

hamburger.addEventListener('click',()=>{
      
if(line1.classList.contains('animation') && line3.classList.contains('animation2')
 ){
    line1.classList.add('animationOut')
    line3.classList.add('animation2_out')
    line1.classList.remove('animation')
    line3.classList.remove('animation2')
    line2.style.opacity = 1;
   
    window.document.body.style.overflow = 'visible';
   
}else{
    line1.classList.add('animation')
    line3.classList.add('animation2')
    line1.classList.remove('animationOut')
    line3.classList.remove('animation2_out')
    line2.style.opacity = 0;
    window.document.body.style.overflow = 'hidden';

    
}

overlay.classList.toggle('overlay');
menu_container.classList.toggle('slide');

})
// hamburger toggle



// Tab Active

for(i=0; i<option.length; i++){
    option[i].addEventListener("click",(e)=>{

       for(j=0; j<option.length; j++){
        option[j].classList.remove('tab-active')
       }

       e.target.classList.add('tab-active');

       for(k=0; k <tabbed_menus.length; k++){
        tabbed_menus[k].classList.add('menu-display-none')
       }
       tabbed_menus[e.target.id].classList.remove('menu-display-none')
    })
}
// Tab Active
