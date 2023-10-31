import { useState } from "react";
import { NewTaskBox, NewTaskContainer } from "./styles";
import { PlusCircle } from "phosphor-react";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }


export default function NewTask() {

    const [todos, setTodos] = useState<Todo[]>([]);
    
    const [input, setInput] = useState('');

    
    

    const addTodo = (text: string) => {
        if (text.trim() !== '') {
          const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
          };
          setTodos([...todos, newTodo]);
          setInput('');
        }
      };

    

    return (
        <div>
            <NewTaskContainer>
            <NewTaskBox>
                <input type="text" placeholder="Adicione uma nova tarefa" name="task" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={() => addTodo(input)}>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </NewTaskBox>
            
        </NewTaskContainer>
        <br /><br /><br /><br />
        
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                >
                {todo.text}
                </span>
                <input
                type="checkbox"
                checked={todo.completed}
                />
                <button>Deletar</button>
            </li>
            ))}
        </ul>
        
        </div>
    )
}