var loaderTimeout;

function loaderFunction() {
  loaderTimeout = setTimeout(showPage, 3000);
}

function showPage() {
  document.body.classList.add("loaded");
}
