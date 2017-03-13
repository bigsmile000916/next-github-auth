import { PropTypes } from 'react'
import Navigation from '../components/Navigation'
import SignInOrProfileLink from '../components/SignInOrProfileLink'
import PublicPage from '../decorators/PublicPage'

const Public = ({
  githubClientId,
  githubUser
}) => (
  <div>
    <Navigation
      githubUser={githubUser}
      githubClientId={githubClientId} />

    <SignInOrProfileLink
      githubUser={githubUser}
      githubClientId={githubClientId} />
    <br />

    <div>public page!</div>
  </div>
)

Public.propTypes = {
  githubUser: PropTypes.shape({
    login: PropTypes.string.isRequired
  }),
  githubClientId: PropTypes.string
}

export default PublicPage(Public)
