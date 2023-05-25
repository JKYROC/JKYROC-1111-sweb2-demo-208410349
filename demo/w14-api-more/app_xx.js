const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.theaudiodb.com/artist/111236';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data',data);
    displayItems(data);
  } catch (error) {
    console.error(error);
  }
  });

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strArtist} = item;
      return `<p>${strArtist}</p> `;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
