new Vue({
    el: '#vue-app',
    data: {
        error: false,
        success: false,
        name: 'Jack',
        characters: ['Mario','Luigi','Yoshi','Bowser'],
        ninjas: [
            {name: 'Ryu',age: 25},
            {name: 'Yoshi',age: 35},
            {name: 'Ken',age: 55}
        ],
        health: 100,
        ended: false
    },
    methods: {
        punch: function() {
            this.health -= 10;
            this.health <= 0 ? this.ended = true : ''; 
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
})