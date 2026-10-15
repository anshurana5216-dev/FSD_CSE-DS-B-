import { useState } from "react";
import { studentData } from "./data/jsondata";

function App() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="w-3/4">
       <div className="mb-5">
          <input type="text" placeholder="Search student..." value={search} onChange={(e) => setSearch(e.target.value)}
           className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-lg outline-none focus:border-blue-500" /> </div>
     <table className="w-full bg-white text-center shadow-lg">
      <thead>
            <tr className="bg-blue-500 text-xl text-white">
              <th className="border p-5">ID</th>
              <th className="border p-5">Name</th>
              <th className="border p-5">Course</th>
              <th className="border p-5">Branch</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="text-lg hover:bg-gray-100"
              >
                <td className="border p-5">{student.id}</td>
                <td className="border p-5">{student.name}</td>
                <td className="border p-5">{student.course}</td>
                <td className="border p-5">{student.branch}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default App;