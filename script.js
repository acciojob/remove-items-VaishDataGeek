//your JS code here. If required.

window.onload = function () {
  const button = document.querySelector('input[type="button"]');
  const select = document.getElementById('colorSelect');

  button.addEventListener('click', function () {
    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  });
};