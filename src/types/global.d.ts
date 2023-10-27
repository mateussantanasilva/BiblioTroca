export {}

declare global {
  interface MouseFlowWindow extends Window {
    _mfq?: any[]
  }
}
