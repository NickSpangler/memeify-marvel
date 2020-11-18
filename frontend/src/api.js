class Api {

    static getAllMemes() {
        const memeContainer = document.querySelector('#View')
        fetch(`http://localhost:3000/memes`)
        .then(resp => resp.json())
        .then(function(memeData) {
            memeData.forEach((meme) => {
                const newMeme = new Meme(meme);
                memeContainer.innerHTML += newMeme.renderHTML();
            })
        })
    }

    static addLike(e) {
        
    }
}