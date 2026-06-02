import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { DatabaseService } from 'src/database/database.service';
import { ingredientSelect } from './queries/ingredient.select';
import { Prisma } from '@prisma/client';

@Injectable()
export class IngredientsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createIngredientDto: CreateIngredientDto) {
    const exisitingMeasureUnit =
      await this.databaseService.measurementUnit.findUnique({
        where: {
          id: createIngredientDto.measurementUnitId,
        },
      });
    const existingIngredient = await this.databaseService.ingredient.findFirst({
      where: {
        name: createIngredientDto.name,
        measurementUnitId: createIngredientDto.measurementUnitId,
      },
    });

    if (!exisitingMeasureUnit)
      throw new NotFoundException('Measurement unit not found');

    if (existingIngredient)
      throw new ConflictException(
        'Ingredient with the same name and measurement unit already exists',
      );

    return this.databaseService.ingredient.create({
      data: createIngredientDto,
      select: ingredientSelect,
    });
  }

  async findAll() {
    return this.databaseService.ingredient.findMany({
      select: ingredientSelect,
    });
  }

  async findOne(id: number) {
    const existingIngredient = await this.databaseService.ingredient.findUnique(
      {
        where: {
          id,
        },
      },
    );

    if (!existingIngredient)
      throw new NotFoundException('Ingredient not found');

    return existingIngredient;
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const existingIngredient = await this.databaseService.ingredient.findUnique(
      {
        where: {
          id,
        },
      },
    );

    if (!existingIngredient)
      throw new NotFoundException('Ingredient not found');

    return this.databaseService.ingredient.update({
      where: {
        id,
      },
      data: updateIngredientDto,
    });
  }
}
