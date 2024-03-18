function loadMenuPage() {

  function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
  clearContent();
  const content = document.getElementById('content');
  
  const headline = document.createElement('h1');
  headline.textContent = 'menu';
  
  const image = new Image();
  image.src = "./pho-restaurant-page.jpg";
  image.alt = 'A picture of Pho';
  
  const description = document.createElement('p');
  description.textContent = 'Our restaurant offers the best Vietnamese dining experience, with delicious meals prepared by top chefs.';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
};

export default loadMenuPage;
