import { IsString, IsNumber, IsOptional, IsIn, IsDate, IsNotEmpty, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookMeetingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  @Type(() => Date)
  meetingDate: Date;

  @IsNumber()
  @Min(1)
  @Max(100)
  maxAttendees: number;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @IsIn(['scheduled', 'in-progress', 'completed', 'cancelled'])
  status: string = 'scheduled';

  @IsNumber()
  @IsNotEmpty()
  bookClubId: number;
} 