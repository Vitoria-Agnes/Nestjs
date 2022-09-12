import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { tarefa } from 'src/tarefa/entities/tarefa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
@Injectable()
export class tarefaService{
      constructor(
        @InjectRepository(tarefa)
        private tarefaRepository: Repository<tarefa>
) {}

async findAll(): Promise<tarefa[]> {
    return this.tarefaRepository.find()


}

async findById(id: number): Promise<tarefa> {
    let tarefa = await this.tarefaRepository.findOne({
        where: { 
            id
        
        }
    })

    if(!tarefa)
    throw new HttpException (' Tarefa não foi Encontrada', HttpStatus.NOT_FOUND)
    return tarefa
}

async create (Tarefa: tarefa): Promise<tarefa> {
return this.tarefaRepository.save(Tarefa)

}
async update(Tarefa: tarefa): Promise<tarefa> {
    let TarefaUpdate = await this.findById(Tarefa.id)

    if(!TarefaUpdate || !Tarefa.id)
    throw new HttpException(' Tarefa não Encontrada ', HttpStatus.NOT_FOUND)

    return this.tarefaRepository.save(Tarefa)
}
async delete(id : number): Promise<DeleteResult>{
     let TarefaDelete = await this.findById(id)

     if(!TarefaDelete)
     throw new HttpException(' Tarefa não Encontrada ', HttpStatus.NOT_FOUND)
 
     return this.tarefaRepository.delete(id)

}

}
