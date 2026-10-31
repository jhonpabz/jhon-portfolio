'use client';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return <header className="site-header"><a href="#about" className="wordmark" aria-label="Jhon Pablo home">jp<span>.</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Selected work</a></nav><div className="header-actions"><button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}><Sun className="dark:block hidden" size={18}/><Moon className="dark:hidden" size={18}/></button><a className="contact-link" href="https://www.linkedin.com/in/jhoncesarpablo/" target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={16}/></a></div></header>;
};
