var modulePlugin = require('./../vue-modules')
var Vue = require('./vue-mock')
modulePlugin(Vue)

var expect = require('chai').expect
var assert = require('chai').assert

describe('Vue modules', function () {


    describe('Installation', function () {
        it('installs plugin', function () {
            expect(Vue).to.have.property('registerModule')
            expect(Vue).to.have.property('getRoutes')
        })
    })


    describe('Functionality', function () {


        var module = {
            components: {
                vmComponentOne: {},
                vmComponentTwo: {},
            },
            partials: {
                vmPartialOne: {},
                vmPartialTwo: {},
                vmPartialThree: {},
            },
            routes: {
                vmRouteOne: {},
                vmRouteTwo: {},
                vmRouteThree: {},
                vmRouteFour: {},
            },
            modules: [
                {
                    components: {
                        vmComponentRecursive: {},
                    },
                    partials: {
                        vmPartialRecursive: {},
                    },
                    routes: {
                        vmRouteRecursive: {},
                    },
                }
            ]
        }

        Vue.registerModule(module)

        it('registers modules', function () {
            assert.lengthOf(Vue.components, 3)
        })

        it('registers partials', function () {
            assert.lengthOf(Vue.partials, 4)
        })

        it('gets routes', function () {
            assert(Object.keys(Vue.getRoutes(module)).length, 5)
        })
    })
});