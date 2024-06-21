import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Carte {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  pages: number;
}

export const CarteSchema = SchemaFactory.createForClass(Carte);
