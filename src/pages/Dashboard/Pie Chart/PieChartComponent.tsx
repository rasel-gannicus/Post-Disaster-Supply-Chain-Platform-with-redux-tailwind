import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartComponent = (data) => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1954",
    "#19FF7F",
    "#195AFF",
    "#FFAA19",
    "#FF1990",
    "#195AFF",
  ];

  const pieChartData = data.data.map((item) => ({
    name: item.title,
    value: parseInt(item.amount),
  }));

  return (
    <div className="w-full shadow-2xl rounded-xl lg:w-2/3 mx-auto  border-4 flex flex-col justify-center items-center overflow-scroll lg:overflow-auto">
        <h2 className="text-2xl font-semibold mt-10 px-5 text-center">Total Items Stats in Chart Format</h2>
        <hr className="border-2 w-3/4 mx-auto mt-5" />
      <PieChart width={600} height={600}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index,
          }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${pieChartData[index].name} (${pieChartData[index].value})`}
              </text>
            );
          }}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
