module.exports = app => {
  class HomeController extends app.Controller {
    async index () {
      this.ctx.body = 'Hello World'
    }
  }
  return HomeController
}