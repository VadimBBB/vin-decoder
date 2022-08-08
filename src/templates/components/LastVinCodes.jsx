import '../../css/components/last-codes-list.css'

export default function LastVinCodes({lastCodes, onSelectCode}) {
  const lastCodesList = lastCodes
    .map(code => (
      <li key={code}
          className="text-center"
          onClick={() => onSelectCode(code)}>
        {code}
      </li>))

  return (
    <section className="codes-list container flex flex-col">
      <h4 className="codes-list__title text-center">Last Vin Codes</h4>

      <ul>
        {lastCodesList}
      </ul>
    </section>
  )
}