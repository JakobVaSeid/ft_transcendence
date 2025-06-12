FROM node:20-alpine

# Installiere alle Abhängigkeiten im Container
WORKDIR /workspace
COPY package*.json ./
RUN npm install
RUN apk add --no-cache git curl zsh \
    && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# Kopiere den Rest des Codes (wird beim Start des Containers durch Bind-Mount überschrieben)
COPY . .

# Optional: Standard-Command (kann in devcontainer.json über postCreateCommand überschrieben werden)
CMD ["zsh"]