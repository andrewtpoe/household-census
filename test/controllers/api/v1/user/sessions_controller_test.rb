require 'test_helper'

class Api::V1::User::SessionsControllerTest < ActionController::TestCase

  def setup
    @current_user = users(:one)
  end

  test 'POST #create will sign in the correct user when given valid params' do
    params = {
      user: {
        email: @current_user.email,
        password: 'password'
      },
      format: :json
    }
    post :create, params
    assert_response 201
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert valid_user_object(r)
  end

  test 'POST #log_in will return an error if no user is found with matching email' do
    params = {
      user: {
        email: 'no_such_email@gmail.com',
        password: 'password'
      },
      format: :json
    }
    post :create, params
    assert_response 401
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert r[:errors].include?(:login)
  end

  test 'POST #create will not sign in a user without valid password' do
    params = {
      user: {
        email: '@current_user.email',
        password: 'incorrect'
      },
      format: :json
    }
    post :create, params
    assert_response 401
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert r[:errors].include?(:login)
  end

  test 'POST #destroy will sign out the current user' do
    sign_in(:user, @current_user)
    post :destroy
    assert_response 200
    @current_user.reload
    refute @current_user.current_sign_in_at
  end

end
