Rails.application.routes.draw do
  namespace :api do
    resources :contactevents
    resources :contacts
    resources :events
    resources :users
    # custom routes
    
    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end