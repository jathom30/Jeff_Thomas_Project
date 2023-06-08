import { Outlet, useLocation } from 'react-router-dom'
import { FlexBox, Link, ListContainer } from '../components';
import './root.css'

export default function Root() {
  const { pathname } = useLocation()

  return (
    <div className='Root'>
      <nav className='Root__nav'>
        <ListContainer title={undefined}>
          <FlexBox alignItems='center' justifyContent='space-around' gap='1rem'>
            <Link to="movies" isActive={pathname.includes('movies')}>Movies</Link>
            <Link to="characters" isActive={pathname.includes('characters')}>Characters</Link>
            <Link to="quotes" isActive={pathname.includes('quotes')}>Quotes</Link>
          </FlexBox>
        </ListContainer>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}