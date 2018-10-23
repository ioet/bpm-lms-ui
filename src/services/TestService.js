import ApiAWS from '@/services/ApiAWS'

export default {
  fetchTest () {
    return ApiAWS().get('test')
  }
}
