import { useEffect, useState, ChangeEvent } from "react"

type TodoItemType = {
    id: number,
    done: boolean,
    text: string
};

const initialTodo: TodoItemType[] = [
    { id: 1, done: false, text: "breakfast" },
    { id: 2, done: false, text: "walk" },
    { id: 3, done: false, text: "work" }
]

export function App() {
    const [todo, setTodo] = useState<TodoItemType[]>([]);
    useEffect(() => {
        setTodo(initialTodo);
    }, []);

    const onCreate = () => {
        setTodo(prev => [...prev, { id: +new Date(), done: false, text: "" }]);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>, item: TodoItemType, name: string) => {
        const target = e.target;
        let value;
        if (target.type === "checkbox") {
            value = target.checked;
        }
        else {
            value = target.value;
        }
        // @ts-ignore
        item[name] = value;
        setTodo(prev => prev.map(i => i.id === item.id ? item : i));
    };

    const onDelete = (item: TodoItemType) => {
        setTodo(prev => prev.filter(i => i.id !== item.id));
    };

    return (
        <>
            <h1>Today's to-do list</h1>

            {todo.map(i => (
                <div key={i.id}>
                    <p>
                        <input type="checkbox" checked={i.done} onChange={(e) => onChange(e, i, "done")} />
                        <input type="text" value={i.text} onChange={(e) => onChange(e, i, "text")} />
                        &nbsp;
                        <button onClick={() => onDelete(i)}>Delete</button>
                    </p>
                </div>
            ))}
            <p><button onClick={onCreate}>Add</button></p>
        </>
    );
}