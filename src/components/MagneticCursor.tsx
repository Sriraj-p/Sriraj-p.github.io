import { useMagneticCursor } from "../hooks/useMagneticCursor";

export function MagneticCursor() {
  const { dotRef, ringRef } = useMagneticCursor();
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
