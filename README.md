<div style="text-align: center;">
  <a href="https://shazee-04.github.io/e-commerce-site/">
    <img src="https://github.com/user-attachments/assets/24d2fbb3-a247-4994-9e8d-5227898f4180" alt="Website Preview" style="width: 100%;">
  </a>
</div>

### Overview
- A lightweight, responsive frontend for an electronics e‑commerce store. It’s a static site (HTML/CSS/JS) with a multi‑page storefront (shop, product detail, cart, checkout) and a simple admin panel UI.
- Ideal for learning, portfolio demos, or as a starter for a static storefront to be wired to a real backend later.

### Features
- Responsive, mobile‑first layout
- Product listing and single‑product view
- Cart and checkout pages (frontend only)
- Admin panel UI for products/orders/users (UI only)
- Smooth scrolling and small UI animations

##

### Technologies
- HTML5, CSS3, Vanilla JavaScript
- Bootstrap (CSS + JS bundle)

### Requirements
- A modern web browser
- Optional: Python 3 or Node.js to run a simple local HTTP server

##

### Installation
```powershell
git clone https://github.com/shazee-04/e-commerce-site.git
cd e-commerce-site
```

### Usage
- Quick open: double‑click `index.html` to open in your browser.
- Recommended (local server):

### Configuration
- No environment variables are required.
- This is a static site; cart/checkout/admin are UI‑only. To make them functional, integrate a backend/API.

##

### Repository Structure
```
e-commerce-site/
├─ index.html                  # Landing/home page
├─ README.md                   # You are here
├─ assets/
│  ├─ css/                     # Stylesheets
│  │  ├─ adminpanel-style.css
│  │  ├─ bootstrap.css
│  │  ├─ brands-style.css
│  │  ├─ login-style.css
│  │  ├─ main-style.css
│  │  ├─ new-style.css
│  │  ├─ shop-style.css
│  │  └─ singleproductview-style.css
│  ├─ images/
│  │  ├─ banner/               # Banners & hero images
│  │  ├─ brand/
│  │  │  └─ logo/              # Brand logos (svg)
│  │  ├─ icon/
│  │  │  ├─ main/              # Main icon set (cart/profile/search/etc.)
│  │  │  └─ other/             # Secondary navigational icons
│  │  ├─ payment/              # Payment provider logos
│  │  └─ thumb/                # Product thumbnails
│  └─ js/                      # JavaScript assets
│     ├─ adminpanel-script.js
│     ├─ bootstrap.bundle.js
│     ├─ loader.js
│     ├─ main-script.js
│     ├─ profile-script.js
│     └─ smoothscroll.js
├─ pages/                      # Other site pages
│  ├─ admin-panel.html
│  ├─ brands.html
│  ├─ cart.html
│  ├─ login.html
│  ├─ new.html
│  ├─ profile.html
│  ├─ shop.html
│  ├─ single-product-view.html
│  └─ wishlist.html
└─ .github/
	 └─ workflows/
			└─ static.yml            # GitHub Actions for Pages/static deploy
```

### Contributing
- Maintainer: Shazee Sandaruwan — https://github.com/shazee-04
- Please see `CONTRIBUTING.md` for the quick workflow (issue → branch → PR). Small, focused changes are easiest to review.

### Documentation
- This is a static, self‑contained site. For customization, inspect `assets/css/*.css` and `assets/js/*.js` and mirror the existing patterns.

##

### Notes & limitations
- Frontend‑only: cart, checkout, and admin are non‑persistent without a backend.
- Consider adding a real API, auth, and persistence if you plan to deploy beyond a demo.
