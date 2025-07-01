import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Mock data for donations
const donations = [
  { id: '1', ngo: 'Vidya Foundation', amount: '₹500', date: '2024-05-20', status: 'Completed', ngoId: 'vidya-foundation' },
  { id: '2', ngo: 'Arogya Seva', amount: '₹1000', date: '2024-05-15', status: 'Completed', ngoId: 'arogya-seva' },
  { id: '3', ngo: 'Prakriti Rakshak', amount: '₹250', date: '2024-04-30', status: 'Completed', ngoId: 'prakriti-rakshak' },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Welcome, Donor!
        </h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>My Donation History</CardTitle>
          <CardDescription>Here's a list of your recent contributions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NGO Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">
                    <Link href={`/ngos/${donation.ngoId}`} className="hover:underline text-primary">
                      {donation.ngo}
                    </Link>
                  </TableCell>
                  <TableCell>{donation.amount}</TableCell>
                  <TableCell>{donation.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{donation.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
