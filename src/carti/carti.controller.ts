import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarteService } from './carti.service';
import { Carte } from './schemas/carte.schema';
import { CreateBookDto } from './dto/create-carte.dto';
import { UpdateBookDto } from './dto/update-carte.dto';

@Controller('carti')
export class CartiController {
  constructor(private carteService: CarteService) {}

  @Get()
  async getAll(): Promise<Carte[]> {
    return this.carteService.getAllCarti();
  }

  @Post()
  async createCarte(@Body() carte: CreateBookDto): Promise<Carte> {
    return this.carteService.create(carte);
  }

  @Get(':id')
  async getCarteById(@Param('id') id: string): Promise<Carte> {
    return this.carteService.findById(id);
  }

  @Put(':id')
  async updateCarteById(
    @Param('id') id: string,
    @Body() carte: UpdateBookDto,
  ): Promise<Carte> {
    return this.carteService.updateCarte(id, carte);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Carte> {
    return this.carteService.delete(id);
  }
}
