import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ngos } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { focusIcons } from '@/lib/icons';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return ngos.map((ngo) => ({
    id: ngo.id,
  }));
}

type NGOPageProps = {
  params: {
    id: string;
  };
};

export default async function NGOPage({ params }: NGOPageProps) {
  const ngo = ngos.find((n) => n.id === params.id);

  if (!ngo) {
    notFound();
  }

  const Icon = focusIcons[ngo.focus];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Directory
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full mb-6">
            <Image
              src={ngo.image}
              alt={ngo.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <Badge variant="secondary" className="mb-2 text-base font-medium">
            <Icon className="mr-2 h-4 w-4" />
            {ngo.focus}
          </Badge>
          <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {ngo.name}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">{ngo.tagline}</p>
          
          <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-headline text-2xl font-semibold">Our Mission</h2>
            <p>{ngo.mission}</p>
            <h2 className="font-headline text-2xl font-semibold">Our Work</h2>
            <p>{ngo.description}</p>
            <h3 className="font-headline text-xl font-semibold">Key Activities</h3>
            <ul className="space-y-2">
              {ngo.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Support Our Cause</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Your contribution can make a real difference.
              </p>
              <Image
                src={ngo.donation_qr_code}
                alt="Donation QR Code"
                width={200}
                height={200}
                className="mx-auto rounded-lg border p-1"
                data-ai-hint="qr code"
              />
              <p className="text-sm text-muted-foreground mt-2">Scan to donate</p>
              <div className="my-4 flex items-center gap-2">
                <div className="flex-grow border-t"></div>
                <span className="text-xs text-muted-foreground">OR</span>
                <div className="flex-grow border-t"></div>
              </div>
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={ngo.donation_link} target="_blank" rel="noopener noreferrer">
                  Donate Securely Online
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
