import launches from './launches'
export default (app) => {
  app.use('/launches', launches)
}
