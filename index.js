function lookAway(){
    var elementCSS = document.querySelector("#bioDesc");
    elementCSS.classList.toggle("openToTheEye"); //makes element visible
    changeLinkHref();
}

function changeLinkHref(){
    var cool = document.querySelector("#coolStuff");
    var audioURL = document.querySelector("#audioStuff");
    //replace href with a random link from list
    cool.setAttribute = ('href', coolLinks[Math.floor(Math.random * coolLinks.length)]);
    audioURL.setAttribute = ('href', audioLinks[Math.floor(Math.random * audioLinks.length)]);
}

const coolLinks = ['https://www.facebook.com/Politikhe/', 'https://ajef-lif7.blogspot.com'];
const audioLinks = ['https://anchor.fm/nvnv', 'https://open.spotify.com/show/6eO0DzjoozTPGxqRfYsF2d', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiLr4XJmJiBAxVoKEQIHbDlBssQFnoECBUQAQ&url=https%3A%2F%2Fopen.spotify.com%2Fshow%2F1fB4IGYmfp1KxydexYpfDp&usg=AOvVaw2vQgDiAO2K35FiAjMPBFXz&opi=89978449'];