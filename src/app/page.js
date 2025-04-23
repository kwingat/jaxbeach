import Image from 'next/image';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Image src="/JaxBeach.jpg" alt="Logo" width={400} height={200} />
    </main>
  );
}
