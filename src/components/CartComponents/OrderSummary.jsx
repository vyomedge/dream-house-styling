const applyTax = (price, taxPercent = 18) => {
  if (!price) return 0;
  return +(price * (1 + taxPercent / 100)).toFixed(2);
};

const OrderSummary = ({ cartItems = [] }) => {
  console.log("cartItems", cartItems);
  const total = cartItems.reduce((acc, curr) => {
    return (acc += curr.TotalPrice);
  }, 0);

  const totalAfterTax = applyTax(total, 18);
  const totalTax = totalAfterTax - total;

  return (
    <div class="sticky top-32 glass p-8 rounded-2xl soft-shadow border border-white/10">
      <h3 class="text-2xl font-bold uppercase tracking-tighter mb-8">
        Order Summary
      </h3>
      <div class="space-y-4 mb-8">
        <div class="flex justify-between items-center text-white/60">
          <span class="text-sm">Subtotal ({cartItems.length} items)</span>
          <span class="font-medium">₹ {total.toFixed(2)}</span>
        </div>
        <div class="flex justify-between items-center text-white/60">
          <span class="text-sm">Taxes</span>
          <span class="font-medium">₹ {totalTax.toFixed(2)}</span>
        </div>
      </div>
      <div class="h-[1px] bg-white/10 mb-8"></div>
      <div class="flex justify-between items-center mb-10">
        <span class="text-lg font-bold">Total</span>
        <span class="text-3xl font-black text-white">₹ {totalAfterTax} </span>
      </div>
      <button class="w-full bg-[#00D4C8] hover:bg-[#00D4C8]/90 cursor-pointer text-white font-black py-5 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 mb-6">
        Proceed to Checkout
      </button>
      <div class="space-y-4">
        <div class="flex items-center gap-3 text-white/40">
          <span class="material-symbols-outlined text-sm">verified_user</span>
          <span class="text-[10px] uppercase tracking-widest font-bold">
            Secure SSL Checkout
          </span>
        </div>
        <div class="flex items-center gap-3 text-white/40">
          <span class="material-symbols-outlined text-sm">local_shipping</span>
          <span class="text-[10px] uppercase tracking-widest font-bold">
            Premium White Glove Delivery
          </span>
        </div>
      </div>
      {/* <div class="mt-12">
        <label class="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
          Promotional Code
        </label>
        <div class="flex gap-2">
          <input
            class="flex-1 bg-white/5 border-white/10 rounded-lg text-sm px-4 focus:ring-primary focus:border-primary"
            placeholder="LUXE2024"
            type="text"
          />
          <button class="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold hover:bg-white/20 transition-all uppercase cursor-pointer">
            Apply
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderSummary;
