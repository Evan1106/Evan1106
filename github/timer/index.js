// *這邊因為改用 ESM，所以需要改用 export default/export
// module.exports =
export default class Timer {
  constructor() {
    this.startTime = performance.now();
  }

  count() {
    return (performance.now() - this.startTime) / 1000;
  }
}
