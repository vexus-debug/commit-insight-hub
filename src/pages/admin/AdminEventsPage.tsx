import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, ListEditor, SaveNotice } from "@/components/admin/EditorComponents";

const AdminEventsPage = () => {
  const { content, updateContent } = useSiteContent();
  const ev = content.events;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Events Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Manage events and outreaches.</p>
      </div>

      <Section title="Page Header">
        <Field label="Title" value={ev.title} onChange={(v) => updateContent("events.title", v)} />
        <Field label="Description" value={ev.description} onChange={(v) => updateContent("events.description", v)} multiline />
      </Section>

      <Section title="Events" description="Add, edit, or remove events">
        <ListEditor
          items={ev.items}
          onUpdate={(items) => updateContent("events.items", items)}
          addLabel="Add Event"
          onAdd={() => ({ title: "", date: "", location: "", description: "", type: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              <Field label="Date" value={item.date} onChange={(v) => update("date", v)} placeholder="e.g. First Saturday of every month" />
              <Field label="Location" value={item.location} onChange={(v) => update("location", v)} />
              <Field label="Type" value={item.type} onChange={(v) => update("type", v)} placeholder="e.g. Medical Outreach" />
              <Field label="Description" value={item.description} onChange={(v) => update("description", v)} multiline />
            </>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminEventsPage;
