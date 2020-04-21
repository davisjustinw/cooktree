class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :relation, class_name: 'User'
  accepts_nested_attributes_for :relation

  def invitation
    UserMailer.invitation(self).deliver_now
    self.relation.status = "INVITED"
    self.relation.save
  end

  def confirmation_token
    if self.confirm_token.blank?
        self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
    self.confirm_token
  end
end
