type Props = {
  title?: string;
  label?: string;
};

export function ItemDetail({ title, label }: Props) {
  return (
    <li className="px-10 py-5 flex justify-between">
      <h4 className="text-[#B9C9D1] font-normal text-sm leading-[200%]">
        {title}
      </h4>
      <p className="text-[#124A63] font-normal text-sm leading-[200%]">
        {label}
      </p>
    </li>
  );
}
