function loadAboutPage() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  // Outer div for broader styling
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('outer-about');

  // Inner div for specific content styling
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('inner-about');

  const headline = document.createElement('h1');
  headline.textContent = 'About Us';
  headline.classList.add('about-headline');
  
  const description = document.createElement('p');
  description.textContent = 
    'Pho Palace was founded in 2020 with the goal of bringing authentic Vietnamese cuisine to our city. Our founders, inspired by their travels through Vietnam and their love for its rich culinary traditions, wanted to create a space where locals could experience the warmth and complexity of Vietnamese flavors. From our pho to our spring rolls, every dish is crafted with care, using traditional recipes and fresh ingredients.';
  description.classList.add('about-description');

  // Assuming contactSection is meant for the Contact Us information and form
  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');
  contactSection.innerHTML = `
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

  // Appending all elements to innerDiv
  innerDiv.appendChild(headline);
  innerDiv.appendChild(description);
  innerDiv.appendChild(contactSection);

  // Appending innerDiv to outerDiv
  outerDiv.appendChild(innerDiv);

  // Finally, appending outerDiv to content
  content.appendChild(outerDiv);

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    const submitMessage = document.getElementById('submitMessage');
    submitMessage.style.display = 'inline'; // Show "Submitted" message
    setTimeout(() => {
      submitMessage.style.display = 'none'; // Hide the message after 5 seconds
    }, 5000);
  });
}
export default loadAboutPage;
