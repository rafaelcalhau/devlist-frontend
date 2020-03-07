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

export type ProfileData = {
  id: number;
  login: string;
  avatar: string;
  name: string;
  link: string;
  created_at: string;
}

export type ReactChildren = {
  children?: ReactNode
}

export type Repo = {
  id: number;
  name: string;
  description: string;
  url: string;
}

export type RepoProps = {
  data: Repo
}

export type ReposProps = {
  login: string
}
