import AddItem1 from "./Components/AddItem1";
import AddItem2 from "./Components/AddItem2";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./Components/App.css";



function TodoApp() {
  return (
    <center>  
      <div className="app_name ">
      <AppName/>
    
      </div>
      <div  className="Todo_container">
      <AddTodo/>
      </div>
      <div className="item_contailer">
      <AddItem1/>
      <AddItem2/>
      </div>
    </center>
 
  );
}

export default TodoApp;
