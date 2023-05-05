function toggleSidebar() {
  const sidebar = document.querySelector('div.overflow-x-hidden');
  const menuButton = document.getElementById('menuButton');

  if (sidebar) {
    if (sidebar.style.width === '260px' || sidebar.style.width === '') {
      sidebar.style.width = '0px';
      menuButton.style.left = '10px'; // New position when the sidebar is hidden
    } else {
      sidebar.style.width = '260px';
      menuButton.style.left = '270px'; // Position when the sidebar is visible
    }
  } else {
    console.error("Sidebar not found");
  }
}

// Inject the menu button into the page
function injectMenuButton() {
  const body = document.querySelector("body");
  if (body) {
    const menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.textContent = "☰";
    menuButton.style.fontSize = "24px";
    menuButton.style.position = "fixed";
    menuButton.style.top = "5px";
    menuButton.style.left = "270px";
    menuButton.style.zIndex = "1000";
    menuButton.style.background = "none";
    menuButton.style.border = "none";
    menuButton.style.cursor = "pointer";
    menuButton.addEventListener("click", toggleSidebar);
    body.appendChild(menuButton);
  } else {
    console.error("Body not found");
  }
}

injectMenuButton();
