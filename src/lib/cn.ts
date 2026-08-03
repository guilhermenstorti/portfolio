type ClassValue = string | false | null | undefined;

export function cn(...classValues: ClassValue[]): string {
  return classValues.filter(Boolean).join(" ");
}
