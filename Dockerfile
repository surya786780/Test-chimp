FROM node:alpine as ui-builder 
RUN mkdir /app/
COPY . /app/
WORKDIR /app
RUN npm install
RUN npm run build
FROM nginx
COPY --from=ui-builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
