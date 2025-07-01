'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HandHeart, LogIn, LogOut, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();

  const navLinks = [{ href: '/', label: 'NGOs' }];

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <HandHeart className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            SevaSetu
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                'text-base font-medium',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          {isLoggedIn ? (
            <>
              <Button asChild className="ml-4">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" onClick={logout} className="ml-2">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="ml-4">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
        <div className="md:hidden">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserCircle className="h-6 w-6" />
                  <span className="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="icon">
              <Link href="/login">
                <LogIn className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
