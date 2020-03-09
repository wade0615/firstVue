new Vue({
    el: '#vue-app',
    data: {
        name: 'Wade',
        job: 'Assassin',
        website: 'https://wade0615.github.io/',
        websiteTag: '<a href="https://wade0615.github.io/">I use websitTag.</a>',
        country: 'Taiwan'
    },
    methods: {
        greet: function(time){
            // return 'Good' + '' + time;
            return `Good ${time} ${this.name}`;
        }
    }
})