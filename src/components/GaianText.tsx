function GaianText({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`gaian-font text-slate-300  leading-none ${className}`}>
      {children}
    </div>
  );
}

export default GaianText;
