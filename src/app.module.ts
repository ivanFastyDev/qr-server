import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { QrCodeModule } from './qr-code/qr-code.module';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [
    QrCodeModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      // entities: [QrCode],
      synchronize: true,
      autoLoadEntities: true,
    }),

    UserModule,

    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
