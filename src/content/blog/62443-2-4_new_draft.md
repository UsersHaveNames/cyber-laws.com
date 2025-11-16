---
title: 'IEC 62443-2-4 – What’s New in the 2023 Draft'
description: 'Full draft change text for IEC 62443-2-4 with original wording preserved.'
pubDate: 'Dec 30 2023'
updatedDate: 'Apr 21 2025'
heroImage:
  src: '/images/62443-2-4-intro.webp'
  alt: 'IEC 62443-2-4 processes scope'
tags: ["IEC62443","International","Standards","cybersecurity","OT","requirements","security","framework","compliance","technology"]
series: 'IEC 62443'
---

The 2023 (draft) version of the standard has been released, and below I will offer a short description on what is new and what you need to pay attention to when reading the new standard.

You can use [sd.ds.dk](https://sd.ds.dk/Viewer?ProjectNr=M365160&Status=50.22&Inline=true&Page=1&VariantID=) (they have the draft only currently)

---

## Changes in SCOPE

| Previous (Capabilities – 2019) | New (Processes – 2023) |
| --- | --- |
| ![Scope – capabilities (old)](/images/62443-2-4-before.png) | ![Scope – processes (new)](/images/62443-2-4-after.png) |

In the 2019 version we were looking at the depiction of the **provider capabilities**, while in the 2023 version we are looking at the **provider processes**.

Therefore, processes take the center stage and capabilities are faded out, and Maintenance Service providers are now considered as a separate entity and are depicted in the new 2023 version as seen in the above image.

---

## Why is 62443-2-4 a big deal?
It is an exhaustive list of requirements for security-related processes that IACS service providers can offer to the asset owner during integration and maintenance activities of an Automation Solution.  
**Simplified:**  
It means that any changes to this specific standard are an effective change in supply and demand for organizations that look up to IEC62443.

---

## General changes applicable to the entire document
- Requirements to have “capabilities” are rephrased into requirements to have “processes” and so more evidence in the form of defined processes by the service provider is to be expected.
- Connectivity between different levels (EG Level 2 and Level 3) systems is now allowed, this should boost the industry’s remote connectivity a lot for solutions provided from operators such as [Secomea](http://Secomea) or [BifrostConnect](http://BifrostConnect).
- More emphasis is placed on testing requirements from this standard and documentation of test result artifacts which should make auditing more accurate and allow for better traceability.

---

## Specific impactful changes

### SP.01.01 – Solution Staffing
- The service provider now must have a process that can be performed by the asset owner, and not simply have capabilities to ensure things as in the 2019 version.  
  _**Commentary**: Evidence as a process defined by the service provider is now required._
- It is now defined that the service provider must be aware of the requirements defined the 2023 version.  
  _**Commentary**: Misinterpretation is no longer possible._

### SP.01.02 – Solution Staffing
- The service provider shall not only comply with the requirements specified in this document but also with the ones specified by the asset owner. While having a process on how that compliance is achieved.  
  _**Commentary**: Evidence as a process defined by the service provider is now required and complying with asset owner requirements is now mandatory besides complying with requirements from the standard._
- Demonstrating capabilities to fulfill the requirements is no longer sufficient, a document process that can be used by the asset owner has to be provided.  
  _**Commentary**: This effectively places a lot of burden on the service provider as their failure to provide a good process is now documented as evidence._

### SP.01.03 – Solution Staffing
- The requirements to have certain capabilities are again rephrased into requirements to have certain processes.  
  _**Commentary**: Evidence as a process defined by the service provider is now required._

### SP.01.04 – Solution Staffing
- Background checks are no longer mandatory but require where feasible. It now provides an example of such situation when the local government does not provide support in conducting background checks.  
  _**Commentary:** This will allow service providers to provide reasoning for why background checks are not feasible._
- The requirements to have certain capabilities are again rephrased into requirements to have certain processes.  
  _**Commentary**: Evidence as a process defined by the service provider is now required._

### SP.01.05 – Solution Staffing
- Automation Solution’s adherence is no longer limited to part the part 2-4 but expanded to the entire document.  
  _**Commentary:** This removes the ability to misinterpret what part 2-4 is._

### SP.01.06 – Solution Staffing
- The security lead from the asset owner will now have to follow a specific process defined by the service provider to demonstrate their IACS cybersecurity capabilities.  
  _**Commentary:** This makes it mandatory to document evidence that proves the cybersecurity leads capabilities and ensures only personnel who possess that evidence can be appointed._

### SP.01.07 – Solution Staffing
- No significant changes

### SP.02.01 – Assurance
- Automation solution components that the service provider is responsible for are no longer specified by the asset owner.  
  _**Commentary**: This removes the burden from the asset owner to define the components that are in-scope and makes everything part of the service providers solution in-scope by definition._

### SP.02.02 – Assurance
- The service providers now have to have a process in place (a test) which demonstrates that the control system components can maintain the operation of essential control system functions during network scans.  
  _**Commentary:** This is a major requirement, as we all know network scans in OT are notorious for bringing components down. However, this is a major boost towards the availability capabilities of asset owners._
- While previously the service provider had to demonstrate capabilities in helping the asset owner select Assurance Security tools, they will now need to have a documented process which if followed will help the asset owner select such tools. More than that, this process must help the asset owner understand the purpose behind each tool.  
  _**Commentary:** This is a big win for the asset owners as now the service provider has to guide them on how to select tools that accompany the provided solution or mitigate some of its security drawbacks._

### SP.02.03 – Assurance
- The service provider no must have a process that can be performed for the asset owner to ensure that its security hardening guidelines and procedures are maintained (during FAT, SAT, and maintenance).  
  _**Commentary:** This places a burden on the service provider to have a comprehensive way of testing and documenting their hardening guidelines._

### SP.03.01 – Architecture
- The use of IEC 62443-2-1 for asset owner risk assessment requirements and IEC 62443-3-2 for using risk assessments to define zones and conduits are not mandatory.  
  _**Commentary:** This means that following the Risk Assessment process defined in 62443-3-2 is the easiest way to comply with this standard without having to second guess weather another risk assessment process is compliant._
- The terms “threats, vulnerabilities, and consequences” are now introduced in a verbose manner and are expected to appear in the risk assessment.  
  _**Commentary**: This will make it almost impossible for companies to adapt Risk Assessment processes from other domains such as project management and require that specific Cyber-Risk Assessment processes are used._
- Informing the asset owner about Risk Assessment results now has to follow a documented process.  
  _**Commentary:** This will add more transparency into the Risk Assessment process by ensuring that it is much easier for auditors to review exactly what was communicated during the Risk Assessment._

### SP.03.02 – Architecture
- The service provider now has to have a process which upon execution can validate if the implemented solution follow the original design.  
  _**Commentary:** This will require that the service provider has a better documented design as they now have to create a process which ensure adherence to it, which is typically done by reviewing the design documentation._
- Communication protocols now include USB protocols, local link protocols, local area and long-haul network protocols, and application layer protocols.  
  _**Commentary:** Service providers can no longer ignore interfaces that are mentioned in a verbose manner._
- Instead of defining what interfaces have to be protected at minimum, the standard has now become more lenient as simply give an example of what interfaces may be untrusted.  
  _**Commentary:** This allows the service provider to provide reasoning as to why certain exposed interfaces are trusted._
- The way in which interfaces have been protected must now be documented.  
  _**Commentary**: This allows the asset owner to be better prepared contingency plans when services must be recovered to its original state, and this will allow other parties to investigate the effectiveness of existing cybersecurity controls during future risk assessment._
- The list items that the Asset Owner is responsible for maintaining after handover has been expanded and instead of defining specific elements, reference is made to existing documentation such as policies and procedures.  
  _**Commentary:** one of few changes that places more burden on the asset owner as they now too have responsibilities that are defined in a more verbose manner and cannot be misinterpreted._
- If the service provider supplies or is responsible for the network security device or the equivalent mechanism, then the required support now includes not only being able to configure but also verify.  
  _**Commentary:** This allows the asset owner to ask the service provider to verify and confirm that the solution has been correctly configured. In combination with NIS2, this places huge demands on the service provider._

### SP.03.03 – Architecture
- Instead of having capabilities to do vulnerability management, the solutions provider now has to have a process for doing that. Independent third parties are now allowed to assist the service provider in managing their vulnerabilities.  
  _**Commentary:** The easiest way to do this is to become a CNA with MITRE and follow their very simple yet robust vulnerability management process._

### SP.03.04 – Architecture
- Time synchronization capabilities are now defined as per 62443-3-3 SR.2.11.  
  _**Commentary**: Standardizes the way time synch must happen which should make managing this property across multiple solutions easier for the asset owner._

### SP.03.05 – Architecture
- It is now verbose that only necessary functions, ports, protocols and/or services must be enabled for the intended authorized use.  
  _**Commentary:** This forces the service providers to have a closed(secure)-by-default approach._
- The least functionality as specified by IEC 62443-3-3 has been out scoped.  
  _**Commentary:** 62443-3-3 least functionality capability is no longer required to fulfill this requirement._

### SP.03.06 – Architecture
- A process on how session locking has to be enabled must now be defined.  
  _**Commentary:** Self-explanatory._

### SP.03.07 – Architecture
- A process that describes how wired and wireless workstations must be installed and configured must now be provided.  
  _**Commentary:** This ensure that the asset owner has all the necessary documentation for installing and configuring their solution and the information has to be self-sufficient._
- An implementation and use of available processes must now be in accordance with the Asset Owners policies.  
  _**Commentary:** This ensure that the implementation of the solution design takes into account the existing security architecture._

### SP.03.08 – Architecture
- RBAC (Role Based Access) is no longer mandatory, but it does not remove the necessity for identity access management.  
  _**Commentary:** This is great as there are multiple other ways to do Identity Access Management besides (Attributed-base, Policy-base)._ 
- Instead of focusing on encryption only (the means) focus is now placed on confidentiality and integrity (the goal).  
  _**Commentary:** Allow more flexibility to the service provider and sets a clearer goal on what has to be achieved._

### SP.03.09 – Architecture
- No major changes.

### SP.03.10 – Architecture
- Risk assessments now must also be used as inputs when determining the most appropriate access control settings.  
  _**Commentary:** Following the IEC62443-3-2 Risk Assessment process is the easiest way to comply with this without having to memorize such small details._
- The service provider now must be able to configure the provided solution to meet cryptographic requirements generally accepted for IACS solutions and inform the asset owner about the configuration.  
  _**Commentary:** Although in essence the requirement is the same, it is now more verbose and sets clearer responsibilities on the service providers side while removing any room for misinterpretations._

### SP.04.01 – Wireless
- Instead of referencing “Levels” of the “PURDUE” model the standard now references Zones and Conduits as described in IEC 62443-3-2.  
  _**Commentary:** This is a net positive as the PURDUE model is slowing becoming outdated while the IEC 62443-3-2 Risk Assessment process incorporates a more modern process and definitions._

### SP.04.02 – Wireless
- No major changes.

### SP.04.03 – Wireless
- The service provider now has to provide documentation that proves their used of commonly accepted (standardized) wireless communication protocols.  
  _**Commentary:** This ensure that evidence is included when such capabilities are presented by the service provider._
- A documented process now has to be presented to the asset owner that explain how to configure the wireless device address and verify its correct assignment.  
  _**Commentary**: Emphasis is placed on more verbose guidelines that will help configure and test the configuration of a wireless device._

### SP.05.01 – SIS (Safety Instrumented System)
No major changes.

### SP.05.02 – SIS (Safety Instrumented System)
- Physically or logically separation is no longer mandatory between the **Safety Instrumented System (SIS)** and the **Basic Process Control System (BPCS)**. It is sufficient to have a process that protects the SIS from the BPCS or any other related system in a reliable way.  
  _**Commentary:** Allows more flexibility to the service provider and sets a clearer goal on what has to be achieved._

### SP.05.03 – SIS (Safety Instrumented System)
- Previously it wasn’t allowed for Systems from Level 2 of the PURDUE model to connect to systems from Level 3. That is old school now, in the new IEC62443-2-4 draft, what is required is that you prove that a remote connection to the system cannot affect it negatively.  
  _**Commentary:** This should boost the industry’s remote connectivity a lot._

### SP.05.04 – SIS (Safety Instrumented System)
- Changes similar to the ones from SP.05.03 where external communication is no longer restricted. However, while SP.05.03 requires a process to protect the SIS from communications external to the Automation Solution, this requirement requires a process to protect SIS communications from interference by applications external to the SIS  
  _**Commentary:** This should boost the industry’s remote connectivity a lot._

### SP.05.05 – SIS (Safety Instrumented System)
- It is no longer mandatory to have a device that separates Level 2 from Level 3 systems, it is sufficient to have a process that protect Level 2 systems from being compromised by Level 3 systems.  
  _**Commentary:** This should boost the industry’s remote connectivity a lot._
- This requirement is another example (sample) from the same 62443-2-4 where previously RDP had to be restricted, now it simply has to be protected and managed.  
  _**Commentary:** This should boost the industry’s remote connectivity a lot._
- **To achieve this previously one had to either disable or not install remote access. now an additional solution is allowed where one can have security mechanisms that block remote access communications with these workstations.  
  _Commentary:  This should boost the industry’s remote connectivity a lot._**

### SP.05.06 – SIS (Safety Instrumented System)
- The restriction to have physical connectivity only to SIS EWS (Safety Instrumented System Engineering Workstations) or via dedicated gateways has been removed. Now it can simply be ensured that connections to the Automation Solution’s SIS from outside the SIS is mediated and authorized at the interface to the SIS.  
  _**Commentary:** This should boost the industry’s remote connectivity a lot while ensuring that access control resides with the lower (core) levels still._

### SP.05.07 – SIS (Safety Instrumented System)
- Where previously Automation Solution’s SIS EWS were restricted to performing SIS functions, nor is it sufficient to simply ensure that SIS functions performed by the Automation Solution’s SIS EWSs are protected from compromise by other SIS EWS software.  
  _**Commentary:** Allows the installation of other software, including remote connectivity clients alongside SIS software as long as they can be protected from each other._

### SP.05.08 – SIS (Safety Instrumented System)
- Where previously wireless devices were not allowed at all, now the service provider has to have a process in place that verified that no unauthorized wireless devices are used as part of the SIS. SP.04.01 is now referenced for requirements on the general use of wireless technologies.  
  _**Commentary**: The use of Wireless devices is now allowed (those specified by the asset owner) as long as a process for detecting unauthorized ones exists._

### SP.05.09 – SIS (Safety Instrumented System)
- Where previously the hardware interface used to make SIS configuration changes should have had the capability of being disabled. Not configuration changes can be made not only through hardware interfaces, but a hardware interface has to provide the ability to enable or disable change of configuration.   
  _**Commentary:** This means that configuration changes can now be done through software interfaces, including remotely while the switch to enabling or disabling that must be a local to SIS hardware interface._

### SP.06.01 – Configuration management
- Application gateways must now also have documentation, not only network segments and devices.  
  _**Commentary:** Software layers are now recognized as playing an increasingly important role._
- SP.06.02 is recommended as a first step in creating hardware and software asset identification list, which could be used as a baseline for drawings and architecture diagrams.  
  _**Commentary:** Self-explanatory._

### SP.06.02 – Configuration management
- No significant changes.

### SP.06.03 – Configuration management
- No significant changes.

### SP.07.01 – Remote access
- No significant changes.

### SP.07.02 – Remote access
- No significant changes.

### SP.07.03 – Remote access
- No significant changes.

### SP.07.04 – Remote access
- Data protection is no longer limited to authentication and encryption but as required by the asset owner.  
  _**Commentary:** This encourages asset owners to specify the exact type of protection mechanism that are required for their data. Technically allows them to avoid using authentication and encryption as well if not required while still being IEC62443 certified._

### SP.08.01 – Event management
- The service provider processes now have to also be able to detect which cyber-security compromises and incidents need a response. This must be achieved through the Automation Solution by configuring its supporting processes to detect, handle, report and respond to these incidents.  
  _**Commentary:** This is similar to common vulnerability management practices where a vulnerability scoring system is used for prioritization purposes. EG: CVEs from MITRE._

### SP.08.02 – Event management
- Simulation of security related events has been introduced as a way of demonstrating the writing of events to audit logs.  
  _**Commentary:** As in multiple other requirements, more emphasis is placed on testing and documentation of test result artifacts which should made auditing more accurate and allow for better traceability._

### SP.08.03 – Event management
- IEC 62682:2022 is added as reference for a definition of alarms and alerts.  
  _**Commentary:** While other standards were previously mentioned, it is always better to have something from IEC in this case as they are more equipped towards OT security._

### SP.08.04 – Event management
- _It is no longer a requirement for a solution to be DoS proof_, it is sufficient to document what types of DoS attack the solution can resist.  
  _**Commentary:** We are surprised that this was not the case from the beginning as almost no OT hardware is DoS proof._

### SP.09.01 – Account management
- No major changes.

### SP.09.02 – Account management
- No major changes

### SP.09.03 – Account management
- No major changes

### SP.09.04 – Account management
- No major changes

### SP.09.05 – Account management
- Complex passwords are only required if that is the Asset Owners request.  
  _**Commentary:** This goes hand in hand with the latest trend where MFA or physically tokenized authentication is preferred over password and password complexity._

### SP.09.06 – Account management
- No major changes

### SP.09.07 – Account management
- No major changes

### SP.09.08 – Account management
- No major changes

### SP.09.09 – Account management
- No major changes

### SP.10.01 – Malware protection
- Network Intrusion Detection Systems (NIDS) are also considered viable to protecting against malware.  
  _**Commentary:** Of course, network components can be used as measures against fighting malware that targets a solution, but if there was any room for arguments before, that has been closed now._

### SP.10.02 – Malware protection
- Installation of malware protection mechanisms now has to be agreed with the asset owner.  
  _**Commentary:** Self-explanatory_
- Keeping a log of the installations, configurations and updates activities is now also considered a way of demonstrating that anti-malware is being maintained.  
  _**Commentary:** While previously one could judge only on whether the software has its latest updates, now if that is not the case, logs can be used as a backup to prove that the intent has been maintained._
- Anti-Malware installation is no longer mandatory and instead reference is made to SP.10.02 on requirements and guidelines with regards to this.  
  _**Commentary:** This security control simply became more refined/mature and real-life exceptions where exceptions are admissible are now described in a more verbose manner._

### SP.10.03 – Malware protection
- Among possible verification method have been added EICAR, Intrusion Detection System (IDS)/ Intrusion Prevention System (IPS), and whitelisting tests.  
  _**Commentary:** Self-explanatory. [**EICAR**](https://en.wikipedia.org/wiki/EICAR_test_file) is a file for testing the response of computer antivirus programs._

### SP.10.04 – Malware protection
- No major changes

### SP.10.05 – Malware protection
- ISO/IEC 27036-3 is now referenced instead of ISO 27036 for information on supply chain security.  
  _**Commentary:** Simply keeping references up to date and always good to see the IEC perspective on a referenced standard._
- It is no longer required to ensure that portable media is used in other places than the Automation Solution, it is now sufficient to simply verify that it hasn’t been used in other places.  
  _**Commentary:** The requirement is now much easier to achieve while maintaining the same level of security._

### SP.11.01 – Patch management
- No major changes

### SP.11.02 – Patch management
- The description of each patch now has to be released in a timeframe that is acceptable to the asset owner.  
  _**Commentary:** This is a common thing in patch management, the change is most likely meant to protect the asset owner from unforeseen exceptions._

### SP.11.03 – Patch management
- No major changes

### SP.11.04 – Patch management
- No major changes

### SP.11.05 – Patch management
- No major changes

### SP.11.06 – Patch management
- The service provider now has to make sure that not only the patches are delivered in a safe manner (un corrupted during transition), but that they are also protected during the installation process.  
  _**Commentary:** This is a huge requirement on the service provider as this effectively pushes them towards the implementation of technologies such as secure boot and software signing on applicable patches._

### SP.12.01 – Backup/Restore
- No major changes

### SP.12.02 – Backup/Restore
- No major changes

### SP.12.03 – Backup/Restore
- No major changes

### SP.12.04 – Backup/Restore
- No major changes

### SP.12.05 – Backup/Restore
- No major changes

### SP.12.06 – Backup/Restore
- No major changes

### SP.12.07 – Backup/Restore
- No major changes

### SP.12.08 – Backup/Restore
- No major changes

### SP.12.09 – Backup/Restore
- No major changes
