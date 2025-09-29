import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
export const productStore = defineStore('cartStor',{
    state : ()=>{
        return{
            items : [],
            qty: 0
        }
    },
    actions : {
        addToCart(item){
            console.log('aagya')
            console.log(item);
            toast.success("Items added to Cart")
        },
        addToWishlist(item){
            toast.success("Items added to Wishlist❤️")
        }
    }
})

