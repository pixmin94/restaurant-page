function createIntro(){
    const intro = document.createElement("section")
    intro.classList.add("section")
    intro.textContent = "Welcome to the New Jeans Fanclub page!"

    const groupPic = document.createElement("img")
    groupPic.classList.add("group-pic")
    groupPic.setAttribute("src", "../src/img/grouppic.jpeg")

    intro.appendChild(groupPic)
    return intro;
}

function loadHome() {
    const content = document.getElementById("main");
    content.appendChild(createIntro());
}
export default loadHome;