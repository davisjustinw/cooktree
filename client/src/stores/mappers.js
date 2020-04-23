const mapUserToProps = ({ user }) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  status: user.status
})

const mapLoginStatusToProps = ({ user }) => ({
  status: user.status
})

const mapUiToProps = ({ ui }) => ({
  mobileOpen: ui.mobileOpen
})

const mapConnectionToProps = ({ connection }) => {
  const { current } = connection
  return {
    connection_id: current.connection_id,
    relation_id: current.relation_id,
    name: current.name,
    avatar_url: current.avatar_url,
    relationship: current.relationship,
  }
}

const mapShowControlsToProps = ({ ui }) => ({
  showControls: ui.showControls
})

export {
  mapUserToProps,
  mapLoginStatusToProps,
  mapUiToProps,
  mapConnectionToProps,
  mapShowControlsToProps
}
