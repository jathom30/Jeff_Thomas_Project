# Lord of the Rings Project

This is a basic react-router project built in TypeScript with Vite.

## To install and run:

- Clone down this repo and `npm i`
- Then, run the app with `npm run dev`

## To test:

- Run `npm run test`
- To see test coverage, run `npm run coverage`

NOTE: Test coverage and quality are, unfortunately, low due to time constraints.

## Features within the app:

- The Home screen links to the API docs if devs are intersted.
- The Nav bar will send users to one of three places:
  - Movies
  - Characters
  - Quotes

### Movies

Allows users to see the movie title and rotten tomato score. A user can click the movie tile and see more details

### Characters

Allows users to search and paginate characters. A user can click the character tile to see more details (if available) and any quotes attributed to them.

### Quotes

Allows users to search and paginate quotes. A user can click the quote tile to see the full quote as well as a link to the character who said it and the movie in which it was said.
