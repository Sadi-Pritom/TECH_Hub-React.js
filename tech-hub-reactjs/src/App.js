// import logo from './logo.svg';
// import './App.css';
// import { PieChart,Pie,Tooltip } from "recharts"

// function App() {

//           const data=[{name:"facebook",value:"200000000"},
//                       {name:"Whatsapp",value:"3000000"} ,
//                       {name:"twitter",value:"500000000"},
//                       {name:"telegram",value:"600000000"}];
//   return (
//     <div className="App">
      
//       <h1>pie chart</h1>
      
//       <PieChart width={400} height={400}>
//           <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
//           <Tooltip/>
//         </PieChart>
        
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "React.js", users: 95 },
    { name: "Laravel", users: 90 },
    { name: "Java", users: 35 },
    { name: "Python", users: 69 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Course Chart</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
       
      </div>
    </div>
  );
};

export default App;

