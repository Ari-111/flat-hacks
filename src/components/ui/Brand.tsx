import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand${compact ? " brand-compact" : ""}`}>
      <Image src="/assets/flat-hack-house.svg" alt="Flat Hack 605" width={48} height={48} priority />
      <span className="brand-type" aria-hidden="true">
        <strong>flat</strong>
        <span>HACK 605</span>
      </span>
    </span>
  );
}
