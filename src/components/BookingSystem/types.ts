import { LucideIcon } from 'lucide-react';

export interface ConsultationType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  price: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
}

export interface StepProps {
  onNext: () => void;
  onPrevious: () => void;
  canProceed: boolean;
}