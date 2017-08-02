FROM node:argon

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/yak-yik/
RUN chown -R app:app $HOME

USER app
WORKDIR $HOME/yak-yik
RUN npm install

CMD ["node", "bin/www"]
