class UserMailer < ApplicationMailer

  def invitation()
    mail(to:  'three@four.com', subject: "CookTree Invitation")
 end
end
