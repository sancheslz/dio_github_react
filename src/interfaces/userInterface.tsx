export default interface iUser {
  username: string,
  name: string,
  avatar: string,
  followers: number,
  following: number,
  bio: string,
  updatedAt: string,
  htmlUrl: string,
}

export interface iRepo {
  updated_at: string 
}

export interface notFound {
  message: string
}