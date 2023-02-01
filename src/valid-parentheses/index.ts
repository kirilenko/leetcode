export type Args = [string]

export const isValid0 = (...[str]: Args): boolean => {
  const stack = []
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  for (let i = 0; i < str.length; i += 1) {
    if (map.has(str[i])) {
      if (stack.pop() !== map.get(str[i])) {
        return false
      }
    } else {
      stack.push(str[i])
    }
  }

  return stack.length === 0
}
