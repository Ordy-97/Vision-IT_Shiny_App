import Card from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe('Card', () => {
    it('should card render title and image', async () => {
        render(
            <ThemeProvider>
                <Card
                    label="React Magician"
                    picture="/mypicture.png"
                    title="Johnny"
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText('Johnny')
        expect(cardPicture.src).toBe("http://localhost/mypicture.png")
        expect(cardTitle.textContent).toBe('Johnny')
    })

    it('should cardTitle render with star ?', async () => {
        render(
            <ThemeProvider>
                <Card
                    label="React Magician"
                    picture="/mypicture.png"
                    title="Johnny"
                />
            </ThemeProvider> 
        )
        const cardTitle = screen.getByTestId('1e')
        const divCard = cardTitle.closest('div')
        fireEvent.click(divCard)
        expect(cardTitle.textContent).toBe('🌟Johnny🌟')
    })
})