import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  createToDo(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  async updateToDo(id: number, isComplete: boolean) {
    let todoToUpdate = await this.todosRepository.findOne(id);
    todoToUpdate.isComplete = !isComplete;
    todoToUpdate = await this.todosRepository.save(todoToUpdate);
  }
}
