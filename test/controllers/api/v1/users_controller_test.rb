require 'test_helper'
class Api::V1::UsersControllerTest < ActionController::TestCase

  def setup
    @current_user = users(:one)
  end

  test 'GET #show will return object with current user if signed in' do
    sign_in(:user, @current_user)
    get :show, format: :json
    assert_response 200
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert valid_user_object(r)
    assert r[:current_sign_in_at]
  end

  test 'GET #show will return error if user is not signed in' do
    get :show, format: :json
    assert_response 401
    r = JSON.parse(@response.body).deep_symbolize_keys
    assert r[:errors].include?(:unauthorized)
  end

end
