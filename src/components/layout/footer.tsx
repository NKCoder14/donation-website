import Link from 'next/link';
import { HandHeart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <HandHeart className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">
              SevaSetu
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="text-muted-foreground text-sm">&copy; {year} SevaSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
