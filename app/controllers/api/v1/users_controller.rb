class Api::V1::UsersController < ApplicationController

  def show
    @current_user = current_user
    render template: 'api/v1/user/object', status: 200 and return
    # if @current_user = current_user
    #   render template: 'api/v1/user/object', status: 200 and return
    # else
    #   @errors = { unauthorized: [ 'User is not signed in' ] }
    #   render template: 'api/v1/errors', status: 401 and return
    # end
  end

end
