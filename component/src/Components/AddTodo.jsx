
function AddTodo(){
return (
<div class="container">
  <div class="row align-items-end my_row">
    <div class="col">
    <input type='text' placeholder='Enter To_do here'></input>
    </div>
    <div class="col">
    <input type="date"></input>
    </div>
    <div class="col">
    <button type="button" class="btn btn-success my_button my_button">Add</button>
    </div>
  </div>
</div>
);
}

export default AddTodo;