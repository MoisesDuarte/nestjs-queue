import { Body, Controller, Get } from '@nestjs/common';
import { MessageProducerService } from './message/message.producer.service';
import { AddMessageDto } from './message/dto/add-message.dto';

@Controller()
export class AppController {
  constructor(
    private readonly messageProducerService: MessageProducerService,
  ) {}

  @Get()
  async addMessage(@Body() addMessageDto: AddMessageDto) {
    await this.messageProducerService.sendMessage(addMessageDto);
    return addMessageDto;
  }
}
