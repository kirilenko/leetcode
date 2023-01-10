// https://leetcode.com/problems/palindrome-number/

export type Args = [number]

export const isPalindrome0 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  const xString = x.toString()
  return xString === xString.split('').reverse().join('')
}

export const isPalindrome1 = (...[x]: Args): boolean =>
  x >= 0 && !(x && x % 10 === 0) && x === +[...x.toString()].reverse().join('')

export const isPalindrome2 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  if (x < 10) {
    return true
  }

  let reverse = 0
  let copy = x

  while (copy > 0) {
    const digit = copy % 10
    reverse = reverse * 10 + digit
    copy = Math.floor(copy / 10)
  }

  return reverse === x
}

// Complexity O(log10(n))
export const isPalindrome3 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  if (x < 10) {
    return true
  }

  let reverse = 0
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return reverse === x || Math.floor(reverse / 10) === x
}
