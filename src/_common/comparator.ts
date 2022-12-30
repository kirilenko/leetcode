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
}

const comparator = <Args extends Array<unknown>>(props: Props<Args>): void => {
  const { cases, fns } = props

  cases.forEach(({ args, description: desc = '', timers = [] }, i) => {
    console.log(`\nCase ${i}:${desc ? `\n${desc}` : ''}\n`)

    fns.forEach((fn) => {
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
}

export default comparator
