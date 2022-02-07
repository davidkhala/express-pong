FROM node
# https://stackoverflow.com/questions/57534295/npm-err-tracker-idealtree-already-exists-while-creating-the-docker-image-for
WORKDIR /home
ADD . /home/

RUN npm install
CMD [ "node", "app.js"]