# FIVE GEN — Professional E-commerce

Production storefront for FIVE GEN, built with React, Vite and Supabase.

## Current capabilities
- Responsive Bengali-first storefront and product search/category filters
- Supabase-backed product catalogue and admin authentication
- Product image uploads, size options and product typography controls
- Cart, stock-aware quantity controls and server-validated Cash on Delivery checkout
- Atomic stock reservation/decrement during order creation
- Admin order management, status updates and printable invoice
- Persistent store settings and order status lookup using order ID + matching phone number
- Wishlist currently stored locally in the customer's browser

## Local development
1. Install a supported Node.js LTS release.
2. Install dependencies with the package manager and lockfile used by the project.
3. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in a local .env file.
4. Run npm run dev.
5. Run npm run build before proposing a release.

## Admin
Open /#admin and sign in using the authorized Supabase Auth account. There is no demo password in the source code.

## Production notes
- The public site uses Cash on Delivery. Online payment is not enabled until a merchant account and approved provider integration are configured.
- Customer self-service registration/login is not yet implemented; order lookup currently uses the full order UUID and the phone number used at checkout.
- Delivery charges can be configured in Admin Settings; displaying and calculating them in checkout is a separate rollout step.
- Store policies, verified contact details, real product photography, and fulfillment rules must be reviewed before commercial launch.
- Never place Supabase service-role keys, merchant secrets, or private credentials in frontend code or public environment variables.