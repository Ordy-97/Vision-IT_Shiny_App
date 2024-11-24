import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darkLogo from '../../assets/dark-logo.png'
import lightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

// Logo styling
const HeadLogo = styled.img`
    height: 70px;
    margin-right: 10px;
`

// Styled links with optional background for active links
const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: ${(props) => (props.$theme === 'light' ? '#8186a0' : 'white')};
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color: ${colors.primary};
    }

    ${(props) =>
        props.$isFullLink &&
        `
        color: white;
        border-radius: 30px;
        background-color: ${colors.primary};
        padding: 10px 20px;
    `};
`

function Header() {
    const { theme } = useTheme()

    return (
        <nav
            className={`navbar navbar-expand-lg ${
                theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`
            }`}
        >
            <div className="container-fluid">
                {/* Logo */}
                <Link to="/" className="navbar-brand">
                    <HeadLogo src={theme === 'light' ? darkLogo : lightLogo} alt="shini-agency" />
                </Link>

                {/* Toggler for small screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <StyledLink to="/" className="nav-link" $theme={theme}>
                                Accueil
                            </StyledLink>
                        </li>
                        <li className="nav-item">
                            <StyledLink to="/freelances" className="nav-link" $theme={theme}>
                                Profils
                            </StyledLink>
                        </li>
                        <li className="nav-item">
                            <StyledLink to="/survey/1" className="nav-link" $isFullLink>
                                Questionnaire
                            </StyledLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
