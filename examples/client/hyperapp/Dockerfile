FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# from https://github.com/FreedomBen/nginx-docker
RUN sed -i -e '/location.*\/.*{/a autoindex on\;' /etc/nginx/conf.d/default.conf
RUN rm *.html

COPY . .
