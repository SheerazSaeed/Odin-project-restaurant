function loadAboutPage() {

  const content = document.getElementById('content');
  content.innerHTML = ''; 
  const headline = document.createElement('h1');
  headline.textContent = 'About us';
  
  const description = document.createElement('p');
  description.textContent = 
    'Pho Palace was founded in 2020 with the goal of bringing authentic Vietnamese cuisine to our city. Our founders, inspired by their travels through Vietnam and their love for its rich culinary traditions, wanted to create a space where locals could experience the warmth and complexity of Vietnamese flavors. From our pho to our spring rolls, every dish is crafted with care, using traditional recipes and fresh ingredients.';

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';

  const contactDetails = document.createElement('p');
  contactDetails.innerHTML = 
  ` For reservations and inquiries:<br>
    Phone: 124-421-7890<br>
    Email: info@phopalace123.com`;

const contactForm = document.createElement('form');
  contactForm.setAttribute('method', 'post');
  contactForm.innerHTML = `
    <h2>Stay in Touch</h2>
    <p>Sign up for our newsletter to receive updates and special offers.</p>
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <button type="submit">Subscribe</button> `;

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(contactHeading);
  content.appendChild(contactDetails);
  content.appendChild(contactForm);
};

export default loadAboutPage;
