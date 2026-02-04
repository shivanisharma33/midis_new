# Mobile-First Responsive Design Guide

## 🎯 Overview

This guide documents the comprehensive mobile-first responsive design system implemented for the Midis 2.0 project. All components now follow a **mobile-first** approach with consistent breakpoints and responsive utilities.

---

## 📱 Breakpoint System

### Tailwind CSS Breakpoints

```css
/* Mobile First - Default: < 640px */
sm:  640px   /* Small tablets, large phones */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops, small desktops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

### Mobile-First Philosophy

**Always start with mobile styles, then enhance for larger screens:**

```tsx
// ✅ CORRECT - Mobile first
<div className="text-sm sm:text-base md:text-lg lg:text-xl">

// ❌ WRONG - Desktop first
<div className="text-xl lg:text-lg md:text-base sm:text-sm">
```

---

## 🎨 Responsive Utility Classes

### Container Classes

#### `container-responsive`
Mobile-first responsive container with automatic padding.

```tsx
<div className="container-responsive">
  {/* Content automatically gets responsive padding */}
</div>
```

**Equivalent to:**
- Mobile: `w-full px-4 mx-auto`
- sm: `px-6`
- md: `px-8`
- lg: `px-12`
- xl: `px-16`
- 2xl: `px-20`
- Max-width: `1920px`

#### `container-fluid`
Full-width container with larger responsive padding.

#### `container-tight`
Narrower container with tighter padding (max-width: 1024px).

---

### Typography Classes

#### Display Headings (`text-display`)
Hero titles that scale from mobile to desktop.

```tsx
<h1 className="text-display">
  Amazing Hero Title
</h1>
```

**Scales:**
- Mobile: `text-4xl` (36px)
- sm: `text-5xl` (48px)
- md: `text-6xl` (60px)
- lg: `text-7xl` (72px)
- xl: `text-8xl` (96px)

#### Section Headings

| Class | Mobile | sm | md | lg | Use Case |
|-------|--------|----|----|-----|----------|
| `text-heading-lg` | 3xl (30px) | 4xl | 5xl | 6xl | Section titles |
| `text-heading-md` | 2xl (24px) | 3xl | 4xl | 5xl | Subsection titles |
| `text-heading-sm` | xl (20px) | 2xl | 3xl | - | Card titles |

#### Body Text

| Class | Mobile | sm | md | Use Case |
|-------|--------|----|----|----------|
| `text-body` | sm (14px) | base (16px) | lg (18px) | Paragraphs |
| `text-caption` | xs (12px) | sm (14px) | base (16px) | Labels, captions |

---

### Spacing Classes

#### Section Spacing

| Class | Mobile | sm | md | lg | xl | Use Case |
|-------|--------|----|----|----|----|----------|
| `section-spacing` | py-12 | py-16 | py-20 | py-24 | py-28 | Standard sections |
| `section-spacing-sm` | py-8 | py-10 | py-12 | py-16 | - | Compact sections |
| `section-spacing-lg` | py-16 | py-20 | py-28 | py-32 | py-40 | Hero sections |

#### Element Padding

| Class | Mobile | sm | md | lg | xl |
|-------|--------|----|----|----|----|
| `element-padding` | p-4 | p-6 | p-8 | p-10 | p-12 |
| `element-padding-sm` | p-3 | p-4 | p-5 | p-6 | - |

---

### Grid Systems

#### Standard Responsive Grid (`grid-responsive`)

```tsx
<div className="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Scales:**
- Mobile: 1 column
- sm: 2 columns
- md: 3 columns
- lg: 3 columns (larger gaps)

#### Specific Column Layouts

| Class | Mobile | sm | md | lg | Use Case |
|-------|--------|----|----|----|----|
| `grid-2-col` | 1 col | - | 2 cols | 2 cols | Two-column layouts |
| `grid-3-col` | 1 col | 2 cols | 3 cols | 3 cols | Three-column layouts |
| `grid-4-col` | 1 col | 2 cols | 3 cols | 4 cols | Four-column layouts |
| `grid-auto-fit` | Auto-fit (min: 250px) | (min: 300px) | - | (min: 350px) | Dynamic grids |

---

### Flexbox Utilities

#### `flex-stack-to-row`
Stack on mobile, row on desktop with responsive gaps.

```tsx
<div className="flex-stack-to-row">
  <div>Left</div>
  <div>Right</div>
</div>
```

**Scales:**
- Mobile: `flex flex-col gap-4`
- sm: `gap-5`
- md: `flex-row gap-6`
- lg: `gap-8`

#### `flex-center`
Center content with responsive gaps.

---

### Button Classes

#### `btn-responsive`
Standard responsive button sizing.

```tsx
<button className="btn-responsive">
  Click Me
</button>
```

**Scales:**
- Mobile: `px-4 py-2 text-sm`
- sm: `px-5 py-2.5 text-base`
- md: `px-6 py-3`
- lg: `px-8 py-4`

#### `btn-responsive-lg`
Large responsive button.

---

### Card Classes

#### `card-responsive`
Responsive card padding and border radius.

```tsx
<div className="card-responsive">
  Card content
</div>
```

**Scales:**
- Mobile: `p-4 rounded-lg`
- sm: `p-5 rounded-xl`
- md: `p-6`
- lg: `p-8 rounded-2xl`

---

### Visibility Classes

| Class | Behavior |
|-------|----------|
| `show-mobile` | `block md:hidden` - Show on mobile only |
| `show-desktop` | `hidden md:block` - Show on desktop only |
| `show-tablet` | `hidden sm:block` - Show on tablet and up |

---

## 📝 Component Examples

### Responsive Hero Section

```tsx
<section className="section-spacing-lg bg-gradient-to-b from-black to-gray-900">
  <div className="container-responsive max-w-6xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

      {/* Left Column */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        <h1 className="text-display">
          Your Amazing Product
        </h1>
        <p className="text-body text-gray-300">
          A compelling description that scales beautifully across all devices.
        </p>
        <button className="btn-responsive-lg bg-orange-500 text-white rounded-full">
          Get Started
        </button>
      </div>

      {/* Right Column */}
      <div className="mt-8 md:mt-0">
        <img
          src="/hero-image.webp"
          alt="Hero"
          className="img-responsive rounded-2xl"
          loading="lazy"
        />
      </div>

    </div>
  </div>
</section>
```

### Responsive Card Grid

```tsx
<section className="section-spacing">
  <div className="container-responsive">

    <h2 className="text-heading-lg mb-8 sm:mb-10 md:mb-12">
      Our Services
    </h2>

    <div className="grid-3-col">
      {services.map((service, index) => (
        <article key={index} className="card-responsive bg-white border border-gray-200">
          <div className="avatar-md mx-auto mb-4">
            <img src={service.icon} alt="" className="w-full h-full" />
          </div>

          <h3 className="text-heading-sm">
            {service.title}
          </h3>

          <p className="text-body text-gray-600 mt-2">
            {service.description}
          </p>

          <button className="btn-responsive mt-4 sm:mt-5 md:mt-6 w-full bg-orange-500 text-white rounded-lg">
            Learn More
          </button>
        </article>
      ))}
    </div>

  </div>
</section>
```

### Responsive Navigation Pattern

```tsx
<nav className="fixed top-0 w-full bg-white border-b">
  <div className="container-responsive">
    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 sm:h-10 md:h-12 w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="show-desktop">
        <ul className="flex gap-4 md:gap-6 lg:gap-8">
          {navItems.map(item => (
            <li key={item.name}>
              <a href={item.href} className="text-body hover:text-orange-500">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="show-mobile p-2">
        <MenuIcon className="w-6 h-6" />
      </button>

    </div>
  </div>
</nav>
```

---

## ✅ Best Practices

### 1. Always Mobile First

```tsx
// ✅ Start with mobile, enhance for larger screens
<div className="p-4 sm:p-6 md:p-8 lg:p-10">

// ❌ Don't start large and scale down
<div className="p-10 lg:p-8 md:p-6 sm:p-4">
```

### 2. Use Consistent Breakpoint Progression

```tsx
// ✅ Progressive enhancement: mobile → sm → md → lg
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">

// ❌ Skipping breakpoints
<h1 className="text-2xl lg:text-5xl">  // Missing sm and md
```

### 3. Use Utility Classes Over Custom CSS

```tsx
// ✅ Use predefined utility classes
<div className="container-responsive">

// ❌ Custom breakpoints inline
<div className="px-4 sm:px-6 md:px-8 lg:px-12">  // Already in container-responsive
```

### 4. Responsive Images

```tsx
// ✅ Always include loading and decoding attributes
<img
  src="/image.webp"
  alt="Description"
  loading="lazy"
  decoding="async"
  className="img-responsive"
/>

// ✅ Use responsive aspect ratios
<div className="aspect-video sm:aspect-[4/3] md:aspect-[16/9]">
  <img src="/image.webp" className="w-full h-full object-cover" />
</div>
```

### 5. Touch-Friendly Targets on Mobile

```tsx
// ✅ Larger touch targets on mobile
<button className="px-4 py-3 sm:px-5 sm:py-2.5 md:px-6">
  {/* Minimum 44px touch target on mobile */}
</button>

// ❌ Too small for touch
<button className="px-2 py-1">
  Click
</button>
```

### 6. Responsive Spacing

```tsx
// ✅ Reduce spacing on mobile
<div className="space-y-4 sm:space-y-6 md:space-y-8">

// ✅ Responsive gaps in flex/grid
<div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8">
```

---

## 🚫 Common Mistakes to Avoid

### 1. Hardcoded Pixel Values

```tsx
// ❌ BAD - Fixed width doesn't scale
<div className="w-[400px]">

// ✅ GOOD - Responsive width
<div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
```

### 2. Missing Medium Breakpoint

```tsx
// ❌ BAD - Jumps from sm to lg (tablets get poor experience)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

// ✅ GOOD - Progressive enhancement
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
```

### 3. Fixed Heights

```tsx
// ❌ BAD - Fixed height can cut off content on mobile
<div className="h-[500px]">

// ✅ GOOD - Responsive height or min-height
<div className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
```

### 4. Too Much Text on Mobile

```tsx
// ❌ BAD - Long text without line clamping
<p className="text-sm">
  Very long description that goes on and on...
</p>

// ✅ GOOD - Line clamp on mobile
<p className="text-caption line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
  Very long description...
</p>
```

### 5. Non-Responsive Padding

```tsx
// ❌ BAD - Same padding on all devices
<div className="px-20">

// ✅ GOOD - Responsive padding
<div className="container-responsive">  // or px-4 sm:px-6 md:px-8 lg:px-12
```

---

## 🧪 Testing Responsive Design

### Browser DevTools

1. Open Chrome DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl/Cmd + Shift + M)
3. Test these breakpoints:
   - **iPhone SE**: 375px (small mobile)
   - **iPhone 12 Pro**: 390px (standard mobile)
   - **iPad Mini**: 768px (tablet)
   - **iPad Pro**: 1024px (large tablet)
   - **Laptop**: 1280px (desktop)
   - **Desktop**: 1920px (large desktop)

### Debug Helper

Add this class to `<body>` during development:

```tsx
<body className="debug-breakpoints">
```

This shows the current breakpoint in the top-left corner.

---

## 📦 Files Updated with Mobile-First Design

### Pages
- ✅ `/src/pages/Blogs.tsx` - Complete mobile-first rewrite
- ✅ `/src/pages/Services.tsx` - Updated hero and sections
- ⏳ `/src/pages/Services2.tsx` - Needs update
- ⏳ `/src/pages/About.tsx` - Needs update
- ⏳ `/src/pages/Contact.tsx` - Needs update
- ⏳ `/src/pages/CaseStudy.tsx` - Needs update

### Components
- ✅ `/src/components/services/ServiceCard.tsx` - Fully responsive
- ✅ `/src/components/services/ServiceGrid.tsx` - Uses grid-3-col
- ✅ `/src/components/services/CategoryTabs.tsx` - Responsive buttons
- ⏳ `/src/components/Navigation.tsx` - Good but needs minor updates
- ⏳ `/src/components/Footer.tsx` - Good but can be enhanced
- ⏳ `/src/components/CrearistCollage.tsx` - Needs major update

### Stylesheets
- ✅ `/src/styles/responsive.css` - Complete utility system
- ✅ `/src/index.css` - Imports responsive utilities

---

## 🎯 Next Steps

1. **Continue updating remaining pages** with mobile-first approach
2. **Update complex components** (CrearistCollage, CTASection)
3. **Add responsive image srcsets** for performance
4. **Implement container queries** for component-level responsiveness
5. **Add accessibility features** (focus states, ARIA labels)
6. **Performance testing** on real devices

---

**Last Updated:** February 3, 2026
**Version:** 1.0
**Maintained By:** Midis Dev Team
