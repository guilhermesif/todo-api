import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateOneTaskDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsBoolean()
  readonly done: boolean;
}

export class UpdateOneTaskParams {
  @IsString()
  @IsUUID(4)
  readonly id: string;
}
