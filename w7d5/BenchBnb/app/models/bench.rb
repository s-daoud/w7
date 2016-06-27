class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    benches = Bench.all
    benches.select do |bench|
      bounds["northEast"]["lat"].to_f > bench.lat &&
      bounds["southWest"]["lat"].to_f < bench.lat &&
      bounds["northEast"]["lng"].to_f > bench.lng &&
      bounds["southWest"]["lng"].to_f < bench.lng
    end
  end
end
