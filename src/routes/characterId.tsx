import { useLoaderData } from 'react-router-dom'
import { Character } from '../api/types'
import { Breadcrumbs, FlexBox, GridBox } from '../components'
import { getCharacterDetails } from '../api'
import './characterId.css'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const { characterId } = params
  if (!characterId) {
    throw new Error('Character not found')
  }
  const character = await getCharacterDetails(characterId)
  return { character }
}

export default function CharacterId() {
  const { character } = useLoaderData() as { character: Character }
  return (
    <>
      <Breadcrumbs crumbs={[
        { to: '/characters', label: 'Characters' },
        { to: '', label: character.name }
      ]} />
      <div className="CharacterId">
        <FlexBox flexDirection='column' gap='2rem'>
          <FlexBox flexDirection='column'>
            <h1>{character.name}</h1>

            <FlexBox flexDirection='column' gap=".5rem">
              <h3>Birth and Death</h3>
              <div className="CharacterId__section">
                <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap="1rem">
                  <span className="CharacterId__bold">{character.birth}</span>
                  <span className="CharacterId__bold">{character.death}</span>
                </GridBox>
              </div>
            </FlexBox>

            <p>Race: {character.race}</p>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
            <p>Hair: {character.hair}</p>
            <p>Realm: {character.realm}</p>
            <p>Spouse: {character.spouse}</p>
            <a target="_blank" rel="noreferrer" href={character.wikiUrl}>To learn more...</a>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  )
}