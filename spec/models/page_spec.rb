require 'spec_helper'

describe Page do
  it { should belong_to(:album) }
end
