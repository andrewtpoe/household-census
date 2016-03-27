require 'test_helper'

class Api::V1::User::RegistrationsControllerTest < ActionController::TestCase

  def setup
    @current_user = users(:one)
  end

  test 'POST #create will register a new user with a valid email and matching passwords' do
    number_of_users = User.all.length
    params = {
      user: {
        email: 'new_test_email@mydomain.com',
        password: 'password',
        password_confirmation: 'password'
      },
      format: :json
    }
    post :create, params
    assert_response 201
    assert User.all.length == number_of_users + 1
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert r[:current_sign_in_at]
    assert valid_user_object(r)
  end

  test 'POST #create will sign in a user with same email as an existing user' do
    number_of_users = User.all.length
    params = {
      user: {
        email: @current_user.email,
        password: 'password',
        password_confirmation: 'password'
      },
      format: :json
    }
    refute @current_user.current_sign_in_at
    post :create, params
    assert_response 200
    assert User.all.length == number_of_users
    @current_user.reload
    assert @current_user.current_sign_in_at
    assert User.all.length == number_of_users
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert @current_user.id == r[:id]
  end

  test 'POST #create will not register a new user if password and confirmation password do not match' do
    number_of_users = User.all.length
    params = {
      user: {
        email: 'test_email@mydomain.com',
        password: 'password',
        password_confirmation: 'notmatch'
      },
      format: :json
    }
    post :create, params
    assert_response 400
    assert User.all.length == number_of_users
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert r[:errors].include?(:signup)
  end

end
