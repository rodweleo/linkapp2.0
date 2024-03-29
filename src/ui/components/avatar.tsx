interface avatarProps {
  url: string | "";
}
export const Avatar = ({ url }: avatarProps) => {
  return (
    <img src={url} alt="" srcSet="" className=" object-fill rounded-full" />
  );
};
