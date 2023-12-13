

const GenericPageWrapper = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className="mt-[5rem] lg:mt-[15rem] xl:mt-[17.5rem] lg:flex items-start justify-between">
      {children}
    </div>
  )
}

export default GenericPageWrapper