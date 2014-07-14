require 'spec_helper'

describe Album do
  let(:album) { Album.new }
  subject { album }

  it { should have_many(:pages) }
  it { should belong_to(:user) }

end
