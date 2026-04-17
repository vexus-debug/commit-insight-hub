import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, StringListEditor } from "@/components/admin/EditorComponents";

const AdminGetInvolvedPage = () => {
  const { content, updateContent } = useSiteContent();
  const g = content.getInvolved;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Get Involved Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit volunteer roles, partnerships, events, and more.</p>
      </div>

      <Section title="Page Hero">
        <Field label="Title" value={g.heroTitle} onChange={(v) => updateContent("getInvolved.heroTitle", v)} />
        <Field label="Subtitle" value={g.heroSubtitle} onChange={(v) => updateContent("getInvolved.heroSubtitle", v)} />
        <Field label="Description" value={g.heroDescription} onChange={(v) => updateContent("getInvolved.heroDescription", v)} multiline />
      </Section>

      <Section title="Ways to Get Involved">
        <Field label="Title" value={g.waysTitle} onChange={(v) => updateContent("getInvolved.waysTitle", v)} />
        <Field label="Description" value={g.waysDescription} onChange={(v) => updateContent("getInvolved.waysDescription", v)} multiline />
        <ListEditor
          items={g.ways}
          onUpdate={(items) => updateContent("getInvolved.ways", items)}
          addLabel="Add Way"
          onAdd={() => ({ icon: "Heart", title: "", description: "", cta: "", link: "#" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <FieldRow>
                <Field label="CTA Label" value={item.cta} onChange={(v) => update("cta", v)} />
                <Field label="Link" value={item.link} onChange={(v) => update("link", v)} />
              </FieldRow>
            </>
          )}
        />
      </Section>

      <Section title="Volunteer Roles">
        <Field label="Section Title" value={g.volunteerTitle} onChange={(v) => updateContent("getInvolved.volunteerTitle", v)} />
        <Field label="Section Description" value={g.volunteerDescription} onChange={(v) => updateContent("getInvolved.volunteerDescription", v)} multiline />
        <ListEditor
          items={g.volunteerRoles}
          onUpdate={(items) => updateContent("getInvolved.volunteerRoles", items)}
          addLabel="Add Role"
          onAdd={() => ({ icon: "Users", title: "", description: "", commitment: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <Field label="Commitment" value={item.commitment} onChange={(v) => update("commitment", v)} />
            </>
          )}
        />
      </Section>

      <Section title="Partnerships">
        <Field label="Section Title" value={g.partnershipTitle} onChange={(v) => updateContent("getInvolved.partnershipTitle", v)} />
        <Field label="Section Description" value={g.partnershipDescription} onChange={(v) => updateContent("getInvolved.partnershipDescription", v)} multiline />
        <ListEditor
          items={g.partnershipTiers}
          onUpdate={(items) => updateContent("getInvolved.partnershipTiers", items)}
          addLabel="Add Tier"
          onAdd={() => ({ icon: "Heart", title: "", description: "", benefits: [""] })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Icon" value={item.icon} onChange={(v) => update("icon", v)} />
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              </FieldRow>
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <StringListEditor items={item.benefits} onUpdate={(v) => update("benefits", v)} label="Benefits" addLabel="Add Benefit" />
            </>
          )}
        />
      </Section>

      <Section title="Events">
        <Field label="Section Title" value={g.eventsTitle} onChange={(v) => updateContent("getInvolved.eventsTitle", v)} />
        <Field label="Section Description" value={g.eventsDescription} onChange={(v) => updateContent("getInvolved.eventsDescription", v)} multiline />
        <ListEditor
          items={g.events}
          onUpdate={(items) => updateContent("getInvolved.events", items)}
          addLabel="Add Event"
          onAdd={() => ({ title: "", date: "", location: "", type: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
                <Field label="Type" value={item.type} onChange={(v) => update("type", v)} />
              </FieldRow>
              <FieldRow>
                <Field label="Date" value={item.date} onChange={(v) => update("date", v)} />
                <Field label="Location" value={item.location} onChange={(v) => update("location", v)} />
              </FieldRow>
            </>
          )}
        />
      </Section>

      <Section title="Contact Form Section">
        <Field label="Form Title" value={g.formTitle} onChange={(v) => updateContent("getInvolved.formTitle", v)} />
        <Field label="Form Description" value={g.formDescription} onChange={(v) => updateContent("getInvolved.formDescription", v)} multiline />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminGetInvolvedPage;
