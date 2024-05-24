import { ReactElement } from "react";

export default function Container({
  children,
  id = "",
  className,
}: {
  children: ReactElement | ReactElement[];
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={"py-[64px] lg:py-[96px]  " + className}>
      <div className="lg:container mx-auto px-[16px] xl:px-0">{children}</div>
    </section>
  );
}
