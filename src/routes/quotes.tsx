import { useLoaderData, useNavigation, useSearchParams } from 'react-router-dom'
import { FlexBox, Link, ListContainer, Pagination, Search } from "../components";
import { getQuotes } from '../api';
import { useDebouncedCallback } from '../useDebouncedCallback';
import { Quote } from '../api/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const QUERY = 'quotes-query'
const PAGE = 'quotes-page'
const LIMIT = 'quotes-limit'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get(QUERY) || ''
  const limit = url.searchParams.get(LIMIT) || '20'
  const page = url.searchParams.get(PAGE) || '1'
  const quotes = await getQuotes(query, Number(limit), Number(page))
  return { quotes }
}

export default function Quotes() {
  const { quotes } = useLoaderData() as { quotes: Quote[] }

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
    <ListContainer title="Lord of the Rings Quotes">
      <FlexBox flexDirection="column" gap="1rem">
        <Search onChange={onQueryChange} defaultValue={query} label="Quote search" placeholder='Search for a quote...' />
        <Pagination
          limit={limit}
          page={page}
          onLimitChange={(newLimit) => onParamChange(LIMIT, newLimit)}
          onPageChange={(newPage) => onParamChange(PAGE, newPage)}
        />
        <ListContainer.Body>
          {quotes.map(quote => (
            <Link key={quote._id} to={`/quotes/${quote._id}`}>
              <QuoteLink quote={quote} />
            </Link>
          ))}
        </ListContainer.Body>
      </FlexBox>
    </ListContainer>
  )
}

const QuoteLink = ({ quote }: { quote: Quote }) => {
  const { state, location } = useNavigation()
  const isFetching = state === 'loading' && location.pathname.includes(quote._id)

  return (
    <div className="item-container">
      <FlexBox justifyContent="space-between" alignItems='center'>
        <p className='overflow'>{quote.dialog}</p>
        {isFetching ? <FontAwesomeIcon icon={faSpinner} /> : null}
      </FlexBox>
    </div>
  )
}