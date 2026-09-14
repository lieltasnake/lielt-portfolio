function SectionHeading({ eyebrow, title, id, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

export default SectionHeading
