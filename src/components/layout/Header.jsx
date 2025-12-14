'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Logo from '../shared/Logo';
import MoonIcon from '../shared/MoonIcon';
import SunIcon from '../shared/SunIcon';

const extraItems = [
  { href: '/', label: 'Главная' },
  { href: '/#services', label: 'Услуги' },
  { href: '/#format', label: 'Формат работы' },
  { href: '/#pricing', label: 'Стоимость' },
  { href: '/#contacts', label: 'Контакты' },
];

const primaryDesktopItems = [
  { href: '/education', label: 'Образование' },
  { href: '/consent', label: 'Информированное согласие' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = React.useState('');
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const triggerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const prevFocusRef = React.useRef(null);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setHash(window.location.hash || '');
      lastScrollY.current = window.scrollY || 0;
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const onHashChange = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const current = window.scrollY || 0;

      if (open) {
        setIsHidden(false);
        lastScrollY.current = current;
        return;
      }

      if (current < 80) {
        setIsHidden(false);
        lastScrollY.current = current;
        return;
      }

      const diff = current - lastScrollY.current;
      if (Math.abs(diff) < 4) return;

      if (diff > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  const extractHash = (href) => {
    if (href.startsWith('#')) return href;
    const index = href.indexOf('#');
    return index !== -1 ? href.slice(index) : '';
  };

  const isActive = (href) => {
    const currentHash = extractHash(href);
    if (href === '/') {
      return pathname === '/' && (!hash || hash === '#top');
    }
    if (href.startsWith('/#')) {
      return pathname === '/' && hash === currentHash;
    }
    if (href.startsWith('/')) {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    if (currentHash) {
      return hash === currentHash;
    }

    return false;
  };

  const handleNavClick = (href) => {
    const targetHash = extractHash(href);
    if (targetHash) {
      setHash(targetHash);
      setIsHidden(true);
    } else {
      setHash('');
      setIsHidden(false);
    }
  };

  const isSecondaryActive = primaryDesktopItems.some((item) =>
    isActive(item.href)
  );

  React.useEffect(() => {
    if (!open) {
      if (prevFocusRef.current && 'focus' in prevFocusRef.current) {
        prevFocusRef.current.focus();
      } else {
        triggerRef.current?.focus();
      }
      return;
    }

    const container = menuRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
      if (e.key === 'Tab' && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleClickOutside = (e) => {
      if (!menuRef.current) return;
      if (
        !menuRef.current.contains(e.target) &&
        !triggerRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'transition-transform duration-300 ease-out',
        isHidden && '-translate-y-full'
      )}>
      <div className='mx-auto w-full'>
        <div
          className={cn(
            'relative flex items-center gap-4 max-md:rounded-b-0',
            'bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/80',
            'dark:bg-[#1B1B1B]/90 dark:supports-backdrop-filter:bg-[#1B1B1B]/80',
            'dark:shadow-[0_12px_30px_rgba(220,200,188,0.12)] shadow-[0_12px_30px_rgba(160,92,51,0.12)] dark:border-white/10',
            'px-4 py-3 md:px-6 '
          )}>
          <Logo className='w-10' />
          <nav
            className='hidden flex-1 items-center justify-center gap-7 md:flex'
            aria-label='Главная навигация'>
            {extraItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'w-fit text-[clamp(0.813rem,0.795rem+0.089vw,0.875rem)] min-w-min text-center tracking-widest font-medium transition-colors',
                  'text-[#7E6352] hover:text-[#E17737]',
                  'dark:text-[#DCC8BC]/90 dark:hover:text-[#F4B26E]',
                  isActive(item.href) &&
                    'text-[#E17737] dark:text-[#F4B26E] underline underline-offset-4 decoration-1'
                )}>
                {item.label}
              </Link>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'border-0 bg-transparent px-0 py-0 cursor-pointer',
                      'hover:bg-transparent! focus:bg-transparent! data-[state=open]:bg-transparent! data-[state=open]:text-[#E17737]!',
                      'text-[clamp(0.813rem,0.795rem+0.089vw,0.875rem)] tracking-[0.18em] font-medium',
                      'text-[#7E6352] hover:text-[#E17737]',
                      'dark:text-[#DCC8BC]/90! dark:hover:text-[#F4B26E]!',
                      isSecondaryActive &&
                        'text-[#E17737] dark:text-[#F4B26E] underline underline-offset-4 decoration-1'
                    )}>
                    Другое
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    className={cn(
                      'rounded-2xl border-0 bg-white/99 px-3 py-2 shadow-[0_10px_24px_rgba(160,92,51,0.12)]',
                      'dark:bg-[#1F1F1F]/99 dark:border-white/10'
                    )}>
                    <ul className='flex min-w-[220px] flex-col gap-1'>
                      {primaryDesktopItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              onClick={() => handleNavClick(item.href)}
                              className={cn(
                                'block rounded-lg px-3 py-2 text-[12px] font-medium tracking-[0.18em] transition-colors',
                                'hover:bg-[#F5E2D4]/60! focus:bg-[#F5E2D4]/60! data-[state=open]:bg-[#F5E2D4]/60! data-[state=open]:text-[#E17737]!',
                                'text-[#7E6352] hover:bg-[#F5E2D4]/60 hover:text-[#E17737]!',
                                'dark:text-[#DCC8BC]/90! dark:hover:bg-white/5! dark:hover:text-[#F4B26E]!',
                                isActive(item.href) &&
                                  'bg-[#F5E2D4]/70 text-[#E17737] dark:bg-white/10 dark:text-[#F4B26E]'
                              )}>
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className='ml-auto flex items-center gap-2 sm:gap-3'>
            <Button
              type='button'
              variant='ghost'
              aria-label='Переключить тему'
              onClick={toggleTheme}
              className={cn(
                'h-10 w-10 max-md:h-13 max-md:w-13 rounded-full cursor-pointer',
                'bg-[#F5E2D4] text-[#925E3C] hover:bg-[#F2DBC7]',
                'dark:bg-[#2C241D] dark:text-[#F2C6A2] dark:hover:bg-[#3B2A1F]',
                '[&_svg]:h-4! [&_svg]:w-4! max-md:[&_svg]:h-5! max-md:[&_svg]:w-5!'
              )}>
              {mounted ? (
                resolvedTheme === 'dark' ? (
                  <SunIcon size={20} color='#F2C6A2'/>
                ) : (
                  <MoonIcon size={20} color='#925E3C'/>
                )
              ) : (
                <MoonIcon size={20} color='#925E3C'/>
              )}
              <span className='sr-only'>Переключить тему</span>
            </Button>

            <div className='md:hidden'>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='cursor-pointer rounded-full bg-[#F5E2D4] text-[#925E3C] hover:bg-[#F2DBC7] dark:bg-[#2C241D] dark:text-[#F2C6A2] dark:hover:bg-[#3B2A1F] h-10 w-10 max-md:h-13 max-md:w-13 [&_svg]:h-5! [&_svg]:w-5!'
                    aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={open}
                    aria-controls='overlay-menu'
                    ref={triggerRef}
                    onClick={() => {
                      prevFocusRef.current = document.activeElement;
                    }}>
                    <Menu strokeWidth={3} />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  id='overlay-menu'
                  role='dialog'
                  aria-modal='true'
                  aria-label='Мобильное меню'
                  align='end'
                  sideOffset={8}
                  ref={menuRef}
                  className={cn(
                    'w-[min(95vw,250px)]',
                    'rounded-2xl border-0',
                    'bg-white/99 shadow-[0_10px_24px_rgba(160,92,51,0.12)]',
                    'dark:border-white/10 dark:bg-[#1F1F1F]/99',
                    'p-0'
                  )}>
                  <nav
                    className='max-h-[70vh] overflow-auto px-4 py-3'
                    role='menu'
                    aria-label='Мобильное меню'>
                    <ul className='flex flex-col gap-1'>
                      {[...extraItems, ...primaryDesktopItems].map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              handleNavClick(item.href);
                              setOpen(false);
                            }}
                            role='menuitem'
                            className={cn(
                              'block rounded-lg px-2 py-2 text-[13px] font-medium tracking-[0.18em] transition-colors',
                              'text-[#7E6352] hover:bg-[#F5E2D4]/50 hover:text-[#E17737]',
                              'dark:text-[#DCC8BC]/90 dark:hover:bg-white/5 dark:hover:text-[#F4B26E]',
                              isActive(item.href) &&
                                'bg-[#F5E2D4]/60 text-[#E17737] dark:bg-white/10 dark:text-[#F4B26E]'
                            )}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div aria-live='polite' className='sr-only'>
        {open ? 'Мобильное меню открыто' : 'Мобильное меню закрыто'}
      </div>
    </header>
  );
}
