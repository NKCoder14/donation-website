import { BookOpen, Heart, Leaf, PawPrint, Scale } from 'lucide-react';
import type { NGOFocus } from './types';

export const focusIcons: Record<NGOFocus, React.ElementType> = {
  Education: BookOpen,
  Health: Heart,
  Environment: Leaf,
  Animals: PawPrint,
  'Human Rights': Scale,
};
