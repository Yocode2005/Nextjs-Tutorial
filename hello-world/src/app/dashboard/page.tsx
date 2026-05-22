 function BarChart(){
    return <h1>Bar Chart</h1>;
}
import LineChart from "./line-chart";
export default function Dashboard(){
    return (
        <>
        <h1>Dashboard</h1>
        <BarChart />
        <LineChart />
        </>
    );
}