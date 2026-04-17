import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, SaveNotice } from "@/components/admin/EditorComponents";

const AdminTermsPage = () => {
  const { content, updateContent } = useSiteContent();
  const t = content.terms;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit your terms of service page.</p>
      </div>

      <Section title="Page Settings">
        <Field label="Title" value={t.title} onChange={(v) => updateContent("terms.title", v)} />
        <Field label="Last Updated" value={t.lastUpdated} onChange={(v) => updateContent("terms.lastUpdated", v)} placeholder="e.g. April 2026" />
      </Section>

      <Section title="Content" description="Use **text** for bold headings">
        <Field label="Full Content" value={t.content} onChange={(v) => updateContent("terms.content", v)} multiline rows={20} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminTermsPage;
