let bars = document.querySelector(".bars");
let menu = document.querySelectorAll(".header .navbar li");
let navbar = document.querySelector(".navbar");
let flag = 0;

bars.onclick = () => {
    if(flag) {
        menu.forEach((e) => {
            e.style.display = "none";
            flag = 0;
            navbar.style.marginTop = "0px";
        })
    }
    else {
        menu.forEach((e) => {
            e.style.display = "block";
            flag = 1;
            navbar.style.marginTop = "55px";
        })
    }

    bars.style.cssText = `
    background-color: #c0bdbd36;
    border-radius: 50%;
`;
    setTimeout(() => {
        bars.style.cssText = `
        background-color: transparent;
        border-radius: 50%;
    `;
    },250);
}