import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { authStore } from "./auth";  // useAuthStore is the proper import name for your auth store

export const productStore = defineStore("cartStore", {
  state: () => ({
    items: {},  
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

      // Total price = sum of price * quantity
      return state.items[userId].reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    qty: (state) => {
      const auth = authStore();
      const userId = auth.user?.id;
      if (!userId || !state.items[userId]) return 0;

      // Total number of distinct items
      return state.items[userId].length;
    },
  },

  actions: {
    addToCart(item) {
      const auth = authStore();
      const userId = auth.user?.id;

      if (!auth.loggedin || !userId) {
        toast.info("Please login first");
        return;
      }

      if (!this.items[userId]) {
        this.items[userId] = [];
      }

      const existing = this.items[userId].find((d) => d.id === item.id);

      if (existing) {
        existing.quantity += 1;
        toast.info("Item quantity updated");
      } else {
        this.items[userId].push({ ...item, quantity: 1 });
        toast.success("Item added to Cart");
      }
    },

    addToWishlist(item) {
      toast("Item added to Wishlist ❤️", {
        type: "default",
      });
    },

    removeItem(item) {
      const auth = authStore();
      const userId = auth.user?.id;

      if (!userId || !this.items[userId]) return;

      this.items[userId] = this.items[userId].filter((t) => t.id !== item.id);
      toast.error("Item removed from cart");
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
