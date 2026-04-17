import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, ListEditor, SaveNotice } from "@/components/admin/EditorComponents";

const AdminFAQPage = () => {
  const { content, updateContent } = useSiteContent();
  const f = content.faq;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">FAQ Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Manage frequently asked questions.</p>
      </div>

      <Section title="Page Header">
        <Field label="Section Label" value={f.sectionLabel} onChange={(v) => updateContent("faq.sectionLabel", v)} />
        <Field label="Title" value={f.title} onChange={(v) => updateContent("faq.title", v)} />
        <Field label="Description" value={f.description} onChange={(v) => updateContent("faq.description", v)} multiline />
      </Section>

      <Section title="Questions & Answers">
        <ListEditor
          items={f.items}
          onUpdate={(items) => updateContent("faq.items", items)}
          addLabel="Add FAQ"
          onAdd={() => ({ question: "", answer: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Question" value={item.question} onChange={(v) => update("question", v)} />
              <Field label="Answer" value={item.answer} onChange={(v) => update("answer", v)} multiline rows={4} />
            </>
          )}
        />
      </Section>

      <Section title="Support Section">
        <Field label="Support Title" value={f.supportTitle} onChange={(v) => updateContent("faq.supportTitle", v)} />
        <Field label="Support Description" value={f.supportDescription} onChange={(v) => updateContent("faq.supportDescription", v)} />
        <Field label="Phone" value={f.supportPhone} onChange={(v) => updateContent("faq.supportPhone", v)} />
        <Field label="Email" value={f.supportEmail} onChange={(v) => updateContent("faq.supportEmail", v)} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminFAQPage;
