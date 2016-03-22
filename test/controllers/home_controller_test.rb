class HomeControllerTest < ActionController::TestCase

  def setup
    @current_user = users(:one)
  end

  test 'GET #app renders correctly if user is signed in' do
    sign_in(:user, @current_user)
    get :index
    assert_response :success
    assert_template 'home/index'
  end

  test 'GET #app redirects to and home page if user is NOT signed in' do
    get :index
    assert_response :success
    assert_template 'home/index'
  end

end
