Rails.application.routes.draw do
  root to: 'cocktails#index'
  resources :cocktails, only: [:show, :new, :create] do
    resources :doses, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
