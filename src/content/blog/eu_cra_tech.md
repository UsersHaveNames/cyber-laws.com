---
title: 'Cyber Resilience Act (CRA) – technical summary'
description: 'Technical overview of CRA scope, timelines, product classes, baseline requirements, and conformity assessment.'
pubDate: 'Oct 11 2024'
updatedDate: 'May 02 2025'
heroImage:
  src: '/images/cra-tech-intro.webp'
  alt: 'Cyber Resilience Act technical summary'
tags: ["CRA","EU","regulation","cyber resilience act","cybersecurity","compliance","products with digital elements","important products","critical products","requirements","conformity","CE"]
series: "CRA"
---

For a mapping of existing standards to CRA requirements, see: <https://www.linkedin.com/pulse/enisa-publishes-cra-mapping-all-major-existing-standards-mungiu-tdxuc>

This is a technical summary. For a legal summary, see our other article: <https://cyber-laws.com/2024/10/11/understanding-the-eu-cyber-resilience-act-cra-a-technical-summary/>

---

The Council of the EU adopted the Cyber Resilience Act on October 10, 2024. The CRA is an EU regulation that sets security requirements for software, hardware and digital services across the full product lifecycle (design, development, delivery, and maintenance), including mandatory security updates and vulnerability management for products placed on the EU market.

## What does it mean that the CRA is a Regulation?
A regulation applies uniformly in all EU Member States without needing national transposition (unlike directives such as NIS2). The same legal requirements apply directly across the EU.

## When does the CRA apply?
The CRA will be fully applicable starting November 2027. Manufacturers must meet the CRA requirements by then to continue placing products on the market.

## Product categories and what changes

### Important Products with Digital Elements (Class I)
- Examples: identity management systems, VPNs, routers, smart‑home security devices.
- Applicable requirements:
  - Secure-by-default configuration, vulnerability handling, data confidentiality and integrity, access control, attack surface minimization.
- Technical documentation includes:
  - Product description and design, vulnerability handling processes, security update policy, SBOM.
- Conformity assessment:
  - Internal control procedure (Annex VIII, Part I). Manufacturer ensures compliance and affixes CE marking.

### Important Products with Digital Elements (Class II)
- Examples: firewalls, intrusion detection systems, health-tracking wearables.
- Applicable requirements:
  - Secure design and development, continuous vulnerability management, exploitation mitigation techniques.
- Technical documentation includes:
  - Same as Class I with emphasis on vulnerability disclosure policy and secure update distribution.
- Conformity assessment:
  - EU‑type examination (Annex VIII, Part II), including third‑party validation of security design and vulnerability handling.

### Critical Products with Digital Elements
- Examples: smart meter gateways, smartcards, hardware devices with security boxes.
- Applicable requirements:
  - High‑assurance cybersecurity, regular security updates, critical dependency management.
- Technical documentation includes:
  - Detailed risk assessment, SBOM, test reports, coordinated vulnerability disclosure (CVD) policy.
- Conformity assessment:
  - Full quality assurance (Annex VIII, Part IV) covering development, production and vulnerability handling.

## Baseline across all categories
- Security by design and by default, timely and secure updates, minimized attack surface.
- Vulnerability handling process: identify, document, remediate and communicate appropriately to users.
- Technical documentation covering risk assessments, updates, and security design/processes.
- Conformity assessment route depends on class (internal control, EU‑type examination, or full quality assurance).

## References
- CRA on EUR‑Lex: <https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>
- Engineering discussion hub: <https://github.com/orcwg/cra-hub/issues>
