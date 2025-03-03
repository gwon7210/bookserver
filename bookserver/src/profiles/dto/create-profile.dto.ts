import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProfileDto {
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  introduction: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  idealPerson: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
