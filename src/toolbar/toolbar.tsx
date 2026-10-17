interface PropsInterface {
  onClick: (e: any) => void
}

export default function ToolBar(props: PropsInterface) {
  const { onClick } = props;
  return (
    <>
      <div onClick={onClick}>
        <button onClick={onClick}>Follow</button>
        <button onClick={onClick}>Subscribe</button>
      </div>
    </>
  )
}