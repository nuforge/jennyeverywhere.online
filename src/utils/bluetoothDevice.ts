navigator.bluetooth
  .requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service'],
  })
  .then((device) => {
    const encoder = new TextEncoder()
    const tagData = encoder.encode('live_long_and_prosper')
    device.gatt.connect().then((server) => {
      const service = server.getPrimaryService('custom_service')
      service.getCharacteristic('broadcast_tag').then((characteristic) => {
        characteristic.writeValue(tagData)
      })
    })
  })

navigator.bluetooth
  .requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service'],
  })
  .then((device) => {
    device.gatt.connect().then((server) => {
      const service = server.getPrimaryService('custom_service')
      service.getCharacteristic('broadcast_tag').then((characteristic) => {
        characteristic.readValue().then((value) => {
          const decoder = new TextDecoder()
          const receivedTag = decoder.decode(value)
          checkTagInDatabase(receivedTag) // Check IndexedDB for matches
        })
      })
    })
  })

// Setup WebRTC DataChannel:

const peerConnection = new RTCPeerConnection()
const dataChannel = peerConnection.createDataChannel('tags')

dataChannel.onopen = () => {
  dataChannel.send(JSON.stringify({ tags: ['live_long_and_prosper'] }))
}

dataChannel.onmessage = (event) => {
  const receivedData = JSON.parse(event.data)
  checkTagInDatabase(receivedData.tags) // Check for matches
}

// Signaling server handshake here
