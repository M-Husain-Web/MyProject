

function AddItem2(){

    let todoName = "Goto College"
    let todoDate = "17/Aug/2024"

    return(
    <div class="container">
  <div class="row align-items-end my_row">
    <div class="col">{todoName}</div>
    <div class="col"> {todoDate}</div>
    <div class="col">
    <button type="button" class="btn btn-danger my_button">Delete</button>
    </div>
  </div>
</div>
    );
}

export default AddItem2;