export class UnexpectedError extends Error {
  constructor () {
    super('try later')
    this.name = 'UnexpectedError'
  }
}
