class UserMailer < ApplicationMailer
  def invitation(to, from)
    @to = to
    @from = from
    puts "in the mailer "
    puts @to[:email] #this isn't playing nice.  lost my email
    puts @from
    puts "still in"
    mail(to:  @to[:email], subject: "CookTree Invitation")
  end
end
