FROM debian:bullseye-slim

WORKDIR /workspace

# Node.js & npm installieren
RUN apt-get update \
    && apt-get install -y curl git zsh \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install
RUN npm install -g live-server

# Oh My Zsh Installation (optional, für root)
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" || true

CMD ["zsh"]