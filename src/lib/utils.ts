type ClassValue = string | number | boolean | null | undefined | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(' ')
}

export function formatImagePath(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`
}
