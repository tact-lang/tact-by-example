export function mobile() {
  if (globalThis && globalThis.innerWidth < 420) return true;
  return false;
}
