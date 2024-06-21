import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carte } from './schemas/carte.schema';
import mongoose from 'mongoose';

@Injectable()
export class CarteService {
  constructor(
    @InjectModel('Carte')
    private carteModel: mongoose.Model<Carte>,
  ) {}

  async getAllCarti(): Promise<Carte[]> {
    const carti = await this.carteModel.find();
    return carti;
  }

  async create(carte: Carte): Promise<Carte> {
    const res = await this.carteModel.create(carte);
    return res;
  }

  async findById(id: string): Promise<Carte> {
    const carte = await this.carteModel.findById(id);

    if (!carte) {
      throw new NotFoundException('Cartea nu a fost gasita');
    }

    return carte;
  }

  async updateCarte(id: string, carte: Carte): Promise<Carte> {
    return await this.carteModel.findByIdAndUpdate(id, carte, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<Carte> {
    return await this.carteModel.findByIdAndDelete(id);
  }
}
