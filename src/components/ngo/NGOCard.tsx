import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { NGO } from '@/lib/types';
import { focusIcons } from '@/lib/icons';

interface NGOCardProps {
  ngo: NGO;
}

export function NGOCard({ ngo }: NGOCardProps) {
  const Icon = focusIcons[ngo.focus];

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex-row items-start gap-4 p-4">
        <Image
          src={ngo.logo}
          alt={`${ngo.name} logo`}
          width={60}
          height={60}
          className="rounded-lg border"
        />
        <div className="flex-grow">
          <CardTitle className="font-headline text-xl leading-tight">{ngo.name}</CardTitle>
          <CardDescription className="mt-1">{ngo.tagline}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <Badge variant="secondary" className="font-normal">
          <Icon className="mr-1.5 h-3.5 w-3.5" />
          {ngo.focus}
        </Badge>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {ngo.mission}
        </p>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/50">
        <Button asChild variant="link" className="p-0 h-auto text-primary">
          <Link href={`/ngos/${ngo.id}`}>
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
