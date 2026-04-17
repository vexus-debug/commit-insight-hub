import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, GripVertical, Upload, Link, X, ImageIcon, ChevronDown, ChevronUp, Loader2, Save, Check } from "lucide-react";
import { type ReactNode, useState } from "react";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { toast } from "sonner";

export function Section({ title, description, children, icon }: { title: string; description?: string; children: ReactNode; icon?: ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-card rounded-2xl border border-border mb-4 overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
      >
        {icon && <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0">
          <h2 className="font-heading text-base sm:text-lg font-bold text-foreground truncate">{title}</h2>
          {description && <p className="text-muted-foreground text-xs mt-0.5 truncate">{description}</p>}
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-4 border-t border-border/50 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function Field({ label, value, onChange, type = "text", placeholder, multiline, rows }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; multiline?: boolean; rows?: number;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">{label}</label>
      {multiline ? (
        <Textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows || 3} className="rounded-xl text-sm bg-muted/30 border-border/50 focus:bg-card transition-colors" />
      ) : (
        <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="rounded-xl text-sm bg-muted/30 border-border/50 focus:bg-card transition-colors" />
      )}
    </div>
  );
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>;
}

export function ListEditor({ items, onUpdate, renderItem, onAdd, addLabel = "Add Item" }: {
  items: any[];
  onUpdate: (items: any[]) => void;
  renderItem: (item: any, index: number, update: (field: string, value: any) => void) => ReactNode;
  onAdd: () => any;
  addLabel?: string;
}) {
  const updateItem = (index: number, field: string, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const removeItem = (index: number) => {
    onUpdate(items.filter((_, i) => i !== index));
  };

  const addItem = () => {
    onUpdate([...items, onAdd()]);
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-muted/30 rounded-xl p-3 sm:p-4 relative border border-border/30">
          <div className="flex items-start gap-2">
            <GripVertical className="h-4 w-4 text-muted-foreground/50 mt-2 shrink-0 hidden sm:block" />
            <div className="flex-1 space-y-3 min-w-0">
              {renderItem(item, i, (field, value) => updateItem(i, field, value))}
            </div>
            <button
              onClick={() => removeItem(i)}
              className="text-muted-foreground hover:text-destructive transition-colors p-1.5 rounded-lg hover:bg-destructive/10 shrink-0"
              title="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={addItem} className="gap-1.5 text-xs rounded-xl border-dashed border-2 w-full sm:w-auto">
        <Plus className="h-3.5 w-3.5" />
        {addLabel}
      </Button>
    </div>
  );
}

export function ImageUploadField({ label, currentSrc, onUrlChange }: {
  label: string; currentSrc: string; onUrlChange: (url: string) => void;
}) {
  const [mode, setMode] = useState<"upload" | "url">("upload");
  const [uploading, setUploading] = useState(false);
  const { uploadImage } = useSiteContent();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    try {
      const publicUrl = await uploadImage(file);
      onUrlChange(publicUrl);
    } catch (err: any) {
      console.error('Upload failed:', err);
      alert('Upload failed: ' + (err.message || 'Unknown error'));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">{label}</label>

      {currentSrc ? (
        <div className="relative rounded-xl overflow-hidden border border-border bg-muted/20 mb-2">
          <img src={currentSrc} alt="Preview" className="w-full h-32 sm:h-40 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-3">
            <span className="text-xs text-primary-foreground font-medium">Current image</span>
            <button
              onClick={() => onUrlChange("")}
              className="bg-destructive text-destructive-foreground rounded-lg p-1.5 shadow-lg hover:bg-destructive/90 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-border rounded-xl p-6 sm:p-8 text-center mb-2 bg-muted/10">
          <ImageIcon className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">No image set</p>
        </div>
      )}

      <div className="flex gap-1 mb-2">
        <button
          onClick={() => setMode("upload")}
          className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-colors ${mode === "upload" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
        >
          <Upload className="h-3 w-3" />
          Upload
        </button>
        <button
          onClick={() => setMode("url")}
          className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-colors ${mode === "url" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
        >
          <Link className="h-3 w-3" />
          URL
        </button>
      </div>

      {mode === "upload" ? (
        <label className={`cursor-pointer flex items-center justify-center gap-2 bg-muted/40 hover:bg-muted/60 text-foreground text-xs px-4 py-2.5 rounded-xl border border-border/50 transition-colors w-full ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
          {uploading ? 'Uploading...' : 'Choose file…'}
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" disabled={uploading} />
        </label>
      ) : (
        <Input
          type="url"
          placeholder="https://example.com/image.jpg"
          value={currentSrc?.startsWith("data:") ? "" : currentSrc}
          onChange={(e) => onUrlChange(e.target.value)}
          className="rounded-xl text-xs bg-muted/30 border-border/50"
        />
      )}
    </div>
  );
}

export function StringListEditor({ items, onUpdate, label, addLabel = "Add" }: {
  items: string[]; onUpdate: (items: string[]) => void; label?: string; addLabel?: string;
}) {
  return (
    <div>
      {label && <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">{label}</label>}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={item}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = e.target.value;
                onUpdate(updated);
              }}
              className="rounded-xl text-sm flex-1 bg-muted/30 border-border/50"
            />
            <button
              onClick={() => onUpdate(items.filter((_, idx) => idx !== i))}
              className="text-muted-foreground hover:text-destructive p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onUpdate([...items, ""])} className="gap-1.5 text-xs rounded-xl border-dashed border-2">
          <Plus className="h-3.5 w-3.5" />
          {addLabel}
        </Button>
      </div>
    </div>
  );
}

export function SaveButton() {
  const { saving, saveNow, hasUnsavedChanges } = useSiteContent();
  const [justSaved, setJustSaved] = useState(false);

  const handleSave = async () => {
    try {
      await saveNow();
      setJustSaved(true);
      toast.success("Changes saved successfully!");
      setTimeout(() => setJustSaved(false), 2000);
    } catch {
      toast.error("Failed to save changes. Please try again.");
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${hasUnsavedChanges || saving || justSaved ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
      <Button
        onClick={handleSave}
        disabled={saving || !hasUnsavedChanges}
        className="gap-2 rounded-full shadow-2xl px-6 h-12 text-sm font-semibold"
        size="lg"
      >
        {saving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : justSaved ? (
          <>
            <Check className="h-4 w-4" />
            Saved!
          </>
        ) : (
          <>
            <Save className="h-4 w-4" />
            Save Changes
          </>
        )}
      </Button>
    </div>
  );
}

export function SaveNotice() {
  return null;
}
