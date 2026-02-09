# Button Layout & Positioning Guide

## Fixed Position Elements (Right Side)

### Desktop Layout (md and up):
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                            ┌──────┐ │ ← Back to Top (bottom: 96px)
│                            │  ↑   │ │   z-index: 40
│                            └──────┘ │
│                                     │
│                            ┌──────┐ │ ← Keyboard Hints (bottom: 24px)
│                            │ ⌨️ 📝 │ │   z-index: 50
│                            └──────┘ │
└─────────────────────────────────────┘
```

### Mobile Layout (< md):
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                            ┌──────┐ │ ← Back to Top (bottom: 140px)
│                            │  ↑   │ │   z-index: 40
│                            └──────┘ │
│                                     │
│                            ┌──────┐ │ ← Mobile Menu (bottom: 80px)
│                            │  ☰   │ │   z-index: 50
│                            └──────┘ │
└─────────────────────────────────────┘
```

## Button Specifications

### 1. Back to Top Button
- **Position**:
  - Desktop: `bottom-24 right-6` (96px from bottom, 24px from right)
  - Mobile: `bottom-[140px] right-4` (140px from bottom, 16px from right)
- **Z-index**: 40
- **Visibility**: Shows after scrolling 300px down
- **Color**: Gradient blue to purple
- **Size**:
  - Desktop: 16px padding (64px total)
  - Mobile: 12px padding (48px total)

### 2. Keyboard Hints Button
- **Position**: `bottom-6 right-6` (24px from bottom and right)
- **Z-index**: 50
- **Visibility**: Desktop only, shows when dismissed
- **Color**: Gray-800 with gray-700 hover
- **Size**: 12px padding

### 3. Mobile Menu Button
- **Position**: `bottom-20 right-4` (80px from bottom, 16px from right)
- **Z-index**: 50
- **Visibility**: Mobile only (< md breakpoint)
- **Color**: Gradient blue to purple
- **Size**: 16px padding

## Spacing Between Elements

### Desktop:
- Back to Top → Keyboard Hints: 72px vertical gap
- No overlap

### Mobile:
- Back to Top → Mobile Menu: 60px vertical gap
- Keyboard hints hidden on mobile
- No overlap

## Z-Index Hierarchy

```
200 - LoadingBar (page transition)
100 - Toast notifications
70  - Onboarding Tour
60  - Onboarding Overlay
50  - Mobile Menu, Keyboard Hints, Help Modal
40  - Back to Top, Performance Sidebar (mobile)
30  - Mobile Menu Overlay
```

## Color Themes

### Dark Mode (default in IDE sections):
- Background: gray-900, gray-800
- Text: gray-100, gray-300
- Accents: blue-500, purple-600, green-400

### Light Mode:
- Background: white, gray-50, gray-100
- Text: gray-900, gray-700
- Accents: blue-600, purple-700, green-600

## Fixed Issues

✅ **Dark mode now working properly**
- Root div has `bg-white dark:bg-gray-900`
- Boot screen has proper light/dark variants
- All text colors have light/dark variants
- Smooth transitions with `transition-colors duration-300`

✅ **No button overlap**
- Back to Top moved higher (bottom-24 on desktop)
- Clear vertical spacing maintained
- Mobile menu at different position
- Keyboard hints at bottom-right corner

## Testing Checklist

- [ ] Scroll down 300px and verify Back to Top appears
- [ ] Click Back to Top and verify smooth scroll
- [ ] Toggle dark mode and verify all colors change
- [ ] On mobile, verify menu button is visible and doesn't overlap
- [ ] Dismiss keyboard hints and verify button appears at bottom
- [ ] Verify no overlap between any fixed elements
- [ ] Test on different screen sizes (sm, md, lg, xl)
