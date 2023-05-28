import { MinLength, minLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  weapon: 'stars' | 'nunchucks';
}
