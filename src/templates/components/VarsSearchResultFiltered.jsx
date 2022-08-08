import QueryNavLinkList from '../components/QueryNavList'
import {useSearchParams} from 'react-router-dom'

import '../../css/components/vars-search-result-filtered.css'

export default function VarsSearchResultFiltered({vars}) {
  let [searchParams] = useSearchParams({replace: true})

  return (
    <div className="vars-filtered flex flex-col">
      <QueryNavLinkList
        list={
          vars
            .filter((variable) => {
              const filter = searchParams.get('filter')
              if (!filter) return true
              const name = variable.Name.toLowerCase()
              return name.includes(filter.toLowerCase())
            })}
        filter={searchParams.get('filter')}
      />
    </div>
  )
}
