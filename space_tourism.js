// Main navigation

const navMenu = Array.from(document.querySelectorAll(".menu-list li"));
const pagesList = Array.from(document.querySelectorAll(".pages"));
const container = document.querySelector(".container");

// Setting pages visiblity
setDefaultPages(pagesList, "100%", "100%");

// Main bg urls
let homePageBg = "url(./assets/home/background-home-desktop.jpg)";
let destinationPageBg = "url(./assets/destination/background-destination-desktop.jpg)";
let crewPageBg = "url(./assets/crew/background-crew-desktop.jpg)";
let techPageBg = "url(./assets/technology/background-technology-desktop.jpg)";

function setActivePageBg() {
  let activeTab = document.querySelector(".menu-list").querySelector(".active");
  switch (navMenu.indexOf(activeTab)) {
    case 0:
      container.style.backgroundImage = homePageBg;
      break;
    case 1:
      container.style.backgroundImage = destinationPageBg;
      break;
    case 2:
      container.style.backgroundImage = crewPageBg;
      break;
    case 3:
      container.style.backgroundImage = techPageBg;
      break;
  }
}

setActivePageBg();

for(let i of navMenu) {
  i.onclick = () => {
    let clickedIndex = navMenu.indexOf(i);
    i.setAttribute("class", "active");

    let inactiveTabs = navMenu.filter((x) => x !== i);
    for(let x of inactiveTabs) {
      x.setAttribute("class", "");
    }

    switch (clickedIndex) {
      case 0:
        pageSelector(pagesList, 0, "100%", "100%");
        container.style.backgroundImage = homePageBg;
        break;
      case 1:
        pageSelector(pagesList, 1, "100%", "100%");
        container.style.backgroundImage = destinationPageBg;
        break;
      case 2:
        pageSelector(pagesList, 2, "100%", "100%");
        container.style.backgroundImage = crewPageBg;
        break;
      case 3:
        pageSelector(pagesList, 3, "100%", "100%");
        container.style.backgroundImage = techPageBg;
        break;
    }

    let pagesTohide = pagesList.filter((x) => x !== pagesList[clickedIndex]);
    for(let r of pagesTohide) {
      r.style.visibility = "hidden";
      r.style.height = "0";
      r.style.opacity = "0";
      r.style.transition = "opacity 800ms";
    }
  }
}

// Explore button

const exploreBtn = document.getElementById("explore-btn");

exploreBtn.onclick = () => {
  pagesList[1].style.visibility = "visible";
  pagesList[1].style.height = "100%";
  pagesList[1].style.opacity = "100%";
  pagesList[1].style.transition = "opacity 800ms";
  container.style.backgroundImage = "url(./assets/destination/background-destination-desktop.jpg)";
  
  for(let r of pagesList.filter((x) => x !== pagesList[1])) {
    r.style.visibility = "hidden";
    r.style.height = "0";
    r.style.opacity = "0";
    r.style.transition = "opacity 800ms";
  }

  document.querySelector("[class=active]").setAttribute("class", "");
  navMenu[1].setAttribute("class", "active");

}

// Destination navigation tabs

const navDestination = Array.from(document.querySelectorAll(".destination-nav-list li"));
const destinationPages = Array.from(document.querySelectorAll(".destination-pages"));
const planetImgCollection = Array.from(document.querySelectorAll(".planet-img"));

for(let r of planetImgCollection) {
  if(planetImgCollection.indexOf(r) === 0) {
    r.style.opacity = "100%";
  } else {
    r.style.opacity = "0";
  }
}

// Setting destination pages visiblity
setDefaultPages(destinationPages, "100%", "100%");

for(let i of navDestination) {
  i.onclick = () => {
    i.setAttribute("class", "active");

    let inactiveTabs = navDestination.filter((x) => x !== i);
    for(let x of inactiveTabs) {
      x.setAttribute("class", "");
    }

    switch (navDestination.indexOf(i)) {
      case 0:
        pageSelector(destinationPages, 0, "100%", "100%");
        changePlanetImgs(0);
        break;
      case 1:
        pageSelector(destinationPages, 1, "100%", "100%");
        changePlanetImgs(1);
        break;
      case 2:
        pageSelector(destinationPages, 2, "100%", "100%");
        changePlanetImgs(2);
        break;
      case 3:
        pageSelector(destinationPages, 3, "100%", "100%");
        changePlanetImgs(3);
        break;
    }

    function changePlanetImgs(number) {
      planetImgCollection[number].style.opacity = "100%";

      let hiddenImgs = planetImgCollection.filter((x) => x !== planetImgCollection[number]);
      for(let x of hiddenImgs) {
        x.style.opacity = "0";
      }
    }

    let pagesTohide = destinationPages.filter((x) => x !== destinationPages[navDestination.indexOf(i)]);
    for(let r of pagesTohide) {
      r.style.visibility = "hidden";
      r.style.height = "0";
      r.style.opacity = "0";
      r.style.transition = "opacity 800ms";
    }
  }
}

// Crew page

const navCrew = Array.from(document.querySelectorAll(".crew-page-selector-bullets button"));
const crewPages = Array.from(document.querySelectorAll(".crew-pages"));
const crewImgCollection = Array.from(document.querySelectorAll(".crew-img"));

// Setting crew pages visiblity
setDefaultPages(crewPages, "100%", "100%");

for(let r of crewImgCollection) {
  if(crewImgCollection.indexOf(r) === 0) {
    r.style.opacity = "100%";
  } else {
    r.style.opacity = "0";
  }
}

for(let i of navCrew) {
  i.onclick = () => {
    i.setAttribute("class", "active");

    let inactiveBullets = navCrew.filter((x) => x !== i);
    for(let x of inactiveBullets) {
      x.setAttribute("class", "");
    }

    switch (navCrew.indexOf(i)) {
      case 0:
        pageSelector(crewPages, 0, "100%", "100%");
        changeCrewImgs(0);
        break;
      case 1:
        pageSelector(crewPages, 1, "100%", "100%");
        changeCrewImgs(1);
        break;
      case 2:
        pageSelector(crewPages, 2, "100%", "100%");
        changeCrewImgs(2);
        break;
      case 3:
        pageSelector(crewPages, 3, "100%", "100%");
        changeCrewImgs(3);
        break;
    }

    function changeCrewImgs(number) {
      crewImgCollection[number].style.opacity = "100%";

      let hiddenImgs = crewImgCollection.filter((x) => x !== crewImgCollection[number]);
      for(let x of hiddenImgs) {
        x.style.opacity = "0";
      }
    }

    let pagesTohide = crewPages.filter((x) => x !== crewPages[navCrew.indexOf(i)]);
    for(let r of pagesTohide) {
      r.style.visibility = "hidden";
      r.style.height = "0";
      r.style.opacity = "0";
      r.style.transition = "opacity 800ms";
    }
  }
}

// Tech page

const navTech = Array.from(document.querySelectorAll(".tech-page-switch-btn"));
const techPages = Array.from(document.querySelectorAll(".tech-pages"));
const techImgCollection = Array.from(document.querySelectorAll(".tech-img"));

// Setting tech pages visiblity
setDefaultPages(techPages, "100%", "100%");

for(let r of techImgCollection) {
  if(techImgCollection.indexOf(r) === 0) {
    r.style.opacity = "100%";
  } else {
    r.style.opacity = "0";
  }
}

for(let i of navTech) {
  i.onclick = () => {
    i.setAttribute("class", "tech-page-switch-btn active");

    let inactiveBtns = navTech.filter((x) => x !== i);
    for(let x of inactiveBtns) {
      x.setAttribute("class", "tech-page-switch-btn");
    }

    switch (navTech.indexOf(i)) {
      case 0:
        pageSelector(techPages, 0, "100%", "100%");
        changeTechImgs(0);
        break;
      case 1:
        pageSelector(techPages, 1, "100%", "100%");
        changeTechImgs(1);
        break;
      case 2:
        pageSelector(techPages, 2, "100%", "100%");
        changeTechImgs(2);
        break;
    }

    function changeTechImgs(number) {
      techImgCollection[number].style.opacity = "100%";

      let hiddenImgs = techImgCollection.filter((x) => x !== techImgCollection[number]);
      for(let x of hiddenImgs) {
        x.style.opacity = "0";
      }
    }

    let pagesTohide = techPages.filter((x) => x !== techPages[navTech.indexOf(i)]);
    for(let r of pagesTohide) {
      r.style.visibility = "hidden";
      r.style.height = "0";
      r.style.opacity = "0";
      r.style.transition = "opacity 800ms";
    }
  }
}

function setDefaultPages(pages, height, opacity) {
  pages.forEach(page => {
    if(pages.indexOf(page) === 0) {
      page.style.visibility = "visible";
      page.style.height = `${height}`;
      page.style.opacity = `${opacity}`;
      page.style.transition = "opacity 800ms";
    } else {
      page.style.visibility = "hidden";
      page.style.height = "0";
      page.style.opacity = "0";
      page.style.transition = "opacity 800ms";
    }
  });
}

function pageSelector(pages, number, height, opacity) {
  pages[number].style.visibility = "visible";
  pages[number].style.height = `${height}`;
  pages[number].style.opacity = `${opacity}`;
  pages[number].style.transition = "opacity 800ms";
}

// Menu

const menuLayout = document.querySelector(".menu-layout");
const menuList = document.querySelector(".menu-list");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.onclick = () => {
  menuLayout.style.maxWidth = "70%";
  menuLayout.style.height = "100%";
  menuLayout.style.transition = "max-width 200ms ease-in";
  closeMenu.style.display = "block";
};

closeMenu.onclick = () => {
  menuLayout.style.maxWidth = "0";
  menuLayout.style.height = "0";
  menuLayout.style.transition = "max-width 200ms ease-out";
  closeMenu.style.display = "none";
};

// Media queries

function changeTabletLayout(y) {
  if(y.matches) {
    techImgCollection[0].src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    techImgCollection[1].src = "./assets/technology/image-spaceport-landscape.jpg";
    techImgCollection[2].src = "./assets/technology/image-space-capsule-landscape.jpg";
    homePageBg = "url(./assets/home/background-home-tablet.jpg)";
    destinationPageBg = "url(./assets/destination/background-destination-tablet.jpg)";
    crewPageBg = "url(./assets/crew/background-crew-tablet.jpg)";
    techPageBg = "url(./assets/technology/background-technology-tablet.jpg)";
    closeMenu.style.display = "none";
    setActivePageBg();
  } else {
    techImgCollection[0].src = "./assets/technology/image-launch-vehicle-portrait.jpg";
    techImgCollection[1].src = "./assets/technology/image-spaceport-portrait.jpg";
    techImgCollection[2].src = "./assets/technology/image-space-capsule-portrait.jpg";
    homePageBg = "url(./assets/home/background-home-desktop.jpg)";
    destinationPageBg = "url(./assets/destination/background-destination-desktop.jpg)";
    crewPageBg = "url(./assets/crew/background-crew-desktop.jpg)";
    techPageBg = "url(./assets/technology/background-technology-desktop.jpg)";
    closeMenu.style.display = "none";
    setActivePageBg();
  }
}

function changeMobileLayout(x) {
  if(x.matches) {
    menuLayout.style.maxWidth = "0";
    menuLayout.style.height = "0";
    homePageBg = "url(./assets/home/background-home-mobile.jpg)";
    destinationPageBg = "url(./assets/destination/background-destination-mobile.jpg)";
    crewPageBg = "url(./assets/crew/background-crew-mobile.jpg)";
    techPageBg = "url(./assets/technology/background-technology-mobile.jpg)";
    setActivePageBg();
  } else {
    menuLayout.style.maxWidth = "70%";
    menuLayout.style.height = "100%";
    menuLayout.style.transition = "unset";
    closeMenu.style.display = "none";
    homePageBg = "url(./assets/home/background-home-desktop.jpg)";
    destinationPageBg = "url(./assets/destination/background-destination-desktop.jpg)";
    crewPageBg = "url(./assets/crew/background-crew-desktop.jpg)";
    techPageBg = "url(./assets/technology/background-technology-desktop.jpg)";
    setActivePageBg();
  }
}

let y = window.matchMedia("(max-width:64rem)");
let x = window.matchMedia("(max-width:48em)");

changeTabletLayout(y);
changeMobileLayout(x);

y.addEventListener("change", () => {
  changeTabletLayout(y);
});

x.addEventListener("change", () => {
  changeMobileLayout(x);
});
