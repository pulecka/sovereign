import { schema, createStore } from '.'

test('schema adds two numbers', () => {
  expect(schema(1, 2)).toBe(3)
})

test('store can be created with initial facts', () => {
  const facts = [
    {
      entity: '1',
      attribute: 'name',
      value: 'jane',
      operation: false,
    },
  ]

  const store = createStore(facts)

  expect(store.facts).toEqual(facts)
})
