---
title: Neural operators - learning partial differential equations
tags: ["ai", "pinn"]
date: 2023-08-18T13:56:48-07:00
image: /img//fno_block_diagram.png
---

This year, I'm working in the [Tensor Lab](http://tensorlab.cms.caltech.edu/users/anima/), a joint Caltech-NVIDIA lab working on foundational research at the intersection of AI and physical sciences. Specifically, I'm working on improving the modularity and usability of [neuraloperator](https://github.com/neuraloperator/neuraloperator), an open-source software library that allows users to implement the lab's Neural Operator family of machine learning models on physical data governed by partial differential equations (PDEs). PDEs are traditionally solved by methods that model equations as a discrete mesh over a surface. In contrast, neural operators learn a continuous operator that maps between arbitrary functions, greatly increasing computational efficiency and generality. 
