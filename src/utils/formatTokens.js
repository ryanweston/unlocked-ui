export function formatTokens(tokens) {
  const formatted = Object.fromEntries(Object
    .values(tokens.color)
    .map(({ attributes, value }) => [
      attributes.type, value,
    ]))

  return formatted
}
