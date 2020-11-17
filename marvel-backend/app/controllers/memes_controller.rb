class MemesController < ApplicationController

    def index
        memes = Meme.all.order(created_at: :desc)
        render json: memes, include: :panels
    end

    def like
        meme = Meme.find_by(id: params[:id])
        meme.update(likes: params['likes'])
        render json: meme, include: :panels
    end
end
