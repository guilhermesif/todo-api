import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOneTaskDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsUUID(4)
  readonly userId: string;

  // ============================== Optional ============================== //

  @IsBoolean()
  @IsOptional()
  readonly done: boolean = false;
}
