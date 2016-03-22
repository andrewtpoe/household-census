require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @current_user = users(:one)
  end

  test 'user can be created with valid attributes' do
    user = User.new
    user.email = 'auniqueemailaddress@gmail.com'
    user.password = 'password'
    assert user.valid?
    assert user.save
  end

  test 'user not valid without email' do
    @current_user.email = nil
    refute @current_user.valid?
    refute @current_user.save
  end

  test 'user email must be unique' do
    user = User.new
    user.email = @current_user.email
    user.password = 'password'
    refute user.valid?
    refute user.save
  end

  test 'user not valid without a password' do
    @current_user.encrypted_password = nil
    refute @current_user.valid?
    refute @current_user.save
  end

end
