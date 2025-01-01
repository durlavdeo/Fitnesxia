
const SectionLayout = ({className, children, id}) => {
  return (
    <section className={`px-40 ${className}`} id={id}>{children}</section>
  )
}

export default SectionLayout