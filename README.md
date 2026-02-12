# cmb-explorer
An interactive exploration tool for understanding the Cosmic Microwave Background and the origins of cosmic structure.

CMB Explorer is an interactive scientific visualisation project designed to help users explore and understand the Cosmic Microwave Background (CMB) as the earliest observable snapshot of the Universe. Rather than presenting the CMB as a static, colourful image, this project transforms it into an explorable scientific interface where users can click, zoom, filter, and experiment with cosmological concepts in a physically meaningful way.

The core objective is to bridge the gap between visual fascination and physical understanding. Users should be able to interact with the full-sky CMB map (e.g. Planck data), click on any location, and retrieve scientifically grounded information such as sky coordinates, temperature fluctuation (ΔT in microkelvin), angular scale context, and data reliability (e.g. mask or foreground contamination). The interface should clearly distinguish between temperature anisotropy and density perturbations, avoiding common misconceptions such as interpreting darker regions as “dark matter” concentrations.

The project should include layered visualisation modes. Users must be able to toggle between raw observed maps, foreground components (e.g. galactic dust), and cleaned CMB maps to illustrate how scientific data processing works. An optional multipole (ℓ) filter slider can allow users to isolate large-scale versus small-scale anisotropies, helping them understand how angular structure relates to early-universe acoustic oscillations.

A secondary panel should visualise the CMB power spectrum (Cℓ vs ℓ), showing observational data alongside a simplified ΛCDM model curve. Adjustable cosmological parameters (e.g. baryon density, cold dark matter density, spectral index, H₀) may allow users to see how theoretical curves shift, reinforcing how cosmological inference works through statistical fitting rather than visual inspection of the sky map.

A timeline component should situate the CMB within cosmic history: recombination (~380,000 years), first stars, reionisation, galaxy formation, and present-day large-scale structure. This ensures conceptual clarity: the CMB is not a map of galaxies but a map of primordial fluctuations that later evolved into cosmic structure under gravity.

The project must remain scientifically conservative and aligned with widely accepted cosmological understanding, while optionally including a clearly labelled section discussing current research tensions (e.g. early massive galaxies, Hubble tension) without overstating speculative interpretations.

Technically, the project may use HEALPix-based datasets for accurate temperature retrieval, with an interactive web interface built using modern visualisation tools (e.g. WebGL, D3, or Three.js). The emphasis is clarity, scientific integrity, and conceptual depth — transforming a famous image into a structured educational experience.

The guiding principle: make the early Universe explorable, not just observable.
