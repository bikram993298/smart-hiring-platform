"""
Training stub / example to fine-tune a sentence-transformer for ranking.
This is a demonstration. For production training, use proper dataset and compute resources.
"""
from sentence_transformers import SentenceTransformer, InputExample, losses
from torch.utils.data import DataLoader
import os

model = SentenceTransformer(os.environ.get('SENTENCE_MODEL', 'all-MiniLM-L6-v2'))

# Replace below with real training dataset: pairs of (resume_text, job_desc) and label (0..1)
train_examples = [
    InputExample(texts=["resume example A", "job description example"], label=0.9),
    InputExample(texts=["resume example B", "job description example"], label=0.2),
]

train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=8)
train_loss = losses.CosineSimilarityLoss(model)

model.fit(train_objectives=[(train_dataloader, train_loss)], epochs=1, warmup_steps=10)
model.save('models/resume-ranker')
