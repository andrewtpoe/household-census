class Api::V1::User::RegistrationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    p = get_registration_params
    if User.find_by(email: p[:email])
      @errors = { email: [ 'Email already in use' ] }
      render template: 'api/v1/errors', status: 401 and return
    end
    if p[:password] != p[:password_confirmation]
      @errors = { password: [ 'Passwords do not match ' ] }
      render template: 'api//v1/errors', status: 400 and return
    end
    if @current_user = User.create(email: p[:email], password: p[:password])
      sign_in(:user, @current_user)
      render template: 'api/v1/user/object', status: 201 and return
    else
      @errors = @current_user.errors.messages
      render template: 'api/v1/errors', status: 400 and return
    end
  end

  private

  def get_registration_params
    params.require(:user).permit(:email, :password, :password_confirmation).deep_symbolize_keys
  end

end
