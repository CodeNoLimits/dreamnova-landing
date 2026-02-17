"use client";

import { useTranslation } from '@/lib/LanguageContext';

import { ShoppingCart, ArrowUpRight, Zap } from "lucide-react";
import { useState } from "react";

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  product: string;
  status: "Processing" | "Shipped" | "Delivered";
  amount: number;
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2025-001",
    date: "2025-02-14",
    product: "The Covenant Pack",
    status: "Delivered",
    amount: 63.00,
  },
  {
    id: "2",
    orderNumber: "ORD-2025-002",
    date: "2025-02-13",
    product: "Nova Key Platinum",
    status: "Shipped",
    amount: 149.00,
  },
  {
    id: "3",
    orderNumber: "ORD-2025-003",
    date: "2025-02-12",
    product: "Nova Key Pair",
    status: "Processing",
    amount: 99.00,
  },
  {
    id: "4",
    orderNumber: "ORD-2025-004",
    date: "2025-02-11",
    product: "The Covenant Pack",
    status: "Delivered",
    amount: 63.00,
  },
  {
    id: "5",
    orderNumber: "ORD-2025-005",
    date: "2025-02-10",
    product: "Nova Key Platinum",
    status: "Delivered",
    amount: 149.00,
  },
  {
    id: "6",
    orderNumber: "ORD-2025-006",
    date: "2025-02-09",
    product: "The Covenant Pack",
    status: "Shipped",
    amount: 63.00,
  },
];

function StatusBadge({ status }: { status: Order["status"] }) {
  const styles = {
    Processing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Shipped: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Delivered: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function OrdersPage() {
  const { t } = useTranslation();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const deliveredCount = mockOrders.filter(
    (o) => o.status === "Delivered"
  ).length;
  const totalRevenue = mockOrders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">{t("orders.title")}</h1>
        <p className="text-gray-400">{t("orders.subtitle")}</p>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm font-semibold">
              +{mockOrders.length}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-1">{t("orders.total")}</p>
          <p className="text-3xl font-bold text-white">{mockOrders.length}</p>
        </div>

        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm font-semibold">
              +{deliveredCount}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-1">{t("orders.delivered")}</p>
          <p className="text-3xl font-bold text-white">{deliveredCount}</p>
        </div>

        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-gold text-sm font-semibold">+2.4%</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">{t("orders.revenue")}</p>
          <p className="text-3xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-sacred-black/50 border-b border-gold/20">
              <tr>
                <th className="text-left py-4 px-6 text-gold font-semibold">
                  Order #
                </th>
                <th className="text-left py-4 px-6 text-gold font-semibold">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-gold font-semibold">
                  Product
                </th>
                <th className="text-left py-4 px-6 text-gold font-semibold">
                  Status
                </th>
                <th className="text-right py-4 px-6 text-gold font-semibold">
                  Amount
                </th>
                <th className="text-right py-4 px-6 text-gold font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order, idx) => (
                <tr
                  key={order.id}
                  className={`border-t border-gold/10 hover:bg-gold/5 transition-all duration-200 cursor-pointer ${
                    selectedOrder === order.id ? "bg-gold/10" : ""
                  }`}
                  onClick={() =>
                    setSelectedOrder(
                      selectedOrder === order.id ? null : order.id
                    )
                  }
                >
                  <td className="py-4 px-6 text-white font-semibold">
                    {order.orderNumber}
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-gray-300">{order.product}</td>
                  <td className="py-4 px-6">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-4 px-6 text-right text-white font-semibold">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-gold hover:text-gold/80 transition-colors duration-200 font-semibold text-xs">
                      VIEW
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Order Details */}
      {selectedOrder && (
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6">
          {(() => {
            const order = mockOrders.find((o) => o.id === selectedOrder);
            if (!order) return null;

            return (
              <div>
                <h2 className="text-xl font-bold text-gold mb-4">
                  Order Details: {order.orderNumber}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t("orders.product")}</p>
                    <p className="text-white font-semibold">{order.product}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t("orders.date")}</p>
                    <p className="text-white font-semibold">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t("orders.status")}</p>
                    <StatusBadge status={order.status} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t("orders.amount")}</p>
                    <p className="text-white font-semibold">
                      ${order.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
