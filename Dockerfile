FROM node:20-alpine


WORKDIR /workspace
COPY package*.json ./
RUN npm install
RUN apk add --no-cache git curl zsh \
    && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

#COPY . .
RUN echo Hello

CMD ["zsh"]