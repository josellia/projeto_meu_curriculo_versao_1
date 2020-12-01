const avatar = new Image();

const img = document.querySelector("#avatar");

avatar.onload = () => {
    img.innerHTML += `<img src="${avatar.src}" />`;
};

avatar.src = '../imgs/avatar.png';