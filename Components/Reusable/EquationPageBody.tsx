interface ComponentProps {
    equationExplanation: string;
}

const EquationPageBody: React.FC<ComponentProps> = ({ equationExplanation }) => {
  return (
    <div>
        <p className="lg:my-0 my-[5rem] w-10/12" dangerouslySetInnerHTML={{ __html: equationExplanation }}></p>
    </div>
  )
}

export default EquationPageBody;
