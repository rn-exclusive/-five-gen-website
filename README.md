# FIVE GEN — Complete Website Starter

## Features
- Responsive storefront (mobile/tablet/desktop)
- Product search and category filters
- Cart, quantity controls and checkout
- WhatsApp order handoff to +8801805082863
- Messenger contact link configurable in Admin Settings
- Admin dashboard: overview, product CRUD, order list/status, settings
- Bengali-first interface and language toggle
- Local browser storage for demo data

## Run locally
1. Install Node.js 20+.
2. Extract this ZIP.
3. Open the folder in Terminal.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL shown by Vite.

## Admin
Open `/#admin` or click Admin in the footer.
Demo password: `FG2026`
Change the demo password and implement server-side authentication before public launch.

## Important launch limitations
This is a complete front-end starter, not a production-hosted store. Product and order data currently stay in the browser's Local Storage and are not shared between devices. The demo admin password is not secure. WhatsApp checkout opens a pre-filled message; it does not verify payment or automatically confirm delivery. bKash/Nagad require merchant onboarding and approved API credentials. Production launch requires a backend/database, secure admin authentication, payment provider integration, hosting/domain, product photos and verified store policies.

## Before launch
- Replace sample products with real products, prices and photos.
- Add the real Facebook Messenger Page URL in Admin > Settings.
- Set delivery charges, delivery areas, return/refund policy and contact details.
- Connect a production backend and payment gateway.
