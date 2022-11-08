import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  async findAll() {

    const usersData = await this.userRepository.find();

    let users = usersData.map(user => {
      const length = user.transactions?.length;

      delete user.transactions;

      return {
        ...user,
        transactions: length,
      }
    });

    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException(`Usuario no encontrado`);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async pay(user: User, price: number) {

    if (price > user.saldo) throw new UnauthorizedException(`Saldo insuficiente.`);

    user.saldo = user.saldo - price;

    return await this.userRepository.save(user);
  }
}
