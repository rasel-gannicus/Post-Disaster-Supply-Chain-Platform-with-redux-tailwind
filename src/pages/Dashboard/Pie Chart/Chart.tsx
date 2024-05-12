import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Chart = (data) => {
    console.log(data);
    const convertedData = data.data.map((item) => ({
        ...item, // Spread the rest of the item properties
        amount: Number(item.amount), // Convert 'amount' to a number
      }));
  return (
    <>

      <PieChart width={400} height={400}>
          <Pie
            dataKey='amount'
            startAngle={0}
            endAngle={360}
            data={convertedData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
        </PieChart>
    </>
  );
};

export default Chart;
