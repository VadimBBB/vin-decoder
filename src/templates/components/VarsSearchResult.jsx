import {useEffect, useState} from 'react'

import QueryNavLinkList from '../components/QueryNavList'

import '../../css/components/vars-search-result.css'

export default function VarsSearchResult({vars}) {
  const [groupNames, setGroupNames] = useState([])
  const [varsByGroupNames, setVarsByGroupNames] = useState([])

  useEffect(async () => {
    if (!vars?.length) return

    const groupNames =
      [...(new Set(
        vars.map(variable => variable.GroupName)
          .filter(variable => variable)
          .sort((a, b) =>
            a > b ? 1 :
              a < b ? -1 : 0
          )))]
    groupNames.push('Other')
    setGroupNames(groupNames)

    const varsByGroupNames = groupNames
      .reduce((acc, variable) =>
        ({...acc, [variable]: []}), {})

    vars.forEach(variable =>
      varsByGroupNames[variable.GroupName || 'Other']
        .push(variable)
    )

    setVarsByGroupNames(varsByGroupNames)
  }, [vars])

  return (
    <div className="vars-search-result">
      {groupNames && groupNames.map(groupName => (
        <div className="flex flex-col" key={groupName}>
          <div className="vars-search-result__group flex justify-between"
               onClick={({target}) => {
                 target.classList.toggle('--active')
               }}
          >
            <h4>
              {groupName}
            </h4>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"
                 width="24px" height="24px"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="vars-search-result__group-list">
            <QueryNavLinkList list={varsByGroupNames[groupName]}/>
          </div>
        </div>
      ))}
    </div>
  )
}
