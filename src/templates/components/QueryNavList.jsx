import {NavLink, useLocation} from 'react-router-dom'

import '../../css/elements/query-nav-link.css'

const QueryNavLink = ({to, ...props}) => {
  const location = useLocation()
  return <NavLink
    to={to + location.search}
    className={({isActive}) =>  isActive ? '--active' : ''}
    {...props}
  />
}

const strWithEntry = (str, entry) => {
  const start = str.toLowerCase()
    .indexOf(entry.toLowerCase())
  const end = start + entry.length

  const strWithEntry = str.slice(0, start) +
    `<span class="--entry">${str.slice(start, end)}</span>` +
    str.slice(end)

  return (
    <span dangerouslySetInnerHTML={{__html:strWithEntry}}></span>)
}

export default function QueryNavLinkList({list, filter}) {
  return list
    .sort((a, b) =>
      a.Name > b.Name ? 1 :
        a.Name < b.Name ? -1 : 0)
    .map(item => (
      <QueryNavLink
        key={item.ID}
        to={`/variables/${item.ID}`}
      >
        {filter ? strWithEntry(item.Name, filter) : item.Name}
      </QueryNavLink>
    ))
}