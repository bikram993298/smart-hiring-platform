# Smart Hiring Platform — MVP

## Overview
Full-stack platform: resume auto-screening, live proctored coding interviews, interview insights.

## Quick start (Docker)
1. cp .env.example .env
2. docker-compose up --build
3. Backend: http://localhost:4000
4. Frontend: http://localhost:5173
5. ML service: http://localhost:5000

## Features
- Resume upload + sentence-transformer embeddings
- Recruiter dashboard with ranked candidates
- Interview room with WebRTC + Monaco editor + WebSocket-based editor sync
- Simple proctoring checks (face presence) and speech transcription stub via ML service

## Production notes
- Use S3 (or GCS) for resume storage; rotate and restrict credentials.
- Move ML inference to GPU-backed scalable infra or managed inference service.
- Use HTTPS, proper secret manager, CI/CD pipelines, monitoring.
- Implement detailed consent, retention, and privacy flows.

## License
MIT
