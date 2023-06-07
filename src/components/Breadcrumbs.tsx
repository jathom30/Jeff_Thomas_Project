import { Fragment, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

export const Breadcrumbs = ({ crumbs }: { crumbs: { to: string, label: ReactNode }[] }) => {
  return (
    <div className='Breadcrumbs'>
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1
        return (
          <Fragment key={crumb.to}>
            <Link className='Breadcrumbs__crumb' to={crumb.to}>{crumb.label}</Link>
            {!isLast ? (
              <span className='Breadcrumbs__seperator'>&gt;</span>
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}