import './index.css'
import { useState } from 'react'



export default function Header(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function addTask(){
        setTasks([...tasks, newTask.trim()]);
        setNewTask('');
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };

    return <>
    <div className="wrapper">
        <h1>Туду чуду!</h1>
        <label htmlFor="">
            Впишите задачу:
        <input type="text" value = {newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addTask}>Добавить</button>
        </label>
        <ul>
            {tasks.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteTask(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    </div>
    </>
}

