export default function Container({ children, id = "" }) {
  return (
    <section id={id} className='py-[64px] lg:py-[96px]'>
      <div className='lg:container mx-auto px-[16px] lg:px-0'>{children}</div>
    </section>
  );
}
