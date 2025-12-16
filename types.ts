import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}