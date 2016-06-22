Rails.application.routes.draw do
  # GET api/todos/ #index
  # GET api/todos/:id #show
  # POST api/todos/ #create
  # DELETE api/todos/:id #destroy
  # PATCH api/todos/:id #update
  root to: "static_pages#root"
  namespace :api do
    resources :todos, except: [:edit, :new] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:update, :destroy]
  end
end
