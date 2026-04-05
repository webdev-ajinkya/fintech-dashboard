# ExpenseTracker

This application allows users to track transactions, analyze spending, and understand financial trends through visual insights.

---

## Tech Stack

- Next.js (React) – App structure and component-based architecture  
- TypeScript – Type safety and maintainable code  
- Tailwind CSS – Fast, responsive UI styling  
- Chart.js – Data visualization (line & pie charts)  
- Context API – Global state management  
- LocalStorage – Data persistence  

---

## My Approach

- Built a modular component structure:
  - Sidebar
  - Header
  - Charts
  - Table
  - Insights  
- Used Context API to manage global state:
  - Transactions
  - Role
  - Analytics  
- Created utility functions to compute financial insights from raw data  
- Focused on clean UI, responsiveness,crossbrowser and usability  
- Handled edge cases like empty states and restricted access  

---

## Folder Structure

```bash
src/
│
├── app/                  # Next.js app router (layouts, pages)
│
├── components/
│   ├── layout/           # Sidebar, Header, Layout wrapper
│   ├── dashboard/        # Dashboard sections (Balance, Spend, Insight)
│   ├── charts/           # Charts & table (Line, Pie, TransactionTable)
│   └── ui/               # Reusable UI (buttons, toggle, export menu)
│
├── store/
│   └── DashboardContext  # Global state provider
│
├── hooks/
│   └── useDashboardData  # Handles data + localStorage sync
│
├── lib/
│   ├── analytics         # computeDashboard logic
│   ├── dataHelpers       # groupByMonth and helpers
│   └── exportFiles       # CSV / JSON export logic
│
├── mock/
│   └── ssot              # Mock transaction data
│
├── types/
│   └── transaction       # Type definitions
│
└── styles/
    └── globals.css       # Global styles
```

### Structure Explanation

- **app/** → Routing and layout (Next.js structure)  
- **components/** → UI split into logical sections  
- **store/** → Global state using Context API  
- **hooks/** → Custom logic for managing dashboard data  
- **lib/** → Utility functions (analytics, helpers, export)  
- **mock/** → Static data source  
- **types/** → TypeScript types  

---

## Features & Logic

### 1. Financial Metrics (Dashboard Overview)

- Total Balance  
- Income  
- Expense  

**Logic:**
- All transactions are processed using `computeDashboard()`  
- Calculates total income, total expense, and balance  
- Uses latest month’s data for summary  

---

### 2. Balance Trend (Line Chart)

Visualizes monthly income vs expense.

**Logic:**
- Transactions grouped by month using `groupByMonth()`  
- Chart.js renders income and expense datasets  
- Filter toggle (All / Income / Expense)  

---

### 3. Spending Breakdown (Pie Chart)

Shows category-wise expense distribution.

**Logic:**
- Expense data grouped by category  
- Percentage calculated from total spending  
- Tooltip shows amount + percentage  

---

### 4. Transactions Section

Displays and manages all transactions.

**Features:**
- Search (by description)  
- Filters (type, category, date, amount)  
- Sorting (by date)  
- Pagination  

**Logic:**
- Data filtered using multiple conditions  
- Sorted dynamically  
- Paginated for better UX  
- Admin can add/edit transactions  

---

### 5. Role-Based UI (Admin / Viewer)

Simulates user permissions.

**Logic:**
- Role stored in global state (`mode`)  
- Viewer → read-only  
- Admin → can add/edit transactions  
- Persisted in localStorage  

---

### 6. Insights Section

Provides useful financial observations:

- Top spending category  
- Income & expense trends  
- Average expense  

**Logic:**
- Trends calculated using % change between months  
- Aggregated data used for insights  

---

### 7. State Management

Centralized data handling using Context API.

**Logic:**
- `useDashboardData()` manages:
  - Transactions  
  - User role  
  - Analytics  
- `useMemo()` optimizes recalculations  

---

### 8. Data Persistence

Keeps data saved after refresh.

**Logic:**
- Stored in localStorage  
- Loaded on app start  
- Synced on updates  

---

### 9. Export Feature

Download transaction data.

**Logic:**
- Converts data into CSV / JSON  
- Uses Blob to trigger download  
- Handles empty data cases  

---

### 10. Dark Mode

Switch between light and dark theme.

**Logic:**
- Stored in localStorage  
- Toggles `dark` class on root element  
- Tailwind applies styles  

---

### 11. UI/UX Enhancements

**Logic:**
- Responsive layout  
- Empty states  
- Debounced search  
- Smooth transitions  

---

## Setup

```bash
npm install
npm run dev
```

- Open → http://localhost:3000
- Go to profile icon you can find out ET with circle there, open it 
- if you want to add / update switch toggle to Admin user
- if you want just check data switch to View user
- click on icon left to profile icon for dark/light mode