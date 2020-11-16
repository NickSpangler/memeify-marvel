class MemesController < ApplicationController

    def index
        memes = Meme.all
        render json: memes, include: :panels
    end
end
