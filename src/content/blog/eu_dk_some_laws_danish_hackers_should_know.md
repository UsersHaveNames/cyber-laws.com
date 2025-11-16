---
title: "Danish Laws Hackers & Security Researchers Should Know"
description: "Overview of key Danish Penal Code provisions on unauthorized access, credential trafficking, privacy, sabotage, data fraud, handling stolen data, and payment instrument misuse."
pubDate: "Nov 16 2025"
updatedDate: "Nov 16 2025"
heroImage:
  src: "/images/hacker-behind-bars-intro.webp"
  alt: "Danish cyber law overview"
tags: ["denmark","danish","law","penal code","cybersecurity","compliance","hacking","legal","fraud","privacy"]
series: "EU + DK Cyber Law"
---

> This article summarizes selected provisions of the Danish Penal Code (Straffeloven) relevant to hacking / cybersecurity activities. Always consult the original Danish text or a qualified attorney for authoritative interpretation.

## Quick Reference Table
| Topic | Section | Core Offence | Base Max Penalty | Aggravated Max |
|-------|---------|--------------|------------------|----------------|
| Unauthorized system access & eavesdropping | §263 stk.1–3 | Illegal access / interception | 1.5 years | 6 years |
| Trafficking in access credentials | §263a | Selling / disseminating passwords or access means | 1.5 years | 6 years |
| Privacy disclosure (messages/images) | §264d | Unlawful disclosure of private messages/images | 6 months | 3 years |
| Critical infrastructure sabotage | §193 | Large disruption of public services / critical IT | 6 years | — |
| Property/data damage (vandalism) | §291 | Destroying or damaging property/data | 1.5 years | 6 years (gross) |
| Blocking use / denial-of-use | §293 stk.2 | Hindering owner’s use (e.g. ransomware, DoS) | 1 year | 2 years |
| Traditional fraud | §279 | Deceiving for unjust gain | Varies (serious up to 8 years) | 8 years |
| Data / computer fraud | §279a | Manipulating data processing for gain | Similar to §279 | 8 years |
| Handling stolen data / proceeds (hæleri) | §290 | Receiving / facilitating criminal proceeds or data | 1.5 years | 6 years |
| Payment instrument data misuse | §301 | Acquiring / distributing payment IDs (cards/accounts) | 1.5 years | 6 years |

---

## 1. Unauthorized Access & Interception – §263
**Stk.1 (Hacking):** Criminalizes obtaining unauthorized access to another person’s data system or data intended for a data system. Any intrusion without permission (accounts, servers, networks, local or cloud) qualifies.

**Stk.2 (Communications Privacy):** Opening sealed communications, reading private messages not intended for you, or secretly intercepting conversations is illegal even without system intrusion.

**Stk.3 (Aggravated):** Access/interception aimed at acquiring trade secrets or carried out under particularly aggravating circumstances (systematic, organized, espionage) raises penalty ceiling to 6 years.

Practical takeaways:
- "Just looking" without permission is still hacking.
- Passive sniffing / wiretapping counts if you are not an intended participant.
- Motive (trade secrets, scale) escalates consequences.

## 2. Credential Trafficking – §263a
Covers selling, distributing, obtaining, or passing on access means (passwords, tokens, codes) without authorization.

Key points:
- Wide dissemination or commercial sale of credentials → up to 1.5 years; large scale / organized → up to 6 years.
- Includes credentials for systems processing sensitive personal data (GDPR Art. 9) or criminal data (Art. 10), critical infrastructure systems, or paid-access services.
- Earlier §301a (paid systems) repealed; now merged into §263a.

Implication: Even sharing a single privileged password for a critical/sensitive system can be chargeable.

## 3. Privacy Disclosure – §264d
Unlawful disclosure of private messages, emails, photographs, or other images demanding privacy (including of deceased persons).
- Base penalty: fine or up to 6 months.
- Serious cases (scope, sensitive nature, wide dissemination) → up to 3 years.

Relevant for leaked chat dumps, doxxing with private photos, releasing exfiltrated mailboxes.

## 4. Critical Infrastructure Sabotage – §193
Unlawfully causing extensive disturbance to public services/infrastructure (transport, telecom, media, utilities, socially important IT systems).
- Intentional large-scale disruption (e.g., major DDoS against national services) → up to 6 years.
- Gross negligence can still trigger liability (lower penalty).

Focus: Scale + societal impact; distinguishes high-impact attacks from ordinary incidents.

## 5. Data / Property Damage – §291 (Vandalism)
Destroying, damaging, or disposing of another’s property includes digital assets (servers, data) when function/value is impaired.
- Malware wiping data, deliberate destructive scripting, physical damage to hardware all fall under base clause (up to 1.5 years).
- "Gross" vandalism (large scale, systematic, endangered public safety) → up to 6 years.

## 6. Blocking Use / Denial-of-Use – §293 stk.2
Unlawfully hindering another’s full or partial use of an object (including IT systems/data).
- Fits ransomware encryption, sustained DoS preventing normal operation, account lockouts.
- Penalty: up to 1 year; aggravated (systematic / organized / severe) → up to 2 years.

Distinct from §291: system not necessarily destroyed, but owner is prevented from using it.

## 7. Fraud & Data Fraud – §§279, 279a
**§279 (Bedrageri):** Intentional deception causing financial loss for unjust gain (classic phishing inducing wire transfer).

**§279a (Databedrageri):** Unlawful alteration, addition, deletion of data/programs or manipulation of processing results to obtain unjust gain.
- Examples: Editing transactional records, injecting fraudulent entries, changing account balances.
- Serious cases for both can reach up to 8 years.

Difference: §279 = deceiving a human; §279a = deceiving/altering the system.

## 8. Handling Stolen Data / Proceeds – §290 (Hæleri)
Receiving, acquiring, storing, transporting, assisting sale of criminally obtained proceeds (including stolen data, credentials, illicit access benefits).
- Buying leaked databases, reselling compromised accounts, hosting exfiltrated datasets → liability.
- Base: fine or up to 1.5 years; serious (professional, large-scale) → up to 6 years.

## 9. Payment Instrument Data Misuse – §301
Manufacturing, acquiring, possessing, or disseminating identifying information for payment instruments (cards, accounts) for unauthorized use.
- Includes algorithmically generated valid card numbers, harvested card dumps, online banking logins.
- Base: up to 1.5 years; organized / large-scale → up to 6 years.
- Physical card theft handled under other theft/forgery laws; §301 focuses on informational aspects.

## Attempts Are Punishable (Forsøg)
Under the Penal Code’s general rules on attempts, trying to commit an offence can be criminal even if it fails (e.g., a thwarted intrusion, blocked malware deployment, or unsuccessful DoS), once conduct goes beyond mere preparation. This applies to the offences discussed above unless otherwise provided in specific provisions.

## Practical Guidance for Security Researchers
- Obtain written authorization (scope, timeframe, systems) before any testing.
- Avoid extracting, retaining, or sharing credentials—report them through responsible channels.
- Never pivot into systems holding sensitive personal data unless explicitly scoped.
- Log only what is necessary for proof-of-concept; purge non-essential personal data immediately.
- Distinguish between demonstrating a vulnerability and exploiting it (avoid data alteration or disruption).
- Do not publish exploit code or PoC that includes live credentials or private datasets.

## Penalty Escalators (What Increases Risk)
- Commercial intent / profit motive.
- Systematic or organized campaigns.
- Targeting critical infrastructure or sensitive data sets.
- Large number of victims or broad dissemination of private information.
- Trade secrets / industrial espionage goals.

## Compliance Checklist (Abbreviated)
- [ ] Written permission from asset owner.
- [ ] Defined scope & channels for reporting.
- [ ] No unauthorized data extraction beyond minimal proof.
- [ ] Immediate credential sanitization in reports.
- [ ] No denial-of-service style testing without explicit consent.
- [ ] Segregate and securely delete accidental personal data.

## Conclusion
Danish law covers the spectrum from basic unauthorized access to complex data manipulation and financial instrument abuse. Penalties can escalate sharply (up to 6–8 years) for aggravated, high-impact, or profit-driven offences. Ethical hacking requires strict authorization, minimal data handling, and prompt responsible disclosure.

## Sources (selected)
- Straffeloven: §§ 193, 263, 263a, 264d, 279, 279a, 290, 291, 293, 301.
- Justitsministeriet – Cybercrime implementation notes.
- Retsadvokaterne articles on databedrageri.
- Danskelove / eLov consolidated law texts.

