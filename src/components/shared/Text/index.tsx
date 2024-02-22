interface Props {
  children: string;
}

const Text = ({ children }: Props) => {
  const message = children.split('\n').map((str, index, array) => {
    return (
      <>
        {str}
        {index === array.length - 1 ? null : <br />}
      </>
    );
  });

  return <div>{message}</div>;
};

export default Text;
