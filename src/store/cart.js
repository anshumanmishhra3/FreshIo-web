import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
export const productStore = defineStore('cartStore',{
    state : ()=>{
        return{
            items : [],
            qty: 0
        }
    },
    actions : {
        addToCart(item){
            console.log('aagya')
            // console.log(item);
            this.qty++;
            toast.success("Items added to Cart")
            this.items.push(item);
            this.items.forEach((ele)=>{
                console.log(ele);
            })
        },
        addToWishlist(item){
            toast("Items added to Wishlist❤️",{
                "type":"default"
            })
        }
    },
    persist : true
})

