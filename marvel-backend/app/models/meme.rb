class Meme < ApplicationRecord
    has_many :panels, dependent: :delete_all
end
