class Api::StepsController < ApplicationController
  def index
    @steps = Step.all()
    render json: @steps
  end

  def show
    @step = Step.find(params[:id])
    render json: @step
  end

  def create
    @step = Step.create!(step_params)
    render json: @step
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy!
    @steps = Step.all()
    render json: @steps
  end

  def update
    @step = Step.find(params[:id])
    @step.update!(step_params)
    render json: @step
  end

  def step_params
    params.require(:step).permit(:body, :todo_id)
  end
end
