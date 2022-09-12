import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param , ParseIntPipe, Post, Put} from '@nestjs/common';
import { tarefa } from 'src/tarefa/entities/tarefa.entity';
import { tarefaService } from '../modules/service/tarefa.service';


@Controller('/tarefa')
export class tarefaController{
    constructor(private readonly service: tarefaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<tarefa[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findByID(@Param('id', ParseIntPipe) id: number) : Promise<tarefa> {
      return this.service.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Tarefa : tarefa): Promise<tarefa> {
        return this.service.create(Tarefa)
    }
   @Put()
   @HttpCode(HttpStatus.OK)
   update(@Body() Tarefa : tarefa): Promise<tarefa>{
       return this.service.update(Tarefa)

   }

   @Delete('/:id') 
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id', ParseIntPipe)id : number){
    return this.service.delete(id)
   }
}