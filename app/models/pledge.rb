class Pledge < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  validates :pledge, presence: true
end