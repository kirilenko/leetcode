// https://leetcode.com/problems/delete-columns-to-make-sorted/

export type Args = [string[]]

/**
 * @param {string[]} strs
 * @returns {number} - number of columns to delete
 */
export const minDeletionSize0 = (...[strs]: Args): number => {
  let countForRemove = 0
  const lengthOfEachString = strs[0].length
  for (let i = 0; i < lengthOfEachString; i += 1) {
    const col: string[] = strs.map((str) => str[i])
    if (col.join('') !== col.sort().join('')) {
      countForRemove += 1
    }
  }

  return countForRemove
}

export const minDeletionSize1 = (...[strs]: Args): number => {
  let countForRemove = 0
  const lengthOfEachString = strs[0].length
  const countOfStrings = strs.length
  for (let i = 0; i < lengthOfEachString; i += 1) {
    const col: string[] = strs.map((str) => str[i])
    for (let j = 1; j < countOfStrings; j += 1) {
      if (col[j] < col[j - 1]) {
        countForRemove += 1
        break
      }
    }
  }

  return countForRemove
}
