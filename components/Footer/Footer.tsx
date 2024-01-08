import { IconBtn } from '@/components';

import { footer } from '@/data/common.json';

const Footer: React.FC = () => {
  const { disclaimer, credits } = footer;

  return (
    <footer className="mt-auto">
      <div className="container border-t border-t-secondary py-2">
        {/* credits block */}
        <div className="flex items-center justify-between">
          <p>{disclaimer}</p>
          <div className="flex items-center gap-2">
            <p>{credits.text}</p>
            {credits.links.map(item => (
              <IconBtn
                key={item.link}
                item={item}
                className="h-[32px] w-[32px]"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
