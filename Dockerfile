#build state
FROM node:12.16.1-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#production stage
FROM nginx:1.17.10-alpine as production-page
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
