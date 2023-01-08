export type Args = [string]

export const isPalindrome = (s: string): boolean => {
  const length = s.length
  for (let i = 0; i < length / 2; i++) {
    if (s[i] !== s[length - 1 - i]) {
      return false
    }
  }

  return true
}

// Complexity: O(n2)
export const longestPalindrome0 = (...[s]: Args): string => {
  let res = ''
  const length = s.length

  for (let i = 0; i <= length; i++) {
    for (let j = i + 1; j <= length; j++) {
      const substring = s.slice(i, j)
      if (isPalindrome(substring) && substring.length > res.length) {
        res = substring
      }
    }
  }

  return res
}

// Complexity: O(n2)
export const longestPalindrome1 = (...[s]: Args): string => {
  let res = ''
  const length = s.length

  for (let i = 0; length - i >= res.length; i++) {
    for (let j = i + 1; j <= length; j++) {
      const substring = s.slice(i, j)
      if (isPalindrome(substring) && substring.length > res.length) {
        res = substring
      }
    }
  }

  return res
}
