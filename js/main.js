const nav_button = document.querySelector("#nav_button");
const nav_menu = document.querySelector("#nav_content");

nav_button.addEventListener('click', () => {
    const currentPos = getComputedStyle(document.documentElement).getPropertyValue('--nav_menu_pos').trim(); /*Denna koden fick jag från Gemini*/

    if (currentPos === '0vh'){
        document.documentElement.style.setProperty('--nav_menu_pos', '-58vh');
    } else {
        document.documentElement.style.setProperty('--nav_menu_pos', '0vh');
    }
});