'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Socials } from './Socials';
import { NavLink } from './NavLink';

export const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="py-14 lg:py-24 lg:h-screen">
      <div className="flex justify-between">
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage src="/jhon-pic.jpg" alt="jhon" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="ghost"
            size="icon"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="pt-8 flex-1">
          <p
            className={cn(
              'text-4xl font-bold',
              theme === 'dark' ? 'text-[#5EEAD4]' : 'text-[#207d6f]'
            )}
          >
            Jhon Cesar Pablo
          </p>
          <p className="text-xl pt-4">Front End Software Engineer</p>
          <p className="text-sm pt-4 text-primary/60">
            Experienced front end software engineer focused on building web app
          </p>
        </div>
        <NavLink />
        <div className="lg:absolute lg:bottom-24 lg:left-0 lg:block lg:self-end">
          <Socials />
        </div>
      </div>
    </div>
  );
};
