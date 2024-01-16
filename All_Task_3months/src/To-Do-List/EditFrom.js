const EditFrom = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <>
    {/* updateData = state nai inital value leva  */}
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg  mr-20  btn-add"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-add"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default EditFrom;