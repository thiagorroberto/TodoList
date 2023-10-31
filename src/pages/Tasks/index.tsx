import Header from "../../components/Header";
import { Counter, InfoBox, InfoContainer, NewTaskBox, NewTaskContainer, Task, TaskConteiner } from "./styles";
import { useState } from "react";
import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


export default function Tasks() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    let quantity = 0;
    
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

    const completedTask = (id: number) => {
        const updateTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        setTodos(updateTodos)
    }  

    const deleteTask = (id: number) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos)
    };

    function verifyQuantityCompleted() {

        todos.map(todo => {
          if(todo.completed){
            quantity++;
          }
        })
    
        return quantity;
      }


    
    return (
        <div>
                <Header/>
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
                    
                
                </div>
                <InfoContainer>
                    <InfoBox>
                        <div>
                            <label>Tarefas criadas</label>
                            <Counter>
                                <p>{todos.length}</p>
                            </Counter>
                        </div>
                        <div>
                            <span>Concluídas</span>
                            <Counter>
                                <p>{verifyQuantityCompleted()}</p>
                            </Counter>
                        </div>
                    </InfoBox>
                </InfoContainer>

                <div>
                    <TaskConteiner>
                        {todos.map((todo) => (
                            <Task key={todo.id}>
                                <button title="Marcar tarefa" onClick={() => completedTask(todo.id)}>
                                    { todo.completed ? <CheckCircle size={16} color="#5E60CE" weight="fill"/> : <Circle size={16} /> }
                                </button>
                                { todo.completed ? <p style={{textDecoration: 'line-through', color: '#808080'}}>{todo.text}</p> : <p>{todo.text}</p>}
                                <i onClick={() => deleteTask(todo.id)}>
                                    <Trash size={16} />
                                </i>
                            </Task>
                        ))}
                    </TaskConteiner>
                    
                </div>
        </div>
    )
}