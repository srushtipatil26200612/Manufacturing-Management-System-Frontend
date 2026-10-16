
import "./App.css";
import { useEffect, useState } from "react";

const modules = [
  { icon: "📦", title: "Products", desc: "Manage products, quantities and prices.", link: "/products-page/", button: "View Products" },
  { icon: "🗂️", title: "Categories", desc: "Manage and organize product categories.", link: "/categories/", button: "View Categories" },
  { icon: "🤝", title: "Suppliers", desc: "Manage supplier information and records.", link: "/suppliers/", button: "View Suppliers" },
  { icon: "🧱", title: "Raw Materials", desc: "Manage raw materials and available stock.", link: "/raw-materials/", button: "View Materials" },
  { icon: "🔄", title: "Stock Transactions", desc: "Track raw materials received and issued.", link: "/stock-transactions/", button: "View Transactions" },
  { icon: "👥", title: "Customers", desc: "Manage customer details and information.", link: "/customers/", button: "View Customers" },
  { icon: "💬", title: "Enquiries", desc: "Manage and track customer enquiries.", link: "/enquiries/", button: "View Enquiries" },
  { icon: "📄", title: "Quotations", desc: "Manage quotations and their status.", link: "/quotations/", button: "View Quotations" },
  { icon: "🛒", title: "Sales Order Management", desc: "Manage customer sales orders and order status.", link: "/sales-orders/", button: "View Sales Orders" },
  { icon: "🏭", title: "Production Management", desc: "Manage production records and quantities.", link: "/production/", button: "View Production" },
  { icon: "✅", title: "Quality Checks", desc: "Track inspections and rejected quantities.", link: "/quality-checks/", button: "View Quality Checks" },
  { icon: "🚚", title: "Dispatch Management", desc: "Track deliveries, transporters and dispatch status.", link: "/dispatches/", button: "View Dispatches" },
  { icon: "🧾", title: "Invoice Management", desc: "Manage invoices and outstanding balances.", link: "/invoices/", button: "View Invoices" },
  { icon: "💳", title: "Payment Management", desc: "Record customer payments and payment methods.", link: "/payments/", button: "View Payments" },
  { icon: "📈", title: "Business Reports", desc: "View manufacturing, sales and payment summaries.", link: "/reports/", button: "View Reports" },
];

const summaries = [
  { title: "Total Products", icon: "📦", style: "products" },
  { title: "Total Categories", icon: "🗂️", style: "categories" },
  { title: "Total Production", icon: "🏭", style: "production" },
  { title: "Pending Production", icon: "⏳", style: "pending" },
];

function App() {
  const [stats, setStats] = useState({
    product_count: 0,
    category_count: 0,
    production_count: 0,
    pending_production_count: 0,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/dashboard-stats/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard stats");
        }
        return response.json();
      })
      .then((data) => setStats(data))
      .catch((error) => console.error("Dashboard stats error:", error));
  }, []);

  return (
    <div className="dashboard">
      <nav className="topbar">
        <div className="brand">
          ⚙ Manu<span>Flow</span>
        </div>

        <div className="user-area">
          <span className="welcome">Manufacturing Workspace</span>
          <button
            className="logout-btn"
            onClick={() => {
              window.location.href = "http://127.0.0.1:8000/";
            }}
          >
            Django Home
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-label">MANUFACTURING OPERATIONS</div>
          <h1>Manufacturing Management System</h1>
          <p>
            Your central workspace to manage manufacturing operations efficiently.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="section-heading">
          <div>
            <h2>Overview</h2>
            <p>A quick look at your manufacturing activity</p>
          </div>
        </div>

        <section className="summary">
          {summaries.map((item) => (
            <div className={`summary-card ${item.style}`} key={item.title}>
              <div className="summary-top">
                <span className="summary-title">{item.title}</span>
                <span className="summary-icon">{item.icon}</span>
              </div>
              <div className="summary-number">
  {item.style === "products" && stats.product_count}
  {item.style === "categories" && stats.category_count}
  {item.style === "production" && stats.production_count}
  {item.style === "pending" && stats.pending_production_count}
</div>
            </div>
          ))}
        </section>

        <div className="section-heading">
          <div>
            <h2>Management Modules</h2>
            <p>Access and manage each part of your business</p>
          </div>
        </div>

        <section className="modules">
          {modules.map((item) => (
            <article className="card" key={item.title}>
              <div className="module-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={`http://127.0.0.1:8000/api${item.link}`}>
                {item.button} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer>
        © 2026 Manufacturing Management System · All rights reserved
      </footer>
    </div>
  );
}

export default App;
