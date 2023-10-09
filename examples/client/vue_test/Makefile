DOCKER_IMAGE:=vue_nginx_test

run_local:
	python3 -m http.server 8001
vue.esm-browser.js:  ## https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
	curl https://unpkg.com/vue@3/dist/vue.esm-browser.js -L -o vue.esm-browser.js

build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --rm --publish 8001:80 ${DOCKER_IMAGE}
