new Vue({
    el: '#vue-app',
    data: {
        name: 'Wade',
        job: 'Assassin',
        website: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa',
        websiteTag: '<a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa">I use websitTag.</a>',
        country: 'Taiwan'
    },
    methods: {
        greet: function(time){
            // return 'Good' + '' + time;
            return `Good ${time} ${this.name}`;
        }
    }
});

new Vue({
    el: '#vue-app2',
    data: {
        year: 2020,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.year += inc;
        },
        subtract: function(dec){
            this.year -= dec;
        },
        updateXY: function(e){
            console.log(e.offsetX, e.offsetY);
            this.x = `X軸位置：${e.offsetX}`;
            this.y = `Y軸位置：${e.offsetY}`;
        }
    }
})