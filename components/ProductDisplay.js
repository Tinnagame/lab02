app.component('product-display',{
    props: {
        premium: {
            type:Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img  v-bind:src="image">
                </div>
                <div class="product-info">
                    <h1>{{ title }} </h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{shipping}}</p>
                    <div
                     v-for="(variant, index) in variants"
                     :key="variant.id" @mouseover="updateVariant(index)" 
                     class="color-circle"
                     :style="{backgroundColor: variant.color}">
                     </div>
                    <button 
                    class=" button "
                    :disabled='!inStock'
                    :class="{disabledButton:!inStock}" 
                    @click="addToCart ">
                    Add to Cart
                    </button>
                    <button
                    class="button"
                    :disabled='!inStock'
                    :class="{disabledButton: cart}"
                    @click='removeFromCart'
                    >Remove from cart</button>
                </div>
            </div>
        </div>`,
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
                cart: 0,
                isOnSale:false,
                activeClass: true,
                premium:true
                
    
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
            shipping() {
                if(this.premium) {
                    return 'Free'
                }
                return 30
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
            },
            updateImage(variantImage) {
                this.image = variantImage
            },
            updateVariant(index) {
                this.selectedVariant = index
            },
            removeFromCart() {
                this.$emit('remove-from-cart')
            }
        }
})