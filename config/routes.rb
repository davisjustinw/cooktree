Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/signup', to: 'users#create'
  post '/invite', to: 'users#invite'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/get_current_user', to: 'sessions#get_current_user'


  resources :recipes, only: [:index]
  resources :connections, only: [:index, :create, :show]
end
