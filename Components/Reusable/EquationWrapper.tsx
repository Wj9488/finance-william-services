

const EquationWrapperDiv = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <>
    <h2 className="underline mt-[2.5rem] mb-[2.5rem] uppercase">Equation Calculator</h2>
    <div className="mb-[5rem]" id="calculator">
      {children}
    </div>
    </>
  )
}

export default EquationWrapperDiv