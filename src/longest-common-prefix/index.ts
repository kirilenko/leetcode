// https://leetcode.com/problems/longest-common-prefix/

export type Args = [string[]]

export const longestCommonPrefix0 = (...[strs]: Args): string => {
  const minLength = strs.reduce((acc, curr) =>
    curr.length < acc.length ? curr : acc,
  ).length

  let prefix = ''
  for (let i = 0; i < minLength; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix
      }
    }

    prefix += strs[0][i]
  }

  return prefix
}

export function longestCommonPrefix1(...[strs]: Args): string {
  if (strs.length === 1) {
    return strs[0]
  }

  const shortest = strs.sort((a, b) => a.length - b.length)[0]
  const shortestLen = shortest.length

  for (let i = shortestLen; i > 0; i -= 1) {
    const prefix = shortest.slice(0, i)
    if (strs.every((str) => str.slice(0, i) === prefix)) {
      return prefix
    }
  }

  return ''
}
