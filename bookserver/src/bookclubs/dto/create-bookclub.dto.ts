import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookClubDto {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  bookTitle: string;

  @IsNotEmpty()
  @IsString()
  introduction: string;
}