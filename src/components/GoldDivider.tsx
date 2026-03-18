export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,90,0.1) 20%, rgba(212,175,90,0.4) 50%, rgba(212,175,90,0.1) 80%, transparent 100%)',
        margin: 0,
      }}
    />
  );
}
