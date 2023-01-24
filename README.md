open powershell

- run minikube start --insecure-registry="10.0.0.0/24"

- run & minikube -p minikube docker-env --shell powershell | Invoke-Expression

- run & minikube -p minikube docker-env | Invoke-Expression

- run minikube docker-env

- go to file

- run docker build -t test-react-app .

- run docker images test-react-app

- run kubectl apply -f .\deployment.yaml

- run kubectl get pods

- search http://test-react-app.test:32000
