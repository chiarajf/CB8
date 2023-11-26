const mainHeader = document.createElement("div");
mainHeader.className = "main-header";
document.body.append(mainHeader);

const menuList = () => {
  const menu = document.createElement("div");
  const ul = document.createElement("ul");
  const liHome = document.createElement("li");
  const menuList1 = document.createElement("a");
  const liAbout = document.createElement("li");
  const menuList2 = document.createElement("a");
  const liShop = document.createElement("li");
  const menuList3 = document.createElement("a");
  const liContact = document.createElement("li");
  const menuList4 = document.createElement("a");

  menuList1.textContent = "Home";
  menuList2.textContent = "About";
  menuList3.textContent = "Shop";
  menuList4.textContent = "Contact";
  menu.className = "menu";

  liContact.append(menuList4);
  liShop.append(menuList3);
  liAbout.append(menuList2);
  liHome.append(menuList1);
  ul.append(liHome, liAbout, liShop, liContact);
  menu.append(ul);

  return menu;
};

const logo = () => {
  const hedaerLogo = document.createElement("div");
  const logoImg = document.createElement("img");

  hedaerLogo.className = "hedaer-logo";
  logoImg.className = "logoImg";

  logoImg.src = "./media/logoipsum-330.svg";
  hedaerLogo.append(logoImg);

  return hedaerLogo;
};

const menuLogin = () => {
  const login = document.createElement("div");
  const ulLogin = document.createElement("ul");
  const liLogin = document.createElement("li");
  const menuLogin = document.createElement("a");
  const liOrder = document.createElement("li");
  const orderNow = document.createElement("a");

  login.className = "login";
  orderNow.className = "button button-order";

  menuLogin.textContent = "Sign Up";
  orderNow.textContent = "Order Now";

  liOrder.append(orderNow);
  liLogin.append(menuLogin);
  ulLogin.append(liLogin, liOrder);
  login.append(ulLogin);

  return login;
};

const menu = () => {
  const container = document.createElement("div");
  const wrapperHeader = document.createElement("div");

  container.className = "container";
  wrapperHeader.className = "wrapper-header";

  wrapperHeader.append(logo(), menuList(), menuLogin());
  container.append(wrapperHeader);

  return container;
};

const heroSection = () => {
  const hero = document.createElement("section");
  const container = document.createElement("div");
  const wrapperHero = document.createElement("div");
  const heroLeft = document.createElement("div");
  const left = document.createElement("div");
  const title = document.createElement("h1");
  const paragraph = document.createElement("p");
  const buttonHero = document.createElement("a");
  const heroRight = document.createElement("div");
  const img = document.createElement("img");

  hero.className = "hero";
  container.className = "container";
  wrapperHero.className = "wrapper-hero";
  heroLeft.className = "hero-left";
  left.className = "left";
  title.className = "h1";
  title.textContent = "Thoughtful Gifting Made Easy";
  paragraph.className = "p";
  paragraph.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
  buttonHero.className = "button button-hero";
  buttonHero.textContent = "Get Started";
  buttonHero.href = "/#secondSection";
  heroRight.className = "hero-right";
  img.className = "hero-image-right";
  img.src = "./media/hero-image.svg";

  heroRight.append(img);
  left.append(title, paragraph, buttonHero);
  heroLeft.append(left);
  wrapperHero.append(heroLeft, heroRight);
  container.append(wrapperHero);
  hero.append(container);

  return hero;
};

const secondSection = () => {
  const secondSection = document.createElement("section");
  const container = document.createElement("div");
  const TitleSecondSection = document.createElement("div");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const wrapperSecond = document.createElement("div");
  const FirstElement = document.createElement("div");
  const iamge1 = document.createElement("img");
  const title1 = document.createElement("h5");
  const paragraph1 = document.createElement("p");
  const secondElement = document.createElement("div");
  const iamge2 = document.createElement("img");
  const title2 = document.createElement("h5");
  const paragraph2 = document.createElement("p");
  const thirdElement = document.createElement("div");
  const iamge3 = document.createElement("img");
  const title3 = document.createElement("h5");
  const paragraph3 = document.createElement("p");

  TitleSecondSection.setAttribute("id", "secondSection");
  secondSection.className = "secondSection";
  container.className = "container";
  TitleSecondSection.className = "TitleSecondSection";
  title.className = "h2";
  title.textContent = "Title";
  paragraph.className = "p";
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  wrapperSecond.className = "wrapper-second";
  FirstElement.className = "FirstElement";
  iamge1.className = "img";
  iamge1.src = "media/undraw_beach_day_cser.svg";
  title1.className = "h5";
  title1.textContent = "Title";
  paragraph1.className = "p";
  paragraph1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  secondElement.className = "secondElement";
  iamge2.className = "img";
  iamge2.src = "media/undraw_blooming_re_2kc4.svg";
  title2.className = "h5";
  title2.textContent = "Title";
  paragraph2.className = "p";
  paragraph2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  thirdElement.className = "thirdElement";
  iamge3.className = "img";
  iamge3.src = "media/undraw_compose_music_re_wpiw.svg";
  title3.className = "h5";
  title3.textContent = "Title";
  paragraph3.className = "p";
  paragraph3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";

  thirdElement.append(iamge3, title3, paragraph3);
  secondElement.append(iamge2, title2, paragraph2);
  FirstElement.append(iamge1, title1, paragraph1);
  wrapperSecond.append(FirstElement, secondElement, thirdElement);
  TitleSecondSection.append(title, paragraph);
  container.append(TitleSecondSection, wrapperSecond);
  secondSection.append(container);

  return secondSection;
};

const thirdSection = () => {
  const thirdSection = document.createElement("section");
  const container = document.createElement("div");
  const wrapperThirdSection = document.createElement("div");
  const wrapperThirdSectionLeft = document.createElement("div");
  const left = document.createElement("div");
  const title = document.createElement("h1");
  const paragraph = document.createElement("p");
  const buttonThird = document.createElement("a");
  const wrapperThirdSectionRight = document.createElement("div");
  const img = document.createElement("img");

  thirdSection.className = "thirdSection";
  container.className = "container";
  wrapperThirdSection.className = "wrapperThirdSection";
  wrapperThirdSectionLeft.className = "wrapperThirdSection-left";
  left.className = "left";
  title.className = "h1";
  title.textContent = "Thoughtful Gifting Made Easy";
  paragraph.className = "p";
  paragraph.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
  buttonThird.className = "button button-third";
  buttonThird.textContent = "Read More";
  buttonThird.href = "/#secondSection";
  wrapperThirdSectionRight.className = "wrapperThirdSection-right";
  img.className = "wrapperThirdSectionRight-image-right";
  img.src = "./media/undraw_summer_1wi4.svg";

  wrapperThirdSectionRight.append(img);
  left.append(title, paragraph, buttonThird);
  wrapperThirdSectionLeft.append(left);
  wrapperThirdSection.append(wrapperThirdSectionLeft, wrapperThirdSectionRight);
  container.append(wrapperThirdSection);
  thirdSection.append(container);

  return thirdSection;
};

const fourthSection = () => {
  const fourthSection = document.createElement("section");
  const container = document.createElement("div");
  const TitleFourthSection = document.createElement("div");
  const title = document.createElement("h2");

  fourthSection.className = "fourthSection";
  container.className = "container";
  TitleFourthSection.className = "TitleFourthSection";
  title.className = "titleWhite";
  title.textContent = "Thoughtful Gifting Made Easy";

  TitleFourthSection.append(title);
  container.append(TitleFourthSection);
  fourthSection.append(container);

  return fourthSection;
};

const fifthSection = () => {
  const fifthSection = document.createElement("section");
  const container = document.createElement("div");
  const wrapperfifthSection = document.createElement("div");
  const wrapperLeft = document.createElement("div");
  const left = document.createElement("div");
  const title = document.createElement("h3");
  const paragraph = document.createElement("p");
  const buttonHero = document.createElement("a");
  const wrapperRight = document.createElement("div");
  const img = document.createElement("img");

  fifthSection.className = "hero";
  container.className = "container";
  wrapperfifthSection.className = "wrapper-fifthSection";
  wrapperLeft.className = "wrapperLeft";
  left.className = "left";
  title.className = "h3";
  title.textContent = "Thoughtful Gifting Made Easy";
  paragraph.className = "p";
  paragraph.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
  buttonHero.className = "button button-hero";
  buttonHero.textContent = "Get Started";
  wrapperRight.className = "wrapperRight";
  img.className = "wrapper-image-right";
  img.src = "./media/undraw_passing_by_0un9.svg";

  wrapperRight.append(img);
  left.append(title, paragraph, buttonHero);
  wrapperLeft.append(left);
  wrapperfifthSection.append(wrapperLeft, wrapperRight);
  container.append(wrapperfifthSection);
  fifthSection.append(container);

  return fifthSection;
};

const sixthSection = () => {
  const secondSection = document.createElement("section");
  const container = document.createElement("div");
  const TitleSecondSection = document.createElement("div");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const wrapperSecond = document.createElement("div");
  const FirstElement = document.createElement("div");
  const iamge1 = document.createElement("img");
  const title1 = document.createElement("h6");
  const paragraph1 = document.createElement("p");
  const secondElement = document.createElement("div");
  const iamge2 = document.createElement("img");
  const title2 = document.createElement("h6");
  const paragraph2 = document.createElement("p");
  const thirdElement = document.createElement("div");
  const iamge3 = document.createElement("img");
  const title3 = document.createElement("h6");
  const paragraph3 = document.createElement("p");

  TitleSecondSection.setAttribute("id", "secondSection");
  secondSection.className = "secondSection";
  container.className = "container";
  TitleSecondSection.className = "TitleSecondSection";
  title.className = "h2";
  title.textContent = "Title";
  paragraph.className = "p";
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  wrapperSecond.className = "wrapper-second";
  FirstElement.className = "firstCard";
  iamge1.className = "img";
  iamge1.src = "media/undraw_beach_day_cser.svg";
  title1.className = "h6";
  title1.textContent = "Title";
  paragraph1.className = "p";
  paragraph1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  secondElement.className = "secondCard";
  iamge2.className = "img";
  iamge2.src = "media/undraw_blooming_re_2kc4.svg";
  title2.className = "h6";
  title2.textContent = "Title";
  paragraph2.className = "p";
  paragraph2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";
  thirdElement.className = "thirdCard";
  iamge3.className = "img";
  iamge3.src = "media/undraw_compose_music_re_wpiw.svg";
  title3.className = "h6";
  title3.textContent = "Title";
  paragraph3.className = "p";
  paragraph3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati";

  thirdElement.append(iamge3, title3, paragraph3);
  secondElement.append(iamge2, title2, paragraph2);
  FirstElement.append(iamge1, title1, paragraph1);
  wrapperSecond.append(FirstElement, secondElement, thirdElement);
  TitleSecondSection.append(title, paragraph);
  container.append(TitleSecondSection, wrapperSecond);
  secondSection.append(container);

  return secondSection;
};

mainHeader.append(menu());
document.body.append(
  heroSection(),
  secondSection(),
  thirdSection(),
  fourthSection(),
  fifthSection(),
  sixthSection()
);
