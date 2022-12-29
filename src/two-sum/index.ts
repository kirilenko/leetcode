// https://leetcode.com/problems/two-sum/

/**
 * O(n2) time
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum0(nums: number[], target: number): number[] {
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
function twoSum1(nums: number[], target: number): number[] {
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
function twoSum2(nums: number[], target: number): number[] {
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
function twoSum3(nums: number[], target: number): number[] {
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

type Timer = {
  fnName: string
  time: number
}

type Case = {
  args: [number[], number]
  description?: string
  timers: Timer[]
}

const cases: Case[] = [
  {
    args: [[3, 2, 4], 6],
    timers: [],
  },
  {
    args: [[1, 1, 4, 1, 1, 7, 1, 1], 11],
    timers: [],
  },
  {
    args: [[...Array(1000).keys()], 1999],
    description: '10000 ordered items',
    timers: [],
  },
]

cases.forEach(({ args, description: desc = '', timers }, i) => {
  console.log(`\nCase ${i}:${desc ? `\n${desc}` : ''}\n`)
  ;[twoSum0, twoSum1, twoSum2, twoSum3].forEach((fn) => {
    const tStart = performance.now()
    fn(...args)
    const tFinish = performance.now()
    timers.push({
      fnName: fn.name,
      time: tFinish - tStart,
    })
  })

  timers.sort((a, b) => a.time - b.time)
  timers.forEach((timer) => {
    console.log(`  ${timer.fnName}: ${timer.time}ms`)
  })
})
