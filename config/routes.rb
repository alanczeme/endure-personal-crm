Rails.application.routes.draw do
  # namespace :api do
    resources :contactevents
    resources :contacts
    resources :events
    resources :users
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
    
    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  # end
end