class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :relation, class_name: 'User'
  accepts_nested_attributes_for :relation

  def invitation
    UserMailer.invitation(self.relation, self.user).deliver_now
    # use update attribute?
    self.relation.status = "INVITED"
    self.relation.save
  end
end
