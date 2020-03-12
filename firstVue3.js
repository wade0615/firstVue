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

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue Instances 1'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello from app 1'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue Instances 2'
    },
    methods: {
        changeTitle: function() {
            one.title = 'This title is change from vue-app-two.'
            }
    },
    computed: {
        greet: function() {
            return 'This is app 2 speaking!'
        }
    }
});

const outsideTheInstances = document.querySelector('#outsideTheInstances');
outsideTheInstances.addEventListener('click', function(){
    two.title = 'This title is change from outside the Vue Instances'
})

// two.title = 'This title is change from outside the Vue Instances'