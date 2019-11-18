import { schema } from '.'

test('schema adds two numbers', () => {
  expect(schema(1, 2)).toBe(3)
})
