interface CalcHeaderProps {
    heading: string;
}

const CalcHeader:React.FC<CalcHeaderProps> = ({
    heading
}) => {
  return (
    <h3 className="mt-[2.5rem]">{heading}</h3>
  )
}

export default CalcHeader