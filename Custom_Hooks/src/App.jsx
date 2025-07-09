import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

// Custom Hook :- It is effectively a function which uses another hook internally (useState, useEffect, useMemo, useCallback) and custon hook must starts with Use
// Examples of Custom Hooks :- Data fetching hooks, Browser functionality hooks ( useOnlineStatus, useWindowSize, useMousePosition ), Performance Timer based hooks ( useInterval, useDebounce )


// first we will work for Data fetching Hooks
// function useTodos(timer) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setInterval(() => {                                       // by using Set Interval in the useEffect hook, we can simply take the refreshed data from backend after every 5 seconds
//       axios.get("https://dummyjson.com/todos").then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//     }, timer * 1000)                          // by using this logic we make this Auto refreshed hook
//   }, [])
//   return { todos, loading };
// }
// export default function App() {
//   const { todos, loading } = useTodos(5);
//   if (loading) {
//     return <div>
//       Loading.......
//     </div>
//   }
//   return (
//     <>
//       {todos.map(x => <RenderTodos todo={x} key={x.id}></RenderTodos>)}
//     </>
//   )
// }
// function RenderTodos({ todo, id }) {
//   return <div>
//     <h2>{todo.todo}</h2>
//     <p>Id of this ToDo is :- {todo.id} and it's userId :- {todo.userId}. Status = {String(todo.completed)}</p>
//   </div>
// }


// Second custom hooks are :- Browser functionality related Hooks
// function useIsOnline() {
//   const [online, setOnline] = useState(window.navigator.onLine);
//   useEffect(() => {
//     window.addEventListener('online', () => {
//       setOnline(true);
//     })
//     window.addEventListener('offline', () => {
//       setOnline(false);
//     })
//   }, [])
//   return online;
// }
// function useMousePointer() {
//   const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 })
//   useEffect(() => {
//     window.addEventListener('mousemove', (e) => {
//       setMousePointer({ x: e.clientX, y: e.clientY })
//     })
//   });
//   return mousePointer;
// }
// export default function App() {
//   const isOnline = useIsOnline();           // custom hook to check if the User is online or not 
//   const mousePointer = useMousePointer();   // custom hook to get the coordinates of Mouse pointer
//   if (isOnline) {
//     return <div>
//       User is Online
//       <p>Mouse Points at {mousePointer.x} and {mousePointer.y}</p>
//     </div>
//   } else {
//     return <div>
//       User is Offline
//     </div>
//   }
// }