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

export {
  mapAuthToProps,
  mapStatusToProps,
  mapPersonToProps
}
