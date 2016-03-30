class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  before_action :authenticate_user!

  def authenticate_user!
    unless user_signed_in?
      @errors = { unauthorized: [ 'User is not signed in' ] }
      render template: 'api/v1/errors', status: 401 and return
    end
  end

end
