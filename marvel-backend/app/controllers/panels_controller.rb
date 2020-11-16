class PanelsController < ApplicationController
    def index
        panels = Panel.all
        render json: panels
    end
end
