import { Logo, IconBtn, Navigation } from '@/components';
import { footer } from '@/data/common.json';

const Footer: React.FC = () => {
  const { disclaimer, credits } = footer;

  return (
    <footer className="mt-auto bg-white py-4">
      <div className="container">
        {/* navigation block */}
        <div className="flex items-center justify-around pb-3 md:justify-between">
          <Logo />
          <Navigation placement="footer" />
        </div>
        {/* credits block */}
        <div className="flex items-center justify-between border-t border-t-secondary pt-3">
          <p className="text-[10px] text-secondary md:text-xs">{disclaimer}</p>
          <div className="flex items-center gap-3 text-primary">
            <p className="text-sm smOnly:hidden">{credits.text}</p>
            {credits.links.map(item => (
              <IconBtn
                key={item.link}
                item={item}
                className="h-[24px] w-[24px] fill-primary duration-300 ease-in hover:fill-accent focus:fill-accent"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
