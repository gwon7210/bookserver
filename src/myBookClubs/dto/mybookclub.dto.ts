import { IsNumber, IsString, IsDate } from 'class-validator';

export class MyBookclubDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  bookTitle: string;

  @IsString()
  category: string;

  @IsDate()
  meetingDate: Date;

  @IsNumber()
  participantsCount: number;
}
