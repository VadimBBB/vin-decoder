import React from 'react'
import {useParams} from 'react-router-dom'

import {varsContext} from '../../context/vars'

import '../../css/components/variable-info.css'

export default function Variable() {
  const vars = React.useContext(varsContext)
  const params = useParams()

  const activeVarId = +params.var
  const activeVar = vars.find((variable) => variable.ID === activeVarId)

  return (
    <div className="variable-info flex-grow relative">
      <div className="variable-info__container">
        <h4 className="variable-info__title">
          {activeVar.Name}
        </h4>
        <div dangerouslySetInnerHTML={{__html:activeVar.Description}}></div>
      </div>
    </div>
  )
}
