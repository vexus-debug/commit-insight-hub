import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice } from "@/components/admin/EditorComponents";

const AdminContactPage = () => {
  const { content, updateContent } = useSiteContent();
  const c = content.contact;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Contact Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit contact information, methods, social links, and FAQs.</p>
      </div>

      <Section title="Page Hero">
        <Field label="Title" value={c.heroTitle} onChange={(v) => updateContent("contact.heroTitle", v)} />
        <Field label="Subtitle" value={c.heroSubtitle} onChange={(v) => updateContent("contact.heroSubtitle", v)} />
        <Field label="Description" value={c.heroDescription} onChange={(v) => updateContent("contact.heroDescription", v)} multiline />
      </Section>

      <Section title="Contact Methods">
        <ListEditor
          items={c.methods}
          onUpdate={(items) => updateContent("contact.methods", items)}
          addLabel="Add Contact Method"
          onAdd={() => ({ icon: "Phone", title: "", primary: "", secondary: "", action: "", href: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <FieldRow>
                <Field label="Primary Text" value={item.primary} onChange={(v) => update("primary", v)} />
                <Field label="Secondary Text" value={item.secondary} onChange={(v) => update("secondary", v)} />
              </FieldRow>
              <FieldRow>
                <Field label="Action Label" value={item.action || ""} onChange={(v) => update("action", v || null)} />
                <Field label="Action URL" value={item.href || ""} onChange={(v) => update("href", v || null)} />
              </FieldRow>
            </>
          )}
        />
      </Section>

      <Section title="Contact Form">
        <Field label="Form Section Title" value={c.formTitle} onChange={(v) => updateContent("contact.formTitle", v)} />
        <Field label="Form Description" value={c.formDescription} onChange={(v) => updateContent("contact.formDescription", v)} multiline />
      </Section>

      <Section title="Social Links">
        <ListEditor
          items={c.socialLinks}
          onUpdate={(items) => updateContent("contact.socialLinks", items)}
          addLabel="Add Social Link"
          onAdd={() => ({ icon: "Globe", label: "", url: "", handle: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
                <Field label="Handle" value={item.handle} onChange={(v) => update("handle", v)} />
              </FieldRow>
              <Field label="URL" value={item.url} onChange={(v) => update("url", v)} />
            </>
          )}
        />
      </Section>

      <Section title="FAQs">
        <ListEditor
          items={c.faqs}
          onUpdate={(items) => updateContent("contact.faqs", items)}
          addLabel="Add FAQ"
          onAdd={() => ({ question: "", answer: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Question" value={item.question} onChange={(v) => update("question", v)} />
              <Field label="Answer" value={item.answer} onChange={(v) => update("answer", v)} multiline />
            </>
          )}
        />
      </Section>

      <Section title="Map">
        <Field label="Map Address" value={c.mapAddress} onChange={(v) => updateContent("contact.mapAddress", v)} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminContactPage;
