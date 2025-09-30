import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { RuletkaService } from './ruletka.service';
import { CreateRuletkaDto } from './dto/create-ruletka.dto';
import { UpdateRuletkaDto } from './dto/update-ruletka.dto';
import { webSocket } from 'rxjs/webSocket';
import { Server } from 'socket.io';

@WebSocketGateway({cors:true})
export class RuletkaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly ruletkaService: RuletkaService) { }

  @WebSocketServer()
  server: Server

  handleConnection(client: any, ...args: any[]) {
    console.log('User connected', client.id)
    this.server.emit('user-join', `User cleint ID: ${client.id} connected`)
  }

  handleDisconnect(client: any) {
    console.log('User disconnected', client.id)
    this.server.emit('user-left', `User disconnected: ${client.id}`)
  }

  @SubscribeMessage('chat-message')
  handleMessage(@MessageBody() message: string) {
    console.log('message',message);
    this.server.emit('chat-message',message)
  }


  @SubscribeMessage('createRuletka')
  create(@MessageBody() createRuletkaDto: CreateRuletkaDto) {
    return this.ruletkaService.create(createRuletkaDto);
  }

  @SubscribeMessage('findAllRuletka')
  findAll() {
    return this.ruletkaService.findAll();
  }

  @SubscribeMessage('findOneRuletka')
  findOne(@MessageBody() id: number) {
    return this.ruletkaService.findOne(id);
  }

  @SubscribeMessage('updateRuletka')
  update(@MessageBody() updateRuletkaDto: UpdateRuletkaDto) {
    return this.ruletkaService.update(updateRuletkaDto.id, updateRuletkaDto);
  }

  @SubscribeMessage('removeRuletka')
  remove(@MessageBody() id: number) {
    return this.ruletkaService.remove(id);
  }
}
