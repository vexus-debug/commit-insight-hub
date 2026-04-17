import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, SaveNotice } from "@/components/admin/EditorComponents";

const AdminPrivacyPage = () => {
  const { content, updateContent } = useSiteContent();
  const p = content.privacy;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit your privacy policy page.</p>
      </div>

      <Section title="Page Settings">
        <Field label="Title" value={p.title} onChange={(v) => updateContent("privacy.title", v)} />
        <Field label="Last Updated" value={p.lastUpdated} onChange={(v) => updateContent("privacy.lastUpdated", v)} placeholder="e.g. April 2026" />
      </Section>

      <Section title="Content" description="Use **text** for bold headings">
        <Field label="Full Content" value={p.content} onChange={(v) => updateContent("privacy.content", v)} multiline rows={20} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminPrivacyPage;
