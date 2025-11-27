export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  sales: number;
  rating: number;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Artist {
  id: string;
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  tags: string[];
  rating: number;
  creditScore: number; // 信用分
  isVip: boolean;
  skills: {
    creativity: number;
    technique: number;
    speed: number;
    communication: number;
    style: number;
    software: number;
  };
  priceStart: number;
  products: Product[];
  reviews: Review[];
}

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  imageUrl: string;
  category: string;
  likes: number;
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
}

export enum PageView {
  HOME = 'HOME',
  MARKETPLACE = 'MARKETPLACE',
  COMMUNITY = 'COMMUNITY',
  PROFILE = 'PROFILE',
  ASSESSMENT = 'ASSESSMENT', // 入驻考核
  VIP_DASHBOARD = 'VIP_DASHBOARD', // VIP数据台
  CHALLENGE = 'CHALLENGE' // 灵感对决
}