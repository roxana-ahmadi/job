import { IHeaderProps } from "./types";

export function Header({ onChange, value }: IHeaderProps) {
  return (
    <div className="bg-slate-900 px-4 md:px-10 flex items-center md:gap-40 h-16 gap-4 sm:gap-10 text-white fixed top-0 left-0 right-0 z-50">
      <div className="shrink-0">لیست دارایی</div>
      {onChange && (
        <input
          type="text"
          className="w-full bg-slate-600 h-8 rounded px-2"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="جستجوی نام نماد، نام شرکت"
        />
      )}
    </div>
  );
}
