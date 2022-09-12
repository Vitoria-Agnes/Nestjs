import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tarefaController } from "../controllers/tarefa.controllers";
import { tarefa} from "../entities/tarefa.entity";
import { tarefaService } from "./service/tarefa.service";

@Module({
   
     imports: [TypeOrmModule.forFeature([tarefa])],
     providers: [tarefaService],
     controllers:[tarefaController],
     exports: [TypeOrmModule]


})
export class tarefaModule {}