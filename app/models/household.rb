class Household < ActiveRecord::Base
  belongs_to :user
  has_many :residents
  has_many :vehicles

  validates :user_id, numericality: true, presence: true
  validates :number_of_bedrooms, numericality: true
  validates_associated :residents
  validates_associated :vehicles

end
