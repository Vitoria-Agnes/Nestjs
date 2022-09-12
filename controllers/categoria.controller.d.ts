import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../service/categoria.service';
export declare class CategoriaController {
    private readonly service;
    constructor(service: CategoriaService);
    findAll(): Promise<Categoria[]>;
    findByID(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
