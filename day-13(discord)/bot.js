var add = document.querySelector(".addmemes")

async function getdata(){
    const res = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await res.json();
    return data;
}

add.addEventListener('click', async () =>{
    let response = getdata()
    let user = await response;
    fetch(/*discord webhook here*/ ,
    {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: user.url})
    });
})
add.addEventListener('click', async () =>{
    let response = getdata()
    let user = await response;
    fetch(/*discord webhook here*/,
    {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: user.url})
    });
})     
