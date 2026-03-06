const nav_button = document.querySelector("#nav_button");

nav_button.addEventListener('click', () => {
    const currentPos = getComputedStyle(document.documentElement).getPropertyValue('--nav_menu_pos').trim(); /*Denna koden fick jag från Gemini*/

    if (currentPos === '0vh'){
        document.documentElement.style.setProperty('--nav_menu_pos', '-60vh');
    } else {
        document.documentElement.style.setProperty('--nav_menu_pos', '0vh');
    }
});