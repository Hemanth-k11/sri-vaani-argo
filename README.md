# Sri Vaani Agro Industries – React Website

Official website for **Sri Vaani Agro Industries Private Limited**, manufacturers of agro processing machinery based in Chebrolu, Guntur, Andhra Pradesh.

---

## 📦 Project Structure

```
sri-vaani-agro/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/          # 10 optimised product photos
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed top nav with mobile hamburger
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx        # 4-column footer
│   │   ├── Footer.module.css
│   │   ├── ProductCard.jsx   # Reusable product card
│   │   ├── ProductCard.module.css
│   │   ├── ContactStrip.jsx  # 4-item contact info strip
│   │   ├── ContactStrip.module.css
│   │   └── FadeUp.jsx        # Scroll-triggered fade animation wrapper
│   ├── hooks/
│   │   └── useFadeUp.js      # IntersectionObserver hook
│   ├── data/
│   │   └── products.js       # All products, company info, stats
│   ├── pages/
│   │   ├── HomePage.jsx      # Full landing page
│   │   ├── HomePage.module.css
│   │   ├── ProductsPage.jsx  # Catalogue + product detail view
│   │   ├── ProductsPage.module.css
│   │   ├── AboutPage.jsx     # Company story + timeline
│   │   ├── AboutPage.module.css
│   │   ├── ContactPage.jsx   # Enquiry form + contact info
│   │   └── ContactPage.module.css
│   ├── App.js                # Root component with page routing
│   ├── index.js              # React DOM entry
│   └── index.css             # Global styles + animations
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher

### Installation & Run

```bash
# 1. Navigate into the project folder
cd sri-vaani-agro

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The site will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Production-ready files will be in the `build/` folder.

---

## 🌐 Pages

| Page     | Description |
|----------|-------------|
| **Home** | Hero section, products preview, process steps, why us, gallery, testimonials, CTA |
| **Products** | Full 8-product catalogue with category filters, product detail view with specs |
| **About** | Company story, core values, milestone timeline, facility gallery |
| **Contact** | Enquiry form with validation, contact details, Google Maps embed |

---

## 🎨 Design System

- **Primary colour:** `#1D6B38` (Forest Green)
- **Background:** `#F8F6F1` (Warm cream)
- **Display font:** Syne (700/800 weight)
- **Body font:** DM Sans (300/400/500/600)
- **Animations:** CSS fade-up via IntersectionObserver

---

## 🏢 Company Details

| Field | Value |
|-------|-------|
| Company | Sri Vaani Agro Industries Private Limited |
| Proprietor | Gade Vinayabhushan Reddy |
| Phone | 8074765385 / 7780267570 |
| Address | Kothareddipalem Village, Chebrolu Mandal, Guntur – 522 212 |
| GSTIN | 37ABMCS6290A1Z5 |

---

## 📝 Customisation

All company data, product details and contact information is centralised in:

```
src/data/products.js
```

Edit that file to update product specs, prices, contact numbers or company details — no need to hunt through individual components.

---

## 🖼️ Images

Product images are stored in `src/assets/images/` and imported directly into `src/data/products.js`. To replace an image, swap the file in the assets folder and update the import in `products.js`.

---

## Converted to Vite

This project was migrated from Create React App (`react-scripts`) to **Vite**.

### Setup
```bash
npm install
```

### Development (was `npm start`, now `npm run dev`)
```bash
npm run dev
```
Opens at http://localhost:3000

### Production build
```bash
npm run build
```
Output goes to the `build/` folder (same as before).

### Preview the production build
```bash
npm run preview
```

### What changed
- `src/index.js` → `src/main.jsx` (Vite's expected entry point)
- `src/App.js` → `src/App.jsx`
- `public/index.html` moved to project root `index.html` (Vite requirement), with a `<script type="module" src="/src/main.jsx">` tag added
- Added `vite.config.js` (dev server on port 3000, build output to `build/`)
- `package.json` scripts now use `vite` / `vite build` / `vite preview` instead of `react-scripts`
- Removed `react-scripts` dependency, added `vite` and `@vitejs/plugin-react` as devDependencies
- Removed the old CRA `node_modules`, `build`, and `package-lock.json` (run `npm install` to regenerate)
