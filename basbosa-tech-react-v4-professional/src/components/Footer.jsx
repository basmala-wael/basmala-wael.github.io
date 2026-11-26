export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>&copy; <span className="year">{new Date().getFullYear()}</span> Basbosa Tech &mdash; All rights reserved.</div>
      </div>
    </footer>
  );
}
