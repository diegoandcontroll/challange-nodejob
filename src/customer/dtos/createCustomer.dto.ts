import { IsString } from 'class-validator';

export class createMovieDto {
  readonly id?: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  telephone: string;

  @IsString()
  document: string;
}
