import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
          const res = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
          setData(res.data);
          console.log(res.data);
        };
        getData();
      }, []);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LC data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend /> */}
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      </LC>
    </ResponsiveContainer>
  );
};

export default LineChart;
