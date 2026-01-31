import { useAuth } from "@/Context/AuthContext";

const applyTax = (price, taxPercent = 18) => {
  if (!price) return 0;
  return +(price * (1 + taxPercent / 100)).toFixed(2);
};

function generateWhatsAppMessage(cartItems, customerInfo = {}) {
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.TotalPrice, 0);
  const gstRate = 0.18; // 18% GST
  const gstAmount = subtotal * gstRate;
  const grandTotal = subtotal + gstAmount;

  // Get store info from first item
  const storeName = cartItems[0]?.StoreName || "DHS Store";

  // Build the message
  let message = `🛍️ *ORDER CONFIRMATION*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

  // Store info
  // message += `📍 *${storeName}*\n`;
  // message += `Mumbai, Maharashtra, India\n\n`;

  // Customer info (if provided)
  if (customerInfo.username) {
    message += `👤 *Customer Details:*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Name: ${customerInfo.username}\n`;
    if (customerInfo.email) message += `Email: ${customerInfo.email}\n`;
    // if (customerInfo.address) message += `Address: ${customerInfo.address}\n`;
    message += `\n`;
  }

  // Order details
  message += `📦 *ORDER DETAILS:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.ProductName}*\n`;
    message += `   Category: ${item.category}\n`;
    message += `   Quantity: ${item.Cart_Quantity}\n`;
    message += `   Price: ₹${item.TotalPrice.toLocaleString("en-IN")}\n\n`;
  });

  // Price breakdown
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *PRICE BREAKDOWN:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `Subtotal: ₹${subtotal.toLocaleString("en-IN")}\n`;
  message += `GST (18%): ₹${gstAmount.toLocaleString("en-IN")}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*GRAND TOTAL: ₹${grandTotal.toLocaleString("en-IN")}*\n\n`;

  // Pickup info
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *PICKUP INFORMATION:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `✅ Store Pickup Available\n`;
  message += `⏰ Open: Monday - Sunday (24/7)\n\n`;

  // Footer
  message += `Thank you for your order! 🙏\n`;
  message += `We'll notify you when your order is ready for pickup.\n\n`;
  message += `For any queries, please contact us.\n`;
  message += `━━━━━━━━━━━━━━━━━━━━`;

  return message;
}

const buildWhatsAppUrl = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  // Try alternative URL format
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};

const OrderSummary = ({ cartItems = [] }) => {
  const { userData } = useAuth();
  const total = cartItems.reduce((acc, curr) => {
    return (acc += curr.TotalPrice);
  }, 0);

  const totalAfterTax = applyTax(total, 18);
  const totalTax = totalAfterTax - total;

  const orderMsg = generateWhatsAppMessage(cartItems, userData);

  const handleCheckout = async (e) => {
    e.preventDefault();

    // Build WhatsApp URL
    const whatsappUrl = buildWhatsAppUrl("917509666466", orderMsg);

    //Wait 2 seconds, then close popup and open WhatsApp
    setTimeout(() => {
      // Open WhatsApp
      try {
        const whatsappWindow = window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer",
        );

        // Check if popup was blocked
        setTimeout(() => {
          if (
            !whatsappWindow ||
            whatsappWindow.closed ||
            typeof whatsappWindow.closed === "undefined"
          ) {
            // setError(
            //   "Popup blocked! Please allow popups, or click the button below to try again.",
            // );
            // Create fallback button
            // const fallbackBtn = document.createElement("a");
            // fallbackBtn.href = whatsappUrl;
            // fallbackBtn.target = "_blank";
            // fallbackBtn.rel = "noopener noreferrer";
            // fallbackBtn.textContent = "📱 Click Here to Open WhatsApp";
            // fallbackBtn.className =
            //   "block mt-4 w-full bg-[#25D366] text-white py-3 rounded-md hover:bg-[#128C7E] transition text-center font-semibold";
            // const existingBtn = document.getElementById("whatsapp-fallback");
            // if (existingBtn) existingBtn.remove();
            // fallbackBtn.id = "whatsapp-fallback";
            // const form = document.querySelector("form");
            // if (form && form.parentElement) {
            //   form.parentElement.appendChild(fallbackBtn);
            // }
          } else {
            // Success - show thank you message

            console.log("WhatsApp opened successfully");
          }
        }, 2000);
      } catch (err) {
        console.error("Error opening WhatsApp:", err);
      }
    }, 3000);
  };

  return (
    <div className="sticky top-32 glass p-8 rounded-2xl soft-shadow border border-white/10">
      <h3 className="font-dm responsiveheading3 font-bold uppercase tracking-tighter mb-8">
        Order Summary
      </h3>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-white/60">
          <span className="font-dm text-sm">
            Subtotal ({cartItems.length} items)
          </span>
          <span className="font-dm font-medium">₹ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-white/60">
          <span className="font-dm text-sm">Taxes</span>
          <span className="font-dm font-medium">₹ {totalTax.toFixed(2)}</span>
        </div>
      </div>
      <div className="h-[1px] bg-white/10 mb-8"></div>
      <div className="flex justify-between items-center mb-10">
        <span className="font-dm text-lg font-bold">Total</span>
        <span className="font-dm text-3xl font-black text-white">
          ₹ {totalAfterTax}{" "}
        </span>
      </div>
      <button
        onClick={handleCheckout}
        className="font-dm w-full bg-[#cd6632] hover:bg-[#cd6632]/80 cursor-pointer text-white font-black py-5 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 mb-6"
      >
        Proceed to Checkout
      </button>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-white/40">
          <span className=" material-symbols-outlined text-sm">
            verified_user
          </span>
          <span className="font-dm text-[10px] uppercase tracking-widest font-bold">
            Secure SSL Checkout
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/40">
          <span className=" material-symbols-outlined text-sm">
            local_shipping
          </span>
          <span className="font-dm text-[10px] uppercase tracking-widest font-bold">
            Premium White Glove Delivery
          </span>
        </div>
      </div>
      {/* <div className="mt-12">
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
          Promotional Code
        </label>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-white/5 border-white/10 rounded-lg text-sm px-4 focus:ring-primary focus:border-primary"
            placeholder="LUXE2024"
            type="text"
          />
          <button className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold hover:bg-white/20 transition-all uppercase cursor-pointer">
            Apply
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderSummary;
