'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { ngos } from '@/lib/data';
import { NGOCard } from '@/components/ngo/NGOCard';
import { Search } from 'lucide-react';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNgos = useMemo(() => {
    if (!searchTerm) return ngos;
    return ngos.filter(
      (ngo) =>
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col">
      <section className="text-center py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
            Find and Support NGOs You Trust
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            SevaSetu helps you discover non-profits that align with your passions.
            Explore our curated directory to find a cause to support.
          </p>
        </div>
      </section>

      <div id="donate" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-center md:text-left flex-shrink-0">
            Our NGO Directory
          </h2>
          <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search NGOs by name or focus..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search NGOs"
            />
          </div>
        </div>

        {filteredNgos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNgos.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No NGOs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
