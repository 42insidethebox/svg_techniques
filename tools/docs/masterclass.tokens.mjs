
export const masterclass = {
  repoName: "SVG Techniques",
  repoSubtitle: "Reusable technical visual systems for modern web interfaces.",
  positioning:
    "A structured workspace for building professional SVG, CSS, and browser-based technical visuals for websites, SaaS interfaces, infrastructure pages, dashboards, and print assets.",

  tokens: {
    colors: {
      blue: "#2563eb",
      navy: "#0f172a",
      dark: "#061120",
      panel: "#f8fbff",
      muted: "#64748b",
      cyan: "#93c5fd"
    },
    geometry: {
      gridSize: "32px",
      panelRadius: "28px",
      nodeRadius: "16px",
      iconStroke: "1.75",
      routeOpacity: "0.28",
      gridOpacity: "0.055"
    },
    principles: [
      "Reusable over one-off",
      "SVG-first where possible",
      "Low opacity over loud effects",
      "Thin strokes over heavy lines",
      "Consistent spacing over decorative complexity",
      "One accent color before multiple colors",
      "Components before individual drawings",
      "Export PNG only when fixed raster output is required"
    ]
  },

  learningPath: [
    {
      folder: "01_premium_grid_blueprint_arcs",
      title: "Premium Grid + Blueprint Arcs",
      level: "Foundation",
      goal: "Build the base visual language for clean technical website backgrounds.",
      skills: [
        "CSS grid backgrounds",
        "layered radial gradients",
        "SVG route arcs",
        "subtle dashed blueprint lines",
        "corner markers",
        "node card placement"
      ],
      techniques: [
        "Use low-opacity grid lines instead of heavy texture.",
        "Place SVG curves behind cards as architectural atmosphere.",
        "Use `viewBox='0 0 100 100'` for easy path positioning.",
        "Use `vector-effect='non-scaling-stroke'` to keep lines stable.",
        "Keep the color system restrained."
      ],
      exercises: [
        "Create one light blueprint panel.",
        "Create one dark blueprint panel.",
        "Add three route arcs and two ghost arcs.",
        "Add four node cards using the same component style.",
        "Change the accent color without breaking the composition."
      ],
      outputs: [
        "bg_grid_subtle.svg",
        "hero_topology_minimal.svg",
        "topology_fragment_routes.svg"
      ]
    },
    {
      folder: "02_svg_lines_paths_curves",
      title: "SVG Lines, Paths + Curves",
      level: "Core SVG",
      goal: "Understand enough SVG path drawing to create route systems without manual illustration tools.",
      skills: [
        "M, L, H, V path commands",
        "cubic Bézier curves",
        "stroke caps and joins",
        "dash arrays",
        "route dots",
        "path layering"
      ],
      techniques: [
        "`M x y` moves the pen.",
        "`L x y` draws a straight line.",
        "`H x` and `V y` create clean orthogonal route segments.",
        "`C x1 y1, x2 y2, x y` creates smooth architecture arcs.",
        "Use opacity and stroke width to create hierarchy."
      ],
      exercises: [
        "Draw five straight technical route fragments.",
        "Draw five soft architectural arcs.",
        "Create dashed ghost routes.",
        "Add route dots at important intersections.",
        "Create a reusable SVG route fragment file."
      ],
      outputs: [
        "topology_fragment_horizontal.svg",
        "topology_fragment_vertical.svg",
        "topology_fragment_corner.svg",
        "topology_fragment_cluster.svg"
      ]
    },
    {
      folder: "03_node_cards_icon_chips",
      title: "Node Cards + Icon Chips",
      level: "Component System",
      goal: "Create reusable technical node components for DNS, API, CRM, VPS, backup, monitoring, and automation.",
      skills: [
        "node shell design",
        "icon chip design",
        "SVG icon normalization",
        "light/dark variants",
        "label hierarchy",
        "consistent component sizing"
      ],
      techniques: [
        "Do not use raw icons alone.",
        "Wrap every icon inside the same node shell.",
        "Use the same stroke width and icon size everywhere.",
        "Keep labels short.",
        "Use detail text only where there is enough space."
      ],
      exercises: [
        "Create node_api.",
        "Create node_dns.",
        "Create node_vps.",
        "Create node_crm.",
        "Create node_backup.",
        "Create node_monitoring.",
        "Create node_automation."
      ],
      outputs: [
        "node_api.svg",
        "node_dns.svg",
        "node_vps.svg",
        "node_crm.svg",
        "node_backup.svg",
        "node_monitoring.svg",
        "node_automation.svg"
      ]
    },
    {
      folder: "04_topology_maps_api_systems",
      title: "Topology Maps + API Systems",
      level: "Composition",
      goal: "Compose node cards, route arcs, and background grids into complete system diagrams.",
      skills: [
        "center-core layouts",
        "surrounding node placement",
        "non-literal architectural routes",
        "visual hierarchy",
        "hero topology layout",
        "systems topology layout"
      ],
      techniques: [
        "Use cards for information and routes for atmosphere.",
        "Avoid fake exact connectors unless you build anchor logic.",
        "Central API nodes should be visually stronger than secondary nodes.",
        "Keep topology labels business-readable.",
        "Hide unnecessary detail on mobile."
      ],
      exercises: [
        "Create an API-centered hero map.",
        "Create a backend topology map.",
        "Create a minimal topology map without labels.",
        "Create a dark infrastructure topology map.",
        "Export SVG and PNG versions."
      ],
      outputs: [
        "hero_topology_primary.svg",
        "systems_backend_topology.svg",
        "systems_infrastructure_map.svg"
      ]
    },
    {
      folder: "05_dark_enterprise_panels",
      title: "Dark Enterprise Panels",
      level: "Visual Polish",
      goal: "Build dark technical panels for systems, operations, backend, and infrastructure sections.",
      skills: [
        "dark navy backgrounds",
        "cyan line systems",
        "glass node cards",
        "inset highlights",
        "dashboard-like hierarchy",
        "reduced glow"
      ],
      techniques: [
        "Use dark backgrounds with controlled contrast.",
        "Avoid neon gaming aesthetics.",
        "Use cyan/blue as signal, not decoration.",
        "Keep cards semi-transparent but readable.",
        "Use small status marks sparingly."
      ],
      exercises: [
        "Create a dark systems panel.",
        "Create a dark backend topology.",
        "Create a dark monitoring cluster.",
        "Create a dark footer topology background."
      ],
      outputs: [
        "systems_architecture_dark.svg",
        "systems_monitoring_cluster.svg",
        "bg_dark_topology_texture.svg"
      ]
    },
    {
      folder: "06_process_delivery_flows",
      title: "Process + Delivery Flows",
      level: "Service Visuals",
      goal: "Create process visuals for consulting, deployment, scope, delivery, and client workflows.",
      skills: [
        "timeline layouts",
        "step cards",
        "process routes",
        "sequence markers",
        "deployment flow visuals",
        "decision paths"
      ],
      techniques: [
        "Use fewer steps than the real process.",
        "Make each step visually distinct but not oversized.",
        "Use route lines to imply progression.",
        "Use labels that match client language.",
        "Keep process flows horizontally readable on desktop."
      ],
      exercises: [
        "Create a three-step deployment flow.",
        "Create a five-step delivery pipeline.",
        "Create a consulting scope sequence.",
        "Create an intervention path map."
      ],
      outputs: [
        "process_deployment_flow.svg",
        "process_delivery_pipeline.svg",
        "process_scope_sequence.svg",
        "process_intervention_path.svg"
      ]
    },
    {
      folder: "07_ops_monitoring_dashboards",
      title: "Ops Monitoring Dashboards",
      level: "Operational UI",
      goal: "Create monitoring, uptime, service health, and incident visuals that feel credible.",
      skills: [
        "metric cards",
        "status indicators",
        "uptime bars",
        "incident timelines",
        "health clusters",
        "dashboard rhythm"
      ],
      techniques: [
        "Use realistic metrics sparingly.",
        "Avoid fake complicated dashboards.",
        "Use status dots and small bars to imply monitoring.",
        "Use spacing and contrast to communicate reliability.",
        "Do not overload the panel."
      ],
      exercises: [
        "Create a service health card.",
        "Create a small uptime panel.",
        "Create an incident route map.",
        "Create a monitoring dashboard hero."
      ],
      outputs: [
        "ops_monitoring_dashboard.svg",
        "ops_uptime_visual.svg",
        "ops_incident_map.svg",
        "ops_service_health.svg"
      ]
    },
    {
      folder: "08_background_textures_fragments",
      title: "Background Textures + Fragments",
      level: "Reusable Assets",
      goal: "Create subtle backgrounds and topology fragments reusable across websites and print assets.",
      skills: [
        "CSS grid textures",
        "SVG route fragments",
        "footer backgrounds",
        "blueprint overlays",
        "graphite gradients",
        "fragment naming"
      ],
      techniques: [
        "Backgrounds should support content, not compete with it.",
        "Texture opacity should often be below 8%.",
        "Fragments should be exportable and composable.",
        "Use consistent naming for asset reuse.",
        "Create both light and dark variants."
      ],
      exercises: [
        "Create bg_grid_subtle.",
        "Create bg_blueprint_texture.",
        "Create bg_graphite_gradient.",
        "Create bg_footer_topology.",
        "Create seven topology fragments."
      ],
      outputs: [
        "bg_grid_subtle.svg",
        "bg_blueprint_texture.svg",
        "bg_graphite_gradient.svg",
        "bg_footer_topology.svg",
        "topology_fragment_routes.svg"
      ]
    },
    {
      folder: "09_responsive_hero_visuals",
      title: "Responsive Hero Visuals",
      level: "Production Layout",
      goal: "Make technical visuals work inside real responsive hero sections.",
      skills: [
        "aspect-ratio control",
        "responsive node density",
        "mobile simplification",
        "hero image replacement",
        "content-safe composition",
        "component constraints"
      ],
      techniques: [
        "Use `aspect-ratio` for stable desktop visuals.",
        "On mobile, hide detail instead of shrinking everything.",
        "Never let decorative visuals hurt headline readability.",
        "Treat hero visuals as supporting architecture.",
        "Use SVG for sharpness and PNG fallback only when necessary."
      ],
      exercises: [
        "Create a desktop hero topology.",
        "Create a mobile simplified topology.",
        "Create a hero with left copy and right visual.",
        "Test the visual at 1440px, 1024px, 768px, and 390px."
      ],
      outputs: [
        "responsive_hero_topology.svg",
        "hero_topology_mobile.svg"
      ]
    },
    {
      folder: "10_export_svg_png_workflow",
      title: "Export SVG + PNG Workflow",
      level: "Production",
      goal: "Turn browser-based visuals into reusable SVG and PNG assets.",
      skills: [
        "SVG export",
        "PNG screenshot export",
        "asset naming",
        "optimization",
        "license tracking",
        "web vs print output"
      ],
      techniques: [
        "Use SVG for website visuals when possible.",
        "Use PNG for fixed print/social assets.",
        "Keep source components separate from exports.",
        "Track external icon licenses.",
        "Optimize SVG before production use."
      ],
      exercises: [
        "Export a hero visual as SVG.",
        "Export the same visual as PNG.",
        "Create a naming convention.",
        "Create an export checklist.",
        "Add license notes for imported icons."
      ],
      outputs: [
        "assets/exports/svg",
        "assets/exports/png",
        "references/license_notes.md"
      ]
    },
    {
      folder: "11_client_variants_templates",
      title: "Client Variants + Templates",
      level: "Business Reuse",
      goal: "Build reusable visual templates that can be adapted quickly for different client websites.",
      skills: [
        "template duplication",
        "label swaps",
        "icon swaps",
        "theme swaps",
        "layout presets",
        "client-safe naming"
      ],
      techniques: [
        "Change content first, not style.",
        "Use the same node system across clients.",
        "Create industry-specific variants only when needed.",
        "Avoid custom illustration scope creep.",
        "Make every reusable pattern easy to explain."
      ],
      exercises: [
        "Create a generic SME topology.",
        "Create a law firm internal system visual.",
        "Create a local service business deployment visual.",
        "Create a monitoring panel for a maintenance offer."
      ],
      outputs: [
        "client_topology_template.svg",
        "client_process_template.svg",
        "client_ops_template.svg"
      ]
    },
    {
      folder: "12_iopartner_visual_kit",
      title: "IOpartner Visual Kit",
      level: "Final System",
      goal: "Consolidate the reusable production assets for IOpartner.",
      skills: [
        "visual kit organization",
        "asset naming",
        "brand consistency",
        "production exports",
        "website integration",
        "print adaptation"
      ],
      techniques: [
        "Keep one visual grammar across all IOpartner assets.",
        "Reuse the same nodes, grids, routes, and card styles.",
        "Separate source assets from exported files.",
        "Export only what is needed.",
        "Document rules so future assets stay consistent."
      ],
      exercises: [
        "Create the core hero topology.",
        "Create the systems architecture panel.",
        "Create node icons.",
        "Create background fragments.",
        "Create brochure-ready exports."
      ],
      outputs: [
        "hero_topology_primary.svg",
        "systems_architecture_panel.svg",
        "process_delivery_pipeline.svg",
        "ops_monitoring_dashboard.svg",
        "node_api.svg",
        "node_vps.svg",
        "node_crm.svg"
      ]
    }
  ]
};
