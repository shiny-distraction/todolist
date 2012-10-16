class WeatherController < ApplicationController
  respond_to :json

  def forecast
    w_api = setup_call
    data = w_api.forecast_for(@state, @city)
    respond_with data['forecast']
  end

  def conditions
    w_api = setup_call
    data = w_api.conditions_for(@state, @city)
    respond_with data['current_observation']
  end

  protected

    def setup_call
      @state = URI::encode(params[:state])
      @city = URI::encode(params[:city])
      Wunderground.new(ENV['WUNDERGROUND_API_KEY'])
    end
end
