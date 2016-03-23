require 'test_helper'

class VehicleTest < ActiveSupport::TestCase

  def setup
    @vehicle = vehicles(:one)
  end

  test 'can be created with valid attributes' do
    valid_attributes = {
      year: '2000',
      make: 'Test Make',
      model: 'Test Model',
      license_plate: 'ZZZ111',
    }
    vehicle = Vehicle.new
    valid_attributes.each do |k,v|
      vehicle[k] = v
    end
    vehicle.household = Household.first
    assert vehicle.valid?
    assert vehicle.save
    valid_attributes.each do |k,v|
      assert vehicle[k] == v
    end
  end

  test 'not valid without household' do
    assert @vehicle.household_id
    assert @vehicle.household
    @vehicle.household_id = nil
    refute @vehicle.valid?
  end

  test 'can belong to resident' do
    assert @vehicle.resident_id
    assert @vehicle.resident
  end

  test 'valid without belonging to resident' do
    @vehicle.resident_id = nil
    assert @vehicle.valid?
    assert @vehicle.save
  end

end
