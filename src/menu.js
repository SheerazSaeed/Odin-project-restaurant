function loadMenuPage() {

  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const headline = document.createElement('h1');
  headline.textContent = 'Menu';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  
  const dishes = [
    { name: "Pho Bo", description: "Traditional Vietnamese beef noodle soup", price: "$10" },
    { name: "Banh Mi", description: "Vietnamese sandwich with various fillings", price: "$5" },
    { name: "Goi Cuon", description: "Fresh spring rolls with shrimp, herbs, bun noodles, and lettuce", price: "$7" },
    { name: "Bun Thit Nuong", description: "Grilled pork over vermicelli noodles, herbs, and lettuce", price: "$9" },
    { name: "Ca Phe Sua Da", description: "Vietnamese iced coffee with sweetened condensed milk", price: "$4" }
  ];

  dishes.forEach((dish) => {
    const dishDiv = document.createElement('div');
    dishDiv.classList.add('dish');

    const dishName = document.createElement('h3');
    dishName.textContent = dish.name;
    dishDiv.appendChild(dishName);

    const dishDescription = document.createElement('p');
    dishDescription.textContent = dish.description;
    dishDiv.appendChild(dishDescription);

    const dishPrice = document.createElement('span');
    dishPrice.textContent = dish.price;
    dishDiv.appendChild(dishPrice);

    menuDiv.appendChild(dishDiv);
  });

  content.appendChild(headline);
  content.appendChild(menuDiv);
 
};

export default loadMenuPage;
