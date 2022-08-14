// alert("hello!")

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "ChakoEats";
  
    header.appendChild(restaurantName);
    console.log(header)
  
    const content = document.getElementById("content");
    console.log(content)
    content.appendChild(header);
  }

  createHeader();