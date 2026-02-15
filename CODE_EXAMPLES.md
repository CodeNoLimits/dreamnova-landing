# Dashboard Pages Code Examples

Quick snippets and patterns used across the new dashboard pages.

## Hafatsa Page - Using Constants

The Hafatsa page demonstrates proper integration with the project's constants:

```typescript
import { HAFATSA_POINTS } from "@/lib/constants";

// Direct use of constants in rendering
{HAFATSA_POINTS.milestones.map((milestone, idx) => {
  const isUnlocked = userPoints >= milestone.points;
  
  return (
    <div key={milestone.points}>
      <p className="font-bold">{milestone.title}</p>
      <p className="text-gray-500">{milestone.titleHe}</p>
      <p>{milestone.points} points required</p>
    </div>
  );
})}
```

### Hafatsa Levels from Constants
```
Breslov Initiate: 10 points
Hafatsa Ambassador: 50 points
Light Bearer: 100 points
Tikkun Master: 613 points
```

## Orders Page - Table Implementation

Complete table with expandable rows:

```typescript
interface Order {
  id: string;
  orderNumber: string;
  date: string;
  product: string;
  status: "Processing" | "Shipped" | "Delivered";
  amount: number;
}

const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

// Rendering table with click handling
<tr
  onClick={() =>
    setSelectedOrder(
      selectedOrder === order.id ? null : order.id
    )
  }
  className={`border-t border-gold/10 hover:bg-gold/5 ${
    selectedOrder === order.id ? "bg-gold/10" : ""
  }`}
>
  {/* Table cells */}
</tr>

// Expandable details section
{selectedOrder && (
  <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6">
    {/* Details content */}
  </div>
)}
```

## Status Badge Component Pattern

Used in Orders, Hafatsa, and NFC pages:

```typescript
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
```

## NFC Page - Expandable Form

Modal-like expandable form for activating keys:

```typescript
const [showActivateForm, setShowActivateForm] = useState(false);

<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" as const }}
  className="bg-sacred-black/50 rounded-lg p-6 border border-gold/10"
>
  <form className="space-y-6">
    <div>
      <label className="block text-white font-semibold mb-2">Key Name</label>
      <input
        type="text"
        placeholder="e.g., My Nova Key"
        className="w-full bg-sacred-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50"
      />
    </div>
    {/* More form fields */}
  </form>
</motion.div>
```

## Settings Page - Toggle Switch Component

Custom toggle switch with smooth animation:

```typescript
const [notifications, setNotifications] = useState({
  emailNotifications: true,
  orderUpdates: true,
  hafatsaAlerts: true,
  weeklyDigest: false,
  promotions: false,
});

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
```

## Settings Page - Form Save with Status

Form submission with visual feedback:

```typescript
const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success">("idle");

const handleSave = async () => {
  setSaveStatus("saving");
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  setSaveStatus("success");
  setTimeout(() => setSaveStatus("idle"), 2000);
};

// Status alert
{saveStatus !== "idle" && (
  <motion.div
    className={`flex items-center gap-3 px-6 py-4 rounded-lg border ${
      saveStatus === "success"
        ? "bg-green-500/10 border-green-500/30 text-green-400"
        : "bg-blue-500/10 border-blue-500/30 text-blue-400"
    }`}
  >
    {saveStatus === "success" ? (
      <>
        <span>✓</span>
        <span>Settings saved successfully!</span>
      </>
    ) : (
      <>
        <AlertCircle className="w-5 h-5" />
        <span>Saving changes...</span>
      </>
    )}
  </motion.div>
)}
```

## Framer Motion - Staggered List Animation

Used in Hafatsa activity log:

```typescript
{mockActivity.map((activity, idx) => (
  <motion.div
    key={activity.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.4,
      delay: idx * 0.05,
      ease: "easeOut" as const,
    }}
  >
    <ActivityCard activity={activity} />
  </motion.div>
))}
```

## Framer Motion - Staggered Grid Animation

Used in NFC key cards and Hafatsa level cards:

```typescript
{HAFATSA_POINTS.milestones.map((milestone, idx) => (
  <motion.div
    key={milestone.points}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: idx * 0.1,
      ease: "easeOut" as const,
    }}
    className="..."
  >
    {/* Card content */}
  </motion.div>
))}
```

## Progress Bar with Animation

Used in Hafatsa for level progression:

```typescript
const progressPercentage = 
  ((userPoints - currentLevel.points) /
    (nextLevel.points - currentLevel.points)) * 100;

<div className="w-full bg-sacred-surface rounded-full h-3 border border-gold/20 overflow-hidden">
  <motion.div
    className="bg-gradient-to-r from-gold to-gold/60 h-3 rounded-full"
    initial={{ width: 0 }}
    animate={{ width: `${progressPercentage}%` }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
  />
</div>
```

## Copy to Clipboard Functionality

Used in Hafatsa for referral link:

```typescript
const [copied, setCopied] = useState(false);

const handleCopyLink = () => {
  navigator.clipboard.writeText(referralLink);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

<button
  onClick={handleCopyLink}
  className="flex-shrink-0 p-2 hover:bg-gold/20 rounded-lg transition-colors duration-200"
>
  {copied ? (
    <Check className="w-5 h-5 text-green-400" />
  ) : (
    <Copy className="w-5 h-5 text-gold" />
  )}
</button>
```

## Responsive Grid Pattern

Used across all pages:

```typescript
// Summary stat cards
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {stats.map((stat, idx) => (
    <StatCard key={idx} {...stat} />
  ))}
</div>

// 2-column layout
<div className="grid sm:grid-cols-2 gap-6">
  {/* Items */}
</div>

// 3-column layout
<div className="grid sm:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

## Icons from Lucide React

Quick reference of icons used:

```typescript
// Common
import {
  ShoppingCart,  // Orders
  Share2,        // Hafatsa sharing
  Users,         // Referrals
  Award,         // Achievements
  TrendingUp,    // Analytics
  CreditCard,    // NFC keys
  Activity,      // Activity tracking
  Plus,          // Add new
  Trash2,        // Delete
  Eye,           // View details
  User,          // Profile
  MapPin,        // Address
  Bell,          // Notifications
  Save,          // Save action
  AlertCircle,   // Alerts
  Copy,          // Copy to clipboard
  Check,         // Success
  Zap,           // Lightning/Energy
  ArrowUpRight,  // Growth indicator
  Menu,          // Mobile menu
  X,             // Close
} from "lucide-react";
```

## TypeScript Interfaces

```typescript
// Orders
interface Order {
  id: string;
  orderNumber: string;
  date: string;
  product: string;
  status: "Processing" | "Shipped" | "Delivered";
  amount: number;
}

// Hafatsa
interface HafatsaActivity {
  id: string;
  type: "scan" | "share" | "referral" | "distribution";
  description: string;
  points: number;
  date: string;
}

// NFC
interface NovaKey {
  id: string;
  name: string;
  serial: string;
  status: "active" | "inactive";
  lastScan?: string;
  scanCount: number;
  activatedDate: string;
}

// Settings
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
```

---

**Last Updated**: February 15, 2026
**Framework**: Next.js 16 + TypeScript
