export interface Template {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}