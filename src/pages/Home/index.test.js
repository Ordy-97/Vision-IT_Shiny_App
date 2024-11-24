// import { sum } from ".";
import Home from ".";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";
import { MemoryRouter } from "react-router-dom";

// test('Mon premier test ', () => {
//   const result = sum(3,6)
//   expect(result).toBe(9)
// })
 describe('Home', () => {
    test('Should Home render without crashing', async () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <Home/>
          </ThemeProvider>
        </MemoryRouter>
      )
    })
    it('Should rernder title', async () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <Home/>
          </ThemeProvider>
        </MemoryRouter>
      )
      // expect(
      //   screen.getByText('Repérez vos besoins,on s’occupe du reste, avec les meilleurs talents.')
      // ).toBeTruthy()
      expect(
        screen.getByRole('heading', {
          level: 1,
          text: 'Repérez vos besoins,on s’occupe du reste, avec les meilleurs talents.',
        })
      ).toBeTruthy()
    })
 })
