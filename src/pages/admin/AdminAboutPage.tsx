import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, StringListEditor, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminAboutPage = () => {
  const { content, updateContent } = useSiteContent();
  const a = content.about;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">About Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit the About Us page content.</p>
      </div>

      <Section title="Page Hero">
        <Field label="Title" value={a.heroTitle} onChange={(v) => updateContent("about.heroTitle", v)} />
        <Field label="Subtitle" value={a.heroSubtitle} onChange={(v) => updateContent("about.heroSubtitle", v)} />
        <Field label="Description" value={a.heroDescription} onChange={(v) => updateContent("about.heroDescription", v)} multiline />
      </Section>

      <Section title="Our Story">
        <Field label="Section Label" value={a.storyLabel} onChange={(v) => updateContent("about.storyLabel", v)} />
        <Field label="Title" value={a.storyTitle} onChange={(v) => updateContent("about.storyTitle", v)} />
        {a.storyParagraphs.map((p, i) => (
          <Field key={i} label={`Paragraph ${i + 1}`} value={p} onChange={(v) => {
            const updated = [...a.storyParagraphs];
            updated[i] = v;
            updateContent("about.storyParagraphs", updated);
          }} multiline />
        ))}
        <StringListEditor
          items={a.storyBadges}
          onUpdate={(items) => updateContent("about.storyBadges", items)}
          label="Badges"
          addLabel="Add Badge"
        />
      </Section>

      <Section title="Vision & Mission">
        <Field label="Vision Title" value={a.visionTitle} onChange={(v) => updateContent("about.visionTitle", v)} />
        <Field label="Vision Text" value={a.visionText} onChange={(v) => updateContent("about.visionText", v)} multiline />
        <Field label="Mission Title" value={a.missionTitle} onChange={(v) => updateContent("about.missionTitle", v)} />
        <Field label="Mission Text" value={a.missionText} onChange={(v) => updateContent("about.missionText", v)} multiline />
      </Section>

      <Section title="Timeline">
        <ListEditor
          items={a.timeline}
          onUpdate={(items) => updateContent("about.timeline", items)}
          addLabel="Add Milestone"
          onAdd={() => ({ year: "", title: "", description: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Year" value={item.year} onChange={(v) => update("year", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
            </>
          )}
        />
      </Section>

      <Section title="Core Values">
        <ListEditor
          items={a.values}
          onUpdate={(items) => updateContent("about.values", items)}
          addLabel="Add Value"
          onAdd={() => ({ icon: "Heart", title: "", description: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
            </>
          )}
        />
      </Section>

      <Section title="Leadership">
        <FieldRow>
          <Field label="Name" value={a.leaderName} onChange={(v) => updateContent("about.leaderName", v)} />
          <Field label="Role" value={a.leaderRole} onChange={(v) => updateContent("about.leaderRole", v)} />
        </FieldRow>
        <Field label="Badge" value={a.leaderBadge} onChange={(v) => updateContent("about.leaderBadge", v)} />
        {a.leaderBio.map((p, i) => (
          <Field key={i} label={`Bio Paragraph ${i + 1}`} value={p} onChange={(v) => {
            const updated = [...a.leaderBio];
            updated[i] = v;
            updateContent("about.leaderBio", updated);
          }} multiline />
        ))}
      </Section>

      <Section title="Impact Stats Strip">
        <ListEditor
          items={a.impactStats}
          onUpdate={(items) => updateContent("about.impactStats", items)}
          addLabel="Add Stat"
          onAdd={() => ({ value: "", label: "" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Value" value={item.value} onChange={(v) => update("value", v)} />
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
            </FieldRow>
          )}
        />
      </Section>

      <Section title="CTA Section">
        <Field label="Title" value={a.ctaTitle} onChange={(v) => updateContent("about.ctaTitle", v)} />
        <Field label="Description" value={a.ctaDescription} onChange={(v) => updateContent("about.ctaDescription", v)} multiline />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminAboutPage;
