export interface User {
  id: string;
  email: string;
  userType: 'traveler' | 'guide';
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatar?: string;
  location?: string;
}

export interface Experience {
  id: string;
  guideId: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  maxParticipants: number;
  location: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  experienceId: string;
  userId: string;
  startDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  bookingId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
