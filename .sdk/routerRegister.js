const mapping = require('../mapping.json')
const response = require('./response')
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

const routeWrapper = (method, { params, controller }) => async (req, res, next) => {
  method(...getParams(params, req))
    .then(data => response._.mount(data, res))
    .catch(error => response._.serverError(error, res, controller))
}

const registerSingleRoute = (route, router) => {
  const { path, method, _private } = route

  const controller = require('../src/controller/' + _private.controller)
  
  router[method](path, routeWrapper(controller, _private))
}

const routerRegister = (app) => {
  mapping.app.routes
    .forEach(route => registerSingleRoute(route, app))
}

module.exports = routerRegister;