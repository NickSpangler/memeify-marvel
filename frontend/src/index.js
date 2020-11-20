function init() {
    const memeContainer = document.querySelector('#View')
    Api.getAllMemes()
    
    memeContainer.addEventListener('click', e => ClickEvents.download(e))

    memeContainer.onclick = (e) => ClickEvents.like(e)

    const ironmanTab = document.querySelector('#IronmanTab')
    const thorTab = document.querySelector('#ThorTab')
    const hulkTab = document.querySelector('#HulkTab')
    const createMeme = document.querySelector('#createMeme')
    const createPanels = document.querySelectorAll('.image-select-container')

    ironmanTab.onclick = (e) => ClickEvents.addImageToTemplate(e)
    thorTab.onclick = (e) => ClickEvents.addImageToTemplate(e)
    hulkTab.onclick = (e) => ClickEvents.addImageToTemplate(e)

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

      for (let i = 1; i <= 92; i++) {
      thorTab.innerHTML += `<div class="square">
                              <img src='Panel Images/Thor Panels/${i}.png' class='selectImage'>
                            </div>`
      }
    }
    renderThor()

    function renderHulk() {
      const hulkTab = document.querySelector('#HulkTab')

      for (let i = 1; i <= 56; i++) {
      hulkTab.innerHTML += `<div class="square">
                              <img src='Panel Images/Hulk Panels/${i}.png' class='selectImage'>
                            </div>`
      }
    }
    renderHulk()
}

init()