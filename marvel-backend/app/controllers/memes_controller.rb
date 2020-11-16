class MemesController < ApplicationController

    def index
        memes = Meme.all.order(created_at: :desc)
        render json: memes, include: :panels
    end
end
