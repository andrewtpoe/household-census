class Household < ActiveRecord::Base
  belongs_to :user
  has_many :residents
  has_many :vehicles

  validates :user_id, presence: true

end
