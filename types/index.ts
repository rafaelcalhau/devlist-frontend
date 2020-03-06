import { ReactNode } from 'react'

export type Dev = {
  id: number;
  login: string;
  avatar: string;
}

export type DevApiData = {
  id: number;
  login: string;
  avatar_url: string;
}

export type IndexProps = {
  currentSince?: number;
  devs: [Dev];
  next: string;
}

export type NavLinkProps = {
  direction: 'left' | 'right';
  path: string
}

export type ReactChildren = {
  children?: ReactNode
}
