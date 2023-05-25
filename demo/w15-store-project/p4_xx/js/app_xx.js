// const url = `https://course-api.com/javascript-store-products`;
const url =`./api/products.json`;
let allProducts; //scope
let products;
const pContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');

const fetchData = async()=>{
    try{
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch data',data);
        return data;
    }
    catch(error){
        console.log(err);
    }
}

const displayProducts = (products) =>{
    let displayContent = products.map((product,index)=>{
        const{company,name,price} = product.fields;
        let image =`./images/product-${index+1}.jpg` ;
        return `
            <div class="single-product">
                <img src="${image}" 
                class="single-product-img img" 
                alt="${name}">
                <footer>
                    <h5 class="name">${name}</h5>
    <span class="price">$${price/100}</span>
                </footer>
          </div> `
    }).join('');
    // console.log('displayContent',display);
    pContainer.innerHTML = displayContent;
}

companyBtns.forEach((btn)=>{
    btn.addEventListener('click',(event) =>{
        const companyId = event.currentTarget.dataset.id;
        console.log('companyId',companyId);
        if(companyId==='all'){
            displayProducts(allProducts);
            console.log('all products',allProducts);
        }else{
            products = allProducts.filter((p)=>p.fields.company ===companyId);
            displayProducts(products);
            console.log(`${companyId}products`,products);
        }
    })
});
window.addEventListener('DOMContentLoaded', async () =>{
    allProducts = await fetchData();
    console.log('all products',allProducts);
    await displayProducts(allProducts);
})