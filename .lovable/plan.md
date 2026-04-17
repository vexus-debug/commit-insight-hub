Let me look at the actual color usage across key sections to give grounded feedback.
<lov-tool-use id="toolu_vrtx_01VqrPg21fBSmSGvzWDMU4VT" name="code--view" integration-id="code" data="{file_path: src/components/MissionSection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_013xUVyJBuQAdErJ7RZmDTz3" name="code--view" integration-id="code" data="{file_path: src/components/ImpactSection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01M4Jk9FX2EwijvKNghi5KRR" name="code--view" integration-id="code" data="{file_path: src/components/JourneySection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01Wp6WjREnbSuav49RsS4bQb" name="code--view" integration-id="code" data="{file_path: src/components/TopBar.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01UKQXYErGmoShr1P8p48nNH" name="code--view" integration-id="code" data="{file_path: src/components/Footer.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01Gk5iZ1c1vxizmx1HhTnYG7" name="code--view" integration-id="code" data="{file_path: src/components/MissionSection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01Hvz3xfXSV8CU2RyePs7cTx" name="code--view" integration-id="code" data="{file_path: src/components/ImpactSection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_015zLnzKHpkzqkckbPwWJTxH" name="code--view" integration-id="code" data="{file_path: src/components/JourneySection.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_017YfW8opBMYPsowaK3omCgE" name="code--view" integration-id="code" data="{file_path: src/components/TopBar.tsx}">
&nbsp;

<lov-tool-use id="toolu_vrtx_01EjTTfCkV9DW54DLNd1Tta5" name="code--view" integration-id="code" data="{file_path: src/components/Footer.tsx}">
&nbsp;
&nbsp;

## What I notice about the current color usage

Looking at the homepage holistically (Hero → Mission → Journey → Impact → Gallery → Testimonials → FAQ → CTA → Footer), the palette technically uses three brand colors (Royal Purple `#4B2E83`, Forest Green `#1F7A5A`, Copper `#C76B2B`), but several things make it feel inharmonious:

**1. The accent color (Copper) is essentially unused.**
Every section leans on purple + green. Copper only lives in CSS variables. With only two colors carrying everything, the site oscillates between purple and green with no rhythm — and green ends up doing too many jobs (eyebrow labels, stats, icons, dots, CTAs, hover states, social pills).

**2. Green is overused as a "highlight" everywhere.**
Section labels, bullet dots, stat numbers, checkmarks, footer headings, link hovers, and even the CTA section background are all green. When a color appears on 80% of components it stops feeling like an accent and starts feeling like noise.

**3. Two competing dark backgrounds.**

- ImpactSection uses `bg-foreground` (near-black charcoal)
- CTASection uses `bg-secondary` (forest green)
- Footer uses `bg-foreground` again
- TopBar/Navbar are white + dark purple
That's 3 different dark treatments stacked close together, breaking visual flow.

**4. Button colors are inconsistent.**
Hero primary CTA = green. Mission CTA = purple. CTA section primary button = purple on green bg. Journey CTA = purple. Donate Navbar = purple. Users can't learn "what does the main action look like."

**5. Eyebrow labels are always green.**
Every section opens with a green uppercase label. It becomes monotonous and predictable instead of hierarchical.

**6. Hero gradient mutes the brand.**
The hero overlay is `foreground/85 → foreground/60` (charcoal), so the brand purple/green never appears in the hero — the most important above-the-fold moment is colorless.

**7. Journey section's alternating purple/green dots** read as decorative randomness rather than meaning. Nothing semantically distinguishes a "purple step" from a "green step."

---

## Suggested direction (sleek + harmonious)

Adopt a clear **color role system** so each color has one job:


| Color                                         | Role                                                                                 | Where it appears                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Purple (primary) make it a premium purple** | Brand identity, primary CTAs, headings emphasis                                      | Donate buttons, primary actions, logo mark, footer accent |
| **Copper (accent)**                           | The single highlight color — eyebrow labels, stat numbers, underlines, micro-details | Section labels, stat values, bullet dots, checkmarks      |
| **Green (secondary)**                         | Reserved for "impact / outcome" moments only                                         | Impact stats, success states, one hero accent             |
| **Charcoal/foreground**                       | One dark surface only (Footer)                                                       | Footer                                                    |
| **Warm white / muted**                        | Default section backgrounds                                                          | Mission, Journey, FAQ                                     |


**Concrete changes I'd make:**

1. **Switch all eyebrow section labels from green → copper.** Instantly adds the missing third color and breaks the green monotony.
2. **Standardize primary CTA = purple** everywhere (Hero, Journey, CTA section). Secondary/ghost = outlined purple.
3. **CTA section: change `bg-secondary` (green) → `bg-primary` or a softer `bg-primary/5` with purple text.** Removes the third dark band stacked near the footer.
4. **ImpactSection: keep dark, but switch from raw `bg-foreground` to a deep purple (`bg-primary` at ~95% darkness or a new `--surface-dark` token built from primary).** Ties impact section into the brand instead of feeling like a generic black slab.
5. **Journey section dots: drop the alternating purple/green** — use a single color (purple) with copper for the active/in-view dot. Cleaner timeline.
6. **Bullet dots, checkmarks, stat numbers → copper.** Green stays only on the Impact section stats.
7. **Hero overlay: replace charcoal gradient with a primary-tinted gradient** (`from-primary/85 via-primary/60 to-transparent`) so the brand color is felt immediately.
8. **Footer headings ("Quick Links", "Info", "Contact"): switch from green → copper or warm white** for a more refined dark-mode look.
9. **Add subtle 1px copper underline or divider accents** under section headings to create rhythm without adding more color blocks.

**Net effect:** purple = identity, copper = highlight, green = outcome. Every section will have a clear color story instead of green-everywhere-and-charcoal-everywhere.

---

## Files that would change

- `src/index.css` — possibly add a deep-purple surface token; tweak hero gradient variable
- `src/components/HeroSection.tsx` — overlay gradient
- `src/components/MissionSection.tsx` — eyebrow → accent, bullet dots → accent
- `src/components/JourneySection.tsx` — eyebrow → accent, dot scheme simplified, stat color → accent
- `src/components/ImpactSection.tsx` — dark surface → primary-based; eyebrow → accent (keep stat values green as the one "outcome" moment)
- `src/components/CTASection.tsx` — background from green → primary (or light primary tint)
- `src/components/TestimonialsSection.tsx`, `FAQSection.tsx`, `GallerySection.tsx` — eyebrow labels → accent
- `src/components/Footer.tsx` — headings → accent or warm white; logo chip stays purple
- `src/components/TopBar.tsx` — small icons (MapPin/Phone/Mail) → accent