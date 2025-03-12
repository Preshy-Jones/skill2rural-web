interface StepsProps {
  text: string;
  title: string;
  number: number;
  isBlurred: boolean;
}

export default function Step({ title, text, number, isBlurred }: StepsProps) {
  return (
    <div
      className={`flex gap-3 md:gap-5 items-center z-40 transition-all w-fit duration-700 ${
        isBlurred ? "opacity-30 " : "opacity-100"
      }`}
    >
      <div className="bg-[#46B2C866] w-[21px] h-[21px] md:w-[39px] md:h-[39px] rounded-full flex justify-center items-center">
        <div className="bg-[#46B2C866] w-[17px] md:w-[31px] h-[17px] md:h-[31px] rounded-full flex justify-center items-center">
          <div className="bg-[#46B2C8] w-[9px] md:w-[16px] h-[9px] md:h-[16px] rounded-full" />
        </div>
      </div>
      <div>
        <h1 className="text-[14px] md:text-[24px] font-bold z-50">
          Step {number}:<span className="ml-2">{title}</span>
        </h1>
        <p className="text-[12px] md:text-[18px] font-[300]">{text}</p>
      </div>
    </div>
  );
}
