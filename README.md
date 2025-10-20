# React Deployment App

A React application deployed via automated Bash script for HNG DevOps Stage 1.

## Features
- ✅ Modern React 18
- ✅ Live clock display
- ✅ Responsive design
- ✅ Docker multi-stage build
- ✅ Nginx production server

## Local Development
```bash
npm install
npm start
```

Visit: http://localhost:3000

## Docker Build
```bash
docker build -t my-react-app .
docker run -p 80:80 my-react-app
```

## Tech Stack
- React 18
- Docker (multi-stage build)
- Nginx



