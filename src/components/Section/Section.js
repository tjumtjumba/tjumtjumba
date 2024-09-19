export default function Section(props) {
  return (
    <SectionOuter className={props.outerClassName}>
      <SectionInner className={props.innerClassName}>
        {props.children}
      </SectionInner>
    </SectionOuter>
  );
}

function SectionOuter(props) {
  return (
    <section className={`p-3 ${props.className}`}>{props.children}</section>
  );
}

function SectionInner(props) {
  return (
    <div className={`max-w-[1200px] mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
}
