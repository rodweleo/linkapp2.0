interface avatarProps {
  url: string | "";
}
export const Avatar = ({ url }: avatarProps) => {
  return (
    <div className="w-12">
      <img src={url} alt="" srcSet="" className=" object-fill rounded-full" />
    </div>
  );
};
