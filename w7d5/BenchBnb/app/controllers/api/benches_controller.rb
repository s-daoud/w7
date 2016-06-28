class Api::BenchesController < ApplicationController
  def index
    render json: Bench.in_bounds(params[:bounds])
  end

  def create
    bench = Bench.new(bench_params)
    if bench.save
      render json: bench
    else
      render json: bench.errors.full_messages
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
