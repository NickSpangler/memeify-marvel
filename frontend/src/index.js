function init() {
    const memeContainer = document.querySelector('#View')

    function getMemes() {
        fetch(`http://localhost:3000/memes`)
        .then(resp => resp.json())
        .then(function(memeData) {
            memeData.forEach((meme) => {
                const newMeme = new Meme(meme.id, meme.title, meme.likes, meme.panels);
                memeContainer.innerHTML += newMeme.renderHTML();
            })
        })
    }
    getMemes()

    const viewwindow = document.querySelector('#View')
    viewwindow.onclick = function(e) {
      if (e.target.classList.value === 'entypo-heart') {
        let likes = e.target.nextElementSibling
        likes.innerHTML = parseInt(likes.innerHTML) + 1;
        const data = {likes: parseInt(likes.innerHTML)}
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
    }

    const ironmanTab = document.querySelector('#IronmanTab')
    const createMeme = document.querySelector('#createMeme')
    const createPanels = document.querySelectorAll('.image-select-container')

    ironmanTab.onclick = function(e) {
      if (e.target.classList.value === 'selectImage') {
        const filePath = e.target.attributes.src.value
        for (let i=0; i < createPanels.length; i++) {
          if (createPanels[i].classList.contains('empty')) {
            const panel = createPanels[i]
            panel.querySelector('p').outerHTML = `<img src='${filePath}'>
                                                  <div class='delete-x'>&#10060;</div>`
            panel.classList.remove('empty');
            break;
          }
        }
      }
    }

    createMeme.onclick = function(e) {
      if (e.target.classList.contains('delete-x')) {
        e.target.parentElement.classList.add('empty');
        e.target.previousElementSibling.outerHTML = `<p class='createtext'>Select An Image</p>`;
        e.target.remove();
      }
    }
}

function clearForm() {
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

function createMeme() {
  const imageselectcontainers = document.querySelectorAll('.image-select-container')
  if ([...imageselectcontainers].every(container => container.classList.contains('empty'))) {
    alert('Please include at least one image in your meme.');
    return;
  }
  const memeTitle = document.querySelector('#fname').value
  const memePanels = []
  imageselectcontainers.forEach(function(panel) {
    if  (!panel.classList.contains('empty')) {
      memePanels.push({image_url: `${panel.querySelector('img').getAttribute('src')}`, 
                              caption: `${panel.querySelector('textarea').value}`})
    }
  })
  const data = {
    title: memeTitle,
    panels: memePanels
  }
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
          const newMeme = new Meme(data.id, data.title, data.likes, data.panels);
                console.log(newMeme);
                memeContainer.innerHTML = newMeme.renderHTML() + memeContainer.innerHTML;
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  clearForm();
  
  document.getElementById("defaultOpen").click();
}

init()