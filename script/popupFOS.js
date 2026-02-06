const overlay = document.getElementById('popupOverlay');
const closeBtnFOS = document.getElementById('closeBtn');
const sendBtnFOS = document.getElementById('sendBtn');

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

const openBtnsFOS = document.querySelectorAll('.openFOSBtn');

openBtnsFOS.forEach(btn => {
  btn.onclick = () => {
    overlay.style.display = 'flex';
    disableScroll();
  };
});

closeBtnFOS.onclick = () => {
  overlay.style.display = 'none';
  enableScroll();
};

overlay.onclick = (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    enableScroll();
  }
};

if (sendBtn) {
  sendBtnFOS.onclick = () => {
    overlay.style.display = 'none';
    enableScroll();
  };
}