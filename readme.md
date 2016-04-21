![Travis CI](https://travis-ci.org/Asvae/vue-modules.svg?branch=master)

# Vue Modules
This library is **vue.js** plugin.
It is intended to simplify adding components, partials and routes.
It provides easy module structure and supports nested modules.

## Installing
First, add dependency to your project.
```
npm install asva-vue-modules --save
```
Then install plugin.
```
Vue.use(require('asva-vue-modules'))
```

## Usage
When your app becomes large enough, you'd need some modularity
to pay your technical debt. By **modules** I mean bundles
of `components`, `partials`, `routes` and child `modules`.

Here's your typical module file:
```
// module.js

module.exports = {
    components: {
        vmBoards: require('./boards.vue'),
        vmBoardCreateModal: require('./board-create-modal.vue'),
        vmBoardEditModal: require('./board-edit-modal.vue'),
        vmBoardStats: require('./board-stats.vue'),
        vmBoardsFilterBlock: require('./boards-filter-block.vue'),
    },
    partials: {
        boardForm: require('./board-form.html'),
    },
    routes: {
        '/boards': {
            component: {
                template: `<vm-boards></vm-boards>`
            }
        },
    },
    modules: {
        require('./modules/BoardEditor'),
        require('./modules/ProxyManager'),
    }
}
```

And here is what you can do with it.

* Install all components and partials in module.
```
var module = require('module')
Vue.registerModule(module)
```
* Get collection of routes
```
var routes = Vue.getRoutes(module)
```
Which you can easily use in [vue-router](https://github.com/vuejs/vue-router).
```
Vue.use(VueRouter)
var router = new VueRouter({history: true});
router.map(routes)
```

## Nesting
If you have nested modules, these will be imported as well, same
applies to routes.

## Credits
* **Yauheni Prakopchyk** - [Asva](https://github.com/Asvae)

## License
This project is licensed under the MIT License
