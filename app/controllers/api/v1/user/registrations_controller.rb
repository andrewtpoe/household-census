class Api::V1::User::RegistrationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    p = get_registration_params
    if p[:password] == p[:password_confirmation]
      @current_user = User.find_by(email: p[:email])
      if @current_user && @current_user.valid_password?(p[:password])
        sign_in(:user, @current_user)
        render template: 'api/v1/user/object', status: 200 and return
      end
      @current_user = User.new(p)
      if @current_user.valid?
        @current_user.save
        sign_in(:user, @current_user)
        render template: 'api/v1/user/object', status: 201 and return
      end
    end
    @errors = { signup: [ 'Invalid signup attempt' ] }
    render template: 'api/v1/errors', status: 400 and return
  end

  private

  def get_registration_params
    params.require(:user).permit(:email, :password, :password_confirmation).deep_symbolize_keys
  end

end
