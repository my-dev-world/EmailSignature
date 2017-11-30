class SignaturesController < ApplicationController
  include Response

  def create
    @signature = Signature.new
    @signature.template = params["template"]
    @signature.data = params["data"]
    @signature.save
    
    json_response(@signature, :created)
  end
end
