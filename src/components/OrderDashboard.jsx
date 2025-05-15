import React, { useState } from "react";
import SummaryCard from "./SummaryCard";

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
    <div className="col-span-1 md:col-span-2 font-inter">
      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard
            count={totalOrders}
            label="Total Order"
            textColor="text-yellow-500"
            bgColor="rgba(202, 138, 4, 0.3)"
          />
          <SummaryCard
            count={pendingOrders}
            label="Pending"
            textColor="text-red-500"
            bgColor="rgba(220, 38, 38, 0.3)"
          />
          <SummaryCard
            count={deliveredOrders}
            label="Delivered"
            textColor="text-green-500"
            bgColor="rgba(22, 163, 74, 0.3)"
          />
        </div>
      </div>

      {/* Order Reports */}
      <div>
        <div className="flex justify-between items-center">
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
              className="lucide lucide-funnel-icon text-white"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>

            <div className="flex items-center bg-zinc-900 rounded-sm px-2 py-[6px] relative min-w-[110px]">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm px-2 py-1 pr-8 w-full text-white text-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                <option>All</option>
                <option>Pending</option>
                <option>Delivered</option>
              </select>
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-cardbg rounded-lg p-4">
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
