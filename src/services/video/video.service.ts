import api from '../../utils/api'
import urlJoin from 'url-join'
import config from 'config/index'
import { IVideoEvent } from './interfaces'

class VideoService {
  readonly config = {
    urlApi: config.REACT_APP_API_URL,
  }

  getVideoEvents = async () => {
    try {
      return await api.get<IVideoEvent[]>(urlJoin(this.config.urlApi, `5e60c5f53300005fcc97bbdd`))
    } catch ({ response }) {
      return response
    }
  }
}

export default new VideoService()
