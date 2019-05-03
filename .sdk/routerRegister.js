const mapping = require('../mapping.json')
const { get, has } = require('lodash')

const getParams = (params, req) => {
  const p = []
  params.forEach(param => {
    let defaultValue = undefined
    let defaultKey = param
    if (typeof param === "object") {
      defaultValue = param.default
      defaultKey = param.name
    }
    
    has(req, defaultKey)
      ? p.push(get(req, defaultKey))
      : p.push(defaultValue)
  })
  return p
}

const routeWrapper = (controller, params) => async (req, res, next) => {
  controller(...getParams(params, req))
    .then(data => res.send({ data }))
    .catch(err => res.send({ message: err.message }))
}

const registerSingleRoute = (route, router) => {
  const { path, method, _private } = route

  const controller = require('../src/controller/' + _private.controller)
  
  router[method](path, routeWrapper(controller, _private.params))
}

const routerRegister = (app) => {
  mapping.app.routes
    .forEach(route => registerSingleRoute(route, app))
}

module.exports = routerRegister;