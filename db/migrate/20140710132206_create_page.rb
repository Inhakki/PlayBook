class CreatePage < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :story
      t.text :video_url
      t.text :audio_url
      t.references :album
    end
  end
end
