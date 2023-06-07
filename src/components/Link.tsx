import { Link as RouterLink, LinkProps } from 'react-router-dom'
import './Link.css'

export const Link = (props: LinkProps) => <RouterLink className='Link' {...props} />