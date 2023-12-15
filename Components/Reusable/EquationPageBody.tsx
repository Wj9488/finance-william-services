interface ComponentProps {
    equationExplanation: string;
}

const EquationPageBody: React.FC<ComponentProps> = ({ equationExplanation }) => {
  return (
    <div>
        <p className="lg:mt-0 mt-[5rem] mb-[5rem] lg:w-12/12 w-full" dangerouslySetInnerHTML={{ __html: equationExplanation }}></p>
    </div>
  )
}

export default EquationPageBody;
