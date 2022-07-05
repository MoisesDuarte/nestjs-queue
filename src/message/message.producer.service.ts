import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { AddMessageDto } from './dto/add-message.dto';

@Injectable()
export class MessageProducerService {
  constructor(@InjectQueue('message-queue') private queue: Queue) {}

  async sendMessage(addMessageDto: AddMessageDto) {
    await this.queue.add('message-job', addMessageDto);
  }
}
