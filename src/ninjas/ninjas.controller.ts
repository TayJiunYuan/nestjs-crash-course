/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';



//controllers is an interface of the CURD methods and specifies the routes
//controller('name') all the methods have prefix /name
@Controller('ninjas')
export class NinjasController {
  //constructs instance of NinjasService
  constructor(private readonly ninjaService: NinjasService) {}

  //GET /ninjas?weapon=
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjaService.getNinjas(weapon);
  }
  
  //GET /ninja/id   url params + is to convert string to number
  //Exception Handling throw new NestJS exception to be handled
  //Pipe is used for data transformation or validating request
  //Gaurd -> a condition that protects the request from running, usually for authorization
  @Get(':id')
  @UseGuards(BeltGuard)
  getNinjaByID(@Param('id', ParseIntPipe) id: number) {
    try{
      return this.ninjaService.getNinja(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  //POST /ninja -> requires a body to provide info on the ninja being created, using a class CreateNinjaDto
  // Validation Pipe in createNinjaDto
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
    return this.ninjaService.createNinja(createNinjaDto);
  }

  //PUT /ninja -> url params to specify id of ninja and body to provide info to update it 
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto)
  }

  @Delete(':id')
  deleteNinka(@Param('id') id: string){
    return this.ninjaService.removeNinja(+id)
  }

  
}


