// alert("hello!")

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "ChakoEats";
  
    header.appendChild(restaurantName);
    console.log(header)
  
    return header;
  }

  function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.textContent = "test";
    main.setAttribute("id", "main");
    return main;
  }

  function initializeWebsite(){
    const content = document.getElementById("content");
    console.log(content)
    content.appendChild(createHeader());
    content.appendChild(createMain());
  }

  initializeWebsite();