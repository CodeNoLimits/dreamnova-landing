"use client";

import { User, MapPin, Bell, Save, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface AddressFormData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface NotificationPreferences {
  emailNotifications: boolean;
  orderUpdates: boolean;
  hafatsaAlerts: boolean;
  weeklyDigest: boolean;
  promotions: boolean;
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<ProfileFormData>({
    firstName: "Sarah",
    lastName: "Cohen",
    email: "sarah.cohen@example.com",
    phone: "+1 (555) 123-4567",
  });

  const [address, setAddress] = useState<AddressFormData>({
    street: "123 Blessing Street",
    city: "Jerusalem",
    state: "Jerusalem",
    zipCode: "9200000",
    country: "Israel",
  });

  const [notifications, setNotifications] = useState<NotificationPreferences>({
    emailNotifications: true,
    orderUpdates: true,
    hafatsaAlerts: true,
    weeklyDigest: false,
    promotions: false,
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success">(
    "idle"
  );

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (key: keyof NotificationPreferences) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = async () => {
    setSaveStatus("saving");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSaveStatus("success");
    setTimeout(() => setSaveStatus("idle"), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="bg-sacred-surface border border-gold/20 rounded-lg p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-gold">Profile Information</h2>
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
                className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
                className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
            />
          </div>
        </div>
      </motion.div>

      {/* Shipping Address Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
        className="bg-sacred-surface border border-gold/20 rounded-lg p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-gold">Shipping Address</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                State/Province
              </label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                ZIP/Postal Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleAddressChange}
                className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
              className="w-full bg-sacred-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
            />
          </div>
        </div>
      </motion.div>

      {/* Notification Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
        className="bg-sacred-surface border border-gold/20 rounded-lg p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-gold">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          {/* Email Notifications Toggle */}
          <div className="flex items-center justify-between p-4 bg-sacred-black/50 rounded-lg border border-gold/10">
            <div>
              <h3 className="text-white font-semibold">Email Notifications</h3>
              <p className="text-gray-400 text-sm">
                Receive email updates about your account
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange("emailNotifications")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                notifications.emailNotifications
                  ? "bg-gold/30"
                  : "bg-gray-700/30"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  notifications.emailNotifications
                    ? "translate-x-7"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Order Updates Toggle */}
          <div className="flex items-center justify-between p-4 bg-sacred-black/50 rounded-lg border border-gold/10">
            <div>
              <h3 className="text-white font-semibold">Order Updates</h3>
              <p className="text-gray-400 text-sm">
                Get notified about your order status
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange("orderUpdates")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                notifications.orderUpdates ? "bg-gold/30" : "bg-gray-700/30"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  notifications.orderUpdates
                    ? "translate-x-7"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Hafatsa Alerts Toggle */}
          <div className="flex items-center justify-between p-4 bg-sacred-black/50 rounded-lg border border-gold/10">
            <div>
              <h3 className="text-white font-semibold">Hafatsa Alerts</h3>
              <p className="text-gray-400 text-sm">
                Notifications about your Hafatsa progress
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange("hafatsaAlerts")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                notifications.hafatsaAlerts ? "bg-gold/30" : "bg-gray-700/30"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  notifications.hafatsaAlerts
                    ? "translate-x-7"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Weekly Digest Toggle */}
          <div className="flex items-center justify-between p-4 bg-sacred-black/50 rounded-lg border border-gold/10">
            <div>
              <h3 className="text-white font-semibold">Weekly Digest</h3>
              <p className="text-gray-400 text-sm">
                Summary email every Sunday
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange("weeklyDigest")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                notifications.weeklyDigest ? "bg-gold/30" : "bg-gray-700/30"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  notifications.weeklyDigest
                    ? "translate-x-7"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Promotions Toggle */}
          <div className="flex items-center justify-between p-4 bg-sacred-black/50 rounded-lg border border-gold/10">
            <div>
              <h3 className="text-white font-semibold">Promotions</h3>
              <p className="text-gray-400 text-sm">
                Special offers and announcements
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange("promotions")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                notifications.promotions ? "bg-gold/30" : "bg-gray-700/30"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  notifications.promotions ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Save Status Alert */}
      {saveStatus !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
          className={`flex items-center gap-3 px-6 py-4 rounded-lg border ${
            saveStatus === "success"
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-blue-500/10 border-blue-500/30 text-blue-400"
          }`}
        >
          {saveStatus === "success" ? (
            <>
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                <span className="text-green-900 font-bold">✓</span>
              </div>
              <span className="font-semibold">Settings saved successfully!</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Saving changes...</span>
            </>
          )}
        </motion.div>
      )}

      {/* Save Button */}
      <motion.button
        onClick={handleSave}
        disabled={saveStatus === "saving"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" as const }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold text-lg rounded-lg transition-all duration-200 ${
          saveStatus === "saving"
            ? "bg-gold/20 text-gold/60 cursor-not-allowed"
            : "bg-gold/20 hover:bg-gold/30 text-gold"
        }`}
      >
        <Save className="w-5 h-5" />
        {saveStatus === "saving" ? "Saving..." : "Save Changes"}
      </motion.button>

      {/* Information Note */}
      <div className="bg-gold/5 border border-gold/20 rounded-lg p-6">
        <p className="text-gray-300">
          <span className="text-gold font-semibold">Note:</span> Your settings
          are automatically synchronized across all devices. Changes take effect
          immediately.
        </p>
      </div>
    </div>
  );
}
