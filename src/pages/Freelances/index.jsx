import { useFetch, useTheme } from '../../utils/hooks'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

// Utilisation de Bootstrap pour la mise en page
function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch('https://api-vision-vercel.vercel.app/freelances')
  const { freelancersList } = data

  const textStyle = {
    color: theme === 'light' ? `${colors.primary}` : `${colors.backgroundLight}`,
  }

  if (error) {
    return <div className="text-center mt-5">Oups, il y a eu un problème.</div>
  }

  // Style dynamique selon le thème

  return (
    <div
      className={`container p-5 ${
        theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`
      }`}
    >
      <div className="text-center mb-4">
        <h1 style={textStyle} className="fw-bold">
          Trouvez votre prestataire
        </h1>
        <h3 style={{ color: '#8186a0' }}>
          Chez Shiny, nous réunissons les meilleurs profils pour vous.
        </h3>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <Loader />
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {freelancersList &&
            freelancersList.map((profile, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={`${profile.name}-${index}`}>
                <Card
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Freelances
