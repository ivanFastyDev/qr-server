import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { UpdateQrCodeDto } from './dto/update-qr-code.dto';
import { QrCode } from './entities/qr-code.entity';

@Injectable()
export class QrCodeService {

  constructor(

    @InjectRepository(QrCode)
    private readonly qrCodeRepository: Repository<QrCode>,

  ){}

  async create(createQrCodeDto: CreateQrCodeDto) {
    const newLog = this.qrCodeRepository.create(createQrCodeDto);
    return await this.qrCodeRepository.save(newLog);
  }

  async findAll() {
    return await this.qrCodeRepository.find();
  }

  async findOne(id: string) {
    return await this.qrCodeRepository.findOneBy({id});
  }

  async update(id: string, updateQrCodeDto: UpdateQrCodeDto) {
    const log = await this.qrCodeRepository.preload({id, ...updateQrCodeDto});

    return await this.qrCodeRepository.save(log);
  }

  async remove(id: string) {
    const log = await this.findOne(id);

    if(!log) throw new UnauthorizedException(`no encontrado`);

    return await this.qrCodeRepository.remove(log);
  }
}
