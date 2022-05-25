import { iRepo } from './../interfaces/userInterface';
import api from "./base";


async function getUserRepos(username: string): Promise<Array<iRepo>> {
    const request = await api.get(`/users/${username}/repos`);
    const data = await request.data
    return data
}

export {
  getUserRepos
}