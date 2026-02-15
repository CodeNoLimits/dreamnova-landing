# Dashboard Sub-Pages Quick Start

Get up and running with the new dashboard pages in seconds.

## Access the Pages

The following pages are now available at these routes:

```
/dashboard/orders        → Order management & tracking
/dashboard/hafatsa       → Hafatsa points & referral system
/dashboard/nfc          → NFC key management
/dashboard/settings     → User settings & preferences
```

## File Locations

All new pages are located in:

```
src/app/(dashboard)/
├── orders/page.tsx      (243 lines)
├── hafatsa/page.tsx     (311 lines)
├── nfc/page.tsx         (336 lines)
└── settings/page.tsx    (425 lines)
```

## What's Included

### Orders Page
- Table with 6 sample orders
- Order status tracking (Processing, Shipped, Delivered)
- Summary statistics
- Click to expand order details
- Ready for API integration

### Hafatsa Page
- Points balance and level progression
- 4 achievement levels from constants
- Animated progress bar
- Referral link sharing
- Activity log with 6 sample entries
- Copy-to-clipboard functionality

### NFC Page
- Nova Key management interface
- 4 sample NFC keys
- Key activation form (expandable)
- Scan statistics
- Status indicators (active/inactive)
- Ready for NFC hardware integration

### Settings Page
- Profile information form
- Shipping address form
- 5 notification toggle switches
- Save with status feedback
- Form validation ready

## Key Features

### Design
- Sacred gold (#D4AF37) & black (#050508) theme
- Responsive mobile-first layout
- Dark mode optimized
- Smooth animations (Framer Motion)

### Technology
- TypeScript: Full type safety
- Next.js 16: Latest App Router
- TailwindCSS 4: Utility-first styling
- Framer Motion: Smooth animations
- Lucide React: Beautiful icons

### Code Quality
- Production-ready TypeScript
- Mock data for development
- Easy API integration points
- No external dependencies needed

## Customize

### Change Colors
Edit `tailwind.config.ts`:

```typescript
gold: {
  DEFAULT: '#D4AF37',  // Change this
  light: '#F0D060',
  glow: 'rgba(212, 175, 55, 0.4)',
}
```

### Add Real Data
Replace mock data in any page:

```typescript
// Before (mock data)
const mockOrders: Order[] = [{ ... }, { ... }];

// After (API call)
const [orders, setOrders] = useState<Order[]>([]);
useEffect(() => {
  fetchOrders().then(setOrders);
}, []);
```

### Extend Pages
Follow the patterns in `CODE_EXAMPLES.md` for adding:
- New sections
- Additional form fields
- New status types
- Extra animations

## Styling Reference

### Common Classes

```typescript
// Backgrounds
bg-sacred-black      // #050508
bg-sacred-surface    // #0A0A12
bg-sacred-card       // #0E0E1A

// Text
text-gold            // Primary
text-gray-400        // Secondary
text-white           // Primary text

// Borders
border-gold/20       // Subtle gold
border-gold/40       // Prominent gold

// Status Colors
bg-green-500/20      // Success
bg-yellow-500/20     // Warning
bg-blue-500/20       // Info
bg-red-500/20        // Danger

// Responsive
sm:                  // Tablet (640px+)
lg:                  // Desktop (1024px+)
```

## Animation Patterns

All animations use `ease: "easeOut" as const`:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" as const }}
>
  Content
</motion.div>
```

## Type Safety

TypeScript interfaces provided:

```typescript
// Copy these for your API calls
interface Order {
  id: string;
  orderNumber: string;
  date: string;
  product: string;
  status: "Processing" | "Shipped" | "Delivered";
  amount: number;
}

interface NovaKey {
  id: string;
  name: string;
  serial: string;
  status: "active" | "inactive";
  lastScan?: string;
  scanCount: number;
  activatedDate: string;
}

// See CODE_EXAMPLES.md for all interfaces
```

## Icons Used

```typescript
import {
  ShoppingCart,   // Orders
  Share2,         // Sharing
  Users,          // People
  Award,          // Achievements
  CreditCard,     // NFC keys
  Activity,       // Tracking
  Plus,           // Add new
  Trash2,         // Delete
  User,           // Profile
  MapPin,         // Address
  Bell,           // Notifications
  Save,           // Save action
  // ... and more from Lucide
} from "lucide-react";
```

## Next Steps

### 1. View the Pages
Start the dev server and visit:
- http://localhost:3000/dashboard/orders
- http://localhost:3000/dashboard/hafatsa
- http://localhost:3000/dashboard/nfc
- http://localhost:3000/dashboard/settings

### 2. Review Documentation
- `DASHBOARD_PAGES_SUMMARY.md` - Feature overview
- `DASHBOARD_DEVELOPER_GUIDE.md` - Extension guide
- `CODE_EXAMPLES.md` - Code snippets
- `DASHBOARD_CREATION_REPORT.md` - Full report

### 3. Connect Your API
Each page has clear data structures for API integration:

```typescript
// Example: Orders page
const [orders, setOrders] = useState<Order[]>([]);

useEffect(() => {
  const fetchOrders = async () => {
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data);
  };
  
  fetchOrders();
}, []);
```

### 4. Customize
Modify colors, add fields, update status types, etc. as needed.

## Common Tasks

### Add a New Order Status
In `orders/page.tsx`:

```typescript
// 1. Update Order interface
status: "Processing" | "Shipped" | "Delivered" | "Returned";  // Add "Returned"

// 2. Update StatusBadge styles
const styles = {
  Returned: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  // ... existing styles
};
```

### Add Notification Type
In `settings/page.tsx`:

```typescript
// 1. Update interface
interface NotificationPreferences {
  // ... existing
  mobileNotifications: boolean;  // Add this
}

// 2. Add toggle UI
<div className="flex items-center justify-between p-4 ...">
  <div>
    <h3>Mobile Notifications</h3>
    <p>Push notifications on your phone</p>
  </div>
  {/* Toggle switch */}
</div>
```

### Add Activity Type
In `hafatsa/page.tsx`:

```typescript
// 1. Update HafatsaActivity type
type: "scan" | "share" | "referral" | "distribution" | "achievement";

// 2. Update ActivityCard colors
const typeColors = {
  achievement: "bg-purple-500/20 text-purple-400",
  // ... existing colors
};
```

## Troubleshooting

### Page not found
- Ensure you're accessing `/dashboard/orders` not `/orders`
- Check that dashboard layout.tsx exists
- Verify routes in page.tsx files

### Styling not working
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check TailwindCSS classes in className

### Animation stuttering
- Check for unnecessary re-renders
- Ensure components are memoized if needed
- Verify browser GPU acceleration enabled

### TypeScript errors
- Make sure all interfaces match data structures
- Use `as const` for Framer Motion ease values
- Import types from lucide-react correctly

## Support

For detailed information, refer to:
- `CODE_EXAMPLES.md` - Code snippets and patterns
- `DASHBOARD_DEVELOPER_GUIDE.md` - Comprehensive guide
- `DASHBOARD_PAGES_SUMMARY.md` - Feature overview

---

**Created**: February 15, 2026  
**Framework**: Next.js 16  
**Status**: Production Ready
