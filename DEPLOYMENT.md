# 🚀 Quick Deployment Reference

## Setup OpenLiteSpeed + Docker

### 1️⃣ Build & Start Docker Container

```bash
cd /path/to/farrasindo-website2.0.0
docker-compose up -d --build
```

### 2️⃣ Verify Container Running

```bash
# Check status
docker-compose ps

# Test locally
curl http://localhost:3000

# View logs
docker-compose logs -f
```

### 3️⃣ Configure OpenLiteSpeed

#### A. Create External App
- **Name:** `farrasindo-proxy`
- **Address:** `http://127.0.0.1:3000`
- **Max Connections:** `100`

#### B. Create Proxy Context
- **URI:** `/`
- **Handler:** `farrasindo-proxy`

#### C. Restart OpenLiteSpeed
```bash
systemctl restart lsws
```

### 4️⃣ Test Configuration

```bash
# Test from server
curl http://yourdomain.com

# Check logs
tail -f /usr/local/lsws/logs/error.log
```

---

## Common Commands

### Docker
```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# Rebuild
docker-compose up -d --build

# Logs
docker-compose logs -f

# Status
docker-compose ps
```

### OpenLiteSpeed
```bash
# Restart
systemctl restart lsws

# Status
systemctl status lsws

# Logs
tail -f /usr/local/lsws/logs/error.log
tail -f /usr/local/lsws/logs/access.log
```

---

## Troubleshooting

### 502 Bad Gateway
```bash
# Check container
docker-compose ps

# Restart container
docker-compose restart

# Check port
netstat -tlnp | grep 3000
```

### Container Won't Start
```bash
# View logs
docker-compose logs farrasindo-web

# Rebuild
docker-compose down
docker-compose up -d --build
```

### OpenLiteSpeed Can't Connect
```bash
# Test connection
curl http://127.0.0.1:3000

# Check firewall
ufw status

# Restart both
docker-compose restart
systemctl restart lsws
```

---

## Configuration Summary

### Docker Container
- **Port:** `127.0.0.1:3000` (localhost only)
- **Network:** `farrasindo-network`
- **Restart:** `unless-stopped`

### OpenLiteSpeed Proxy
- **Target:** `http://127.0.0.1:3000`
- **Type:** `Proxy`
- **Context:** `/` (all requests)

### Security
- Port 3000 hanya accessible dari localhost
- OpenLiteSpeed handle semua external traffic
- SSL/HTTPS di OpenLiteSpeed level

---

## Full Documentation

- **Docker:** [DOCKER.md](./DOCKER.md)
- **OpenLiteSpeed:** [OPENLITESPEED.md](./OPENLITESPEED.md)
- **README:** [README.md](./README.md)
