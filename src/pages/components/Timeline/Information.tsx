import { ArrowIcon } from "~/pages/new";

export function Information({
  preHeader,
  header,
  children,
  footerLink,
  ButtonText,
}: {
  preHeader: string;
  header: string;
  children: React.ReactNode;
  footerLink: string;
  ButtonText: string;
}) {
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col gap-3">
        <div className=" text-3xl font-bold leading-9 text-zinc-900">
          {preHeader}{" "}
        </div>

        <div
          className="  max-w-[500px] text-5xl font-bold
 text-zinc-900"
        >
          {header}
        </div>
      </div>

      {children}

      <button
        className="mt-6 flex w-64 items-center 
            justify-center gap-2 rounded-full bg-black  py-2  font-bold text-white"
      >
        {ButtonText}
        <ArrowIcon />
      </button>
    </div>
  );
}
