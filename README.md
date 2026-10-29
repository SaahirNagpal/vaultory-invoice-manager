# Vaultory — Every Purchase. Every Warranty. One Place.

Vaultory is a modern, full-stack purchase-document vault and product lifecycle management platform. It allows users to automatically collect, extract, organize, store, and manage all purchase-related documents (invoices, bills, receipts, warranty cards, repair receipts), track dynamic warranty countdowns, receive expiration reminders, and query their purchase history from any device.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v18 or higher; tested on v24.11.0)
- **npm** (v9 or higher)

### Installation
From the project root directory:
```bash
npm install
```

### Seeding Demo Data (Optional for Instant Evaluation)
To populate the database with realistic sample purchases, documents, repairs, and connected email items:
```bash
node server/seed.js
```
*Demo account credentials:*
- **Email:** `demo.user@vaultory.app`
- **Password:** `DemoPass123!`
*(You can also use the 1-click "Fill Demo Info" button on the login screen)*

### Running the Application

#### Option 1: Unified Full-Stack Server (Recommended)
This runs the Express API server and serves the pre-built optimized production frontend bundle on port `5050`:
```bash
npm run build
npm start
```
Then visit **http://localhost:5050** in your browser.

#### Option 2: Development Mode (Hot Reloading)
To run the Express backend on port `5050` and Vite dev server with instant HMR on port `5173`:
```bash
npm run dev
```
Then visit **http://localhost:5173** in your browser.

---

## 📦 Features Included

1. **User Authentication & Cross-Device Sync:**
   - Full registration, login, JWT token auth, profile updates, and password recovery.
   - Central persistent SQLite storage (`data/vaultory.db`) ensuring data is preserved and accessible across devices.
2. **14 Dedicated Pages & Views:**
   - Public Landing Page (Vaultory hero, problem statement, features, how it works, security, and footer modals).
   - Sign In & Sign Up with demo shortcut.
   - Personalized Dashboard with 5 KPI summary cards, interactive spending charts, and warranty breakdown.
   - All Products with grid/table views, live search, category pills, warranty filter, and sorting.
   - Add / Import Purchase (The Core Hub) supporting Option A: Gallery, Option B: Files, Option C: Email, and Manual Entry.
   - Side-by-side Review & Confirmation screen with original document visual preview and editable fields.
   - Documents Vault with file preview, download, and safe deletion.
   - Expiring Warranties dedicated tracking page with countdown timers.
   - Product Details Page with full metadata, attached files, warranty timeline, and repair history.
   - Service & Repair Ledger tracking maintenance costs and total cost of ownership.
   - In-App Notifications Center with 30-day, 7-day, and on-expiry reminder generation.
   - Connected Email Accounts page for Gmail OAuth integration and purchase discovery.
   - Profile & Settings with data export (JSON backup) and permanent account deletion.
   - Grounded AI Assistant widget for natural language querying over purchase data.

---

## 🧪 Running the Verification Test Suite
To execute the automated test suite verifying auth, OCR extraction, warranty calculations, duplicate detection, and assistant queries:
```bash
node server/test-suite.js
```

---

## 🚀 Public Deployment Guide (GitHub & Vercel)

### Step 1: Push Code to GitHub
1. Go to [GitHub.com/new](https://github.com/new) and create a new repository called `vaultory` (set to Public or Private).
2. Push your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/vaultory.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** $\rightarrow$ **"Project"** and select the `vaultory` repository.
3. Configure the Project Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. In the **Environment Variables** section, add:
   - `JWT_SECRET`: A secure random 32+ character key (e.g. run `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
   - `NODE_ENV`: `production`
   - *(Optional)* `GEMINI_API_KEY`: For AI extraction
   - *(Optional)* `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: For Gmail OAuth
5. Click **"Deploy"**. Vercel will build the frontend and deploy the serverless API routes using [`vercel.json`](./vercel.json) and [`api/index.js`](./api/index.js).

---

## 📄 Software Engineering Documentation
For detailed system specifications, use case diagrams, ER diagrams, class diagrams, sequence diagrams, activity diagrams, and API docs, refer to [`DOCUMENTATION.md`](./DOCUMENTATION.md).
