import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { MakeTransactionDto } from './dto/make-transaction.dto';
import { Transaction } from './entities/Transaction.entity';
import { Repository } from 'typeorm';
import { formatDate } from '../../utils/helpers/format-date';

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,

        private readonly userService: UserService,
    ){}

    async makeTransaction ( id: string, transactionDto: MakeTransactionDto): Promise<Transaction> {
        const { price } = transactionDto;

        const user = await this.userService.findOne(id);

        await this.userService.pay(user, price);
        
        const transaction = this.transactionRepository.create({
            date: formatDate(new Date()).toString(),
            amount: price,
            user: user,
        });
        
        await this.transactionRepository.save(transaction);

        const userName = transaction.user.name;
        
        delete transaction.user;

        return transaction;
    }

    async findAll(){
        return this.transactionRepository.find();

        // const response = {
        //     ...transaction,
        //     userName: transaction.user.name,
        // }
        
        // delete transaction.user;

        // return response;
    }
}
