

const Student = (props) => {
  return (
    <div  style={{border: "2px solid black", height: "300px" , width: "300px" }}>

        <h3>Student Record</h3>
        <h3>{props.name}</h3>
        <h3>{props.rollNo}</h3>
        <img src={props.image} alt={props.name}   height={"100px"}  width={"100px"} />
       
          <h3>CLASS.Btech</h3>
    
      
    </div>
  )
}

export default Student
