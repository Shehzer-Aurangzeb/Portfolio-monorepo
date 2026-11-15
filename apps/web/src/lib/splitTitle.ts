export type SplitTitle = {
  title: string;
  subtitle: string | null;
};

// CMS titles like "RATP Dev - Employee Attendance Management" read better as name + descriptor
export function splitTitle(raw: string): SplitTitle {
  const [title = raw, ...rest] = raw.split(' - ');
  const subtitle = rest.join(' - ').trim();
  return { title: title.trim(), subtitle: subtitle || null };
}
