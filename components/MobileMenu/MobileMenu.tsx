'use client';

import { useState, useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';

import { MobMenuButton, AuthMenu, Navigation } from '@/components';

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const transition = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setShowMenu(false);
        document.body.classList.remove('overflow-hidden');
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleOverlayClick = ({
    currentTarget,
    target,
  }: {
    currentTarget: HTMLElement;
    target: EventTarget | null;
  }): void => {
    if (currentTarget !== target) return;
    handleMenuToggle();
  };

  return (
    <>
      <MobMenuButton onClick={handleMenuToggle} />

      {transition(
        (style, item) =>
          item && (
            <animated.div
              className="modal-backdrop fixed left-0 top-0 z-20 h-[100vh] w-[100vw] md:hidden"
              onClick={handleOverlayClick}
              style={style}
            >
              <div className="absolute right-0 top-0 w-full bg-white px-6 pb-9 pt-5 text-center">
                <MobMenuButton onClick={handleMenuToggle} isMenu={true} />

                <Navigation placement="menu" actionHandler={handleMenuToggle} />

                <AuthMenu placement="menu" actionHandler={handleMenuToggle} />
              </div>
            </animated.div>
          ),
      )}
    </>
  );
};

export default MobileMenu;
