var app = new Vue({
    el: '#app',
    data: {
        brand:'Veu Mastory',
        product: 'Socks',
        selectedVariant: 0,
        // inventory: 8,
        // instock: false,
        details: [
            "80% cotton", "20% poyester", "Gender-neutral"
        ],
        variants: [
            {
                variantID: 2234,
                variantColor: 'green',
                variantImage: './img/greenSocks.png',
                variantQuantity: 10
            },
            {
                variantID: 2235,
                variantColor: 'blue',
                variantImage: './img/blueSocks.png',
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1;
        },
        updateProduct: function(index){
            this.selectedVariant = index
            // console.log(index);            
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        instock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
})