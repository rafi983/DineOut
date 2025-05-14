import React, { useState } from "react";

const OrderDashboard = ({ orders, onDelete, onDeliver }) => {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter.toUpperCase());

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length;
  const deliveredOrders = orders.filter((o) => o.status === "DELIVERED").length;

  return (
    <div className="md:col-span-2 h-[calc(100vh-130px)]">
      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-4">
            <div className="text-5xl font-bold text-yellow-500 mb-2">
              {totalOrders}
            </div>
            <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs px-3 py-1 rounded-full inline-block">
              Total Order
            </div>
          </div>
          <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-4">
            <div className="text-5xl font-bold text-red-500 mb-2">
              {pendingOrders}
            </div>
            <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs px-3 py-1 rounded-full inline-block">
              Pending
            </div>
          </div>
          <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-4">
            <div className="text-5xl font-bold text-green-500 mb-2">
              {deliveredOrders}
            </div>
            <div className="bg-green-800 bg-opacity-50 text-green-200 text-xs px-3 py-1 rounded-full inline-block">
              Delivered
            </div>
          </div>
        </div>
      </div>

      {/* Order Reports */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <div className="relative">
              <select
                className="appearance-none bg-zinc-900 text-white border-none outline-none rounded-sm px-2 py-1 pr-6"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All</option>
                <option>Pending</option>
                <option>Delivered</option>
              </select>
              <svg
                className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(89,86,86,0.4)] rounded-lg p-4">
          <div className="reports-container max-h-[340px] overflow-y-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="pb-3">ID</th>
                  <th className="pb-3">Customer Name</th>
                  <th className="pb-3">Items</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-t border-gray-700">
                    <td className="py-3">{order.id}</td>
                    <td className="py-3">{order.name}</td>
                    <td className="py-3">{order.itemsCount}</td>
                    <td className="py-3">{order.amount}</td>
                    <td className="py-3">
                      <span
                        className={
                          order.status === "DELIVERED"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => onDelete(order.id)}
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      >
                        Delete
                      </button>
                      {order.status === "PENDING" && (
                        <button
                          onClick={() => onDeliver(order.id)}
                          className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        >
                          DELIVER
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-400">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
