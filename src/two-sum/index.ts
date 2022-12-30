// https://leetcode.com/problems/two-sum/

import comparator, { Case } from '../_common/comparator'

type Args = [number[], number]

/**
 * O(n2) time
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum0(...[nums, target]: Args): number[] {
  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first++) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const secondCache: number[] = []

    for (let second = first + 1; second < numsLength; second++) {
      if (secondCache.includes(nums[second])) {
        continue
      }

      if (nums[first] + nums[second] === target) {
        return [first, second]
      }

      secondCache.push(nums[second])
    }

    firstCache.push(nums[first])
  }

  return []
}

/**
 * O(n2) time
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum1(...[nums, target]: Args): number[] {
  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first++) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const targetSecond = target - nums[first]
    const second = nums.indexOf(targetSecond, first + 1)

    if (second !== -1) {
      return [first, second]
    }

    firstCache.push(nums[first])
  }

  return []
}

/**
 * O(2n) time
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum2(...[nums, target]: Args): number[] {
  const numIndexes: Record<number, number[]> = nums.reduce(
    (acc, value, index) => ({
      ...acc,
      [value]: [...(acc[value] ?? []), index],
    }),
    {} as Record<number, number[]>,
  )

  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first++) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const targetSecond = target - nums[first]
    const secondIndexes = numIndexes[targetSecond] ?? []
    const second = secondIndexes.find((index) => index !== first) ?? -1
    if (second !== -1) {
      return [first, second]
    }

    firstCache.push(nums[first])
  }

  return []
}

/**
 * O(n) time
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum3(...[nums, target]: Args): number[] {
  const numIndexes: Record<number, number> = {}
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    const secondValue = target - nums[firstIndex]
    if (numIndexes[secondValue] !== undefined) {
      return [firstIndex, numIndexes[secondValue]]
    }

    numIndexes[nums[firstIndex]] = firstIndex
  }

  return []
}

const cases: Case<Args>[] = [
  {
    args: [[3, 2, 4], 6],
  },
  {
    args: [[1, 1, 4, 1, 1, 7, 1, 1], 11],
  },
  {
    args: [[...Array(1000).keys()], 1999],
    description: '1000 ordered items',
  },
]

comparator<Args>({ cases, fns: [twoSum0, twoSum1, twoSum2, twoSum3] })
