import {useEffect, useState} from 'react'
import {Outlet, useSearchParams} from 'react-router-dom'

import VarsSearchResult from '../components/VarsSearchResult'
import VarsSearchResultFiltered from '../components/VarsSearchResultFiltered'
import Spinner from '../components/Spinner'

import '../../css/pages/variables.css'

import {varsContext} from '../../context/vars'

import {vinApi} from '../../actions/VinService'

export default function Variables() {
  const [variables, setVariables] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const vars = await vinApi.getVarList()
    setVariables(vars)
    setLoading(false)
  }, [])

  let [searchParams, setSearchParams] = useSearchParams({replace: true})

  return loading ? (< Spinner/>) : (
    <varsContext.Provider value={variables}>
      <div className='variables container'>
        <nav className="variables__nav">
          <input
            placeholder="Search"
            value={searchParams.get('filter') || ''}
            onChange={(e) => {
              const filter = e.target.value
              if (filter) {
                setSearchParams({filter}, {replace: true});
              } else {
                setSearchParams({}, {replace: true});
              }
            }}
          />

          {searchParams.get('filter') ?
            <VarsSearchResultFiltered vars={variables}/> :
            <VarsSearchResult vars={variables}/>
          }
        </nav>

        <Outlet/>
      </div>
    </varsContext.Provider>
  )
}
