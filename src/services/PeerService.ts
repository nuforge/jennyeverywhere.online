// src/services/PeerService.ts
export class PeerService {
  private peerConnection = new RTCPeerConnection()

  async connectToPeer(remoteId: string) {
    const dataChannel = this.peerConnection.createDataChannel('tags')
    dataChannel.onmessage = (event) => {
      const tag: Tag = Tag.deserialize(event.data)
      useTagStore().addExternalTag(tag) // Add to local store
    }
  }

  sendTag(tag: Tag) {
    const channel = this.pec.getDataChannel('tags')
    channel.send(tag.serialize())
  }
}

// Usage in component
const peer = new PeerService()
peer.connectToPeer('friend-device-id')
peer.sendTag(myTag) // Shares tag directly
