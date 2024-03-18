function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'The Pho Palace';
  
  const image = new Image();
  image.src = "";
  image.alt = 'A picture of Pho';
  
  const description = document.createElement('p');
  description.textContent = 'Our restaurant offers the best Vietnamese dining experience, with delicious meals prepared by top chefs.';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
};

export default loadHomePage;

