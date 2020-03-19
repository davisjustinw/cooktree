module ErrorMessage
  def invalid_credentials
    {
      error: {
        status: '400',
        message: "Invalid credentials"
      }
    }
  end
end
