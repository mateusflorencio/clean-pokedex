export class ServerError extends Error {
  constructor () {
    super('server error, try later')
    this.name = 'ServerError'
  }
}
