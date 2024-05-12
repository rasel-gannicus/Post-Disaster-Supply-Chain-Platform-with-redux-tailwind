import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Chart = (data) => {
    console.log(data);
    const convertedData = data.data.map((item) => ({
        ...item, // Spread the rest of the item properties
        amount: Number(item.amount), // Convert 'amount' to a number
      }));
  return (
    <>

      <PieChart width={400} height={400}>
          {/* <Pie
            dataKey='amount'
            startAngle={0}
            endAngle={360}
            data={convertedData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          /> */}
          <Pie
            data={convertedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="amount"
          >
            {convertedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </>
  );
};

export default Chart;


