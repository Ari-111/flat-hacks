import Image from "next/image";

export function ImageStatement() {
  return (
    <section className="image-break" aria-label="A creative workspace prepared for building">
      <Image src="/assets/workspace.png" alt="An editorial workspace with books, art materials, and a laptop" fill sizes="100vw" />
      <p>Bring a point of view.<br />Leave with proof.</p>
    </section>
  );
}
