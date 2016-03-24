class Vehicle < ActiveRecord::Base
  belongs_to :household
  belongs_to :resident

  validates :household_id, numericality: true, presence: true
  validates :resident_id, numericality: true, allow_blank: true

end
