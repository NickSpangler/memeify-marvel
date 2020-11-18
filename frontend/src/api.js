class Api {

    static getAllMemes() {
        fetch(`http://localhost:3000/memes`)
        .then(resp => resp.json())
        .then( (memeData) => Meme.renderAllMemes(memeData))
    }

    static addLike(e, data) {
        fetch(`http://localhost:3000/memes/${e.target.id}/like`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    static postMeme(data) {
        fetch(`http://localhost:3000/memes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          const memeContainer = document.querySelector('#View')
          const newMeme = new Meme(data);
                console.log(newMeme);
                memeContainer.innerHTML = newMeme.renderHTML() + memeContainer.innerHTML;
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
}