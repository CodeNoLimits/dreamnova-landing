# Dashboard Sub-Pages Developer Guide

Quick reference for the four new dashboard pages and how to extend them.

## File Structure

```
/src/app/(dashboard)/
├── layout.tsx (existing)
├── overview/
│   └── page.tsx (existing)
├── orders/
│   └── page.tsx (NEW)
├── hafatsa/
│   └── page.tsx (NEW)
├── nfc/
│   └── page.tsx (NEW)
└── settings/
    └── page.tsx (NEW)
```

## Page Routes

| Page | Route | Component | Size |
|------|-------|-----------|------|
| Orders | `/dashboard/orders` | `orders/page.tsx` | 243 lines |
| Hafatsa | `/dashboard/hafatsa` | `hafatsa/page.tsx` | 311 lines |
| NFC | `/dashboard/nfc` | `nfc/page.tsx` | 336 lines |
| Settings | `/dashboard/settings` | `settings/page.tsx` | 425 lines |

## Common Patterns Used

### 1. Page Structure
```typescript
"use client";

import { Icons } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PageName() {
  // State management
  // Helper components
  // Main JSX
}
```

### 2. Motion Animation Pattern
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" as const }}
>
  Content
</motion.div>
```

### 3. Stat Cards
```typescript
<div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
  <div className="flex items-center justify-between mb-4">
    <div className="text-gold">{icon}</div>
    <span className="text-green-400 text-sm font-semibold">{change}</span>
  </div>
  <p className="text-gray-400 text-sm mb-1">{label}</p>
  <p className="text-3xl font-bold text-white">{value}</p>
</div>
```

### 4. Status Badge
```typescript
<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
  {status}
</span>
```

### 5. Toggle Switch
```typescript
<button
  onClick={() => handleToggle()}
  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
    isEnabled ? "bg-gold/30" : "bg-gray-700/30"
  }`}
>
  <span
    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
      isEnabled ? "translate-x-7" : "translate-x-1"
    }`}
  />
</button>
```

## Data Integration Points

### 1. Orders Page
**Mock Data**: 6 sample orders
**To Connect Real API**:
```typescript
// Replace mockOrders with API call
const [orders, setOrders] = useState<Order[]>([]);

useEffect(() => {
  fetchOrders().then(setOrders);
}, []);
```

### 2. Hafatsa Page
**Constants Used**: `HAFATSA_POINTS` from `/src/lib/constants.ts`
**Mock Data**: User points (90), activity log (6 items)
**To Connect Real API**:
```typescript
const [userPoints, setUserPoints] = useState(0);
const [activities, setActivities] = useState([]);

useEffect(() => {
  Promise.all([
    fetchUserPoints(),
    fetchHafatsaActivity()
  ]).then(([points, acts]) => {
    setUserPoints(points);
    setActivities(acts);
  });
}, []);
```

### 3. NFC Page
**Mock Data**: 4 Nova Keys with scan data
**To Connect Real API**:
```typescript
const [keys, setKeys] = useState<NovaKey[]>([]);
const [isActivating, setIsActivating] = useState(false);

const handleActivateKey = async (formData) => {
  setIsActivating(true);
  const newKey = await activateNovaKey(formData);
  setKeys([...keys, newKey]);
  setIsActivating(false);
};
```

### 4. Settings Page
**Mock Data**: User profile, address, notification preferences
**To Connect Real API**:
```typescript
useEffect(() => {
  fetchUserSettings().then(settings => {
    setProfile(settings.profile);
    setAddress(settings.address);
    setNotifications(settings.notifications);
  });
}, []);

const handleSave = async () => {
  setSaveStatus("saving");
  await updateUserSettings({
    profile, address, notifications
  });
  setSaveStatus("success");
};
```

## Styling Guide

### Sacred Gold Theme
- **Primary**: `text-gold`, `border-gold/20`, `bg-gold/20`, `hover:bg-gold/30`
- **Background**: `bg-sacred-surface` (#0A0A12), `bg-sacred-black` (#050508)
- **Cards**: `bg-sacred-card` (#0E0E1A)
- **Borders**: `border-gold/20`, `border-gold/40`

### Status Colors
- **Success/Active**: Green - `text-green-400`, `bg-green-500/20`
- **Warning/Processing**: Yellow - `text-yellow-400`, `bg-yellow-500/20`
- **Info**: Blue - `text-blue-400`, `bg-blue-500/20`
- **Danger/Inactive**: Red - `text-red-400`, `bg-red-500/20`

### Responsive Breakpoints
- Mobile: No prefix (base styles)
- Tablet: `sm:` (640px)
- Desktop: `lg:` (1024px)

## Common Icons Used

```typescript
// Orders
import { ShoppingCart, ArrowUpRight, Zap } from "lucide-react";

// Hafatsa
import { Share2, Users, Award, TrendingUp } from "lucide-react";

// NFC
import { CreditCard, Activity, Plus, Trash2, Eye } from "lucide-react";

// Settings
import { User, MapPin, Bell, Save, AlertCircle } from "lucide-react";
```

## Testing Checklist

- [ ] Page loads without errors
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] All buttons and interactions work
- [ ] Animations are smooth (60fps)
- [ ] Form inputs can be filled
- [ ] Status changes reflect in UI
- [ ] Icons render correctly
- [ ] Text is readable with dark background
- [ ] Focus states visible for accessibility
- [ ] No console errors or warnings

## Performance Tips

1. **Memoization**: Wrap expensive components with `React.memo()`
2. **Lazy Loading**: Use `React.lazy()` for large lists
3. **Debouncing**: Debounce search/filter inputs
4. **Pagination**: Implement for large tables (orders, activity)
5. **Image Optimization**: Use Next.js `Image` component

## Accessibility Improvements

- [ ] Add `aria-labels` to icon buttons
- [ ] Use `role="table"` on custom tables
- [ ] Ensure color contrast ratios meet WCAG AA
- [ ] Add keyboard navigation support
- [ ] Use semantic HTML (`<button>`, `<input>`, etc.)
- [ ] Test with screen readers

## Future Enhancement Ideas

1. **Orders Page**
   - Filter by status/date range
   - Export to CSV
   - Real-time order tracking
   - Customer notes/comments

2. **Hafatsa Page**
   - Achievement badges
   - Leaderboard
   - Social media integration
   - Analytics dashboard

3. **NFC Page**
   - Key activation QR code
   - Bulk key import
   - Scan analytics
   - Key deactivation workflow

4. **Settings Page**
   - Two-factor authentication
   - Password change
   - Account deletion
   - Preference sync across devices

---

**Last Updated**: February 15, 2026
**Framework Version**: Next.js 16
**UI Library**: Framer Motion, Lucide React
