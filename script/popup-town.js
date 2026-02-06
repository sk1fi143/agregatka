const openBtns = document.querySelectorAll(".openBtnT");
const overlayT = document.getElementById("popupOverlayT");
const closeBtnT = document.getElementById("closeBtnT");
const sendBtnT = document.getElementById("correctBtnT");
const choiceBtnT = document.getElementById("choiceBtnT");
const overlayC = document.getElementById("popupOverlayC");
const closeBtnC = document.getElementById("closeBtnC");

const townNameElements = document.querySelectorAll(".popup-choice-town__name");

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("popupDisplayed")) {
    overlayT.style.display = "flex";
    disableScroll();

    sessionStorage.setItem("popupDisplayed", "true");
  }
});

closeBtnT.onclick = () => {
  overlayT.style.display = "none";
  enableScroll();
};


openBtns.forEach((btn) => {
  btn.onclick = () => {
    overlayC.style.display = "flex";
    disableScroll();
  };
});

if (sendBtnT) {
  sendBtnT.onclick = () => {
    overlayT.style.display = "none";
    enableScroll();
  };
}

if (choiceBtnT && overlayC) {
  choiceBtnT.onclick = () => {
    overlayT.style.display = "none";
    overlayC.style.display = "flex";
    disableScroll();
  };
}

if (closeBtnC) {
  closeBtnC.onclick = () => {
    overlayC.style.display = "none";
    enableScroll();
  };
}

if (townNameElements.length > 0 && overlayC) {
  townNameElements.forEach((element) => {
    element.addEventListener("click", () => {
      overlayC.style.display = "none";
      enableScroll();
    });
  });
}

overlayC.onclick = (e) => {
  if (e.target === overlayC) {
    overlayC.style.display = "none";
    enableScroll();
  }
};
