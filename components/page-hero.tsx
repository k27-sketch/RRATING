export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-navy-100/80">{subtitle}</p>
      </div>
    </section>
  );
}
