require "application_responder"

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  self.responder = ApplicationResponder

  def angular
    render 'layouts/application'
  end
end
