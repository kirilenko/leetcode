type Timer = {
  fnName: string
  time: number
}

export type Case<Args extends Array<unknown>> = {
  args: Args
  description?: string
  timers?: Timer[]
}

type Fn<Args extends Array<unknown>> = (...args: Args) => unknown

type Props<Args extends Array<unknown>> = {
  cases: Case<Args>[]
  fns: Fn<Args>[]
  repeat?: number
}

const comparator = <Args extends Array<unknown>>(props: Props<Args>): void => {
  const { cases, fns, repeat = 10 } = props

  cases.forEach(({ args, description: desc = '', timers = [] }, i) => {
    console.log(`\nCase ${i}:${desc ? `\n${desc}` : ''}\n`) // eslint-disable-line no-console

    fns.forEach((fn) => {
      const timeArr: number[] = []
      for (let j = 0; j < repeat; j += 1) {
        const start = performance.now()
        fn(...args)
        const end = performance.now()
        timeArr.push(end - start)
      }

      const time = timeArr.reduce((acc, cur) => acc + cur, 0) / repeat
      timers.push({
        fnName: fn.name,
        time,
      })
    })

    timers.sort((a, b) => a.time - b.time)
    timers.forEach((timer) => {
      const percent = Math.round((timer.time / timers[0].time) * 100)
      console.log(`  ${timer.fnName} (${percent}%): ${timer.time}ms`) // eslint-disable-line no-console
    })
  })
}

export default comparator
