class AddDoneButtonToSteps < ActiveRecord::Migration
  def change
    add_column :steps, :done, :boolean, default: false
  end
end
