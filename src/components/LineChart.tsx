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
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const activeCases = res.data.cases;
      const recoveredCases = res.data.recovered;
      const deathsCases = res.data.deaths;
      const aC = Object.entries(activeCases).map(([key, value]) => {
        return { date: key, active: value };
      });
      const rC = Object.entries(recoveredCases).map(([key, value]) => {
        return { date: key, recovered: value };
      });
      const dC = Object.entries(deathsCases).map(([key, value]) => {
        return { date: key, deaths: value };
      });
      const arr = [...aC, ...rC, ...dC];
      const mergedData = arr.reduce((acc: any, current) => {
        const existing = acc.find((item: any) => item.date === current.date);
        if (existing) {
          Object.assign(existing, current);
        } else {
          acc.push(current);
        }
        return acc;
      }, []);
      setData(mergedData);
    };
    getData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LC width={500} height={300} data={data}>
        {console.log(data)}
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="active" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        <Line type="monotone" dataKey="recovered" stroke="#A04747" />
      </LC>
    </ResponsiveContainer>
  );
};

export default LineChart;
