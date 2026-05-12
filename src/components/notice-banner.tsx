import { Container } from "./container";
import { getNotice } from "@/lib/data";

export async function NoticeBanner() {
  const notice = await getNotice();
  if (!notice.active) return null;

  if (notice.validUntil) {
    const until = new Date(notice.validUntil);
    if (!Number.isNaN(until.getTime()) && until < new Date()) return null;
  }

  return (
    <div className="bg-notice text-notice-foreground">
      <Container className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-center sm:gap-3">
        <span className="inline-flex h-6 items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
            <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" strokeLinejoin="round" />
          </svg>
          <strong className="font-semibold">{notice.title}:</strong>
        </span>
        <span>{notice.text}</span>
      </Container>
    </div>
  );
}
