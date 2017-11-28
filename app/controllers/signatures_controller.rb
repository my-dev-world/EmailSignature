class SignaturesController < ApplicationController
  include Response

  def create
    @signature = Signature.create(post_params)
    json_response(@signature, :created)
  end

  private

  def post_params
    params.permit(:data, :template)
  end
end
