import { Module } from '@nestjs/common';
import { CartiController } from './carti.controller';
import { CarteService } from './carti.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarteSchema } from './schemas/carte.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carte', schema: CarteSchema }]),
  ],
  controllers: [CartiController],
  providers: [CarteService],
})
export class CartiModule {}
