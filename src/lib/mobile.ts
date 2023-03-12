export function mobile() {
  if (globalThis && globalThis.innerWidth < 600) return true;
  return false;
}
