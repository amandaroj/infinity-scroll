const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
//Unsplash API
const count = 10;
const apiKey = 'DlPj0HjV8AiZ2cELg4GY3osVZj8uAE3jSNLsv2Q34Ys';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&topics=animal,cats&count=${count}`;

//create elements for links and photos, add to DOM
function displayPhotos() {
  photosArray.forEach(photo => {
    //create <a> element to link to unspash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    //create image for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    //put img inside <a> element, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
//Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //catch error here
  }
}

//On Load
getPhotos();
