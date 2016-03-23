require 'test_helper'

class HouseholdTest < ActiveSupport::TestCase

  def setup
    @household = households(:one)
  end

  test 'can be created with valid attributes' do
    valid_attributes = {
      address: '123 Test Street',
      city: 'Test City',
      state: 'Test State',
      zipcode: '99999',
      number_of_bedrooms: 3
    }
    household = Household.new
    valid_attributes.each do |k,v|
      household[k] = v
    end
    household.user = User.first
    assert household.valid?
    assert household.save
    valid_attributes.each do |k,v|
      assert household[k] == v
    end
  end

  test 'not valid without user' do
    assert @household.user_id
    assert @household.user
    @household.user_id = nil
    refute @household.valid?
  end

  test 'can have multiple people associated' do
    assert @household.residents
    assert @household.residents.length >= 2
  end

  test 'can have multiple vehicles associated' do
    assert @household.vehicles
    assert @household.vehicles.length >= 2
  end

end
