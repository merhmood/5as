export default function Rows({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <dl className="border-t border-white/20">
      {rows.map(([name, body]) => (
        <div key={name} className="grid gap-2 border-b border-white/10 py-7 md:grid-cols-[20rem_1fr] md:gap-10">
          <dt className="display text-2xl md:text-3xl">{name}</dt>
          <dd className="text-lg leading-relaxed text-white/65">{body}</dd>
        </div>
      ))}
    </dl>
  );
}
