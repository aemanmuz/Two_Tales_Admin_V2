# Two Tales Business Admin — Installable PWA

## Deploy on GitHub Pages
1. Back up your current `index.html` and any browser data using **Backup data**.
2. In the supplied `index.html`, set `SUPABASE_URL` and `SUPABASE_KEY` to your existing project URL and **publishable** (or legacy anon) key. Never use a secret/service-role key.
3. Upload **all** of `index.html`, `manifest.webmanifest`, `sw.js`, `offline.html`, and the `icons` directory to the root of your `aemanmuz/Two_Tales_Business_Apps` repository. Keep filenames and relative paths unchanged.
4. Commit, wait for GitHub Pages deployment, and open `https://aemanmuz.github.io/Two_Tales_Business_Apps/`.
5. In Chrome or Edge on Windows, use the install icon in the address bar, or browser menu → Apps → Install this site as an app.
6. Sign in and test a product save, refresh, and a second device.

## Important
- The HTML template contains **blank** Supabase URL/key placeholders; copy your existing values from the currently deployed working HTML.
- This PWA is **online-only** for business operations. The service worker intentionally does not cache the business application or Supabase responses for offline transactions. An offline page appears without connectivity.
- Existing Supabase schema, RLS, and authentication configuration remain required.
- Existing account data remains in Supabase; uploading these files does not migrate or delete database records.
- This is a PWA, not a Windows `.exe` installer.

## Customer History fix
- The POS member selector requires an explicit customer selection.
- New POS sales record a stable `customerId`; existing orders continue to match by name.
- Customer History total spent now calculates paid amounts for non-cancelled orders dynamically, plus the optional historical opening balance set in Edit Customer. Editing or deleting an order updates the calculated total.
- If your old manual `Total spent` field already included orders recorded in this app, **adjust that value** in Edit Customer to contain only sales from before recorded orders, to avoid double counting.
