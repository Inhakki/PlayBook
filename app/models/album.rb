class Album < ActiveRecord::Base

  has_many :pages, dependent: :destroy
  belongs_to :user

  validates :title, presence: true

end
