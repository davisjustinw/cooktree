class AddConfirmTokenToConnections < ActiveRecord::Migration[6.0]
  def change
    add_column :connections, :confirm_token, :string
  end
end
