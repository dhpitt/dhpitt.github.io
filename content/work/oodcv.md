---
title: Robust pose estimation
tags: ["computer vision"]
date: 2022-09-28T12:00:22-07:00
image: /img/oodcv.png
---

I was a finalist in the 2022 European Conference of Computer Vision's [Out-of-Distribution Computer Vision (OOD-CV)](https://www.ood-cv.org) challenge in the pose estimation track. The challenge focused on the core tendency of machine learning models to learn to recognize uninformative, correlated pattterns instead of semantically useful information. I enrolled in the 6D object pose estimation track because, well, almost nobody else had. To achieve higher results than a standard classification approach, I divided up the pose estimation problem into subproblems based on dimensions of object pose, and also used a proven robustness augmentation that trains models to focus on the [shape, rather than texture](https://github.com/rgeirhos/texture-vs-shape), of objects in their field of view. The challenge was an awesome learning experience - I learned a ton about feature robustness and the state of the art in robust vision models.  

