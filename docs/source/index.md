# The Global Glacier Evolution Model (GloGEM)

The Global Glacier Evolution Model is an IDL package which allows to model the evolution of all 200,000 glaciers on Earth outside the ice sheets. 
The model is forced by monthly temperature and precipitation from 14 GCMs and three emission scenarios. In contrast to previous global-scale glacier models, 
GloGEM includes mass loss due to frontal ablation of marine-terminating glaciers. To get started, please check out this [Introduction](00.-Introduction.md) of the model, 
which includes a [schematic overview](00.-Introduction.md#schematic-overview).

![GloGEM logo](images/GloGEM_logo.png)

## Cite GloGEM

If you want to refer to GloGEM in your publications or presentations, please refer to:

**Huss, M. and Hock, R.: A new model for global glacier change and sea-level rise. Frontiers in Earth Science, 3, 5, https://www.doi.org/10.3389/feart.2015.00054, 2015**

## Glacier model type

GloGEM is a “glacier centric model”, which means that it runs for each glacier independently of the others. In the case of glacier complexes, 
it relies on the glacier inventory to properly separate the individual glacier entities by the ice divides, ensuring that all ice in a glacier 
basin flows towards a single glacier terminus.

> **Note:**
> 
> This project is under active development.

## Contents

```{toctree}
:maxdepth: 2
:caption: Introduction
:titlesonly:

00.-Introduction.md
```

```{toctree}
:maxdepth: 2
:caption: Input Data
:titlesonly:

02.-Input-data.md
```

```{toctree}
:maxdepth: 2
:caption: Contribution Guidelines
:titlesonly:

03.-Contribution-guidelines.md
```

```{toctree}
:maxdepth: 2
:caption: Git Workflow
:titlesonly:

04.-Git-workflow.md
```

```{toctree}
:maxdepth: 2
:caption: Mass Balance Model
:titlesonly:

05.-Mass-balance-model.md
```

```{toctree}
:maxdepth: 2
:caption: Debris Evolution Model
:titlesonly:

06.-Debris-evo-model.md
```

```{toctree}
:maxdepth: 2
:caption: Calving Model
:titlesonly:

07.-Calving-model.md
```

```{toctree}
:maxdepth: 2
:caption: Glacier Retreat Model
:titlesonly:

13.-Glacier-retreat-model.md
```

```{toctree}
:maxdepth: 2
:caption: Writing of the Output
:titlesonly:

14.-Writing-of-the-output.md
```

```{toctree}
:maxdepth: 2
:caption: Procedure and Plotting
:titlesonly:

15.-Procedure-and-plotting.md
```