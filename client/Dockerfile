FROM python:alpine
#FROM nginx:alpine

WORKDIR /app/

EXPOSE 8001
#VOLUME /logs

#COPY nginx.conf /etc/nginx/nginx.conf
#COPY index.html /app/www/

COPY index.html .
CMD ["python3", "-m", "http.server", "8001"]