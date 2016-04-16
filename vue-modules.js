var _ = require('lodash');

(function () {

    function install(Vue) {
        /**
         * Register all components and partials in module recursively.
         *
         * @param module
         */
        Vue.registerModule = function (module) {

            // Register nested modules
            if (module.modules) {
                var modules = module.modules

                for (var index in modules) {
                    this.registerModule(modules[index])
                }
            }

            // Register components
            var components = module.components
            for (var index in components) {
                this.component(index, components[index])
            }

            // Register partials
            var partials = module.partials
            for (var index in partials) {
                this.partial(index, partials[index])
            }
        }

        /**
         * Get routes from module recursively.
         *
         * @param module
         * @returns {{}}
         */
        Vue.getRoutes = function (module) {
            var routes = {}

            if (module.modules) {
                var modules = module.modules

                for (var index in modules) {
                    var childRoutes = this.getRoutes(modules[index])
                    _.merge(routes, childRoutes)
                }

                return routes
            }

            return module.routes
        }

    }

    if (typeof exports == "object") {
        module.exports = install
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return install
        })
    } else if (window.Vue) {
        Vue.use(install)
    }

})()