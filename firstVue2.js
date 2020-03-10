new Vue({
    el: '#vue-app',
    data: {
        year: 2020
    },
    methods: {
        add: function(inc){
            this.year += inc;
        },
        subtract: function(dec){
            this.year -= dec;
        },
        logName: function() {
            console.log('name');
        },
        logAge: function() {
            console.log('age');
        }
    }
})