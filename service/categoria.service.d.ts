import { DeleteResult, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<DeleteResult>;
}
