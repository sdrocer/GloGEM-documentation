# The Global Glacier Evolution Model (GloGEM)

The Global Glacier Evolution Model is an IDL package which allows to model the evolution of all 200,000 glaciers on Earth outside the ice sheets. 
The model is forced by monthly temperature and precipitation from 14 GCMs and three emission scenarios. In contrast to previous global-scale glacier models, 
GloGEM includes mass loss due to frontal ablation of marine-terminating glaciers. To get started, please check out this [Introduction](00.-Introduction.md) of the model, 
which includes a [schematic overview](00.-Introduction.md#schematic-overview).

## Cite GloGEM

If you want to refer to GloGEM in your publications or presentations, please refer to:

**Huss, M. and Hock, R.: A new model for global glacier change and sea-level rise. Frontiers in Earth Science, 3, 5, https://www.doi.org/10.3389/feart.2015.00054, 2015**

## Glacier model type

GloGEM is a “glacier centric model”, which means that it runs for each glacier independently of the others. In the case of glacier complexes, 
it relies on the glacier inventory to properly separate the individual glacier entities by the ice divides, ensuring that all ice in a glacier 
basin flows towards a single glacier terminus.

```{note}
This project is under active development.
```

```{toctree}
:maxdepth: 2
:titlesonly:
:caption: Overview

00.-Introduction.md
01.-Input-data.md
03.-Downscale-GCM.md
04.-Potential-solar-radiation.md
05.-Reading-of-input-data.md
06.-Mass-balance-model.md
07.-Debris-evolution-model.md
08.-Calving-model.md
09.-Glacier-retreat-model.md
11.-Plotting.md
```

```{toctree}
:maxdepth: 2
:titlesonly:
:caption: Reading & Writing Procedures

05.-Reading-of-input-data.md
10.-Writing-of-the-output.md
```

```{toctree}
:maxdepth: 2
:titlesonly:
:caption: Contribution

02.-Contributing.md
Core-GloGEM-developer-meeting.md
Git-workflow.md
```
