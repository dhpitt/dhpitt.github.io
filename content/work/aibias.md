---
title: Text Bias Inspector
tags: ["AI", "NLP"]
date: 2023-04-29T12:23:07-07:00
image: blue-delta-192x192.png
draft: true
---

## Using HolisticBias as a tool to evaluate bias in a corpus

Most work on AI bias is concerned with finding latent biases *within a model* by evaluating perplexity in generated outputs. I am developing an approach that uses the same method of inquiry to find latent biases within a fine-tuning corpus. By fine-tuning a generative model on a body of text, we can more efficiently study the latent attitudes of a body of work by measuring the impact they have on the demographic biases of the model.
