export type Props = React.PropsWithChildren<{}>;

export const Button: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};