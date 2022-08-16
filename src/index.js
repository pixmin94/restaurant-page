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

  function createNavBar(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
  }

  function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
  }

  function init(){
    const content = document.getElementById("content");
    console.log(content)
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createMain());
  }

  init();