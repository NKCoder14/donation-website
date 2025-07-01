export type NGOFocus = 'Education' | 'Health' | 'Environment' | 'Animals' | 'Human Rights';

export type NGO = {
  id: string;
  name: string;
  logo: string;
  image: string;
  tagline: string;
  focus: NGOFocus;
  mission: string;
  description: string;
  activities: string[];
  donation_link: string;
  donation_qr_code: string;
};

export type Donor = {
  id: string;
  name: string;
  email: string;
  password: string;
};
