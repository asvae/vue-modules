module.exports = {
    partials: [],
    components: [],
    component: function (component){
        this.components.push(component)
    },
    partial: function (partial){
        this.partials.push(partial)
    }
}