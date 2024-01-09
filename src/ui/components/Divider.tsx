interface dividerTypes {
  height: number;
}
export const Divider = ({ height }: dividerTypes) => {
  return <div className={`h-${height}`}></div>;
};
