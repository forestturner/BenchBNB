Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resources :benches, only:[:creat, :index]
  end
end
