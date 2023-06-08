import { useLoaderData, useNavigation, useSearchParams } from 'react-router-dom'
import { getCharacters } from "../api"
import { Character } from '../api/types'
import { FlexBox, Link, ListContainer, Pagination, Search } from '../components'
import { useDebouncedCallback } from '../useDebouncedCallback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const QUERY = 'character-query'
const PAGE = 'character-page'
const LIMIT = 'character-limit'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get(QUERY) || ''
  const limit = url.searchParams.get(LIMIT) || '20'
  const page = url.searchParams.get(PAGE) || '1'
  const characters = await getCharacters(query, Number(limit), Number(page))
  return { characters }
}

export default function Characters() {
  const { characters } = useLoaderData() as { characters: Character[] }

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get(QUERY) || ''
  const page = searchParams.get(PAGE) || '1'
  const limit = searchParams.get(LIMIT) || '20'

  const onParamChange = (paramKey: string, value: string) => {
    setSearchParams(prevParams => {
      prevParams.set(paramKey, value)
      return prevParams
    })
  }

  const onQueryChange = useDebouncedCallback((newQuery: string) => {
    onParamChange(QUERY, newQuery)
    onParamChange(PAGE, '1')
  }, 300)

  return (
    <ListContainer title="Lord of the Rings Characters">
      <FlexBox flexDirection='column' gap='1rem'>
        <Search onChange={onQueryChange} defaultValue={query} label='Character search' placeholder='Search for a character...' />
        <Pagination
          limit={limit}
          page={page}
          onLimitChange={(newLimit) => onParamChange(LIMIT, newLimit)}
          onPageChange={(newPage) => onParamChange(PAGE, newPage)}
        />

        <ListContainer.Body>
          {characters.map(character => (
            <Link key={character._id} to={`/characters/${character._id}`}>
              <CharacterLink character={character} />
            </Link>
          ))}
        </ListContainer.Body>
      </FlexBox>
    </ListContainer>
  )
}

const CharacterLink = ({ character }: { character: Character }) => {
  const { state, location } = useNavigation()
  const isFetching = state === 'loading' && location.pathname.includes(character._id)

  return (
    <div className="item-container">
      <FlexBox justifyContent="space-between" alignItems="center">
        <FlexBox alignItems='center' gap=".5rem">
          <h3>{character.name}</h3>
          <p>{character.race}</p>
        </FlexBox>
        {isFetching ? <FontAwesomeIcon icon={faSpinner} /> : null}
      </FlexBox>
    </div>
  )
}