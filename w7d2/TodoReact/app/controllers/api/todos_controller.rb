class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all()
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = Todo.create!(todos_params)
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    @todos = Todo.all()
    render json: @todos
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update!(todos_params)
    render json: @todo
  end

  def todos_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
