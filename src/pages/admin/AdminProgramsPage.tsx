import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, StringListEditor, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminProgramsPage = () => {
  const { content, updateContent } = useSiteContent();
  const p = content.programs;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Programs Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit programs, locations, and process steps.</p>
      </div>

      <Section title="Page Hero">
        <Field label="Title" value={p.heroTitle} onChange={(v) => updateContent("programs.heroTitle", v)} />
        <Field label="Subtitle" value={p.heroSubtitle} onChange={(v) => updateContent("programs.heroSubtitle", v)} />
        <Field label="Description" value={p.heroDescription} onChange={(v) => updateContent("programs.heroDescription", v)} multiline />
      </Section>

      <Section title="Overview">
        <Field label="Label" value={p.overviewLabel} onChange={(v) => updateContent("programs.overviewLabel", v)} />
        <Field label="Title" value={p.overviewTitle} onChange={(v) => updateContent("programs.overviewTitle", v)} />
        <Field label="Description" value={p.overviewDescription} onChange={(v) => updateContent("programs.overviewDescription", v)} multiline />
      </Section>

      <Section title="Programs" description="Each program with its details, stats, and highlights">
        <ListEditor
          items={p.items}
          onUpdate={(items) => updateContent("programs.items", items)}
          addLabel="Add Program"
          onAdd={() => ({ icon: "Heart", title: "", description: "", image: "", stats: [{ value: "", label: "" }], highlights: [""] })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <ImageUploadField label="Program Image" currentSrc={item.image} onUrlChange={(v) => update("image", v)} />
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">Stats</h4>
              {item.stats.map((s: any, si: number) => (
                <FieldRow key={si}>
                  <Field label="Value" value={s.value} onChange={(v) => {
                    const stats = [...item.stats];
                    stats[si] = { ...stats[si], value: v };
                    update("stats", stats);
                  }} />
                  <Field label="Label" value={s.label} onChange={(v) => {
                    const stats = [...item.stats];
                    stats[si] = { ...stats[si], label: v };
                    update("stats", stats);
                  }} />
                </FieldRow>
              ))}
              <StringListEditor items={item.highlights} onUpdate={(v) => update("highlights", v)} label="Highlights" addLabel="Add Highlight" />
            </>
          )}
        />
      </Section>

      <Section title="Locations">
        <ListEditor
          items={p.locations}
          onUpdate={(items) => updateContent("programs.locations", items)}
          addLabel="Add Location"
          onAdd={() => ({ state: "", areas: [""] })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="State" value={item.state} onChange={(v) => update("state", v)} />
              <StringListEditor items={item.areas} onUpdate={(v) => update("areas", v)} label="Areas" addLabel="Add Area" />
            </>
          )}
        />
      </Section>

      <Section title="Process Steps">
        <ListEditor
          items={p.processSteps}
          onUpdate={(items) => updateContent("programs.processSteps", items)}
          addLabel="Add Step"
          onAdd={() => ({ step: "", title: "", description: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Step Number" value={item.step} onChange={(v) => update("step", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
            </>
          )}
        />
      </Section>

      <Section title="CTA">
        <Field label="Title" value={p.ctaTitle} onChange={(v) => updateContent("programs.ctaTitle", v)} />
        <Field label="Description" value={p.ctaDescription} onChange={(v) => updateContent("programs.ctaDescription", v)} multiline />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminProgramsPage;
