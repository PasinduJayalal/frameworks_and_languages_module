DOCKER_IMAGE:=express_test
build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --publish 8000:8000 ${DOCKER_IMAGE}