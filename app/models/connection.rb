class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :relation, class_name: 'User'
  accepts_nested_attributes_for :relation

  def invitation
    puts "before mailer"
    puts self.relation
    puts self.user
    UserMailer.invitation(self.relation, self.user).deliver_now
    puts "after mailer"
    # use update attribute?
    self.relation.status = "INVITED"
    self.relation.save
  end
end
