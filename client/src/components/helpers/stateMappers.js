const mapAuthToProps = ({ auth }) => ({
  user: auth.user,
  person: auth.person,
  status: auth.status
})

const mapStatusToProps = ({ auth }) => ({
  status: auth.status
})

const mapPersonToProps = ({ auth }) => ({
  person: auth.person
})

const mapUserToProps = ({ auth }) => ({
  user: auth.user
})

const mapControlsToProps = ({ controls }) => ({
  mobileOpen: controls.mobileOpen
})

export {
  mapAuthToProps,
  mapStatusToProps,
  mapPersonToProps,
  mapUserToProps,
  mapControlsToProps
}
