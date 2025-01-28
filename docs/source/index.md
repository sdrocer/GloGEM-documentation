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
:maxdepth: 3
:titlesonly:
:caption: Introduction

00.-Introduction.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Input Data

01.-Input-data.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Contribution

02.-Contributing.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Downscale GCM

03.-Downscale-GCM.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Potential Solar Radiation

04.-Potential-solar-radiation.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Reading of Input Data

05.-Reading-of-input-data.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Mass Balance Model

06.-Mass-balance-model.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Debris Evolution Model

07.-Debris-evolution-model.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Calving Model

08.-Calving-model.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Glacier Retreat Model

09.-Glacier-retreat-model.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Writing of the Output

10.-Writing-of-the-output.md
```

```{toctree}
:maxdepth: 3
:titlesonly:
:caption: Plotting

11.-Plotting.md
```
