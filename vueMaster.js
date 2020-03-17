var app = new Vue({
    el: '#app',
    data: {
        brand:'Veu Mastory',
        product: 'Socks',
        image: './img/greenSocks.png',
        inventory: 8,
        instock: false,
        details: [
            "80% cotton", "20% poyester", "Gender-neutral"
        ],
        variants: [
            {
                variantID: 2234,
                variantColor: 'green',
                variantImage: './img/greenSocks.png'
            },
            {
                variantID: 2235,
                variantColor: 'blue',
                variantImage: './img/blueSocks.png'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1;
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        }
    }
})