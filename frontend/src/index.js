function init() {
    const memeContainer = document.querySelector('#View')
    Api.getAllMemes()
    .then( () => {
      setTimeout(() => {
        renderSelectImages(ironmanTab, 'Iron Man', 146)
        renderSelectImages(thorTab, 'Thor', 92)
        renderSelectImages(hulkTab, 'Hulk', 56)
        renderSelectImages(captainamericaTab, 'Captain America', 102)
      }, 2000);
    })
    memeContainer.addEventListener('click', e => ClickEvents.download(e))

    memeContainer.onclick = (e) => ClickEvents.like(e)

    const createTab = document.querySelector('#Create')
    const ironmanTab = document.querySelector('#IronmanTab')
    const thorTab = document.querySelector('#ThorTab')
    const hulkTab = document.querySelector('#HulkTab')
    const captainamericaTab = document.querySelector('#CaptainamericaTab')
    const createMeme = document.querySelector('#createMeme')
    const createPanels = document.querySelectorAll('.image-select-container')

    createTab.onclick = (e) => ClickEvents.addImageToTemplate(e)
    createMeme.onclick = (e) => ClickEvents.removeImageFromTemplate(e)

    function renderSelectImages(tabName, dirName, count) {
      for (let i = 1; i <= count; i++) {
        tabName.innerHTML += `<div class="square">
                                <img src='Panel Images/${dirName} Panels/${i}.png' class='selectImage'>
                              </div>`
        }
    }

    
}

init()