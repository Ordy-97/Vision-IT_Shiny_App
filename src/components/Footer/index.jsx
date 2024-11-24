import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import des icônes de réseaux sociaux

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    color: ${({ theme }) => theme === 'light' ? colors.textLight : colors.textDark};
    padding-bottom: 30px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
    margin-bottom: 20px;
`

const SocialIconsWrapper = styled.div`
    display: flex;
    gap: 20px;
    font-size: 24px;
`

const SocialIcon = styled.a`
    color: ${({ theme }) => theme === 'light' ? colors.primary : colors.secondary};
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme === 'light' ? colors.secondary : colors.primary};
    }
`

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <FooterContainer theme={theme}>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
            
            {/* Section réseaux sociaux */}
            <SocialIconsWrapper>
                <SocialIcon theme={theme} href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIcon>
                <SocialIcon theme={theme} href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                </SocialIcon>
                <SocialIcon theme={theme} href="https://youtube.com" target="_blank" aria-label="YouTube">
                    <FaYoutube />
                </SocialIcon>
            </SocialIconsWrapper>
        </FooterContainer>
    );
}

export default Footer;
