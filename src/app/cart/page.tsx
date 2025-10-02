import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Minus, Plus, X } from "lucide-react";

export default function ShoppingCart() {
  return (
    <div>
      <Navbar />
      <div className="p-10 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl shadow-lg bg-white">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
              <div className="grid grid-cols-4 font-semibold text-gray-500 border-b pb-3 mb-3">
                <span className="col-span-2">Item</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Subtotal</span>
              </div>
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-4 items-center border-b py-6 hover:bg-gray-50 transition"
                >
                  <div className="col-span-2 flex gap-4 items-center">
                    <img
                      src="/laptop.png"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div>
                      <h2 className="font-semibold text-lg">
                        MSI MEG Trident X 10SD-1012AU
                      </h2>
                      <p className="text-sm text-gray-500">
                        Intel i7, 32GB RAM, RTX 2070 SUPER
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                      <Minus size={14} />
                    </button>
                    <span className="px-2 font-medium">1</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <span className="font-bold text-gray-800">$13,047.00</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 text-red-600">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-6">
                <button className="px-5 py-2 rounded-lg border hover:bg-gray-100">
                  Continue Shopping
                </button>
                <div className="flex gap-3">
                  <button className="px-5 py-2 rounded-lg border hover:bg-gray-100">
                    Clear Cart
                  </button>
                  <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl shadow-lg bg-white">
            <div className="p-8 space-y-8">
              <h2 className="text-2xl font-bold">Summary</h2>
              <div>
                <h3 className="font-semibold mb-3">Estimate Shipping and Tax</h3>
                <select className="w-full border rounded-lg p-2">
                  <option>Select Country</option>
                  <option value="au">Australia</option>
                  <option value="us">United States</option>
                </select>
                <input
                  placeholder="State/Province"
                  className="mt-3 w-full border rounded-lg p-2"
                />
                <input
                  placeholder="Zip/Postal Code"
                  className="mt-3 w-full border rounded-lg p-2"
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="shipping" defaultChecked />
                  Standard Rate - $21.00
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="shipping" />
                  Pickup in Store - Free
                </label>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Apply Discount Code</h3>
                <div className="flex gap-2">
                  <input
                    placeholder="Enter discount code"
                    className="w-full border rounded-lg p-2"
                  />
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    Apply
                  </button>
                </div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>$13,047.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>$21.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>$1.00</span>
                </div>
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>$13,068.00</span>
                </div>
              </div>
              <button className="w-full py-4 text-lg bg-black text-white rounded-lg hover:bg-gray-800">
                Proceed to Checkout
              </button>
              <button className="w-full py-4 border rounded-lg hover:bg-gray-100">
                Check out with PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
