import { LabelType } from '../../../../constants/labelType';

interface Props {
  labelType: LabelType;
}

const Labels = ({ labelType }: Props) => {
  const bgColor =
    labelType === 'Episode Baru' ? 'bg-primary-400' : 'bg-warning-400';

  return (
    <div
      className={`absolute top-2 left-2 md:top-3 md:left-3 rounded-full px-2 py-1 text-xs md:text-sm font-semibold md:font-bold ${bgColor}`}
    >
      {labelType}
    </div>
  );
};

export default Labels;
