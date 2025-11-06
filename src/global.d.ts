declare const __DEV__: boolean
declare const __TEST__: boolean
declare const __GLOBAL__: boolean

interface Window {
  __VUE_DEVTOOLS_GLOBAL_HOOK__: DevtoolsHook
}

interface DevtoolsHook {
  emit: (event: string, ...payload: any[]) => void
  on: (event: string, handler: Function) => void
  once: (event: string, handler: Function) => void
  off: (event?: string, handler?: Function) => void
  Vue?: any
  // apps: AppRecordOptions[]
}
