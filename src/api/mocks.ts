import { Character, Movie } from "./types";

export const moviesMock: Movie[] = [
  {
    name: 'LOTR 1',
    _id: '0',
    runtimeInMinutes: 60,
    budgetInMillions: 20,
    boxOfficeRevenueInMillions: 90,
    academyAwardNominations: 12,
    academyAwardWins: 11,
    rottenTomatoesScore: 65
  },
  {
    name: 'LOTR 2',
    _id: '1',
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