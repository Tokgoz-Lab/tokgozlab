# Tokgöz Lab color system

Every color on the site comes from the logo and is defined once, as a token in
[`src/styles/global.css`](../src/styles/global.css) (`@theme` block). Components use the
token utilities (`bg-brand-navy`, `text-muted`, `border-line`…), never hard-coded `[#hex]` values.

To change a color site-wide, edit its token in `global.css`, then update the two literal-copy
exceptions listed at the end of this document.

## 1. Where the colors come from

| Logo element | HEX | HSL | Role on the site |
|---|---|---|---|
| Hexagon, "T" | `#022A6C` | 217° 96% 22% | **Primary.** Trust, structure, authority. |
| "L", circuit traces | `#02A0E7` | 199° 98% 46% | **Secondary.** Technology and signal; decorative use. |
| Two red traces | `#D01F33` | 353° 74% 47% | **Accent.** Calls to action; used sparingly. |

How they fit together:

- **Navy and azure** are an *analogous* pair, 18° apart on the color wheel. They carry the identity and stay calm and cool.
- **Red** sits near the complement of azure. It's the single warm accent, so it reads as "act here".
- **Amber** (`#FFB547`, 36°) isn't in the logo, but it's azure's complement. It's kept as a tiny "signal" highlight for icons on dark surfaces only.
- **Neutrals** are cool slate (hue ~215°), tinted toward the navy, so greys feel on-brand rather than generic.

## 2. Palette

### Brand
| Token | HEX | Use for |
|---|---|---|
| `brand-navy` | `#022A6C` | Primary buttons, navy bands, year and date numerals, strong labels |
| `brand-navy-hover` | `#011E52` | Hover and pressed state of navy fills |
| `brand-azure` | `#02A0E7` | Decorative only: gradients, rings, check icons, hover borders. **Never text on light surfaces.** |
| `brand-azure-tint` | `#E6F4FC` | Active nav pill, icon tiles, chips, secondary-button hover |
| `brand-azure-tint-strong` | `#DDF0FB` | Hover of white buttons sitting on dark or navy |
| `brand-red` | `#D01F33` | CTA buttons, the eyebrow tick, award badges on dark, the end of the brand gradient |
| `brand-red-hover` | `#B51A2C` | Hover of red buttons |
| `brand-red-tint` | `#FDECEE` | Background of red icon tiles |
| `brand-amber` | `#FFB547` | Signal icons on `dark` or `brand-navy` surfaces only |

### Light surfaces and text
| Token | HEX | Use for |
|---|---|---|
| `canvas` | `#FFFFFF` | Page background |
| `surface` | `#FFFFFF` | Cards, always paired with a `line` border |
| `subtle` | `#F3F7FA` | Alternating section background, chips, hover backgrounds |
| `line-subtle` | `#F1F5F9` | Dividers inside cards |
| `line` | `#E2E8F0` | Card borders, section dividers |
| `line-strong` | `#CBD5E1` | Input borders, secondary-button borders, dashed empty states |
| `ink` | `#071B26` | Headings, titles |
| `body` | `#475569` | Paragraph text |
| `muted` | `#5B6B80` | Meta text: authors, dates, captions, card labels |
| `link` | `#0270AD` | Links, eyebrows, "Read more" |
| `link-hover` | `#035481` | Link hover; title hover inside cards |
| `focus` | `#0270AD` | Keyboard focus ring (set globally in `global.css`) |

### Dark surfaces (the site's dark theme)
| Token | HEX | Use for |
|---|---|---|
| `dark` | `#061A2B` | Dark sections, page heroes, footer |
| `darker` | `#031522` | Homepage hero, dark browser chrome |
| `dark-raised` | `#0B2940` | Cards and badges on dark |
| `on-dark` | `#FFFFFF` | Headings on dark |
| `on-dark-body` | `#CBD5E1` | Paragraph text on dark |
| `on-dark-muted` | `#94A3B8` | Meta text on dark |
| `on-dark-accent` | `#7DD1F5` | Eyebrows, back-links, dates on dark |
| `on-dark-glow` | `#5CC6F2` | Highlighted headline words; decorative rings on dark |

### Status
| Token | HEX | Tint | Use for |
|---|---|---|---|
| `success` | `#15803D` | `success-tint` `#ECFDF3` | Positive status, "open" listings |
| `warning` | `#B45309` | `warning-tint` `#FFF7E6` | Warnings; award ("gold") badges on light |
| `error` | `#B42318` | `error-tint` `#FDECEE` | Errors. Deeper than `brand-red`, so a CTA never looks like an error. |

### Buttons
| Button | Classes |
|---|---|
| Primary | `bg-brand-navy text-white hover:bg-brand-navy-hover` |
| Accent CTA | `bg-brand-red text-white hover:bg-brand-red-hover`: at most one per screen, on `canvas` or `dark` |
| Secondary (light) | `border border-line-strong bg-white text-brand-navy hover:bg-brand-azure-tint` |
| Secondary (dark) | `border border-white/20 text-white hover:bg-white/10` |
| CTA on a navy band | `bg-white text-brand-navy hover:bg-brand-azure-tint-strong`. A red CTA on navy has too little edge contrast (2.5:1). |

## 3. Accessibility

All text pairs meet **WCAG AA** (at least 4.5:1). Icons, focus rings and large display text meet
at least 3:1. These are computed values; re-check them after changing any token.

| Pair | Ratio | | Pair | Ratio |
|---|---|---|---|---|
| ink / canvas | 17.6 | | on-dark / dark | 17.6 |
| body / canvas | 7.6 | | on-dark-body / dark | 11.9 |
| body / subtle | 7.0 | | on-dark-muted / dark | 6.9 |
| muted / canvas | 5.4 | | on-dark-muted / brand-navy | 5.3 |
| muted / subtle | 5.1 | | on-dark-accent / dark | 10.3 |
| link / canvas | 5.4 | | on-dark-accent / brand-navy | 7.9 |
| link / subtle | 5.0 | | white / brand-navy | 13.6 |
| link / brand-azure-tint | 4.8 | | white / brand-red | 5.4 |
| brand-navy / brand-azure-tint | 12.1 | | white / brand-red-hover | 6.7 |
| success, warning, error / own tint | ≥ 4.7 | | brand-amber / dark | 10.0 |
| focus / canvas | 5.4 | | brand-amber / brand-navy | 7.7 |

Combinations that don't pass. Don't use them:

| Combination | Ratio | Instead |
|---|---|---|
| `brand-azure` text on white | 2.9 | `link` |
| `brand-amber` anywhere on light | 1.8 | Amber is dark-surface only |
| Small `brand-red` text on `dark` | 3.3 | `on-dark-accent`; a solid red badge with white text is fine |
| Red button on `brand-navy` | 2.5 (edge) | White button with navy text |
| Tailwind `slate-500` text on `subtle` | 4.4 | `muted` |
| Tailwind `slate-400` text on white | 2.6 | `muted` |

## 4. Usage rules

1. **Visual weight.** Neutrals (white, `subtle`, text greys) about 65%. Navy about 25%: header CTA, dark and navy bands, primary buttons, numerals. Azure about 8%: links, icons, rings, focus. Red at most 2%. Amber under 1%.
2. **Bright colors are for shapes, not sentences.** `brand-azure`, `on-dark-glow`, `brand-red` and `brand-amber` go on fills, icons, strokes and large display words, never on paragraph text.
3. **Red is the "act here" color.** Use one CTA per screen, plus the eyebrow tick and the logo. Never decorate with it, and never use it for status (that's `error`).
4. **Pick text by surface.** On light, use only `ink`, `body`, `muted` and `link`. On dark, use only the `on-dark*` tokens. Don't mix them.
5. **Surfaces alternate** between `canvas` and `subtle`; `dark` adds emphasis, roughly once per page. Cards are `surface` with `line`. No colored card backgrounds, except tints inside small icon tiles.
6. **Icon tiles** pair a tint with its strong color: `brand-azure-tint`+`link`, `subtle`+`brand-navy`, `brand-red-tint`+`brand-red`, `success-tint`+`success`.
7. **No new hex values in components.** If a color is genuinely missing, add a token to `global.css` and to this document.

## 5. Implementation

The tokens live in Tailwind v4's `@theme` block, which emits them as CSS variables on `:root`.
Each `--color-<name>` gives every color utility: `bg-<name>`, `text-<name>`, `border-<name>`,
`from-/via-/to-<name>`, `divide-<name>`, `ring-<name>`, with opacity modifiers like `border-on-dark-glow/20`.

```css
:root {
  /* Brand */
  --color-brand-navy: #022a6c;
  --color-brand-navy-hover: #011e52;
  --color-brand-azure: #02a0e7;
  --color-brand-azure-tint: #e6f4fc;
  --color-brand-azure-tint-strong: #ddf0fb;
  --color-brand-red: #d01f33;
  --color-brand-red-hover: #b51a2c;
  --color-brand-red-tint: #fdecee;
  --color-brand-amber: #ffb547;
  /* Light surfaces */
  --color-canvas: #ffffff;
  --color-surface: #ffffff;
  --color-subtle: #f3f7fa;
  --color-line-subtle: #f1f5f9;
  --color-line: #e2e8f0;
  --color-line-strong: #cbd5e1;
  /* Text on light */
  --color-ink: #071b26;
  --color-body: #475569;
  --color-muted: #5b6b80;
  --color-link: #0270ad;
  --color-link-hover: #035481;
  --color-focus: #0270ad;
  /* Dark surfaces */
  --color-dark: #061a2b;
  --color-darker: #031522;
  --color-dark-raised: #0b2940;
  --color-on-dark: #ffffff;
  --color-on-dark-body: #cbd5e1;
  --color-on-dark-muted: #94a3b8;
  --color-on-dark-accent: #7dd1f5;
  --color-on-dark-glow: #5cc6f2;
  /* Status */
  --color-success: #15803d;
  --color-success-tint: #ecfdf3;
  --color-warning: #b45309;
  --color-warning-tint: #fff7e6;
  --color-error: #b42318;
  --color-error-tint: #fdecee;
}
```

Examples:

```html
<p class="eyebrow">Selected publications</p>                 <!-- link text + red tick -->
<h2 class="text-ink">…</h2>  <p class="text-body">…</p>  <p class="text-muted">…</p>
<a class="text-link hover:text-link-hover">Read more</a>
<section class="bg-dark text-on-dark"> <p class="text-on-dark-body">…</p> </section>
<article class="rounded-2xl border border-line bg-surface hover:border-brand-azure/40">…</article>
```

In plain CSS, use the variables directly: `color: var(--color-link);`. For a translucent brand
color, use `color-mix(in srgb, var(--color-brand-azure) 35%, transparent)`.

### Literal copies (keep in sync by hand)

Two places can't read CSS variables, so they hold literal copies of tokens:

- **`src/layouts/Layout.astro`**: `chromeColor`, the `<meta name="theme-color">` value (`darker` / `canvas`).
- **`src/pages/og/[...slug].png.ts`**: social share images, rendered by Satori.

The logo SVGs in `public/` use the logo's own colors, which equal `brand-navy`, `brand-azure` and `brand-red`.

### Future site-wide dark mode

The site has no dark-mode toggle (`lightAndDarkMode: false` in `src/config.ts`). Its dark sections
already use the dark tokens above. If a toggle is ever added, swap the tokens like this:

| Light token | becomes |
|---|---|
| `canvas` | `darker` |
| `surface` | `dark-raised` |
| `ink` | `on-dark` |
| `body` | `on-dark-body` |
| `muted` | `on-dark-muted` |
| `link` | `on-dark-accent` |
| `line` | `white` at 10% |

Brand fills stay the same.
