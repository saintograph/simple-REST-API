FROM risingstack/alpine:3.3-v5.5.0-1.1.3

COPY package.json package.json  
RUN npm install

COPY . .  
CMD ["npm","start"] 