---
title: "When the Transmitter Adds Noise to the Signal"
date: 2026-10-21
category: "publication"
summary: "Mahir Burak Usta, together with fellow Tokgöz Lab members and collaborators at N3Cat (UPC), has shown when noise generated inside a transmitter's own electronics can limit the performance of millimeter-wave and sub-terahertz wireless links."
image: "../../assets/news-transmitter-noise-fig1.png"
imageAlt: "Noise created in the transmitter's own electronic stages travels to the receiver together with the intended signal, and both weaken along the path. At the receiver, this transmitter noise adds to noise from the atmosphere and to the receiver's own noise."
imageFit: "contain"
link: "https://doi.org/10.1109/OJCOMS.2026.3730694"
linkText: "Read the paper"
people: ["mahir-burak-usta"]
---

*Fig. 1. Noise created in the transmitter's own electronic stages travels to the receiver together with the intended signal, and both weaken along the path. At the receiver, this transmitter noise adds to noise from the atmosphere and to the receiver's own noise.*

[Mahir Burak Usta](/team/mahir-burak-usta/), a Ph.D. student in our lab, together with fellow Tokgöz Lab members and collaborators at the Nanonetworking Center in Catalunya (N3Cat) of Universitat Politècnica de Catalunya (UPC), has shown when noise generated inside a transmitter's own electronics can limit the performance of millimeter-wave and sub-terahertz wireless links. The study provides an analytical criterion that tells engineers when this noise must be modeled explicitly rather than absorbed into a general design margin.

A wireless receiver never hears a perfectly clean signal. Alongside the information it is meant to receive, it also picks up noise. Engineers must estimate this noise when designing a communication link, because it affects how reliably the system can carry data. But some of that noise begins at the other end of the connection: inside the transmitter itself.

Millimeter-wave and sub-terahertz systems operate at very high frequencies and are expected to play a central role in future wireless networks. When estimating their performance, engineers commonly account explicitly for noise generated inside the receiver, while treating transmitter noise as part of a broader design margin. "We wanted to know when that margin is enough, and when the transmitter noise has to be treated as a quantity of its own," says Usta, the lead author of the study.

The team developed an analytical framework that follows transmitter-generated noise through the communication link. It accounts for the transmitter's electronic stages, antenna gains, signal spreading, atmospheric absorption, and operating bandwidth. Together, these factors determine how much transmitter noise reaches the receiver. Comparing that amount with the noise already present at the receiver shows how strongly it affects the signal-to-noise ratio, a measure of how clearly the useful signal stands out from background noise.

The findings show that distance alone does not determine whether transmitter noise matters. When the two devices are only millimeters apart and use simple low-gain antennas, the transmitter noise is not weakened enough before it reaches the receiver. In one example from the study, with the devices a millimeter apart, the noise at the receiver was about 40 times higher than a standard calculation that ignores transmitter noise would assume. As a result, the link could carry roughly 40 percent less data than expected. The effect fades quickly with distance and becomes negligible by the time the devices are about ten centimeters apart. "In very short links, the same low path loss that delivers a strong signal also lets the transmitter noise through," explains Usta. "In that regime, the link is limited by noise coming from the transmitter, so the design effort has to shift toward the transmitter's noise performance."

Longer links present a different picture. Those examined in the study, up to a kilometer long, used high-gain antennas, which boost the transmitter noise along with the signal. The extra noise therefore did not disappear: in one example, for a link one kilometer long, the noise at the receiver was still about four times higher than expected. The effect was strongest at the lower frequencies studied; at higher frequencies it was generally small.

These estimates assume an idealized receiver that adds no noise of its own; a practical receiver would see a smaller relative effect. The results also depend on the hardware, antennas, frequency, and atmospheric conditions; they are not a universal penalty for every link.

The criterion introduced in the study takes the form of a path-loss threshold: the minimum amount by which the signal must weaken along its path for transmitter noise to remain negligible. This gives engineers a way to assess the importance of transmitter noise early in the design process and make better-informed choices about hardware and link configuration. The findings are particularly relevant to emerging very short-range links, such as wireless chip-to-chip and board-to-board connections, where a standard calculation that omits transmitter noise systematically overestimates achievable performance, and to high-gain backhaul links at the lower end of the millimeter-wave band.

The study marks the beginning of joint work on this topic between the Tokgöz Lab and the N3Cat group at UPC in Barcelona, with N3Cat members Evgenii Vinogradov, Mohammad Shahmoradi, Eduard Alarcón, and Sergi Abadal as co-authors of the paper. It is also the first step on Usta's path toward a dual Ph.D. degree between Sabancı University and UPC.

The methodology and results are reported in an open-access article published in the IEEE Open Journal of the Communications Society. A patent application covering the analysis framework has also been filed with the Turkish Patent and Trademark Office.

## About Mahir Burak Usta

Mahir Burak Usta is a Ph.D. student in electronics engineering at Sabancı University, where he received his B.S. degree in electronics engineering in 2022. He is a Graduate Student Member of IEEE. His research interests include noise in millimeter-wave and sub-terahertz systems, UAV-to-UAV communications, and reconfigurable antenna arrays.

## Mahir's Publications at Sabancı University

### Journal Articles

1. M. B. Usta, D. Aydoğan, E. Vinogradov, M. Shahmoradi, E. Alarcón, S. Abadal, and K. K. Tokgöz, "[Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines](/publications/2026-usta-transmitter-noise-propagation-mmwave-subthz/)," *IEEE Open Journal of the Communications Society*, vol. 7, pp. 11132–11153, 2026. DOI: [10.1109/OJCOMS.2026.3730694](https://doi.org/10.1109/OJCOMS.2026.3730694)
2. M. B. Usta, M. Bafarassat, M. Erdem, Ö. Gürbüz, A. Saeed, K. K. Tokgöz, and K. Qaraqe, "[Transformer-Driven Beam Control via Reconfigurable Antenna Arrays for Terahertz UAV Communications](/publications/2026-usta-transformer-driven-beam-contro/)," *IEEE Open Journal of the Communications Society*, vol. 7, pp. 2714–2732, 2026. DOI: [10.1109/OJCOMS.2026.3674589](https://doi.org/10.1109/OJCOMS.2026.3674589)

### Conference Papers

3. M. B. Usta, D. Aydoğan, E. Vinogradov, S. Abadal, and K. K. Tokgöz, "Array-Correlated Noise Floor Analysis for Monostatic Sub-Terahertz Integrated Sensing and Communication," *IEEE Conference on Integrated Sensing and Communications (ISAC)*, Lisbon, Portugal, Nov. 2026 (accepted).
4. M. B. Usta, M. Erdem, A. Saeed, Ö. Gürbüz, K. K. Tokgöz, and M.-S. Alouini, "[Adaptive Beamwidth Control for Terahertz Drone Communications: A Row-Selective Antenna Array Approach](/publications/2025-usta-adaptive-beamwidth-control-for/)," *IEEE 36th International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)*, Istanbul, Türkiye, Sept. 2025, pp. 1–6. DOI: [10.1109/PIMRC62392.2025.11274612](https://doi.org/10.1109/PIMRC62392.2025.11274612)

## Reference

**Authors:** Mahir Burak Usta¹, Didem Aydoğan¹, Evgenii Vinogradov², Mohammad Shahmoradi², Eduard Alarcón², Sergi Abadal², Korkut Kaan Tokgöz¹

**Title of original paper:** Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines

**Journal:** IEEE Open Journal of the Communications Society, vol. 7, pp. 11132–11153, 2026

**DOI:** [10.1109/OJCOMS.2026.3730694](https://doi.org/10.1109/OJCOMS.2026.3730694)

**Affiliations:**\
¹ Faculty of Engineering and Natural Sciences, Sabancı University, Istanbul, Türkiye\
² Nanonetworking Center in Catalunya (N3Cat), Universitat Politècnica de Catalunya, Barcelona, Spain

[Read the paper](https://doi.org/10.1109/OJCOMS.2026.3730694)
