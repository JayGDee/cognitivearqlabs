// Cognitive Arq Labs — Autonomous Discovery Catalog Data
// Add new validated hypotheses at the top of this array.

const HYPOTHESES_DATA = [
    {
        id: "EPI-2026-0142",
        title: "Cross-Domain Structural Isomorphism Between Mycorrhizal Nutrient Shunting and Tumor Microenvironment Metabolic Coupling",
        domain: "Biology",
        crossDomain: "Ecology × Oncology",
        date: "2026-11-10",
        sourcesCount: 14,
        redTeamScore: 94,
        status: "Available (Non-Exclusive)",
        abstract: "Comparative topological analysis of phosphorus-carbon exchange networks in arbuscular mycorrhizal fungi reveals a conserved transport-gating mechanism structurally isomorphic to lactate-glutamine shuttling between cancer-associated fibroblasts and hypoxic tumor cores. Targeting the analogous proton-coupled symporter may disrupt metabolic resilience without systemic toxicity.",
        // The fields below are only rendered when a researcher is logged in
        fullHypothesis: "Inhibition of MCT4-mediated lactate efflux combined with selective blockade of stromal glutamine synthetase mimics carbon-sink starvation observed in severed mycorrhizal hyphal networks, inducing synthetic lethality in hypoxic pancreatic ductal adenocarcinoma (PDAC) spheroids.",
        methodology: "In vitro co-culture of human PDAC organoids with primary cancer-associated fibroblasts (CAFs) under 1% O2 hypoxia. Four-arm factorial design comparing dual symporter inhibition against single-agent controls using 13C-labeled glucose/glutamine fluxomics.",
        powerAnalysis: "n = 12 biological replicates per arm provides 88% statistical power (alpha = 0.05, two-tailed) to detect a >=35% reduction in organoid ATP/ADP ratio based on prior CAF co-culture variance.",
        provenance: [
            "Source 1 [Verified]: Kiers et al. (2011) Science — Reciprocal rewards stabilize cooperation in the mycorrhizal symbiosis (DOI: 10.1126/science.1208473)",
            "Source 2 [Verified]: Sonveaux et al. (2008) J. Clin. Invest. — Targeting lactate-fueled respiration selectively kills hypoxic tumor cells (DOI: 10.1172/JCI36843)",
            "Source 3 [Verified]: Z3 Constraint Check #8841 — Topological flux conservation confirmed across 3 independent metabolic models."
        ]
    },
    {
        id: "EPI-2026-0139",
        title: "Phononic Bandgap Engineering in Quasi-Periodic Silicate Lattices for Sub-Kelvin Cryogenic Decoherence Suppression",
        domain: "Physics",
        crossDomain: "Condensed Matter × Quantum Computing",
        date: "2026-11-04",
        sourcesCount: 11,
        redTeamScore: 91,
        status: "Available (Non-Exclusive)",
        abstract: "Acoustic phonon scattering rules derived from volcanic pumice vesicle distributions demonstrate broadband thermal vibration attenuation in the 1–10 GHz regime. Applying this aperiodic void geometry to silicon-on-insulator substrates is predicted to suppress two-level system (TLS) dielectric loss in superconducting transmon qubits.",
        fullHypothesis: "Etching a Fibonacci-modulated aperiodic void lattice into high-resistivity silicon substrates creates a complete phononic bandgap spanning 3.5–7.2 GHz, extending superconducting transmon T1 relaxation times by >40% at 15 mK.",
        methodology: "Fabrication of coplanar waveguide resonators and transmon test chips on patterned vs. unpatterned float-zone silicon wafers. Cryogenic microwave spectroscopy at 15 mK measuring quality factor (Qi) across varying photon numbers.",
        powerAnalysis: "n = 18 resonators across 3 fabrication wafers per condition yields 90% power (alpha = 0.01) to resolve a 1.4x improvement in intrinsic quality factor Qi.",
        provenance: [
            "Source 1 [Verified]: Maldovan (2013) Nature — Sound and heat revolutions in phononics (DOI: 10.1038/nature12608)",
            "Source 2 [Verified]: Burnett et al. (2019) npj Quantum Inf. — Decoherence benchmarking of superconducting qubits (DOI: 10.1038/s41534-019-0168-5)",
            "Source 3 [Verified]: Z3 Constraint Check #8790 — Acoustic dispersion relation validated against finite-element boundary constraints."
        ]
    },
    {
        id: "EPI-2026-0131",
        title: "Nacre-Inspired Layered Boronate-Ester Vitrimers for Self-Healing Solid-State Lithium-Metal Electrolyte Interphases",
        domain: "Materials Science",
        crossDomain: "Biomimetics × Electrochemistry",
        date: "2026-10-22",
        sourcesCount: 16,
        redTeamScore: 89,
        status: "30-Day Exclusivity Available",
        abstract: "Brick-and-mortar platelet sliding mechanics in molluscan nacre prevent crack propagation under cyclic mechanical strain. Replicating this micro-architecture using dynamic covalent boronate-ester polymer binders and ceramic garnet platelets resolves dendrite-induced interfacial delamination in solid-state lithium batteries.",
        fullHypothesis: "A composite solid electrolyte incorporating 15 wt% aligned LLZO micro-platelets cross-linked via dynamic boronate-ester bonds heals interfacial micro-voids at 45°C under 1 MPa stack pressure, sustaining >1,000 cycles at 2 mA/cm2 without short-circuiting.",
        methodology: "Symmetric Li|Composite|Li cell cycling with in-situ electrochemical impedance spectroscopy (EIS) and X-ray micro-tomography before and after thermal self-healing cycles.",
        powerAnalysis: "n = 10 symmetric cells per group provides 85% power (alpha = 0.05) to detect a >=50% reduction in interfacial area-specific resistance growth over 500 cycles.",
        provenance: [
            "Source 1 [Verified]: Wegst et al. (2015) Nat. Mater. — Bioinspired structural materials (DOI: 10.1038/nmat4089)",
            "Source 2 [Verified]: Röttger et al. (2017) Science — High-performance vitrimers from commodity thermoplastics (DOI: 10.1126/science.aah5281)",
            "Source 3 [Verified]: Z3 Constraint Check #8712 — Ionic conductivity vs. shear modulus trade-off bounds satisfied."
        ]
    }
];
