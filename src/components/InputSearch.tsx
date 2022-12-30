import { IconSearch } from "./Icon";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputSearch({ text, setText }: Props) {
  return (
    <div className="w-full lg:w-[570px] h-[52px] relative">
      <input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="absolute inset-0 bg-[#EEF3F6] pl-12 text-[#B3C5CD] font-medium text-base leading-8 font-poppins rounded-xl pr-4"
        placeholder="Filter by Name, Region, Subregion"
      />
      <IconSearch className="absolute w-[18px] h-[18px] text-[#B3C5CD] inset-y-4 left-3" />
    </div>
  );
}
