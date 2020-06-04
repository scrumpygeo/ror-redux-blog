Rails.application.routes.draw do
  root to: 'pages#home'
  
  get "posts/:id", to: 'pages#home' 
  get "posts/new", to: 'pages#home'
end
