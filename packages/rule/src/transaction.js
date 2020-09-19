export const assert = (entity, attribute, value) => ({
  entity,
  attribute,
  value,
  operation: true,
})

export const retract = (entity, attribute, value) => ({
  entity,
  attribute,
  value,
  operation: false,
})
