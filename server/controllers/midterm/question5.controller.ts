import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

class ToDoPostBody {
  content: string;
}

class ToDoPutBody {
  isComplete: boolean;
}

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todo')
  public async create(@Body() body: ToDoPostBody) {
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = false;
    todo = await this.todosService.createToDo(todo);
    return { todo };
  }

  @Put('/todo/:id')
  public async update(@Param('id') id: string, @Body() body: ToDoPutBody) {
    await this.todosService.updateToDo(parseInt(id, 10), body.isComplete);
  }
}
