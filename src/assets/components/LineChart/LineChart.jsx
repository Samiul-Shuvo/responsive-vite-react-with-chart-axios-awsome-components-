import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const subMarks = [
        {"studentId":1,"name":"John Doe","mathMark":85,"physicsMark":79,"chemistryMark":88},
        {"studentId":2,"name":"Jane Smith","mathMark":78,"physicsMark":82,"chemistryMark":75},
        {"studentId":3,"name":"Michael Johnson","mathMark":92,"physicsMark":88,"chemistryMark":94},
        {"studentId":4,"name":"Emily Wilson","mathMark":88,"physicsMark":85,"chemistryMark":90},
        {"studentId":5,"name":"James Brown","mathMark":79,"physicsMark":76,"chemistryMark":82},
        {"studentId":6,"name":"Sarah Davis","mathMark":91,"physicsMark":90,"chemistryMark":92},
        {"studentId":7,"name":"Daniel Martinez","mathMark":83,"physicsMark":81,"chemistryMark":85},
        {"studentId":8,"name":"Olivia Taylor","mathMark":90,"physicsMark":86,"chemistryMark":91},
        {"studentId":9,"name":"William Anderson","mathMark":87,"physicsMark":84,"chemistryMark":89},
        {"studentId":10,"name":"Sophia Thomas","mathMark":84,"physicsMark":80,"chemistryMark":86}
      ]
      
      
    return (
        <div>
            <LChart width={900} height={400} data={subMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
            <Line  dataKey="mathMark" stroke='red'></Line>
            <Line  dataKey={'physicsMark'}  stroke='blue'></Line>
            <Line  dataKey="chemistryMark"  stroke='green'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;