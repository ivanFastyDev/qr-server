import { Body, Controller, Param, Patch, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { MakeTransactionDto } from './dto/make-transaction.dto';
import { Transaction } from './entities/Transaction.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  @ApiOperation({ summary: 'Realizar una transacción (pago)' })
  @Patch('/pay/:id')
  async makePayment(
    @Param('id') id: string,
    @Body() transactionDto: MakeTransactionDto
  ): Promise<Transaction> {
    return this.transactionService.makeTransaction(id, transactionDto);
  }

  @ApiOperation({ summary: 'Obtener todas las transacciones' })
  @Get('/list')
  async listTransactions(){
    return this.transactionService.findAll();
  }
}
