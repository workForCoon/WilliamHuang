export const projects = [
  {
    id: "spectral-identifiability-principle",
    title: "Spectral Identifiability Principle",
    type: "Research Program",
    year: "2025",
    summary:
      "A Fisher-spectral framework explaining why retrained networks can remain accurate but produce inconsistent explanations. The work treats explanation drift as a geometric identifiability problem governed by eigengap and finite-sample perturbation.",
    image: "",
    tags: ["Fisher Geometry", "Eigenspace Stability", "Interpretable Learning"],
    links: {
      summary: "docs/William_Huang_Research_Summary.pdf"
    }
  },
  {
    id: "spectral-threshold-perspective",
    title: "Spectral Thresholds for Dynamic Stability",
    type: "Research Program",
    year: "2025",
    summary:
      "A threshold view of learning stability where Fisher curvature defines when optimization remains stable under noise, when local minima become indistinguishable, and how regularization can lift the Fisher spectrum.",
    image: "",
    tags: ["Optimization Stability", "Finite-Sample Theory", "Fisher Curvature"],
    links: {
      summary: "docs/William_Huang_Research_Summary.pdf"
    }
  },
  {
    id: "healthcare-bayesian-modeling",
    title: "Hierarchical Bayesian Rare-Event Modeling",
    type: "Applied Research",
    year: "2020",
    summary:
      "A hospital-level Bayesian modeling framework for rare-event estimation under urban-rural heterogeneity, achieving AUC 0.95 and supporting interventions benefiting about 1,600 patients annually.",
    image: "",
    tags: ["Bayesian Inference", "Healthcare", "Uncertainty Quantification"],
    links: {}
  },
  {
    id: "industrial-counterfactual-model",
    title: "Industrial Counterfactual Modeling at TSMC",
    type: "Applied Research",
    year: "2022-2025",
    summary:
      "A likelihood and counterfactual modeling workflow for heterogeneous industrial conditions that reduced Type-I error from 7% to 3% and avoided about USD 100K weekly loss.",
    image: "",
    tags: ["Counterfactual Modeling", "Likelihood Methods", "Industrial Statistics"],
    links: {}
  }
];
