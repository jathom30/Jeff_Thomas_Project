import axios from 'axios'
import { Character, Movie, Quote } from './types'
import { charactersMock, moviesMock, quotesMock } from './mocks'

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

export async function getCharacters(query = '', limit = 20, page = 1): Promise<Character[]> {
  if (!import.meta.env.PROD) {
    return charactersMock
  }
  return (await baseGet(`/character?limit=${limit}&page=${page}&name=/${query}/i`)).docs
}

export async function getCharacterDetails(characterId: string): Promise<Character> {
  if (!import.meta.env.PROD) {
    const character = charactersMock.find(character => character._id === characterId)
    if (!character) {
      throw new Error('Character not found')
    }
    return character
  }
  return (await baseGet(`/character/${characterId}`)).docs[0]
}

export async function getCharacterQuotes(characterId: string, limit = 10, page = 1): Promise<Quote[]> {
  if (!import.meta.env.PROD) {
    const quotes = quotesMock.filter(quote => quote.character === characterId)
    if (!quotes) {
      throw new Error('Character not found')
    }
    return quotes
  }
  return (await baseGet(`/character/${characterId}/quote?limit=${limit}&page=${page}`)).docs
}

export async function getQuotes(query = '', limit = 20, page = 1): Promise<Quote[]> {
  if (!import.meta.env.PROD) {
    return quotesMock
  }
  return (await baseGet(`/quote?limit=${limit}&page=${page}&dialog=/${query}/i`)).docs
}

export async function getQuoteDetails(quoteId: string): Promise<{ quote: Quote, character: Character, movie: Movie }> {
  if (!import.meta.env.PROD) {
    const quote = quotesMock.find(quote => quote._id === quoteId)
    if (!quote) {
      throw new Error('Quote not found')
    }
    const character: Character = {
      _id: '1',
      name: 'Some character',
      height: 'string',
      race: 'string',
      gender: 'string',
      birth: 'string',
      spouse: 'string',
      death: 'string',
      realm: 'string',
      hair: 'string',
      wikiUrl: 'string',
    }
    const movie: Movie = {
      _id: 'string',
      name: 'The one movie',
      runtimeInMinutes: 3,
      budgetInMillions: 3,
      boxOfficeRevenueInMillions: 3,
      academyAwardNominations: 3,
      academyAwardWins: 3,
      rottenTomatoesScore: 3,
    }
    return { quote, character, movie }
  }

  const [quote]: Quote[] = (await baseGet(`/quote/${quoteId}`)).docs
  const [character, movie] = await Promise.all([getCharacterDetails(quote.character), getMovieDetails(quote.movie)])
  return { quote, character, movie }
}