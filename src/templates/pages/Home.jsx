import {useState} from 'react'

import LastVinCodes from '../components/LastVinCodes'
import VinSearchForm from '../components/VinSearchForm'
import VinData from '../components/VinData'
import Spinner from '../components/Spinner'

import {vinApi} from '../../actions/VinService'
import {getLastCodesFromMemory, setLastCodesToMemory} from '../../utils/lastCodesManage'

export default function Invoice() {
  const [vinData, setVinData] = useState({})
  const [loading, setLoading] = useState(false)
  const [lastCodes, setLastCodes] = useState(getLastCodesFromMemory())
  const [selectedCode, setSelectedCode] = useState('')

  const OnSearchVinCode = async (vinCode) => {
    setLoading(true)
    setVinData([])

    const vinData = await vinApi.getVinData(vinCode)

    setVinData(vinData)

    const lastCodesEdited = setLastCodesToMemory(lastCodes, vinCode)
    setLastCodes(lastCodesEdited)
    setLoading(false)
  }

  const setVinCode = async (code) => {
    setSelectedCode(code)
    await OnSearchVinCode(code)
  }

  return (
    <>
      {Boolean(lastCodes?.length) &&
      <LastVinCodes lastCodes={lastCodes}
                    onSelectCode={setVinCode}/>}

      <VinSearchForm loading={loading}
                     selectedCode={selectedCode}
                     onSubmit={OnSearchVinCode}/>

      {
        loading ? <Spinner/> :
          Boolean(vinData.result) ? <VinData vinData={vinData}/> : ''
      }
    </>
  )
}
