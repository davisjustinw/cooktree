class UserMailer < ApplicationMailer
  def invitation(to, from)
    @to = to
    @from = from
    mail(to:  @to[:email], subject: "CookTree Invitation")
  end
end
