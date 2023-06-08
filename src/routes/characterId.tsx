import { useLoaderData, useSearchParams } from 'react-router-dom'
import { Character, Quote } from '../api/types'
import { Breadcrumbs, FlexBox, GridBox, ListContainer, Pagination } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faSkull, faPerson, faRulerVertical, faVenusMars, faPalette, faGlobe, faRing } from '@fortawesome/free-solid-svg-icons'
import { getCharacterDetails, getCharacterQuotes } from '../api'
import './characterId.css'

const PAGE = 'character-page'
const LIMIT = 'character-limit'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }: { params: Record<string, string | undefined>, request: Request }) {
  const { characterId } = params
  const url = new URL(request.url)
  const limit = url.searchParams.get(LIMIT) || '20'
  const page = url.searchParams.get(PAGE) || '1'
  if (!characterId) {
    throw new Error('Character not found')
  }
  const character = await getCharacterDetails(characterId)
  const quotes = await getCharacterQuotes(characterId, Number(limit), Number(page))
  return { character, quotes }
}

export default function CharacterId() {
  const { character, quotes } = useLoaderData() as { character: Character, quotes: Quote[] }
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get(PAGE) || '1'
  const limit = searchParams.get(LIMIT) || '20'

  const onParamChange = (paramKey: string, value: string) => {
    setSearchParams(prevParams => {
      prevParams.set(paramKey, value)
      return prevParams
    })
  }

  return (
    <>
      <Breadcrumbs crumbs={[
        { to: '/characters', label: 'Characters' },
        { to: '', label: character.name }
      ]} />
      <ListContainer title={
        <FlexBox flexDirection='column'>
          {character.name}
          <a className='CharacterId__right-align' target="_blank" rel="noreferrer" href={character.wikiUrl}>For more info...</a>
        </FlexBox>
      }>
        <FlexBox flexDirection='column' gap='2rem'>
          <FlexBox flexDirection='column' gap='2rem'>

            <FlexBox flexDirection='column' gap=".5rem">
              <h3>Birth and Death</h3>
              <div className="CharacterId__section">
                <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap="1rem">
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faCakeCandles} /> {character.birth || 'Birth unknown'}</span>
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faSkull} />{character.death || 'Death unknown'}</span>
                </GridBox>
              </div>
            </FlexBox>

            <FlexBox flexDirection='column' gap=".5rem">
              <h3>Physical Attributes</h3>
              <div className="CharacterId__section">
                <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap="1rem">
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faPerson} /> {character.race || 'Race unknown'}</span>
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faRulerVertical} />{character.height || 'Height unknown'}</span>
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faVenusMars} />{character.gender || 'Gender unknown'}</span>
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faPalette} />{character.hair || 'Hair unknown'}</span>
                </GridBox>
              </div>
            </FlexBox>

            <FlexBox flexDirection='column' gap=".5rem">
              <h3>Other Attributes</h3>
              <div className="CharacterId__section">
                <GridBox gridTemplateColumns="1fr 1fr" justifyItems='center' gap="1rem">
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faGlobe} /> {character.realm || 'Realm unknown'}</span>
                  <span className="CharacterId__bold"><FontAwesomeIcon icon={faRing} />{character.spouse || 'Spouse unknown'}</span>
                </GridBox>
              </div>
            </FlexBox>

            {quotes.length ? (
              <FlexBox flexDirection='column' gap=".5rem">
                <FlexBox flexDirection='row' justifyContent="space-between" alignItems='center'>
                  <h3>Quotes</h3>
                  <Pagination
                    limit={limit}
                    page={page}
                    onLimitChange={(newLimit) => onParamChange(LIMIT, newLimit)}
                    onPageChange={(newPage) => onParamChange(PAGE, newPage)}
                  />
                </FlexBox>
                {quotes.map(quote => (
                  <div key={quote._id} className="CharacterId__section">
                    <p>"{quote.dialog}"</p>
                  </div>
                ))}
              </FlexBox>
            ) : null}
          </FlexBox>
        </FlexBox>
      </ListContainer>
    </>
  )
}