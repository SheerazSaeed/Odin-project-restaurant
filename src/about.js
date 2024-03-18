function loadAboutPage() {

  function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
    clearContent();  

  const content = document.getElementById('content');
  
  const headline = document.createElement('h1');
  headline.textContent = 'About us';
  
  const image = new Image();
  image.src = "./pho-restaurant-page.jpg";
  image.alt = 'A picture of Pho';
  
  const description = document.createElement('p');
  description.textContent = 'Established in 2023.';

  const formBox = document.createElement('form');

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
};

export default loadAboutPage;
