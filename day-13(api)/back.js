var add = document.querySelector(".addmemes")
var meme = document.querySelector(".meme")


async function getdata(){
    const res = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await res.json();
    return data;
}

add.addEventListener('click', async () =>{
    let response = getdata()
    let user = await response;
    const newmeme = document.createElement('meme');
    newmeme.classList.add("meme");
    var img = document.createElement("img");
    img.classList.add("yoyo");
    img.src = user.url;
    meme.appendChild(img);

})