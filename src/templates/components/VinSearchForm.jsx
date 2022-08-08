import {useState, useEffect} from 'react'

import '../../css/components/vin-search-form.css'

export default function VinSearchForm({loading, selectedCode, onSubmit}) {
  const [vinCode, setVinCode] = useState('')
  const [vinCodeIsValid, setVinCodeIsValid] = useState(true)

  useEffect(() => {
    setVinCode(selectedCode)
  }, [selectedCode])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!vinValidation(vinCode))
      return setVinCodeIsValid(false)

    onSubmit(vinCode)
  }

  const vinValidation = (value) => {
    const re = /^[a-z0-9*]{11,17}$/i
    return value.match(re)
  }

  const handleFormInputChange = (e) => {
    const value = e.target.value.trim()
    setVinCode(value)
    setVinCodeIsValid(true)
  }

  return (
    <div className="container flex justify-center">
      <form className="vin-search"
            onSubmit={(e) => handleSubmit(e)}>

        <label>Введите Vin Code</label>

        <div className="vin-search__container flex items-center">
          <input
            type="text" placeholder="" className="w-full"
            value={vinCode}
            onChange={ handleFormInputChange }
          />

          <input type="submit" value="Search"/>
        </div>

        {!vinCodeIsValid &&
        <p className="--input-error">
          Vin code должен содержать от 11 до 17 цифр или букв и не должен содержать спец символы.
        </p>}
      </form>
    </div>
  )
}