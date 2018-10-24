import ApiAWS from '@/services/ApiAWS'

export default {
  sendMessage (message) {
    return ApiAWS().post('sendMessage', message)
  }
}
