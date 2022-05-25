import api from "./base";
import iUser, { notFound } from '../interfaces/userInterface'
import { delay } from "../helpers/duration";


async function getUserData(username: string): Promise<iUser | notFound> {
  try {
    const request = await api.get(`/users/${username}`);
    const data = await request.data
    const {
      login, name, avatar_url, followers, following, bio, updated_at, html_url
    } = await data
    return await {
      username: login,
      name: name,
      avatar: avatar_url,
      followers: followers,
      following: following,
      bio: bio,
      updatedAt: delay(updated_at),
      htmlUrl: html_url,
    }
  } catch (error) {
    return {
      message: 'User not found'
    }
  }
}

export {
  getUserData
}
