import { formatJobList, formatQueryParams } from './'

describe('la fonction formatJobList', () => {
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
  test('use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  test('should concat params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    )
  })
})
