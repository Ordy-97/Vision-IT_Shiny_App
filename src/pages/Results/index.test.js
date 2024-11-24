import { formatJobList, formatQueryParams } from "./";

// test('Celui-ci est mon deuxieme test', () => {
//     const expectedState = 'item2,'
//     expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
// })
/*******la fonction describe permet de regrouper plusieurs tests à la fois qui ont la meme logique. 
 * test et it effectuent la meme fonctionnalité
*/
describe('La fonction formatJobList', () => {
    test('ajoute une virgule à un item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('La fonction formatQueryParams', () => {
    it('ne met pas de separateur après le premier element', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1:'answer1' })).toEqual(expectedState)
    })
    it('concatene grace au separateur', () => {
        const answer = { 1: 'answer1', 2: 'answer2' }
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams(answer)).toEqual(expectedState)
    })
})
