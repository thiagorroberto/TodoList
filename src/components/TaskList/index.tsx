import { Circle, Trash } from "phosphor-react";
import { Task, TaskConteiner } from "./styles";
import { useTaskContext } from "../../Contexts/TaskContext";


export default function TaskList() {
    const { tasks } = useTaskContext();

    return (
        <div>
            <TaskConteiner>
                {tasks.map((task) => (
                    <Task key={task.id}>
                        <i>
                            <Circle size={16} />
                        </i>
                        <p>{task.text}</p>
                        <i>
                            <Trash size={16} />
                        </i>
                    </Task>
                ))}
            </TaskConteiner>
            <div>
                <Task>
                        <i>
                            <Circle size={16} />
                        </i>
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <i>
                            <Trash size={16} />
                        </i>
                    </Task>
            </div>
        </div>
    )
}