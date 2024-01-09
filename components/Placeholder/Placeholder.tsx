import Image from 'next/image';

const Placeholder = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/soon.png"
        alt="Coming soon"
        width={500}
        height={300}
        loading="lazy"
      />
    </div>
  );
};

export default Placeholder;
