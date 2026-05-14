
export const artifactGuides = [
  {
    folder: "04_decision_entry_map",
    title: "Decision Entry Map",
    assetNames: [
      "decision_entry_map.svg",
      "decision_three_paths.svg",
      "decision_service_router.svg"
    ],
    purpose:
      "Explain how a client chooses between the three IOpartner entry points: standard deployment, technical consulting, and systems & operations.",
    depicts: [
      "A central client need or unclear technical situation.",
      "Three possible routes: Déploiement standard, Consulting technique, Systems & operations.",
      "A visual logic of decision, not a decorative diagram.",
      "The idea that IOpartner does not force every client into the same package.",
      "A clear separation between simple website delivery, advisory work, and deeper technical systems."
    ],
    pageUsage: [
      "Homepage section: Trois portes d’entrée claires.",
      "Pricing page explanation before the cards.",
      "Any section explaining how IOpartner avoids overbuilding.",
      "Sales material explaining the difference between standard, consulting, and systems work."
    ],
    visualStructure: [
      "Left side: Besoin / situation / problem node.",
      "Middle: routing fork, decision point, or evaluation layer.",
      "Right side: three destination cards.",
      "Use thin lines, soft curves, or angular paths to show choice.",
      "Do not make it look like a complex infrastructure map."
    ],
    requiredElements: [
      "Besoin",
      "Déploiement standard",
      "Consulting technique",
      "Systems & operations",
      "Short detail text under each route",
      "One highlighted recommended route state"
    ],
    variants: [
      "Light blueprint version for white sections.",
      "Dark version for advanced/service sections.",
      "Minimal version with only three route labels.",
      "Mobile stacked version."
    ],
    implementationNotes: [
      "Use HTML/CSS/SVG so labels stay editable.",
      "Use JS route anchors only if cards move responsively.",
      "Keep the visual readable without JS if possible.",
      "The diagram should answer: which door should I enter?",
      "Use the same node/card styling as lessons 01–03."
    ],
    avoid: [
      "Do not make it look like a real network diagram.",
      "Do not add too many branches.",
      "Do not add fake complex technical labels.",
      "Do not make all three options look equally primary if the page needs one CTA."
    ]
  },
  {
    folder: "05_consulting_scope_artifact",
    title: "Consulting Scope Artifact",
    assetNames: [
      "consulting_scope_artifact.svg",
      "consulting_decision_map.svg",
      "consulting_architecture_notes.svg",
      "consulting_delivery_map.svg"
    ],
    purpose:
      "Make consulting feel tangible by showing the artifact the client receives: scope, diagnosis, technical direction, and a clearer decision map.",
    depicts: [
      "A technical scope document.",
      "Annotated architecture notes.",
      "A before/after clarification map.",
      "A decision card that turns messy questions into a defensible next step.",
      "The output of a consulting session, not the call itself."
    ],
    pageUsage: [
      "Consulting section.",
      "Consulting pricing card.",
      "Service page: cadrage, arbitrage, déblocage.",
      "Sales slide or proposal explaining why paid diagnosis is useful."
    ],
    visualStructure: [
      "Use a paper/document/card metaphor.",
      "Include small annotated blocks: Contexte, Risque, Option, Recommandation.",
      "Show a route from messy input to clear scope.",
      "Use subtle handwritten/annotation feel without looking childish.",
      "Can include a small decision tree or architecture snippet inside the artifact."
    ],
    requiredElements: [
      "Besoin initial",
      "Contraintes",
      "Options",
      "Recommandation",
      "Scope",
      "Next step"
    ],
    variants: [
      "Document card version.",
      "Decision map version.",
      "Architecture notes version.",
      "Compact card for pricing page."
    ],
    implementationNotes: [
      "This visual should make consulting sellable.",
      "Keep text short and believable.",
      "Prefer abstract labels over fake client-specific data.",
      "Use light blueprint style for trust and clarity.",
      "Use the same icon chip system for notes, warnings, and scope markers."
    ],
    avoid: [
      "Do not make it look like a generic checklist.",
      "Do not overpromise exact deliverables.",
      "Do not show legal/financial-looking documents.",
      "Do not clutter the visual with full paragraphs."
    ]
  },
  {
    folder: "06_deployment_standard_preview",
    title: "Deployment Standard Preview",
    assetNames: [
      "deployment_standard_preview.svg",
      "deployment_standard_browser.svg",
      "deployment_standard_wireframes.svg",
      "deployment_standard_layouts.svg",
      "deployment_standard_stack.svg"
    ],
    purpose:
      "Represent the standard website deployment offer: a clean professional site delivered quickly without pretending to be a full custom software project.",
    depicts: [
      "Browser window previews.",
      "Website section wireframes.",
      "Responsive layout cards.",
      "A clean deployment-ready site structure.",
      "The idea of a fixed-scope web presence."
    ],
    pageUsage: [
      "Standard deployment section.",
      "Pricing page Pack Essentiel.",
      "Templates/models page.",
      "Homepage standard website offer block."
    ],
    visualStructure: [
      "Use browser frame or stacked page cards.",
      "Show 3–5 simple website sections.",
      "Use calm light blueprint style.",
      "Can show desktop/tablet/mobile silhouettes.",
      "Should feel simple, fast, and professional."
    ],
    requiredElements: [
      "Homepage",
      "Services",
      "Contact",
      "Responsive layout",
      "Fast delivery marker",
      "Fixed price marker"
    ],
    variants: [
      "Browser frame version.",
      "Three-card wireframe version.",
      "Responsive device version.",
      "Compact pricing-card version."
    ],
    implementationNotes: [
      "This visual should be simpler than the systems architecture visual.",
      "Use fewer nodes and fewer routes.",
      "Use more whitespace.",
      "Make it feel reliable, not advanced.",
      "Good candidate for pure SVG/CSS without JS."
    ],
    avoid: [
      "Do not make it look like custom SaaS.",
      "Do not include API/backend/monitoring nodes here.",
      "Do not overcomplicate the standard offer.",
      "Do not imply unlimited custom design."
    ]
  },
  {
    folder: "07_pricing_offer_layers",
    title: "Pricing Offer Layers",
    assetNames: [
      "pricing_offer_layers.svg",
      "pricing_service_stack.svg",
      "pricing_three_levels.svg",
      "pricing_scope_ladder.svg"
    ],
    purpose:
      "Explain IOpartner pricing as structured layers rather than random offers: standard deployment, consulting, and systems work.",
    depicts: [
      "Three service levels.",
      "A progression from simple to advanced.",
      "A scope ladder or layered stack.",
      "The difference between fixed-price launch work and custom systems work.",
      "Transparent Swiss billing logic."
    ],
    pageUsage: [
      "Pricing hero.",
      "Pricing explanation section.",
      "Sales proposal pricing overview.",
      "Offer comparison block."
    ],
    visualStructure: [
      "Use layered sheets, stacked cards, or horizontal level rows.",
      "Each layer should have label and short detail.",
      "Use dots or route markers to connect levels.",
      "Standard should feel fixed and simple.",
      "Systems should feel more advanced and custom."
    ],
    requiredElements: [
      "1. Standard",
      "2. Consulting",
      "3. Systems",
      "Déploiement rapide",
      "Arbitrage & cadrage",
      "Architecture & opérations"
    ],
    variants: [
      "Light pricing hero version.",
      "Dark advanced pricing version.",
      "Minimal ladder version.",
      "Mobile stacked version."
    ],
    implementationNotes: [
      "This is more of an explanatory visual than an infrastructure map.",
      "Strong candidate for SVG paths plus CSS cards.",
      "Use consistent pricing vocabulary from the site.",
      "Keep numbers out unless the section specifically needs them.",
      "Can reuse from the old pricing visual direction."
    ],
    avoid: [
      "Do not make it look like a SaaS subscription table.",
      "Do not add too many tiers.",
      "Do not make pricing look more complex than it is.",
      "Do not mix consulting and standard website deliverables too much."
    ]
  },
  {
    folder: "08_process_delivery_pipeline",
    title: "Process Delivery Pipeline",
    assetNames: [
      "process_delivery_pipeline.svg",
      "process_scope_sequence.svg",
      "process_deployment_flow.svg",
      "process_intervention_path.svg"
    ],
    purpose:
      "Show the client journey from first discussion to delivery and follow-up. This reduces uncertainty and makes IOpartner feel methodical.",
    depicts: [
      "A short delivery sequence.",
      "Cadrage, build, mise en ligne, suivi.",
      "A controlled process rather than improvisation.",
      "The difference between scope, production, launch, and continuity.",
      "A simple operational pipeline."
    ],
    pageUsage: [
      "Parcours section.",
      "Homepage method section.",
      "Proposal explanation.",
      "Service pages for standard deployment and systems work."
    ],
    visualStructure: [
      "Horizontal timeline on desktop.",
      "Vertical or compact stepped layout on mobile.",
      "Use numbered cards or nodes.",
      "Connect steps with thin lines or arrows.",
      "Use one active/highlighted step state."
    ],
    requiredElements: [
      "01 Cadrage",
      "02 Déploiement",
      "03 Mise en ligne",
      "04 Suivi",
      "Short detail under each step"
    ],
    variants: [
      "Standard website pipeline.",
      "Consulting intervention path.",
      "Systems delivery pipeline.",
      "Compact four-step mobile version."
    ],
    implementationNotes: [
      "Keep the process short.",
      "Do not show every internal task.",
      "Each step should be client-readable.",
      "Good place to use route lines learned in lesson 02.",
      "Use same node/card sizing as other visuals."
    ],
    avoid: [
      "Do not create a giant project management board.",
      "Do not use too many arrows.",
      "Do not imply timelines that are not guaranteed.",
      "Do not overload with operational jargon."
    ]
  },
  {
    folder: "09_ops_service_health",
    title: "Ops Service Health",
    assetNames: [
      "ops_service_health.svg",
      "ops_monitoring_dashboard.svg",
      "ops_uptime_visual.svg",
      "ops_incident_map.svg",
      "ops_continuity_panel.svg"
    ],
    purpose:
      "Visualize continuity, monitoring, incidents, uptime, and technical support as a premium operational layer.",
    depicts: [
      "Service health dashboard.",
      "Status dots and uptime bars.",
      "Monitoring checks.",
      "Incident path or alert flow.",
      "Continuity after launch."
    ],
    pageUsage: [
      "Continuity section.",
      "Systems & operations page.",
      "Advanced offer panel.",
      "Support/maintenance explanations."
    ],
    visualStructure: [
      "Dark dashboard panel.",
      "Metric cards with small numbers.",
      "Status rows with green/blue/neutral indicators.",
      "Uptime bars or check rows.",
      "Small incident route or alert timeline."
    ],
    requiredElements: [
      "Services",
      "Checks",
      "Incidents",
      "Uptime",
      "Alerts",
      "Last deploy or last backup"
    ],
    variants: [
      "Service health card.",
      "Monitoring dashboard.",
      "Incident map.",
      "Continuity panel."
    ],
    implementationNotes: [
      "Avoid fake enterprise chaos.",
      "Use realistic but generic numbers.",
      "Good candidate for dark theme.",
      "Use subtle status colors only.",
      "Should feel operational and calm."
    ],
    avoid: [
      "Do not make it look like a crypto dashboard.",
      "Do not use too many charts.",
      "Do not show fake sensitive data.",
      "Do not use red unless showing a controlled incident example."
    ]
  },
  {
    folder: "10_extensions_module_stack",
    title: "Extensions Module Stack",
    assetNames: [
      "extensions_module_stack.svg",
      "extensions_operational_addons.svg",
      "extensions_integration_panel.svg",
      "extensions_addon_routes.svg"
    ],
    purpose:
      "Show optional operational add-ons such as WhatsApp, Calendly, forms, automations, analytics, and simple workflows without making the base website look bloated.",
    depicts: [
      "A base website with optional modules.",
      "Operational add-ons connected to the site.",
      "Small integrations rather than full systems.",
      "The idea of adding only what is useful.",
      "A clean modular upsell structure."
    ],
    pageUsage: [
      "Extensions opérationnelles section.",
      "Pricing add-ons card.",
      "Standard deployment page.",
      "Sales explanation for optional modules."
    ],
    visualStructure: [
      "Base website card at center or left.",
      "Small module chips around it.",
      "Thin routes connecting add-ons.",
      "Use simple module names.",
      "Can be light or dark depending on page context."
    ],
    requiredElements: [
      "Website",
      "WhatsApp",
      "Calendly",
      "Formulaire",
      "Automation",
      "Analytics or tracking"
    ],
    variants: [
      "Module stack.",
      "Integration panel.",
      "Add-on route map.",
      "Compact pricing add-ons visual."
    ],
    implementationNotes: [
      "This should look lighter than the systems architecture panel.",
      "Use icon chips heavily.",
      "Good candidate for reusable node icon library.",
      "Avoid making add-ons look mandatory.",
      "Can be used inside pricing cards."
    ],
    avoid: [
      "Do not make it look like huge enterprise integration.",
      "Do not include too many third-party logos.",
      "Do not use official brand logos unless licensing is clear.",
      "Do not make extensions look like hidden fees."
    ]
  },
  {
    folder: "11_trust_icon_set",
    title: "Trust Icon Set",
    assetNames: [
      "icon_facturation_suisse.svg",
      "icon_paiement_securise.svg",
      "icon_livraison_rapide.svg",
      "icon_prix_clair.svg",
      "icon_support_local.svg"
    ],
    purpose:
      "Create small consistent trust icons for pricing, checkout, proposal, and footer sections.",
    depicts: [
      "Swiss billing.",
      "Secure payment.",
      "Fast delivery.",
      "Clear price.",
      "Local/technical support.",
      "Clean handoff."
    ],
    pageUsage: [
      "Pricing page trust row.",
      "Offer cards.",
      "Footer trust strip.",
      "Pack Essentiel section.",
      "Proposal PDFs or brochures."
    ],
    visualStructure: [
      "Small SVG icons in a consistent chip or outline style.",
      "Same viewBox, same stroke width, same corner radius.",
      "Prefer line icons, not filled illustrations.",
      "Must work at 16px, 24px, 32px, and 48px.",
      "Should have light and dark usage rules."
    ],
    requiredElements: [
      "Facturation en Suisse",
      "Paiement sécurisé",
      "Livraison rapide",
      "Prix clair",
      "Support local"
    ],
    variants: [
      "Standalone icon.",
      "Icon chip.",
      "Icon + label row.",
      "Dark footer icon."
    ],
    implementationNotes: [
      "Use 24x24 SVG viewBox.",
      "Use stroke-width around 1.75.",
      "Use round linecap and linejoin.",
      "Keep icons visually balanced.",
      "Track any source if adapting from icon libraries."
    ],
    avoid: [
      "Do not use random mixed icon libraries without normalization.",
      "Do not use flags excessively.",
      "Do not over-detail Swiss billing icon.",
      "Do not export PNG unless required."
    ]
  },
  {
    folder: "12_node_icon_library",
    title: "Node Icon Library",
    assetNames: [
      "node_api.svg",
      "node_dns.svg",
      "node_vps.svg",
      "node_crm.svg",
      "node_backup.svg",
      "node_monitoring.svg",
      "node_automation.svg",
      "node_website.svg",
      "node_ssl.svg",
      "node_deploy.svg",
      "node_database.svg",
      "node_forms.svg",
      "node_calendar.svg",
      "node_whatsapp.svg",
      "node_security.svg"
    ],
    purpose:
      "Create the reusable icon/node vocabulary used across all IOpartner diagrams.",
    depicts: [
      "Technical services as consistent node objects.",
      "Infrastructure concepts in a single visual language.",
      "Reusable icons wrapped in the same node shell.",
      "A normalized system for diagrams, cards, and exports."
    ],
    pageUsage: [
      "All topology diagrams.",
      "Systems panels.",
      "Extensions module stack.",
      "Pricing cards.",
      "Trust sections when relevant."
    ],
    visualStructure: [
      "Each node has icon chip, label, optional detail.",
      "Each icon uses same 24x24 coordinate system.",
      "Each node shell uses same radius, padding, border, and shadow.",
      "Create light and dark node styles.",
      "Store source icons separately from normalized outputs."
    ],
    requiredElements: [
      "API",
      "DNS",
      "VPS",
      "CRM",
      "Backup",
      "Monitoring",
      "Automation",
      "Website",
      "SSL",
      "Deploy",
      "Database",
      "Forms",
      "Calendar",
      "WhatsApp",
      "Security"
    ],
    variants: [
      "Icon only.",
      "Icon chip.",
      "Node card.",
      "Compact node.",
      "Dark node.",
      "Light node."
    ],
    implementationNotes: [
      "This is the core dependency for future diagrams.",
      "Do not mix line weights.",
      "Normalize all icons before use.",
      "Prefer inline SVG for components.",
      "Export final standalone SVGs only after style is stable."
    ],
    avoid: [
      "Do not use logos as generic nodes.",
      "Do not mix filled and outline icons.",
      "Do not let one icon feel visually heavier than the others.",
      "Do not create duplicate concepts with different names."
    ]
  },
  {
    folder: "13_background_topology_fragments",
    title: "Background Topology Fragments",
    assetNames: [
      "bg_grid_subtle.svg",
      "bg_blueprint_texture.svg",
      "bg_dark_topology_texture.svg",
      "bg_footer_topology.svg",
      "topology_fragment_routes.svg",
      "topology_fragment_cluster.svg",
      "topology_fragment_corner.svg",
      "topology_fragment_nodes.svg"
    ],
    purpose:
      "Create reusable background textures and topology fragments that make the site feel cohesive without requiring a full illustration in every section.",
    depicts: [
      "Subtle grid textures.",
      "Route fragments.",
      "Corner markers.",
      "Small node clusters.",
      "Footer topology atmosphere.",
      "Blueprint-style section backgrounds."
    ],
    pageUsage: [
      "Global page backgrounds.",
      "Footer.",
      "Hero sections.",
      "Dark systems sections.",
      "Cards that need subtle technical texture.",
      "Print/brochure backgrounds."
    ],
    visualStructure: [
      "Mostly decorative and low opacity.",
      "Should support content, not compete with it.",
      "Can be pure CSS, inline SVG, or exported SVG.",
      "Should include light and dark variants.",
      "Should be tileable or safely cropped when possible."
    ],
    requiredElements: [
      "Subtle grid",
      "Route arcs",
      "Dashed inner frame",
      "Corner markers",
      "Small route dots",
      "Optional node cluster"
    ],
    variants: [
      "Light grid.",
      "Dark topology texture.",
      "Footer route background.",
      "Cluster fragment.",
      "Corner fragment.",
      "Horizontal route fragment.",
      "Vertical route fragment."
    ],
    implementationNotes: [
      "Opacity is the main control.",
      "Most textures should sit under 8% visual strength.",
      "Use CSS backgrounds when possible.",
      "Export SVG fragments for reuse in Astro components.",
      "Avoid depending on raster images."
    ],
    avoid: [
      "Do not make backgrounds too visible.",
      "Do not repeat obvious patterns awkwardly.",
      "Do not place important information in background fragments.",
      "Do not use PNG unless needed for print/export."
    ]
  },
  {
    folder: "14_iopartner_visual_kit",
    title: "IOpartner Visual Kit",
    assetNames: [
      "hero_topology_primary.svg",
      "systems_architecture_dark.svg",
      "decision_entry_map.svg",
      "consulting_scope_artifact.svg",
      "deployment_standard_preview.svg",
      "pricing_offer_layers.svg",
      "process_delivery_pipeline.svg",
      "ops_service_health.svg",
      "extensions_module_stack.svg",
      "bg_footer_topology.svg"
    ],
    purpose:
      "Final production kit that consolidates the reusable IOpartner visual system into web-ready and export-ready assets.",
    depicts: [
      "The complete IOpartner visual language.",
      "Final approved components.",
      "Reusable assets for website, print, and proposals.",
      "A consistent technical identity across all sections.",
      "The difference between source experiments and production assets."
    ],
    pageUsage: [
      "Website production integration.",
      "Astro components.",
      "Proposal visuals.",
      "Brochures and flyers.",
      "Future client variants."
    ],
    visualStructure: [
      "Organize final assets by category.",
      "Keep source components separate from exports.",
      "Include naming rules.",
      "Include light/dark usage examples.",
      "Include export checklist."
    ],
    requiredElements: [
      "Hero topology",
      "Systems architecture",
      "Decision map",
      "Consulting artifact",
      "Standard deployment preview",
      "Pricing layers",
      "Process pipeline",
      "Ops health",
      "Extensions stack",
      "Trust icons",
      "Node library",
      "Background fragments"
    ],
    variants: [
      "SVG source.",
      "Web component.",
      "PNG export.",
      "Dark variant.",
      "Light variant.",
      "Mobile variant."
    ],
    implementationNotes: [
      "This folder should not be experimental.",
      "Only promote assets here after they are visually approved.",
      "Use strict naming.",
      "Document where each asset is used.",
      "Keep exports reproducible."
    ],
    avoid: [
      "Do not store half-finished experiments here.",
      "Do not duplicate source files without naming clarity.",
      "Do not mix client-specific variants with core IOpartner assets.",
      "Do not keep unused exports."
    ]
  }
];
