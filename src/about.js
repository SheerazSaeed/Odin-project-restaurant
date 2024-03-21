function loadAboutPage() {

  const content = document.getElementById('content');
  content.innerHTML = ''; 
  const headline = document.createElement('h1');
  headline.textContent = 'About us';
  headline.classList.add('about-headline');
  
  const description = document.createElement('p');
  description.textContent = 
    'Pho Palace was founded in 2020 with the goal of bringing authentic Vietnamese cuisine to our city. Our founders, inspired by their travels through Vietnam and their love for its rich culinary traditions, wanted to create a space where locals could experience the warmth and complexity of Vietnamese flavors. From our pho to our spring rolls, every dish is crafted with care, using traditional recipes and fresh ingredients.';
  description.classList.add('about-description');  

  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';

  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');
  contactSection.innerHTML = `
    <h2>Contact Us</h2>
    For reservations and inquiries:<br>
    Phone: 124-421-7890<br>
    Email: info@phopalace123.com

    <p>Or fill in the form below:</p>
    <form id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" /><br>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" /><br>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea><br>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
    <span id="submitMessage" style="color: green; display: none;">Submitted</span>
  `;
  
  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(contactSection);

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    document.getElementById('submitMessage').style.display = 'inline'; // Show "Submitted" message
    setTimeout(() => {
      document.getElementById('submitMessage').style.display = 'none'; // Hide the message after 5 seconds
    }, 5000);
  });
}
export default loadAboutPage;
