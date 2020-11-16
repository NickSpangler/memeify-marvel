function init() {
    const memeContainer = document.querySelector('#View')

    function getMemes() {
        fetch(`http://localhost:3000/memes`)
        .then(resp => resp.json())
        .then(function(memeData) {
            memeData.forEach((meme) => {
                const newMeme = new Meme(meme.title, meme.likes, meme.panels);
                console.log(newMeme);
                memeContainer.innerHTML += newMeme.renderHTML();
            })
        })
    }
    getMemes()

    const ironmanTab = document.querySelector('#IronmanTab')
    const createPanels = document.querySelectorAll('.image-select-container')

    ironmanTab.onclick = function(e) {
      if (e.target.classList.value === "selectImage") {
        const filePath = e.target.attributes.src.value
        for (let i=0; i < createPanels.length; i++) {
          if (createPanels[i].classList.contains('empty')) {
            const panel = createPanels[i]
            panel.querySelector('p').outerHTML = `<img src='${filePath}'><p></p>`
            panel.classList.remove('empty');
            break;
          }
        }
        console.log(e.target.attributes.src.value)
      }
    }


}

init()