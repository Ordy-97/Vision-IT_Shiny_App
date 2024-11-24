import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })

    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button') /**getByRole est un sélecteur qui permet de selectionner les éléments du DOM */
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(nightModeButton) /**fireEvent permet de déclancher les évènements du DOM (dans ce cas elle permet de cliquer sur le bouton) */
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})