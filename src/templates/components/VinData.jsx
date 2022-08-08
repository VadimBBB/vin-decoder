import '../../css/components/vin-data.css'

export default function VinData({vinData}) {
  const vinDataList = (vinData.result || [])
    .map(field => (
      <div key={field.VariableId} className="vin-data__item">
        <span>{field.Variable}:</span> {field.Value}
      </div>
    ))

  return (
    <div className="vin-data">
      <div className="container">
        <h6 className="vin-data__message">
          Message: {vinData.message}
        </h6>

        <h4 className="vin-data__title">
          Доступная информация об автомобиле:
        </h4>

        <div className="vin-data__container">
          {vinDataList}
        </div>
      </div>
    </div>
  )
}