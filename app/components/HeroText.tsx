interface Props {
  header: string;
  subtitle: string;
}

const HeroText = ({ header, subtitle }: Props) => {
  return (
    <>
      <div
        className={`font-young text-[100px] font- text-center leading-tight tracking-wide `}
      >
        {header}
      </div>
      <p className="w-[500px] m-auto text-center">{subtitle}</p>
    </>
  );
};

export default HeroText;
