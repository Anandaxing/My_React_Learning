
type ChildrenProps = {
  onSmash: () => void
}

export default function Child(props: ChildrenProps) {
  const { onSmash } = props;
  return (
    <>
      <div>
        This is the children component
        <button onClick={() => onSmash()}>Click to call the method</button>
      </div>
    </>
  );
};