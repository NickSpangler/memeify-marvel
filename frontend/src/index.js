function init() {
    const memeContainer = document.querySelector('#View')
    Api.getAllMemes()
    
    memeContainer.addEventListener('click', e => ClickEvents.download(e))

    memeContainer.onclick = (e) => ClickEvents.like(e)

    const ironmanTab = document.querySelector('#IronmanTab')
    const thorTab = document.querySelector('#ThorTab')
    const createMeme = document.querySelector('#createMeme')
    const createPanels = document.querySelectorAll('.image-select-container')

    ironmanTab.onclick = (e) => ClickEvents.addImageToTemplate(e)
    thorTab.onclick = (e) => ClickEvents.addImageToTemplate(e)

    createMeme.onclick = (e) => ClickEvents.removeImageFromTemplate(e)

    function renderIronMan() {
      const ironmanTab = document.querySelector('#IronmanTab')
      for (let i = 1; i <= 146; i++) {
      ironmanTab.innerHTML += `<div class="square">
                              <img src='Panel Images/Iron Man Panels/${i}.png' class='selectImage'>
                            </div>`
      }
    }
    renderIronMan()

    function renderThor() {
      const thorTab = document.querySelector('#ThorTab')

      for (let i = 1; i <= 61; i++) {
      thorTab.innerHTML += `<div class="square">
                              <img src='Panel Images/Thor Panels/${i}.png' class='selectImage'>
                            </div>`
      }
    }
    renderThor()
}

init()