import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface Props{
    options?:any;
    series?:any;
    type?:any;
    width?:any
    height?:string;
    className?:string
}

const Charts = (props:Props) => {
  
     

    return (
        <Chart options={props.options} series={props.series} type={props.type} height={props.height} />
    )
}

export default Charts;