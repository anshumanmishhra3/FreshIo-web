import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
export const productStore = defineStore("cartStore", {
  state: () => {
    return {
      items: [],
      
    };
  },
  actions: {
    addToCart(item) {
      let existing = this.items.find((d) => d.id == item.id);
      if (existing) {
        existing.quantity += 1;
        console.log("existing");
        console.log(existing);
      } else {
        this.items.push({ ...item, quantity: 1 });
        toast.success("Items added to Cart");
        console.log(item);
      }
    },
    addToWishlist(item) {
      toast("Items added to Wishlist❤️", {
        type: "default",
      });
    },
    removeItem(id) {
    
      this.items = this.items.filter((e) => {
           e.id !== id
      });
      console.log(this.items)
    },
    increaseQty(item) {
      let existing = this.items.find((d) => d.id == item.id);
      if (existing.quantity >= 10) return;
      existing.quantity += 1;
    },
    decreaseQty(item) {
      let existing = this.items.find((d) => d.id === item.id);
      if (existing.quantity > 0) {
        existing.quantity -= 1;
      } else {
        this.items=this.items.filter((t)=> t.id !=item.id)
        toast.error('Item removed from cart')
      }
    },
  },
  persist: true,
});
