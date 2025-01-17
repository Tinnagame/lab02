const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            //image:null,
           // inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 }
            ],
            selectedVariant:0,
            cart: [],
            isOnSale:false,
            premium:true,
            
        

        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product + ' '+ this.onSale
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            if(this.isOnSale) {
            return 'is on sale'
            } else {
                return ' '
            }
        },
    },
    methods: {
        /*addToCart() {
            this.cart += 1
        },*/
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        updateCart(id) {
            this.cart.push(id)
            
        },
        removeFromCart() {
            this.cart.splice(0,1)
        }
    }
})