export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
      <p className="font-mono text-sm" style={{ color: '#6B7CA4' }}>
        <span style={{ color: '#3B82F6' }}>{'<'}</span>
        Navneet Sharma
        <span style={{ color: '#3B82F6' }}>{' />'}</span>
        {' '}· Technical Architect · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
