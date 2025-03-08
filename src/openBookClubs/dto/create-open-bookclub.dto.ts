import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOpenBookClubDto {
  @IsNotEmpty()
  @IsString()
  roomTitle: string;

  @IsNotEmpty()
  @IsString()
  bookTitle: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;
}