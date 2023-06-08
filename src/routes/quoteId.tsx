import { useLoaderData } from "react-router-dom";
import { getQuoteDetails } from "../api";
import { Breadcrumbs, FlexBox, Link, ListContainer } from "../components";
import { Character, Movie, Quote } from "../api/types";
import './quoteId.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faPerson } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: { params: Record<string, string | undefined> }) {
  const { quoteId } = params
  if (!quoteId) {
    throw new Error('Quote not found')
  }
  const quote = await getQuoteDetails(quoteId)
  return quote
}

export default function QuoteId() {
  const { quote, character, movie } = useLoaderData() as { quote: Quote, character: Character, movie: Movie }
  return (
    <>
      <Breadcrumbs crumbs={[
        { to: '/quotes', label: 'Quotes' },
        { to: '', label: `${quote.dialog?.substring(0, 10)}...` }
      ]} />
      <ListContainer title="Quote">
        <FlexBox flexDirection="column" gap="2rem">
          <FlexBox flexDirection='column' gap=".5rem">
            <div className="QuoteId__section">
              <p>"{quote.dialog}"</p>
            </div>
          </FlexBox>

          <FlexBox flexDirection='column' gap=".5rem">
            <h3>More from</h3>
            <div className="QuoteId__section">
              <FlexBox flexDirection="column">
                <Link underline to={`/characters/${quote.character}`}>
                  <FlexBox gap=".5rem" alignItems="center">
                    <FontAwesomeIcon icon={faPerson} /> {character.name}
                  </FlexBox>
                </Link>
                <Link underline to={`/movies/${quote.movie}`}>
                  <FlexBox gap=".5rem" alignItems="center">
                    <FontAwesomeIcon icon={faFilm} /> {movie.name}
                  </FlexBox>
                </Link>
              </FlexBox>
            </div>
          </FlexBox>
        </FlexBox>
      </ListContainer>
    </>
  )
}