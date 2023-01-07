export type Args = [string]

export const isValid0 = (...[s]: Args): boolean => {
  const stack = []
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  for (const char of s) {
    if (map.has(char)) {
      if (stack.pop() !== map.get(char)) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}
