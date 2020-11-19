class Meme {

    constructor(memeObj) {
    this.id = memeObj.id;
    this.title = memeObj.title;
    this.likes = memeObj.likes;
    this.panels = memeObj.panels;
    }

    renderHTML() {
        return `
            <div class='outercontainer'>
                <div class='center background strip displayed-meme'>
                    ${this.panels.map((panel) => `
                    <div class='inner-frame'>
                        <div class='image-container'>
                            <img src='${panel.image_url}' crossOrigin='anonymous'>
                                <div class="panel-text">
                                    <p>${panel.caption}</p>
                                </div>
                        </div>
                    </div>`).join(' ')}
                </div>
                <div class='title-bar panel-${this.panels.length}'>
                    <div class='title-container'>${this.title}</div>
                    <div class='like-container'><i style="font-size:14px; margin-right: 5px;" class="fa download-button">&#xf019;</i><span id='${this.id}' class="entypo-heart"></span> <span class='like-number'>${this.likes}</span></div>
                </div>
            </div>
            <br><br>`
    }

    static renderAllMemes(memesArray) {
        const memeContainer = document.querySelector('#View')
        memesArray.forEach((meme) => {
        const newMeme = new Meme(meme);
        memeContainer.innerHTML += newMeme.renderHTML();
        })
    }

    static createMeme() {
        const imageselectcontainers = document.querySelectorAll('.image-select-container')
        if ([...imageselectcontainers].every(container => container.classList.contains('empty'))) {
            alert('Please include at least one image in your meme.');
            return;
        }
        const memeTitle = document.querySelector('#fname').value
        const memePanels = []
        imageselectcontainers.forEach(function(panel) {
           if (!panel.classList.contains('empty')) {
               memePanels.push({image_url: `${panel.querySelector('img').getAttribute('src')}`,
                                caption: `${panel.querySelector('textarea').value}`})
           } 
        })
        const data = {
            title: memeTitle,
            panels: memePanels
        }
        Api.postMeme(data);
        ClickEvents.clearForm();
        document.getElementById("defaultOpen").click();   
    }

}