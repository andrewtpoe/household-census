class Vehicle < ActiveRecord::Base
  belongs_to :household
  belongs_to :resident

  validates :household_id, presence: true

end
