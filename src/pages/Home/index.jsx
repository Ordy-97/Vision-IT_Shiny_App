import { Link } from "react-router-dom"
import { useTheme } from "../../utils/hooks"
import colors from '../../utils/style/colors'
import home_illustration from '../../assets/home-illustration.svg'

// Utilisation des classes Bootstrap pour les styles
function Home() {
  const { theme } = useTheme()


  // Style dynamique pour gérer les couleurs du thème
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  }

  const buttonStyle = {
    backgroundColor: colors.primary,
    color: 'white',
    borderRadius: '29px',
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: '16px',
  }

  return (
    <div className="container p-5" style={{ backgroundColor: theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`}}>
      <div className="row align-items-center justify-content-center text-center text-md-start">
        {/* Texte principal */}
        <div className="col-12 col-md-6">
          <h1
            style={{ ...textStyle, fontSize: '3rem' }}
            className="fw-bold mb-4"
          >
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents.
          </h1>
          <Link to="/survey/1" style={buttonStyle} className="btn btn-primary">
            Faire le test
          </Link>
        </div>

        {/* Illustration */}
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <img
            src={home_illustration}
            alt="Illustration accueil"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
