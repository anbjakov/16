'use strict'
const API_URL =  'https://jsonplaceholder.typicode.com/users';
'use strict'
const API_URL = "https://jsonplaceholder.typicode.com/albums";
const albumsList = document.getElementById('albums');

fetchAPI(API_URL).then(albums=>{
    albums.map(album=>appendListItem(albumsList,album.title));
})

const deleteItem = (e)=>{
    e.target.closest('li').remove()
}

function appendListItem(targetList,content){
    const liClassName = 'album_title';
    const listNode = document.createElement('li');
    const removeAlbumButton = document.createElement('button');
    listNode.classList.add(liClassName);
    removeAlbumButton.onclick = deleteItem;
    listNode.innerHTML = content;
    removeAlbumButton.innerHTML = "Delete"
    listNode.append(removeAlbumButton);
    targetList.append(listNode);
}

async function fetchAPI (API_URL){
    const response = await fetch(API_URL);
    const resolve = await response.json();
    try{
        if (!response.ok) {
            throw new Error('bad response')
        };
        return resolve
    }
    catch(error){
        console.error(`Error: ${error.message}`);
    }
}
