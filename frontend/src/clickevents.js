class ClickEvents {

    static ironmanTab = document.querySelector('#IronmanTab')
    static createMeme = document.querySelector('#createMeme')
    static createPanels = document.querySelectorAll('.image-select-container')


    static like(e) {
        if (e.target.classList.value === 'entypo-heart') {
            let likes = e.target.nextElementSibling
            likes.innerHTML = parseInt(likes.innerHTML) + 1;
            const data = {likes: parseInt(likes.innerHTML)}
            Api.addLike(e, data)
        }
    }

    static addImageToTemplate(e) {
        if (e.target.classList.value === 'selectImage') {
            const filePath = e.target.attributes.src.value
            for (let i=0; i < this.createPanels.length; i++) {
              if (this.createPanels[i].classList.contains('empty')) {
                const panel = this.createPanels[i]
                panel.querySelector('p').outerHTML = `<img src='${filePath}'>
                                                      <div class='delete-x'>&#10060;</div>`
                panel.classList.remove('empty');
                break;
              }
            }
          }
    }

    static removeImageFromTemplate(e) {
        if (e.target.classList.contains('delete-x')) {
            e.target.parentElement.classList.add('empty');
            e.target.previousElementSibling.outerHTML = `<p class='createtext'>Select An Image</p>`;
            e.target.remove();
          }
    }

}