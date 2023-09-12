function lookAway(){
    const elementCSS = document.querySelector("#bioDesc");
    elementCSS.classList.toggle("openToTheEye"); //makes element visible
    changeLinkHref();
}

function changeLinkHref(){
    const cool = document.querySelector("#coolStuff");
    const audioURL = document.querySelector("#audioStuff");
    //replace href with a random link from list
    cool.href = coolLinks[Math.floor(Math.random() * coolLinks.length)];
    audioURL.href = audioLinks[Math.floor(Math.random() * audioLinks.length)];
}

const button = document.querySelector(".btn");
button.addEventListener("click", lookAway);

const coolLinks = ['https://www.facebook.com/Politikhe/', 'https://ajef-lif7.blogspot.com'];
const audioLinks = ['https://anchor.fm/nvnv', 'https://open.spotify.com/show/6eO0DzjoozTPGxqRfYsF2d', 'https://open.spotify.com/show/1fB4IGYmfp1KxydexYpfDp'];