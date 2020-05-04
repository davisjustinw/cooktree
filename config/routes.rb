Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/signup', to: 'users#create'
  post '/invite', to: 'connections#invite'
  # might need cleanup, for url helper in mailer
  get '/signup/:token', to: 'connections#get_invitation_user', as: :get_invitation
  put '/signup', to: 'users#token_to_user'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/get_current_user', to: 'sessions#get_current_user'


  resources :recipes, only: [:index, :show]
  resources :connections, only: [:index, :create, :show]
end
