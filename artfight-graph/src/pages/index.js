import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Outlet, Link } from "react-router-dom";

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];





function Index() {
  return (
    <div>
        <Link to="/image.png">Test</Link>
        Test
        <img src = "http://localhost:3000/artfight-live-graph#/image.png"/>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
    </div>
  );
}

export default Index;