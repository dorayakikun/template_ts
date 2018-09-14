import { add, sub } from '../index'

it('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

it('subtracts 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1)
})
