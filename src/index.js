import loadHome from './home';
// import loadMenu from './menu';
// import loadContact from './contact';

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.setAttribute("src", "../src/img/logo.jpeg")
    logo.classList.add("main-logo");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "New Jeans";
  
    header.appendChild(logo);
    header.appendChild(restaurantName);
  
    return header;
  }

  function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

  function createNavBar() {
    const nav = document.createElement('nav');

    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');

    homeBtn.addEventListener('click', loadHome);
    // menuBtn.addEventListener('click', loadMenu);
    // contactBtn.addEventListener('click', loadContact);

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
    btn.classList.add('button');
    return btn;
  }

  function init(){
    const content = document.getElementById("content");
    // console.log(content)
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createMain());
  }

  init();
  loadHome();