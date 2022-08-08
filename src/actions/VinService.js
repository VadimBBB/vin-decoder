import {API_URL} from '../config'

class VinService {
  async _get(url) {
    try {
      return fetch(`${API_URL}${url}`)
        .then(response => response.json())
        .then(response => response)
    } catch (err) {
      console.log(err)
    }
  }

  async getVinData(vin) {
    const response = await this._get(`/vehicles/decodevin/${vin}?format=json`)
    return {
      result: this._transformVinData(response?.Results || []),
      message: response?.Message || ''
    }
  }

  async getVarList() {
    const response = await this._get('/vehicles/getvehiclevariablelist?format=json')
    return response?.Results || []
  }

  _transformVinData(vinData) {
    return vinData
      .filter(field => field.Value) || []
  }
}

export const vinApi = new VinService()