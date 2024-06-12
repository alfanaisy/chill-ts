interface Props {
  image: string;
  isTop?: boolean;
  isNewEpisode?: boolean;
}

const HListItem = ({ image, isTop = false, isNewEpisode = false }: Props) => {
  return (
    <div className="relative w-60 flex items-center justify-center cursor-pointer">
      <div className="h-full rounded-md overflow-hidden">
        <img src={image} alt="Top List" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HListItem;
