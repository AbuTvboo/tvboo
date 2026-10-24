// Builds the e-mail links at runtime, so the address is not plain text in the page source (less spam).
document.querySelectorAll('a.mail').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});
