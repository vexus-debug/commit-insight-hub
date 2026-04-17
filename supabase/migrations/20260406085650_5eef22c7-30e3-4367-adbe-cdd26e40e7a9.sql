
-- Create site_content table to store all CMS content
CREATE TABLE public.site_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read site content (public website)
CREATE POLICY "Anyone can read site content"
ON public.site_content
FOR SELECT
USING (true);

-- Only authenticated users can update site content
CREATE POLICY "Authenticated users can update site content"
ON public.site_content
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Only authenticated users can insert site content
CREATE POLICY "Authenticated users can insert site content"
ON public.site_content
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_content_updated_at
BEFORE UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for site images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site_images', 'site_images', true);

-- Storage policies
CREATE POLICY "Anyone can view site images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'site_images');

CREATE POLICY "Authenticated users can upload site images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'site_images');

CREATE POLICY "Authenticated users can update site images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'site_images');

CREATE POLICY "Authenticated users can delete site images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'site_images');
