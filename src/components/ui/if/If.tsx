interface Props {
  children: React.ReactNode;
  condition: any;
}

const If = ({ children, condition }: Props) =>
  condition ? <>{children}</> : null;

export default If;
