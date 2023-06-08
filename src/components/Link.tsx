import { Link as RouterLink, LinkProps } from 'react-router-dom'
import './Link.css'

export const Link = ({ underline, isActive, ...props }: LinkProps & { underline?: boolean, isActive?: boolean }) => <RouterLink className={`Link ${underline ? 'Link__underline' : null} ${isActive ? 'Link--is-active' : ''}`} {...props} />