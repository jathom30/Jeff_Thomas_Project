import { Character, Movie, Quote } from "./types";

export const moviesMock: Movie[] = [
  {
    name: 'LOTR 1',
    _id: '5cd95395de30eff6ebccde5d',
    runtimeInMinutes: 60,
    budgetInMillions: 20,
    boxOfficeRevenueInMillions: 90,
    academyAwardNominations: 12,
    academyAwardWins: 11,
    rottenTomatoesScore: 65
  },
  {
    name: 'LOTR 2',
    _id: '5cd95395de30eff6ebccde5d',
    runtimeInMinutes: 90,
    budgetInMillions: 40,
    boxOfficeRevenueInMillions: 70,
    academyAwardNominations: 9,
    academyAwardWins: 5,
    rottenTomatoesScore: 50
  },
]

export const charactersMock: Character[] = [
  {
    "_id": "5cd99d4bde30eff6ebccfbbe",
    "height": "",
    "race": "Human",
    "gender": "Female",
    "birth": "",
    "spouse": "Belemir",
    "death": "",
    "realm": "",
    "hair": "",
    "name": "Adanel",
    "wikiUrl": "http://lotr.wikia.com//wiki/Adanel"
  },
  {
    "_id": "5cd99d4bde30eff6ebccfbbf",
    "height": "",
    "race": "Human",
    "gender": "Male",
    "birth": "Before ,TA 1944",
    "spouse": "",
    "death": "Late ,Third Age",
    "realm": "",
    "hair": "",
    "name": "Adrahil I",
    "wikiUrl": "http://lotr.wikia.com//wiki/Adrahil_I"
  },
  {
    "_id": "5cd99d4bde30eff6ebccfbc6",
    "height": "",
    "race": "Human",
    "gender": "Female",
    "birth": "Between ,SA 700, and ,SA 750",
    "spouse": "",
    "death": "Early ,Second Age",
    "realm": "",
    "hair": "",
    "name": "Almiel",
    "wikiUrl": "http://lotr.wikia.com//wiki/Almiel"
  },
  {
    "_id": "5cd99d4bde30eff6ebccfbe7",
    "height": "",
    "race": "Human",
    "gender": "Male",
    "birth": "TA 2431",
    "spouse": "Unnamed wife",
    "death": "TA 2588",
    "realm": "",
    "hair": "",
    "name": "Aragost",
    "wikiUrl": "http://lotr.wikia.com//wiki/Aragost"
  }
]

export const quotesMock: Quote[] = [
  {
    "_id": "5cd96e05de30eff6ebcce7e9",
    "dialog": "Deagol!",
    "movie": "5cd95395de30eff6ebccde5d",
    "character": "5cd99d4bde30eff6ebccfbc6",
    "id": "5cd96e05de30eff6ebcce7e9"
  },
  {
    "_id": "5cd96e05de30eff6ebcce7ea",
    "dialog": "Deagol!",
    "movie": "5cd95395de30eff6ebccde5d",
    "character": "5cd99d4bde30eff6ebccfbc6",
    "id": "5cd96e05de30eff6ebcce7ea"
  },
  {
    "_id": "5cd96e05de30eff6ebcce827",
    "dialog": "Bilbo once told me his part in this tale would end. That each of us must come and go in the telling. Bilbo's story was now over. There would be no more journeys for him, save one.",
    "movie": "5cd95395de30eff6ebccde5d",
    "character": "5cd99d4bde30eff6ebccfbc6",
    "id": "5cd96e05de30eff6ebcce827"
  },
  {
    "_id": "5cd96e05de30eff6ebcce83c",
    "dialog": "What does he mean?",
    "movie": "5cd95395de30eff6ebccde5d",
    "character": "5cd99d4bde30eff6ebccfbc6",
    "id": "5cd96e05de30eff6ebcce83c"
  }
]