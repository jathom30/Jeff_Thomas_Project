import axios from 'axios'
import { Movie } from './types'
import { charactersMock, moviesMock } from './mocks'

const baseURL = 'https://the-one-api.dev/v2'

const client = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_LOTR_ACCESS_TOKEN}`
  }
})

const baseGet = async (route: string) => {
  try {
    const response = await client.get(route)
    return response.data
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}

export async function getMovies(): Promise<Movie[]> {
  if (!import.meta.env.PROD) {
    return moviesMock
  }
  return (await baseGet('/movie')).docs
}

export async function getMovieDetails(movieId: string): Promise<Movie> {
  if (!import.meta.env.PROD) {
    const movie = moviesMock.find(movie => movie._id === movieId)
    if (!movie) {
      throw new Error('Movie not found')
    }
    return movie
  }
  return (await baseGet(`/movie/${movieId}`)).docs[0]
}

export async function getCharacters(limit = 20, page = 0) {
  if (!import.meta.env.PROD) {
    return charactersMock
  }
  return (await baseGet(`/character?limit=${limit}&page=${page}`)).docs
}

export async function getCharacterDetails(characterId: string) {
  if (!import.meta.env.PROD) {
    const character = charactersMock.find(character => character._id === characterId)
    if (!character) {
      throw new Error('Character not found')
    }
    return character
  }
  return (await baseGet(`/character/${characterId}`)).docs[0]
}