class UserMailer < ApplicationMailer

  def invitation(invitation)
    @user = invitation[:user]
    @sender = invitation[:sender]
    mail(to:  @user[:email], subject: "CookTree Invitation")
 end
end
