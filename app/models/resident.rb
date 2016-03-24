class Resident < ActiveRecord::Base
  belongs_to :household
  has_many :vehicles

  validates :household_id, numericality: true, presence: true
  validates :age, numericality: true
  validates_associated :vehicles

end
