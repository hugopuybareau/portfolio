export interface Thought {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  content: string; // markdown
}

export const thoughts: Thought[] = [
  {
    slug: "hello",
    title: "A place for short thoughts",
    date: "2026-08-15",
    content: `Started a \`/thoughts\` page today.

Nothing fancy — just a place to drop short writings, half-baked ideas, and things worth remembering. No email, no phone, no resume. Just words.

If you're reading this, the page is live at **/thoughts** and each thought gets its own URL like \`/thoughts/hello\`.

More when I have something to say.`,
  },
];
