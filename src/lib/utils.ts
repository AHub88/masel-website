export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s+/g, "");
}
