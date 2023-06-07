import { useLoaderData } from 'react-router-dom'
import { getCharacters } from "../api"
import { Character } from '../api/types'
import { FlexBox, Link, ListContainer } from '../components'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const characters = await getCharacters()
  return { characters }
}

export default function Characters() {
  const { characters } = useLoaderData() as { characters: Character[] }

  return (
    <ListContainer title="Lord of the Rings Characters">
      <ListContainer.Body>
        {characters.map(character => (
          <Link key={character._id} to={`/characters/${character._id}`}>
            <CharacterLink character={character} />
          </Link>
        ))}
      </ListContainer.Body>
    </ListContainer>
  )
}

const CharacterLink = ({ character }: { character: Character }) => {
  return (
    <div className="item-container">
      <FlexBox alignItems='center' gap=".5rem">
        <h3>{character.name}</h3>
        <p>{character.race}</p>
      </FlexBox>
    </div>
  )
}