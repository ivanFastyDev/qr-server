import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/Transaction.entity';

@Module({
  imports: [
    UserModule,
    
    TypeOrmModule.forFeature([Transaction])
  ],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
