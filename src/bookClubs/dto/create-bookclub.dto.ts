import { IsString, IsNumber, IsOptional, IsUrl, Max, Min, IsIn } from 'class-validator';

export class CreateBookClubDto {
  @IsString()
  name: string;

  @IsString()
  bookTitle: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  age: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maxMembers: number = 10;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @IsIn(['active', 'inactive', 'closed'])
  status: string = 'active';
} 