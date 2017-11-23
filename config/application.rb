require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EmailSignature
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Precompile AngularJS apps into their own app bundles.  Provides for selective download of JS as not all users need all apps.
    # This fine grained control is essential since many users will use a limited amount of functions on their mobile device.
    config.assets.precompile += %W(angular/*.js)

    # This allows us to keep the AngularJS templates in /app/assets/javascripts/angular/templates vs. a higher level.
    config.angular_templates.ignore_prefix  = 'angular/templates/'
  end
end
