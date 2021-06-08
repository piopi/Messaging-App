FROM node:10
ENV PORT=3001
WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT ["/app/startup.sh"]