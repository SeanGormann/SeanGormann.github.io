---
title: "Leash Biosciences: Predicting Drug-Traget Interactions"
excerpt: "Bronze Medal solution to the Leash-Bio small molecule - protein target interaction prediction competition! <br/><img src='/images/leash-bio.png'>"
collection: portfolio
---

## Overview

This repository contains my contributions to the Predict New Medicines With BELKA competition hosted by Leash Biosciences on Kaggle. The goal of the competition is to use their proprietary data obtained through high-throughput screening to develop an algorithm capable of predicting the binding affinity of small molecules (drugs) to protein targets. This challenge is closely aligned with my Master's research and has long been a significant interest of mine. Moreover, this competition provided a unique opportunity to work with a massive dataset that is rarely accessible outside major pharmaceutical companies, making it an invaluable learning and research opportunity.

### Why This Is Important

The pharmaceutical industry faces the enormous task of identifying effective drug molecules from a potential chemical space of 10^60 molecules. Traditional methods of drug discovery, which involve physical synthesis and testing of molecules, are time-consuming and labor-intensive. By leveraging machine learning (ML) models, we can potentially revolutionize the process of drug discovery, making it faster, more efficient, and cost-effective. Accurate prediction of drug-target interactions is crucial for the development of new treatments for various diseases, ultimately leading to improved patient outcomes and saving lives.

## Competition Dates

- **Start Date:** April 4, 2024
- **Final Submission Deadline:** July 8, 2024

## Approach and Strategy

My approach to tackling this problem was to use Graph Neural Networks (GNNs), which are particularly suited for representing molecular structures in ways that traditional neural networks are not. GNNs consider molecules as graphs, where atoms are nodes and bonds are edges, effectively capturing the molecular topology. The molecules were initially provided in SMILES format, which I converted into graph representations for model training. The code for this can be found in the 'preprocessing' folder.

### Graph Neural Networks in Molecular Biology

GNNs have emerged as powerful tools for modeling molecular interactions due to their ability to naturally represent molecular structures. In this project, we used GNNs with 8 node features and 4 edge features, as described in the paper by Hongjie Wu et al. (2024). The paper outlines a multi-modal drug-target affinity prediction model using graph transformers and attention mechanisms ([Wu et al., 2024](https://doi.org/10.1016/j.neunet.2023.11.018)).

Different approaches were explored for applying GNNs in this context:

- **Classical Message Passing:** This approach involves linear transformations of node features based on their neighbors' features, effectively propagating information through the graph.
- **Gated Graph Convolutions:** These convolutions incorporate gating mechanisms to control the flow of information, enhancing the model's ability to capture complex molecular interactions.
- **Attentive-FP:** This method uses attention mechanisms to weigh the importance of different nodes and edges dynamically, providing a more nuanced understanding of the molecular graph.

These techniques allowed for a comprehensive analysis of molecular interactions, leveraging the strengths of GNNs to predict drug-target binding affinities accurately.

### Data Handling and Model Training

The provided dataset, named BELKA, included 133 million small molecules encoded in SMILES format. Given the enormity of the data, efficient handling was crucial:

- **Data Compression:** I compressed the dataset using a dictionary mapping building block IDs to graph representations, which drastically reduced memory usage and improved loading times. The target labels were stored in a compressed `.npz` file as `int16` values, further enhancing data management efficiency.
- **Cloud Computing:** The training was conducted on Vastai, a cloud computing platform, utilizing a cluster of 8 GPUs. This setup provided the necessary computational power to handle the extensive data and complex model architecture, facilitating faster iteration and experimentation.

## Results

The model achieved a competitive performance in predicting the binding affinity of small molecules to protein targets. The use of GNNs, combined with efficient data handling and powerful computational resources, proved to be an effective approach in this competition. We finished in the top 10%, earning a bronze medal. The experience gained from this project will undoubtedly contribute to my ongoing research and future endeavors in the field of computational drug discovery.

## Conclusion

Participating in the Predict New Medicines With BELKA competition was a highly rewarding experience. It provided an opportunity to apply advanced machine learning techniques to a real-world problem with significant implications for the pharmaceutical industry. I am grateful to Leash Biosciences for hosting this competition and providing such a valuable dataset. I look forward to continuing my work in this field and contributing to the development of new and effective medicines.