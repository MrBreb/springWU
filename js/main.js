const nav_button = document.querySelector("#nav_button");
const nav_menu = document.querySelector("#nav_content");
const drop_shadow = document.querySelector("#shadow_behind_nav");

nav_button.addEventListener('click', () => {
    const currentPos = getComputedStyle(document.documentElement).getPropertyValue('--nav_menu_pos').trim(); /*Denna koden fick jag från Gemini, men resten av koden skrev jag själv*/

    if (currentPos === '0vh'){
        document.documentElement.style.setProperty('--nav_menu_pos', '-66vh');
        document.documentElement.style.setProperty('--see_through_val', '0');
    } else {
        document.documentElement.style.setProperty('--nav_menu_pos', '0vh');
        document.documentElement.style.setProperty('--see_through_val', '0.5');
    }
});

drop_shadow.addEventListener('click', () => {
    document.documentElement.style.setProperty('--nav_menu_pos', '-66vh');
    document.documentElement.style.setProperty('--see_through_val', '0');
})