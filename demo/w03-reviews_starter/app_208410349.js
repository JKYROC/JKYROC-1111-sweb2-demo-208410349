// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  }
  // {
  //   id: 5,
  //   name: '郭昱霆',
  //   job: '資訊工程師',
  //   img: 'https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w03-reviews-starter/about.jpg',
  //   text: ' 搜集使用者數據及電商商品資料，協助廣告優化師優化廣告及解決客戶回報問題經手50多家客戶，熟悉使用網頁工具，熟練運用不同專案工具達成目標設計協助專案運行的套件，解決公司總客戶數5 ％面臨到的問題熟悉Google Ads、Google Analytics、Meta 等廣告渠道',
  // },
];
console.log ([reviews.length]);

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

const showReview = (person) =>{
  const item = reviews[person];
  console.log('item', item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


window.addEventListener('DOMContentLoaded', () =>{
  showReview(currentItem);
});

nextBtn.addEventListener('click', () =>{
  currentItem++;
  if(currentItem >= reviews.length){
    currentItem = 0;
  }
  console.log('currentItem',)
  showReview(currentItem);
})
prevBtn.addEventListener('click', () =>{
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  console.log('currentItem',)
  showReview(currentItem);
})