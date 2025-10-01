import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_message')
  handleMessage(@MessageBody() message: { sender: string; text: string; time: number }) {
    this.server.emit('receive_message', message);
  }

  @SubscribeMessage('location_update')
  handleLocation(@MessageBody() loc: { sender: string; lat: number; lng: number }) {
    this.server.emit('location_update', loc);
    this.server.emit('notify', { title: 'Joylashuv yangilandi', body: `${loc.sender} joy yubordi` });
  }
}
