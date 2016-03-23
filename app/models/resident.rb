class Resident < ActiveRecord::Base
  belongs_to :household
  has_many :vehicles

  validates :household_id, presence: true

end
