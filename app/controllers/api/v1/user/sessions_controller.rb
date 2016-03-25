class Api::V1::User::SessionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    p = get_login_params
    @current_user = User.find_by(email: p[:email])
    if @current_user && @current_user.valid_password?(p[:password])
      sign_in(:user, @current_user)
      render template: 'api/v1/user/object', status: 201 and return
    else
      @errors = { login: [ 'Incorrect email and password combination' ] }
      render template: 'api/v1/errors', status: 401 and return
    end
  end

  def destroy
    sign_out(current_user)
    render nothing: true, status: 200
  end

  private

  def get_login_params
    params.require(:user).permit(:email, :password).deep_symbolize_keys
  end

end
