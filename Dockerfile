FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY public /data/public
COPY conf /etc/nginx
