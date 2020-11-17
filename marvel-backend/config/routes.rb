Rails.application.routes.draw do
  resources :panels
  resources :memes
  post '/memes/:id/like', to: 'memes#like'

end
