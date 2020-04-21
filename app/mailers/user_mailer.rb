class UserMailer < ApplicationMailer
  def invitation(connection)
    @to = connection.relation
    @from = connection.user
    @token = connection.confirmation_token
    mail(to:  @to[:email], subject: "CookTree Invitation")
  end
end
