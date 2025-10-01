import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { authStore } from "./auth"; // useAuthStore is the proper import name for your auth store

export const productStore = defineStore("cartStore", {
  state: () => ({
<<<<<<< HEAD
    items: {},  
    wishlist : {},
=======
    items: {},
>>>>>>> 8f7c2e06ef4b83c0773492ab84f93144760c04af
  }),

  getters: {
    getUserItems: (state) => {
      const auth = authStore();
      const userId = auth.user?.id;
      return userId ? state.items[userId] || [] : [];
    },
    totalCount: (state) => {
      const auth = authStore();
      const userId = auth.user?.id;
      if (!userId || !state.items[userId]) return 0;
      return state.items[userId].reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    qty: (state) => {
      const auth = authStore();
      const userId = auth.user?.id;
      if (!userId || !state.items[userId]) return 0;

      if (userId.length == 4)
        throw new Error("This is the error sending from the user");
      return state.items[userId].length;
    },
  },

  actions: {
    addToCart(item) {
      const auth = authStore();
      const userId = auth.user?.id;
      if (!auth.loggedin || !userId) {
        toast.info("Please login first", {
          autoClose: 1000,
        });
        return;
      }

      if (!this.items[userId]) {
        this.items[userId] = [];
      }

      const existing = this.items[userId].find((d) => d.id === item.id);

      if (existing) {
        existing.quantity += 1;
        toast.info("Item quantity updated", {
          autoClose: 1000,
        });
      } else {
        this.items[userId].push({ ...item, quantity: 1 });
        toast.success("Item added to Cart", {
          autoClose: 1000,
        });
      }
    },

    addToWishlist(item) {
      console.log('added to wishlist')
      const auth = authStore();
      const userId = auth.user?.id;
      if (!auth.loggedin || !userId) {
        toast.info("Please login first",{
          autoClose : 1000,
        }
        );
        return;
      }

      if (!this.wishlist[userId]) {
        this.wishlist[userId] = [];
      }

      const existing = this.wishlist[userId].find((d) => d.id === item.id);

      if (existing) {
      
        toast.info("Already in wishlist",{
          autoClose : 1000,
        });
      } else {
        this.wishlist[userId].push({ ...item, quantity: 1 });
        toast.success("Item added to wishlist",{
          autoClose : 1000,
        });
      }
      
      
    },

    removeItem(item) {
      const auth = authStore();
      const userId = auth.user?.id;

      if (!userId || !this.items[userId]) return;
      this.items[userId] = this.items[userId].filter((t) => t.id !== item.id);
      toast.error("Item removed from cart", {
        autoClose: 1000,
      });
    },
    
    increaseQty(item) {
      const auth = authStore();
      const userId = auth.user?.id;

      if (!userId || !this.items[userId]) return;

      const existing = this.items[userId].find((d) => d.id === item.id);
      if (existing && existing.quantity < 10) {
        existing.quantity += 1;
      }
    },

    decreaseQty(item) {
      const auth = authStore();
      const userId = auth.user?.id;

      if (!userId || !this.items[userId]) return;

      const existing = this.items[userId].find((d) => d.id === item.id);
      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        this.removeItem(existing);
      }
    },
  },

  persist: true,
});
