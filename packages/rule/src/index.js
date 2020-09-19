export const schema = (a, b) => a + b

export const scheme = (a) => a + a

export const createStore = (initialFacts = []) => {
  const facts = [...initialFacts]

  const transact = (...statements) => {
    facts.push(...statements)
  }

  transact()

  return {
    facts,
  }
}
