app.component('product-details',{
    props: {
        details:{
            type:String,
            required:true
        }
        
    },
    template:
    /*html*/
    `<div class="product-details">
    <p>Detail: {{details}}</p>
    <div>`,
    data() {
        return {
            details: 'this is product details'
        }
    }

})