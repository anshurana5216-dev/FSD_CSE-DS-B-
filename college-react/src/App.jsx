import Student from "../components/Student";

const App = () => {
  return (
    <div   style= {{display: "flex" , gap: "10px"}}>

      <Student name="MOHAN JI" rollNo="12345" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGoShwtNB0BJAzrdf0uh6tgPAdAjiRKU0lUF7FLJZKA&s=10" />
      <br />
      <Student name="SOHAM KUMAR" rollNo="12346" image="https://t3.ftcdn.net/jpg/02/61/85/98/360_F_261859867_yvcreeVjErOWEcYwovFrCcEFF9Ke9rcx.jpg" /> 
      <br />
      <Student name="PRIYA SHARMA" rollNo="12347" image="https://img.magnific.com/free-photo/smiling-student-playing-with-his-magnifying-glass_1098-3432.jpg?semt=ais_hybrid&w=740&q=80" />
      
    </div>
  )
}

export default App
