new Vue({
    el: '#vue-app',
    data: {
        year: 2020,
        name: '',
        age: '',
        a: 0,
        b: 0
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
        },
        // addToA: function() {
        //     console.log('addToA');
        //     return this.year + this.a;
        // },
        // addToB: function() {
        //     console.log('addToB');
        //     return this.year + this.b;
        // }
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.year + this.a;
        },
        addToB: function() {
            console.log('addToB');
            return this.year + this.b;
        }
    }
})