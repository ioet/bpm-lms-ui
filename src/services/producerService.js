import producerConnection from '@/services/producerConnection'

export default {
  sendMessage (message) {
    return producerConnection().post('sendMessage', message)
  }
}
