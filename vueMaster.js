Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>
        
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if='instock >= 10'>In stock</p>
            <p v-else-if='instock < 10 && instock > 0'>Almost sold out!</p>
            <p v-else>Out of stock</p>

            <ul>
                <li v-for='detail in details'>{{ detail }}</li>
            </ul>

            <div v-for='(variant, index) in variants' 
                :key='variant.variantID' 
                class="color-box"
                :style='{ backgroundColor: variant.variantColor}' 
                @mouseover='updateProduct(index)'>
            </div>

            <button v-on:click='addToCart' 
                :disabled='!instock' 
                :class='{ disabledButton: !instock }'>Add to Cart</button>
            <div class="cart">
                <p>Cart {{ cart }}</p>
            </div>

        </div>
    </div>
    `,
    data() {
        return {
        brand:'Veu Mastory',
        product: 'Socks',
        selectedVariant: 0,
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
    }},
    methods: {
        addToCart: function(){
            this.cart += 1;
        },
        updateProduct: function(index){
            this.selectedVariant = index          
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
});

var app = new Vue({
    el: '#app',
    // data: {
    //     brand:'Veu Mastory',
    //     product: 'Socks',
    //     selectedVariant: 0,
    //     // inventory: 8,
    //     // instock: false,
    //     details: [
    //         "80% cotton", "20% poyester", "Gender-neutral"
    //     ],
    //     variants: [
    //         {
    //             variantID: 2234,
    //             variantColor: 'green',
    //             variantImage: './img/greenSocks.png',
    //             variantQuantity: 10
    //         },
    //         {
    //             variantID: 2235,
    //             variantColor: 'blue',
    //             variantImage: './img/blueSocks.png',
    //             variantQuantity: 0
    //         }
    //     ],
    //     cart: 0
    // },
    // methods: {
    //     addToCart: function(){
    //         this.cart += 1;
    //     },
    //     updateProduct: function(index){
    //         this.selectedVariant = index
    //         // console.log(index);            
    //     }
    // },
    // computed: {
    //     title(){
    //         return this.brand + ' ' + this.product
    //     },
    //     image(){
    //         return this.variants[this.selectedVariant].variantImage;
    //     },
    //     instock(){
    //         return this.variants[this.selectedVariant].variantQuantity;
    //     }
    // }
})