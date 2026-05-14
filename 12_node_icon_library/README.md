# 12 — Node Icon Library

## Purpose

Create the reusable icon/node vocabulary used across all IOpartner diagrams.

---

## What this artifact depicts

- Technical services as consistent node objects.
- Infrastructure concepts in a single visual language.
- Reusable icons wrapped in the same node shell.
- A normalized system for diagrams, cards, and exports.

---

## Where it is used

- All topology diagrams.
- Systems panels.
- Extensions module stack.
- Pricing cards.
- Trust sections when relevant.

---

## Visual structure

- Each node has icon chip, label, optional detail.
- Each icon uses same 24x24 coordinate system.
- Each node shell uses same radius, padding, border, and shadow.
- Create light and dark node styles.
- Store source icons separately from normalized outputs.

---

## Required elements

- API
- DNS
- VPS
- CRM
- Backup
- Monitoring
- Automation
- Website
- SSL
- Deploy
- Database
- Forms
- Calendar
- WhatsApp
- Security

---

## Variants to consider

- Icon only.
- Icon chip.
- Node card.
- Compact node.
- Dark node.
- Light node.

---

## Implementation notes

- This is the core dependency for future diagrams.
- Do not mix line weights.
- Normalize all icons before use.
- Prefer inline SVG for components.
- Export final standalone SVGs only after style is stable.

---

## Avoid

- Do not use logos as generic nodes.
- Do not mix filled and outline icons.
- Do not let one icon feel visually heavier than the others.
- Do not create duplicate concepts with different names.

---

## Expected asset names

```txt
node_api.svg
node_dns.svg
node_vps.svg
node_crm.svg
node_backup.svg
node_monitoring.svg
node_automation.svg
node_website.svg
node_ssl.svg
node_deploy.svg
node_database.svg
node_forms.svg
node_calendar.svg
node_whatsapp.svg
node_security.svg
```

---

## Quality checklist

- Consistent with IOpartner visual language.
- Uses the shared grid, node, route, and icon system where relevant.
- Works in desktop and mobile contexts.
- Labels remain editable in source.
- SVG-first unless a PNG export is explicitly needed.
- Does not introduce a new unrelated illustration style.
- Can be reused or adapted in future client projects.

