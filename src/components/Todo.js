const Todo = (props) => {
  console.log(props.info);
  return (
   
    <div className="w-60 h-72 shadow-lg bg-white rounded-lg">
      <div className="m-3 p-3 flex flex-col">
        <div className="border border-black flex">
         
          <div>Task Name</div>
       <div>:{props.info.name}</div> 
        </div>
        <div className="border border-black flex">
          <div>Time</div> 
          <div>:{props.info.timeDate}</div> 
        </div>
        <div className="border border-black flex">
          <div>Disciption</div>
          <div>
           :{props.info.description} 
          </div>
          <button className="w-60 h-72 shadow-lg bg-white rounded-lg"onClick={()=>props.deleteTaskHandler(props.info.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Todo;