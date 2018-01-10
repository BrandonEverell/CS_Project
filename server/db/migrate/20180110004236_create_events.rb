class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :subtitle
      t.text :about_info
      t.date :when
      t.time :time
      t.text :where
      t.text :trail
      t.text :emergency_contacts
      t.text :what_to_expect
      t.text :required_gear
      t.text :other_recommended_gear
      t.text :read_more
      t.timestamps
    end
  end
end
