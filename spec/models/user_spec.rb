require 'spec_helper'

describe User do
  it { should have_many(:albums) }
  it { should have_many(:pages).through(:albums) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should have_secure_password}
  it { should ensure_length_of(:password)}
end
