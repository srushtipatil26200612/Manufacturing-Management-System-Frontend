
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="home-brand">
          ⚙ Manu<span>Flow</span>
        </div>

        <a
          className="home-login-btn"
          href="http://127.0.0.1:8000/login/"
        >
          Admin Login
        </a>
      </nav>

      <header className="home-hero">
        <div className="home-label">
          SMART MANUFACTURING MANAGEMENT
        </div>

        <h1>
          Manage Your Factory.
          <br />
          <span>Smarter. Faster. Better.</span>
        </h1>

        <p>
          A centralized platform to manage products, inventory,
          production, orders and business operations efficiently.
        </p>

        <div className="home-actions">
          <a
            className="home-primary-btn"
            href="http://127.0.0.1:8000/login/"
          >
            Admin Login →
          </a>

          <a className="home-secondary-btn" href="#home-features">
            Explore Features
          </a>
        </div>
      </header>

      <section className="home-features" id="home-features">
        <div className="home-section-heading">
          <h2>Everything in One Place</h2>
          <p>
            Manage your key manufacturing activities from one system.
          </p>
        </div>

        <div className="home-card-grid">
          <article className="home-card">
            <div className="home-icon">📦</div>
            <h3>Product Management</h3>
            <p>Organize products, categories and product information.</p>
          </article>

          <article className="home-card">
            <div className="home-icon">🏭</div>
            <h3>Production Operations</h3>
            <p>Keep production activities and quality checks organized.</p>
          </article>

          <article className="home-card">
            <div className="home-icon">📊</div>
            <h3>Inventory Tracking</h3>
            <p>Monitor raw materials and stock transactions efficiently.</p>
          </article>

          <article className="home-card">
            <div className="home-icon">🤝</div>
            <h3>Customer &amp; Supplier</h3>
            <p>Maintain customer, supplier and enquiry records.</p>
          </article>

          <article className="home-card">
            <div className="home-icon">🧾</div>
            <h3>Orders &amp; Invoices</h3>
            <p>Organize sales orders, quotations and invoices.</p>
          </article>

          <article className="home-card">
            <div className="home-icon">📈</div>
            <h3>Business Reports</h3>
            <p>View business information for daily operations.</p>
          </article>
        </div>
      </section>

      <footer className="home-footer">
        © 2026 Manufacturing Management System.
        Built for efficient manufacturing operations.
      </footer>
    </div>
  );
}

export default Home;
