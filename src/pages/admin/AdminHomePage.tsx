import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, StringListEditor, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminHomePage = () => {
  const { content, updateContent } = useSiteContent();

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Home Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit every section of the home page.</p>
      </div>

      {/* Hero */}
      <Section title="Hero Section">
        <Field label="Badge Text" value={content.hero.badge} onChange={(v) => updateContent("hero.badge", v)} />
        <FieldRow>
          <Field label="Title Line 1" value={content.hero.titleLine1} onChange={(v) => updateContent("hero.titleLine1", v)} />
          <Field label="Title Line 2 (highlighted)" value={content.hero.titleLine2} onChange={(v) => updateContent("hero.titleLine2", v)} />
        </FieldRow>
        <Field label="Description" value={content.hero.description} onChange={(v) => updateContent("hero.description", v)} multiline />
        <ImageUploadField label="Hero Background Image" currentSrc={content.hero.image} onUrlChange={(v) => updateContent("hero.image", v)} />
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stats</h3>
        <ListEditor
          items={content.hero.stats}
          onUpdate={(items) => updateContent("hero.stats", items)}
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

      {/* Mission */}
      <Section title="Mission Section (Who We Are)">
        <Field label="Section Label" value={content.mission.sectionLabel} onChange={(v) => updateContent("mission.sectionLabel", v)} />
        <Field label="Title" value={content.mission.title} onChange={(v) => updateContent("mission.title", v)} />
        {content.mission.paragraphs.map((p, i) => (
          <Field key={i} label={`Paragraph ${i + 1}`} value={p} onChange={(v) => {
            const updated = [...content.mission.paragraphs];
            updated[i] = v;
            updateContent("mission.paragraphs", updated);
          }} multiline />
        ))}
        <StringListEditor
          items={content.mission.bulletPoints}
          onUpdate={(items) => updateContent("mission.bulletPoints", items)}
          label="Bullet Points"
          addLabel="Add Bullet"
        />

        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Values Block</h3>
        <Field label="Values Label" value={content.mission.valuesLabel} onChange={(v) => updateContent("mission.valuesLabel", v)} />
        <Field label="Values Title" value={content.mission.valuesTitle} onChange={(v) => updateContent("mission.valuesTitle", v)} />
        <Field label="Values Subtitle" value={content.mission.valuesSubtitle} onChange={(v) => updateContent("mission.valuesSubtitle", v)} multiline />
        <ListEditor
          items={content.mission.values}
          onUpdate={(items) => updateContent("mission.values", items)}
          addLabel="Add Value"
          onAdd={() => ({ icon: "Heart", title: "", description: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} placeholder="Heart, Eye, etc." />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
            </>
          )}
        />
      </Section>

      {/* Journey */}
      <Section title="Journey Section">
        <Field label="Section Label" value={content.journey.sectionLabel} onChange={(v) => updateContent("journey.sectionLabel", v)} />
        <Field label="Title" value={content.journey.title} onChange={(v) => updateContent("journey.title", v)} />
        <Field label="Subtitle" value={content.journey.subtitle} onChange={(v) => updateContent("journey.subtitle", v)} multiline />
        <Field label="CTA Text" value={content.journey.ctaText} onChange={(v) => updateContent("journey.ctaText", v)} />
        <ListEditor
          items={content.journey.steps}
          onUpdate={(items) => updateContent("journey.steps", items)}
          addLabel="Add Step"
          onAdd={() => ({ icon: "Heart", label: "", title: "", description: "", image: "", stat: "", statLabel: "", accent: "primary" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
              </FieldRow>
              <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <ImageUploadField label="Step Image" currentSrc={item.image} onUrlChange={(v) => update("image", v)} />
              <FieldRow>
                <Field label="Stat Value" value={item.stat} onChange={(v) => update("stat", v)} />
                <Field label="Stat Label" value={item.statLabel} onChange={(v) => update("statLabel", v)} />
              </FieldRow>
            </>
          )}
        />
      </Section>

      {/* Impact */}
      <Section title="Impact Section">
        <Field label="Section Label" value={content.impact.sectionLabel} onChange={(v) => updateContent("impact.sectionLabel", v)} />
        <Field label="Title" value={content.impact.title} onChange={(v) => updateContent("impact.title", v)} />
        <Field label="Description" value={content.impact.description} onChange={(v) => updateContent("impact.description", v)} multiline />
        <FieldRow>
          <Field label="Quote" value={content.impact.quote} onChange={(v) => updateContent("impact.quote", v)} />
          <Field label="Quote Author" value={content.impact.quoteAuthor} onChange={(v) => updateContent("impact.quoteAuthor", v)} />
        </FieldRow>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stats</h3>
        <ListEditor
          items={content.impact.stats}
          onUpdate={(items) => updateContent("impact.stats", items)}
          addLabel="Add Stat"
          onAdd={() => ({ value: "", label: "" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Value" value={item.value} onChange={(v) => update("value", v)} />
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
            </FieldRow>
          )}
        />
        <StringListEditor items={content.impact.highlights} onUpdate={(items) => updateContent("impact.highlights", items)} label="Highlights" addLabel="Add Highlight" />
      </Section>

      {/* Gallery Section */}
      <Section title="Gallery Section (Home)">
        <Field label="Section Label" value={content.gallerySection.sectionLabel} onChange={(v) => updateContent("gallerySection.sectionLabel", v)} />
        <Field label="Title" value={content.gallerySection.title} onChange={(v) => updateContent("gallerySection.title", v)} />
        <Field label="Subtitle" value={content.gallerySection.subtitle} onChange={(v) => updateContent("gallerySection.subtitle", v)} multiline />
      </Section>

      {/* Programs Cards (Home) */}
      <Section title="Programs Cards (Home)">
        <ListEditor
          items={content.programCards}
          onUpdate={(items) => updateContent("programCards", items)}
          addLabel="Add Program Card"
          onAdd={() => ({ title: "", description: "", image: "", beneficiaries: "", goal: "", raised: "", progress: 0 })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <ImageUploadField label="Program Image" currentSrc={item.image} onUrlChange={(v) => update("image", v)} />
              <FieldRow>
                <Field label="Beneficiaries" value={item.beneficiaries} onChange={(v) => update("beneficiaries", v)} />
                <Field label="Goal" value={item.goal} onChange={(v) => update("goal", v)} />
              </FieldRow>
              <FieldRow>
                <Field label="Raised" value={item.raised} onChange={(v) => update("raised", v)} />
                <Field label="Progress (%)" value={String(item.progress)} onChange={(v) => update("progress", parseInt(v) || 0)} type="number" />
              </FieldRow>
            </>
          )}
        />
      </Section>

      {/* Testimonials */}
      <Section title="Testimonials">
        <Field label="Section Label" value={content.testimonials.sectionLabel} onChange={(v) => updateContent("testimonials.sectionLabel", v)} />
        <Field label="Title" value={content.testimonials.title} onChange={(v) => updateContent("testimonials.title", v)} />
        <Field label="Subtitle" value={content.testimonials.subtitle} onChange={(v) => updateContent("testimonials.subtitle", v)} multiline />
        <ListEditor
          items={content.testimonials.items}
          onUpdate={(items) => updateContent("testimonials.items", items)}
          addLabel="Add Testimonial"
          onAdd={() => ({ name: "", role: "", rating: 5, text: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Name" value={item.name} onChange={(v) => update("name", v)} />
                <Field label="Role" value={item.role} onChange={(v) => update("role", v)} />
              </FieldRow>
              <Field label="Rating (1-5)" value={String(item.rating)} onChange={(v) => update("rating", parseInt(v) || 5)} type="number" />
              <Field label="Testimonial Text" value={item.text} onChange={(v) => update("text", v)} multiline />
            </>
          )}
        />
      </Section>

      {/* FAQ */}
      <Section title="FAQ Section">
        <Field label="Section Label" value={content.faq.sectionLabel} onChange={(v) => updateContent("faq.sectionLabel", v)} />
        <Field label="Title" value={content.faq.title} onChange={(v) => updateContent("faq.title", v)} />
        <Field label="Description" value={content.faq.description} onChange={(v) => updateContent("faq.description", v)} multiline />
        <ListEditor
          items={content.faq.items}
          onUpdate={(items) => updateContent("faq.items", items)}
          addLabel="Add FAQ"
          onAdd={() => ({ question: "", answer: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Question" value={item.question} onChange={(v) => update("question", v)} />
              <Field label="Answer" value={item.answer} onChange={(v) => update("answer", v)} multiline />
            </>
          )}
        />
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Support Box</h3>
        <Field label="Support Title" value={content.faq.supportTitle} onChange={(v) => updateContent("faq.supportTitle", v)} />
        <Field label="Support Description" value={content.faq.supportDescription} onChange={(v) => updateContent("faq.supportDescription", v)} />
        <FieldRow>
          <Field label="Support Phone" value={content.faq.supportPhone} onChange={(v) => updateContent("faq.supportPhone", v)} />
          <Field label="Support Email" value={content.faq.supportEmail} onChange={(v) => updateContent("faq.supportEmail", v)} />
        </FieldRow>
      </Section>

      {/* CTA */}
      <Section title="CTA Section">
        <Field label="Title" value={content.cta.title} onChange={(v) => updateContent("cta.title", v)} />
        <Field label="Description" value={content.cta.description} onChange={(v) => updateContent("cta.description", v)} multiline />
        <Field label="Phone Number" value={content.cta.phone} onChange={(v) => updateContent("cta.phone", v)} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminHomePage;
