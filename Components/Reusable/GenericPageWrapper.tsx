

const GenericPageWrapper = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className="mt-[5rem] lg:mt-[12.5rem] xl:mt-[12.5rem] lg:flex items-start justify-between gap-20">
      {children}
    </div>
  )
}

export default GenericPageWrapper