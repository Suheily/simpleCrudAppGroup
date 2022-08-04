const trashCan = document.querySelectorAll('.trash')
const thumbsUp = document.querySelectorAll('.thumbs-up')

trashCan.forEach(el => {
    el.addEventListener('click', deleteAlbum)
})

thumbsUp.forEach(el => {
    el.addEventListener('click', addLike)
})

async function addLike(){
    const alName = this.parentNode.childNodes[1].innerText
    const arName = this.parentNode.childNodes[3].innerText
    const alPhoto = this.parentNode.childNodes[5].innerText
    const alLikes = Number(this.parentNode.childNodes[7].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'albumname': alName,
                'artistname': arName,
                'photo': alPhoto,
                'likes': alLikes
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }  
}

async function deleteAlbum(){
    const alName = this.parentNode.childNodes[1].innerText
    const arName = this.parentNode.childNodes[3].innerText
    const alPhoto = this.parentNode.childNodes[5].innerText
    try{
        const response = await fetch('deleteAlbum', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'albumname': alName,
                'artistname': arName,
                'photo': alPhoto
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}