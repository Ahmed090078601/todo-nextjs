import Todo from "./todo";
export default async function TodoList(){
    const getTodos = async ()=>{
        let todos = await fetch("https://json-api-mock.vercel.app/api/todo/list");
        return todos.json();
        }
    const {todos} = await getTodos();
    return(
        <div>
        <ul style={{listStyleType:"none", padding:0}}>
            {todos.map((t:any)  => {
                return(
                <li key={t.id} style={{ padding:"5px 0"}}>
               <Todo todo={t}/>
                </li>
            )
})}
        </ul>
      </div>
    )
}