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

    static clearForm() {
      document.getElementById('memeform').reset()
      const containers = document.querySelectorAll('.image-select-container')
      containers.forEach(function(container) {
        if (!container.classList.contains('empty')) {
        container.querySelector('img').remove()
        container.querySelector('.delete-x').outerHTML = `<p class='createtext'>Select An Image</p>`
        container.classList.add('empty')
        }
      })
    }

     

    static download(e) {
      console.log('download button clicked')
      if (e.target.classList.contains('download-button')) {
      const body = e.target.parentElement.parentElement.previousElementSibling;
      html2canvas(body, {
        allowTaint: true, 
        scrollX: 0,
        scrollY: -window.scrollY,
        scale: 3})
        .then(canvas => {
        document.body.appendChild(canvas);
      }).then(() => {
        var canvas = document.querySelector('canvas');
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var a = document.createElement("a");
        a.setAttribute('download', 'myImage.png');
        a.setAttribute('href', image);
        a.click();
        canvas.remove()
      });
    };
  }

}
