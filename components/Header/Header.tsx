import { Logo, Navigation, MobileMenu, AuthMenu } from '@/components';

const Header = () => {
  return (
    <header className="bg-white py-3">
      <div className="container flex items-center justify-between">
        <Logo />

        {/* only on mob */}
        <MobileMenu />

        {/* hidden on mob */}
        <Navigation placement="header" />
        <AuthMenu placement="header" />
      </div>
    </header>
  );
};

export default Header;
