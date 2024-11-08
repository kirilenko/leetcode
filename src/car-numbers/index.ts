export type Args = []

const fn17 = () => {
  const carNumbers: {
    gNumber: string
    sum: number
  }[] = []

  for (let n1 = 0; n1 <= 9; n1 += 1) {
    for (let n2 = 0; n2 <= 9; n2 += 1) {
      for (let n3 = 0; n3 <= 9; n3 += 1) {
        carNumbers.push({ gNumber: `${n1}${n2}${n3}`, sum: n1 + n2 + n3 })
      }
    }
  }

  // carNumbers -> [{ number: '123', sum: 6 }, { number: '321', sum: 6 }, ...]
  // dict -> { 6: 2 }
  // sum -> 6
  // acc[sum] -> 2
  // acc.sum

  type Dict = {
    [sum: number]: {
      count: number
      numbers: string[]
    }
  }

  const dict: Dict = carNumbers.reduce((acc, { gNumber, sum }) => {
    acc[sum] = {
      count: (acc[sum]?.count ?? 0) + 1,
      numbers: acc[sum] ? [...acc[sum].numbers, gNumber] : [gNumber],
    }
    return acc
  }, {} as Dict)

  Object.entries(dict)
    .sort((a, b) => b[1].count - a[1].count)
    .forEach(([sum, { count, numbers }]) => {
      console.log(sum, count, numbers) // eslint-disable-line no-console
    })
}

fn17()
