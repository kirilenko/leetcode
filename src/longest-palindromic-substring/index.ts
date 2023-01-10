// https://leetcode.com/problems/longest-palindromic-substring/

export type Args = [string]

export const isPalindrome = (s: string): boolean => {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }

    i++
    j--
  }

  return true
}

// Complexity: O(n3)
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

// Complexity: O(n3)
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

// Complexity: O(n2)
export const longestPalindrome2 = (...[s]: Args): string => {
  const expandAroundCenter = (
    str: string,
    left: number,
    right: number,
  ): number => {
    const strLength = str.length
    while (left >= 0 && right < strLength && str[left] === str[right]) {
      left--
      right++
    }

    return right - left - 1
  }

  const length = s.length
  let start = 0
  let end = 0

  for (let i = 0; i <= length; i++) {
    const len1 = expandAroundCenter(s, i, i) // search palindrome w/ odd-numbered length
    const len2 = expandAroundCenter(s, i, i + 1) // ...even-numbered length
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }

  return s.substring(start, end + 1)
}
