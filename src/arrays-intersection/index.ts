export type Args = [number[], number[]]

// Complexity O(n2)
const intersect0 = (...[nums1, nums2]: Args): number[] => {
  const [short, long] =
    nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2]

  return short.filter((num) => long.includes(num))
}

// Complexity O(n)
const intersect1 = (...[nums1, nums2]: Args): number[] => {
  const nums1Dict = nums1.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const nums2Dict = nums2.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const result: number[] = []

  Object.keys(nums1Dict).forEach((key) => {
    const num = +key
    if (nums2Dict[num]) {
      const count = Math.min(nums1Dict[num], nums2Dict[num])
      for (let i = 0; i < count; i += 1) {
        result.push(num)
      }
    }
  })

  return result
}

// Complexity O(n)
// It's better than intersect0 for both large arrays only
const intersectBetter = (...[nums1, nums2]: Args): number[] => {
  const map = new Map<number, number>()
  const result: number[] = []

  nums1.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1)
  })

  nums2.forEach((num) => {
    const count = map.get(num) || 0
    if (count) {
      result.push(num)
      map.set(num, count - 1)
    }
  })

  return result
}

export const fns = [intersect0, intersect1, intersectBetter]
