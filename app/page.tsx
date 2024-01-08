import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center pt-10">
      <Image
        src="/images/soon.png"
        alt="Coming soon"
        width={500}
        height={300}
        loading="lazy"
      />
    </main>
  );
}
