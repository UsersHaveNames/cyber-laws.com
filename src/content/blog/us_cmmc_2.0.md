---
title: 'CMMC 2.0'
description: 'Summary of the U.S. Cybersecurity Maturity Model Certification (CMMC) 2.0: scope, levels, scoping rules, assessment processes for Levels 1 and 2.'
pubDate: 'Oct 14 2024'
updatedDate: 'Apr 21 2025'
heroImage:
  src: '/images/cmmc-intro.png'
  alt: 'CMMC 2.0 green text graphic'
tags: ["CMMC", "2.0", "US", "cybersecurity", "compliance", "requirements", "overview", "technical summary"]
series: 'US Standards'
---

Official documentation: https://dodcio.defense.gov/CMMC/Documentation/

---

## Introduction (5‑minute overview)
CMMC applies if BOTH of the following are true:

1. The project is contracted by or involves the U.S. Department of Defense (DoD) or other U.S. federal agencies.
2. The project involves handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).

The Cybersecurity Maturity Model Certification (CMMC) is a DoD framework to improve protection of sensitive unclassified information within the Defense Industrial Base (DIB). It focuses on safeguarding FCI and CUI—frequent targets of malicious activity.

## CMMC Levels
CMMC 2.0 defines three maturity levels:

- **Level 1 (Foundational)** – Basic safeguarding of FCI based on FAR 52.204-21 (basic cyber hygiene).
- **Level 2 (Advanced)** – Protection of CUI; implements NIST SP 800-171 Rev 2 practices.
- **Level 3 (Expert)** – (Forthcoming) Adds advanced controls from NIST SP 800-172 to counter Advanced Persistent Threats (APTs).

Each higher level builds on lower-level requirements. The model spans 14 domains (e.g., Access Control, Incident Response, Configuration Management, etc.). CMMC 2.0 reduced the prior five levels to three for simplicity and cost effectiveness.

## Certification Process (High Level)
Organizations are assessed against the practices for the target level. Certification assures DoD the contractor can protect required data types.

## Detailed Requirements by Level
### Level 1 (Foundational) – Protecting FCI
Implement basic practices including:
- **Access Control (AC)**: Limit system/information access; manage external connections.
- **Identification & Authentication (IA)**: Properly identify and authenticate users/devices.
- **Media Protection (MP)**: Sanitize or securely dispose of media containing FCI.
- **Physical Protection (PE)**: Restrict physical access; maintain visitor logs.
- **System & Information Integrity (SI)**: Maintain anti-malware; perform vulnerability scans.

### Level 2 (Advanced) – Protecting CUI
Adds/extends practices (in addition to Level 1):
- **Access Control (AC)**: Enforce least privilege; control CUI data flows.
- **Audit & Accountability (AU)**: Generate, retain, and review audit logs; alert on failures.
- **Configuration Management (CM)**: Establish baselines; track and approve changes.
- **Incident Response (IR)**: Define, test, report, and remediate incidents.
- **System & Communications Protection (SC)**: Encrypt CUI in transit and at rest; boundary protections.

### Level 3 (Expert)
Details pending; will layer NIST SP 800-172 to defend against sophisticated APT tactics.

## Scoping for Assessments
### Level 1 Scope (FCI)
Determine whether an asset processes, stores, or transmits FCI.
- **In-Scope Assets**: Any asset (servers, endpoints, paper records) handling FCI.
- **Out-of-Scope Assets**: Assets not touching FCI (e.g., unrelated IoT devices).
- **Specialized Assets**: Government property or test equipment may be treated out of scope if documented.

### Level 2 Scope (CUI & Protection Assets)
Focus on assets tied to CUI and security enforcement.
- **CUI Assets**: Directly process/store/transmit CUI (always in scope).
- **Security Protection Assets**: Firewalls, SIEM, IDS/IPS—protect CUI even if they do not store it.
- **Contractor Risk Managed Assets**: Potentially capable of handling CUI but restricted via policy—still identified.
- **Specialized Assets**: IoT, OT, or government property with CUI relevance; may have tailored assessment.
- **Out-of-Scope Assets**: Physically/logically separated from CUI systems.

## Self-Assessment – Level 1
### Preparation
Identify FCI-handling assets and define scope; map practices to those assets.

### Methods (per NIST SP 800-171A)
1. **Examine**: Policies, procedures, security plans, diagrams.
2. **Interview**: Personnel responsible for processes/controls.
3. **Test**: Verify technical control operation.

### Findings Categories
- **MET**: Fully implemented.
- **NOT MET**: Not implemented.
- **N/A**: Not applicable.

### Evidence & Reporting
Provide documentation, configurations, and results; submit required scores/results to the Supplier Performance Risk System (SPRS).

## Level 2 Assessment (Third-Party / C3PAO or Gov)
### Purpose
Validate protection of CUI per NIST SP 800-171.

### Scope Definition
Identify CUI assets plus supporting security protection assets.

### Methods
- **Examine** documentation and architecture.
- **Interview** responsible staff.
- **Test** configurations and technical enforcement.

### Findings & Evidence
Same categories (MET / NOT MET / N/A). Provide final evidence packages (policies, system configs, logs) to demonstrate compliance.

## Conclusion
CMMC 2.0 offers a streamlined path for Defense Industrial Base contractors to align cybersecurity controls with data sensitivity (FCI vs CUI) through tiered levels, defined scoping rules, and structured assessment methodologies.
