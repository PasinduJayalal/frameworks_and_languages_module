DOCKER_IMAGE:=react_test

build: 
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --rm -it --publish 8001:8001 ${DOCKER_IMAGE}
