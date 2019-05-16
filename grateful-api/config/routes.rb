Rails.application.routes.draw do
  namespace :api do
    resources :entries do
      resources :comments
    end
  end
end
