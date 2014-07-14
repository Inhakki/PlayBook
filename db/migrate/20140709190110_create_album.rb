class CreateAlbum < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.string :style
      t.references :user
    end
  end
end
