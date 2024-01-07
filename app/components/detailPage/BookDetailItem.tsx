import Tag from "../Tag";

interface Props {
  label: string;
  value?: string;
}

const BookDetailItem = ({ label, value = "" }: Props) => {
  return (
    <div className="flex flex-col gap-3 px-10">
      <p className="text-2xl font-semibold flex">{label}</p>

      <p className="leading-relaxed">{value}</p>
    </div>
  );
};

export default BookDetailItem;
