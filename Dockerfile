ARG NODE_VERSION=16-alpine
FROM node:$NODE_VERSION AS build

RUN npm -g install npm@8.x.x

WORKDIR /veritable-issuer

# Install base dependencies
COPY . .
RUN npm ci --production

# RUN Build
RUN npm run build

##################################################################################################

FROM node:$NODE_VERSION AS runtime

RUN npm -g install npm@8.x.x

WORKDIR /veritable-issuer
ENV PORT 3000

COPY --from=build /veritable-issuer/build .

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "/veritable-issuer"]