import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, ListEditor, StringListEditor, SaveNotice } from "@/components/admin/EditorComponents";

const AdminCareersPage = () => {
  const { content, updateContent } = useSiteContent();
  const c = content.careers;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Careers Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Manage job listings and opportunities.</p>
      </div>

      <Section title="Page Header">
        <Field label="Title" value={c.title} onChange={(v) => updateContent("careers.title", v)} />
        <Field label="Description" value={c.description} onChange={(v) => updateContent("careers.description", v)} multiline />
        <Field label="Contact Email" value={c.contactEmail} onChange={(v) => updateContent("careers.contactEmail", v)} />
      </Section>

      <Section title="Job Listings" description="Add, edit, or remove career opportunities">
        <ListEditor
          items={c.items}
          onUpdate={(items) => updateContent("careers.items", items)}
          addLabel="Add Position"
          onAdd={() => ({ title: "", location: "", type: "", description: "", requirements: [""] })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Job Title" value={item.title} onChange={(v) => update("title", v)} />
              <Field label="Location" value={item.location} onChange={(v) => update("location", v)} />
              <Field label="Type" value={item.type} onChange={(v) => update("type", v)} placeholder="e.g. Full-time, Part-time, Volunteer" />
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
              <StringListEditor items={item.requirements} onUpdate={(v) => update("requirements", v)} label="Requirements" addLabel="Add Requirement" />
            </>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminCareersPage;
