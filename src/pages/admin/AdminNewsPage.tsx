import { useSiteContent, generateSlug } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminNewsPage = () => {
  const { content, updateContent } = useSiteContent();
  const n = content.news;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">News & Stories</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Create, edit, and manage news articles and stories.</p>
      </div>

      <Section title="Page Header">
        <Field label="Title" value={n.title} onChange={(v) => updateContent("news.title", v)} />
        <Field label="Description" value={n.description} onChange={(v) => updateContent("news.description", v)} multiline />
      </Section>

      <Section title="Stories" description="Each story gets its own page at /news/[slug]">
        <ListEditor
          items={n.stories}
          onUpdate={(items) => updateContent("news.stories", items)}
          addLabel="Add Story"
          onAdd={() => ({ title: "", excerpt: "", image: "", date: "", slug: "", content: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Title" value={item.title} onChange={(v) => {
                update("title", v);
                if (!item.slug) update("slug", generateSlug(v));
              }} />
              <FieldRow>
                <Field label="Slug (URL)" value={item.slug} onChange={(v) => update("slug", v)} placeholder="auto-generated-from-title" />
                <Field label="Date" value={item.date} onChange={(v) => update("date", v)} placeholder="e.g. March 2026" />
              </FieldRow>
              <Field label="Excerpt (short summary)" value={item.excerpt} onChange={(v) => update("excerpt", v)} multiline rows={2} />
              <Field label="Full Content" value={item.content} onChange={(v) => update("content", v)} multiline rows={10} />
              <ImageUploadField label="Story Image" currentSrc={item.image} onUrlChange={(v) => update("image", v)} />
            </>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminNewsPage;
