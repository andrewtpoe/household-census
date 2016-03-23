require 'test_helper'

class ResidentTest < ActiveSupport::TestCase

  def setup
    @resident = residents(:one)
  end

  test 'can be created with valid attributes' do
    valid_attributes = {
      is_user: true,
      first_name: 'andrew',
      last_name: 'poe',
      age: 28,
      gender: 'male',
      email: 'andrewtpoe@gmail.com'
    }
    resident = Resident.new
    valid_attributes.each do |k,v|
      resident[k] = v
    end
    resident.household = Household.first
    assert resident.valid?
    assert resident.save
    valid_attributes.each do |k,v|
      assert resident[k] == v
    end
  end

  test 'not valid without household' do
    assert @resident.household_id
    assert @resident.household
    @resident.household_id = nil
    refute @resident.valid?
  end

  test 'can have multiple vehicles associated' do
    assert @resident.vehicles
    assert @resident.vehicles.length >= 2
  end

end
