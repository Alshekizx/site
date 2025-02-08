import { useState } from "react";
import Image from "next/image"; // Import Image from next/image

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Humanness Branded T-Shirt",
      image: "/shirt.png",
      price: "$20",
      quantity: 1,
    },
    {
      id: 2,
      name: "Humanness Hoodie",
      image: "/hoodie.png",
      price: "$45",
      quantity: 1,
    },
  ]);

  const orderHistory = [
    {
      orderId: "ORD001",
      date: "2025-02-01",
      items: [
        { name: "Humanness Branded T-Shirt", quantity: 1, price: "$20" },
        { name: "Humanness Hoodie", quantity: 1, price: "$45" },
      ],
      total: "$65",
    },
    {
      orderId: "ORD002",
      date: "2025-01-15",
      items: [{ name: "Humanness T-Shirt", quantity: 2, price: "$40" }],
      total: "$40",
    },
  ];

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Order History</h3>
            <table className="min-w-full mt-4 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order.orderId} className="border-t border-gray-300">
                    <td className="px-4 py-2">{order.orderId}</td>
                    <td className="px-4 py-2">
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.name} x{item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "cart":
        return (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Your Cart</h3>
            <table className="min-w-full mt-4 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Item</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t border-gray-300">
                    <td className="px-4 py-2 flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2 text-center">{item.quantity}</td>
                    <td className="px-4 py-2 text-center space-x-4">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        onClick={() => console.log(`Pay for item ${item.id}`)}
                      >
                        Pay
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-28 p-6 lg:p-10 rounded-lg">
      <div className="flex border-b border-gray-300">
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "orders"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          Order History
        </button>

        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "cart"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
      </div>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default ProfileTabs;