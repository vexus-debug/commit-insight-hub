import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminGlobalSettings = () => {
  const { content, updateContent } = useSiteContent();

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Global Settings</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Site-wide settings that affect every page.</p>
      </div>

      <Section title="Site Identity">
        <FieldRow>
          <Field label="Site Name" value={content.siteName} onChange={(v) => updateContent("siteName", v)} />
          <Field label="Logo Text (single letter)" value={content.logoText} onChange={(v) => updateContent("logoText", v)} />
        </FieldRow>
        <Field label="Tagline" value={content.siteTagline} onChange={(v) => updateContent("siteTagline", v)} />
        <Field label="Site Description" value={content.siteDescription} onChange={(v) => updateContent("siteDescription", v)} multiline />
      </Section>

      <Section title="Top Bar" description="The thin bar at the top of every page">
        <FieldRow>
          <Field label="Address Label" value={content.topBar.addressLabel} onChange={(v) => updateContent("topBar.addressLabel", v)} />
          <Field label="Address" value={content.topBar.address} onChange={(v) => updateContent("topBar.address", v)} />
        </FieldRow>
        <FieldRow>
          <Field label="Phone Label" value={content.topBar.phoneLabel} onChange={(v) => updateContent("topBar.phoneLabel", v)} />
          <Field label="Phone" value={content.topBar.phone} onChange={(v) => updateContent("topBar.phone", v)} />
        </FieldRow>
        <FieldRow>
          <Field label="Email Label" value={content.topBar.emailLabel} onChange={(v) => updateContent("topBar.emailLabel", v)} />
          <Field label="Email" value={content.topBar.email} onChange={(v) => updateContent("topBar.email", v)} />
        </FieldRow>

        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Social Links</h3>
        <ListEditor
          items={content.topBar.socialLinks}
          onUpdate={(items) => updateContent("topBar.socialLinks", items)}
          addLabel="Add Social Link"
          onAdd={() => ({ label: "", url: "", shortLabel: "" })}
          renderItem={(item, _i, update) => (
            <>
              <FieldRow>
                <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
                <Field label="Short Label" value={item.shortLabel} onChange={(v) => update("shortLabel", v)} />
              </FieldRow>
              <Field label="URL" value={item.url} onChange={(v) => update("url", v)} />
            </>
          )}
        />
      </Section>

      <Section title="Navigation Links">
        <ListEditor
          items={content.navLinks}
          onUpdate={(items) => updateContent("navLinks", items)}
          addLabel="Add Nav Link"
          onAdd={() => ({ label: "", path: "/" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
              <Field label="Path" value={item.path} onChange={(v) => update("path", v)} />
            </FieldRow>
          )}
        />
      </Section>

      <Section title="Footer" description="Footer content across all pages">
        <Field label="Description" value={content.footer.description} onChange={(v) => updateContent("footer.description", v)} multiline />
        <FieldRow>
          <Field label="Contact Address" value={content.footer.contactAddress} onChange={(v) => updateContent("footer.contactAddress", v)} />
          <Field label="Contact Phone" value={content.footer.contactPhone} onChange={(v) => updateContent("footer.contactPhone", v)} />
        </FieldRow>
        <Field label="Contact Email" value={content.footer.contactEmail} onChange={(v) => updateContent("footer.contactEmail", v)} />
        <Field label="Copyright Text" value={content.footer.copyright} onChange={(v) => updateContent("footer.copyright", v)} />

        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Quick Links</h3>
        <ListEditor
          items={content.footer.quickLinks}
          onUpdate={(items) => updateContent("footer.quickLinks", items)}
          addLabel="Add Quick Link"
          onAdd={() => ({ label: "", path: "/" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
              <Field label="Path" value={item.path} onChange={(v) => update("path", v)} />
            </FieldRow>
          )}
        />

        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Info Links</h3>
        <ListEditor
          items={content.footer.infoLinks}
          onUpdate={(items) => updateContent("footer.infoLinks", items)}
          addLabel="Add Info Link"
          onAdd={() => ({ label: "", path: "/" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
              <Field label="Path" value={item.path} onChange={(v) => update("path", v)} />
            </FieldRow>
          )}
        />

        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">Social Links</h3>
        <ListEditor
          items={content.footer.socialLinks}
          onUpdate={(items) => updateContent("footer.socialLinks", items)}
          addLabel="Add Social Link"
          onAdd={() => ({ label: "", url: "" })}
          renderItem={(item, _i, update) => (
            <FieldRow>
              <Field label="Label" value={item.label} onChange={(v) => update("label", v)} />
              <Field label="URL" value={item.url} onChange={(v) => update("url", v)} />
            </FieldRow>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminGlobalSettings;
