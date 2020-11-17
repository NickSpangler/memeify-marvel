class Meme {

    constructor(title, likes, panels) {
    this.title = title;
    this.likes = likes;
    this.panels = panels;
    }

    renderHTML() {
        return `
            <div class='title-bar'>
                <div class='title-container'>${this.title}</div>
                <div class='like-container'>${this.likes}</div>
            </div>
            <div class='outercontainer'>
                <div class='center background strip'>
                    ${this.panels.map((panel) => `
                    <div class='inner-frame'>
                        <div class='image-container'>
                            <img src='${panel.image_url}'>
                                <div class="panel-text">
                                    <p>${panel.caption}</p>
                                </div>
                        </div>
                    </div>`).join(' ')}
                </div>
            </div>
            <br>`
    }
}