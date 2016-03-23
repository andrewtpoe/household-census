require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = users(:one)
  end

  test 'user can be created with valid attributes' do
    user = User.new
    user.email = 'auniqueemailaddress@gmail.com'
    user.password = 'password'
    assert user.valid?
    assert user.save
  end

  test 'user not valid without email' do
    @user.email = nil
    refute @user.valid?
    refute @user.save
  end

  test 'user email must be unique' do
    user = User.new
    user.email = @user.email
    user.password = 'password'
    refute user.valid?
    refute user.save
  end

  test 'user not valid without a password' do
    @user.encrypted_password = nil
    refute @user.valid?
    refute @user.save
  end

  test 'user can have household' do
    assert @user.household
  end

end
