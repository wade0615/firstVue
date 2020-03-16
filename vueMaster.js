var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/greenSocks.png',
        inventory: 8,
        instock: true,
        details: [
            "80% cotton", "20% poyester", "Gender-neutral"
        ],
        variants: [
            {
                variantID: 2234,
                variantColor: 'green'
            },
            {
                variantID: 2235,
                variantColor: 'blue'
            }
        ]
    },
    methods: {

    },
    computed: {

    }
})