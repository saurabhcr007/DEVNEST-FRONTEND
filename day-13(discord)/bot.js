var add = document.querySelector(".addmemes")

async function getdata(){
    const res = await fetch('https://meme-api.herokuapp.com/gimme');
    const data = await res.json();
    return data;
}

add.addEventListener('click', async () =>{
    let response = getdata()
    let user = await response;
    fetch('https://discord.com/api/webhooks/858291947722506250/J53qZu6RlbgUge_UQUbVfKPR2iFpfxsCsqLzuc25dq9dUnvFOibSFrDZ5TxHpbRYdqex',
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
    fetch('https://discord.com/api/webhooks/858291674186121226/-Bsu8wxAHwbrD4EHL25NTIKtI43ELCuACx1CxV_uTV3l-ko2cI_HK1oHUp59-JOoDiR2',
    {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: user.url})
    });
})     