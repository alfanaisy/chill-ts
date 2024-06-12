interface Props {
  image: string;
}

const TopListItem = ({ image }: Props) => {
  return (
    <div className="relative w-60 flex items-center justify-center cursor-pointer overflow-y-hidden hover:scale-y-125 hover:z-50">
      <div className="rounded-md h-full  transform transition-all duration-200 overflow-hidden">
        <img src={image} alt="Top List" className="w-full h-full" />
      </div>
    </div>
  );
};

export default TopListItem;
