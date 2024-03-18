function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'The Pho Palace';
   
  const description = document.createElement('p');
  description.textContent = 
  'Indulge in the rich and vibrant flavors of Vietnam at The Pho Palace. Nestled in the heart of London, our restaurant provides a warm and inviting ambiance coupled with outstanding service. Our menu boasts a wide variety of authentic Vietnamese dishes, prepared using only the freshest ingredients and time-honored cooking methods. From the aromatic Pho to the zesty Banh Mi, every plate is a celebration of taste and aesthetics. Embark on a culinary adventure that promises to enchant your palate and keep you coming back for more. Experience the finest of Vietnamese cuisine at Pho Palace today.';

  const restaurantHours = document.createElement('div');
  restaurantHours.classList.add('restaurant-hours');

  const hoursText = document.createElement('pre');
  hoursText.textContent = `
    Hours
    Sunday: 10am - 10pm
    Monday: 9am - 6pm
    Tuesday: 9am - 6pm
    Wednesday: 9am - 6pm
    Thursday: 9am - 10pm
    Friday: 10am - 10pm
    Saturday: 9am - 10pm
  `;

  const restaurantLocation = document.createElement('pre');
  restaurantLocation.textContent = `
    Our location:
    Pho Palace
    5 High street
    Camden, London
    England
  `
   
  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(restaurantHours);
  content.appendChild(hoursText);
  content.appendChild(restaurantLocation);
};

export default loadHomePage;

