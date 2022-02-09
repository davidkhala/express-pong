FROM node
# https://stackoverflow.com/questions/57534295/npm-err-tracker-idealtree-already-exists-while-creating-the-docker-image-for
COPY . .

RUN npm install
VOLUME ["server.key", "fullchain.cer"]
CMD [ "node", "app.js"]