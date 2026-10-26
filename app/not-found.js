import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '16px' }}>404 - Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn-brutal">
        Return Home
      </Link>
    </div>
  );
}
