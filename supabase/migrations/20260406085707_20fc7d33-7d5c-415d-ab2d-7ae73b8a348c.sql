
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS on user_roles: only admins can see roles
CREATE POLICY "Admins can view roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop old permissive policies on site_content
DROP POLICY IF EXISTS "Authenticated users can update site content" ON public.site_content;
DROP POLICY IF EXISTS "Authenticated users can insert site content" ON public.site_content;

-- New admin-only policies
CREATE POLICY "Admins can update site content"
ON public.site_content
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert site content"
ON public.site_content
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Drop old permissive storage policies
DROP POLICY IF EXISTS "Authenticated users can upload site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete site images" ON storage.objects;

-- New admin-only storage policies
CREATE POLICY "Admins can upload site images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'site_images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update site images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'site_images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete site images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'site_images' AND public.has_role(auth.uid(), 'admin'));
