import menu from '../api/menu.json' assert { type: "json" };
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
const categories = ['all' , ...new Set(menu.map((item) =>item.category))]
const displayMenuButtons = () =>{
    let menuButtons = categories.map((category) =>{
        return`
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>
        `
    })
    menuButtons = menuButtons.join('');
    btnContainer.innerHTML = menuButtons;
    const filterItems = document.querySelectorAll(".filter-btn");
    console.log('filterItems',filterItems);
    filterItems.forEach( (btn) =>{
      btn.addEventListener('click', (e) =>{
        console.log('data-id',e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const filterMenu = menu.filter( (item) => item.category === category);
        if(category === 'all'){
          console.log('all',menu);
          displayMenuItems(menu);
        }else {
          console.log(category,filterMenu);
          displayMenuItems(filterMenu);
        }
      });
    });
}
const displayMenuItems = (menu) =>{
    let displayMenu = menu.map( (item) =>{
        return`
        <article class="menu-item">
          <img src="${item.remote_image}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
          </div>
        </article>
        `     
    });
        displayMenu = displayMenu.join('');
        sectionCenter.innerHTML = displayMenu;
}
window.addEventListener('DOMContentLoaded', () =>{
    displayMenuButtons(menu);
    displayMenuItems(menu);
});
