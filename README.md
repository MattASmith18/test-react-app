minikube start --insecure-registry="10.0.0.0/24"

minikube addons enable ingress

minikube addons enable ingress-dns

kubectl get pods -n ingress-nginx

Add-DnsClientNrptRule -Namespace ".test" -NameServers "$(minikube ip)"

Get-DnsClientNrptRule | Where-Object {$_.Namespace -eq '.test'} | Remove-DnsClientNrptRule -Force; Add-DnsClientNrptRule -Namespace ".test" -NameServers "$(minikube ip)"

& minikube -p minikube docker-env | Invoke-Expression

& minikube -p minikube docker-env --shell powershell | Invoke-Expression

kubectl apply -f .\ingress.yaml

Go to react-app file: 

& minikube -p minikube docker-env --shell powershell | Invoke-Expression

docker build -t test-react-app .

kubectl apply -f .\deployment.yaml

go to express api file: 

& minikube -p minikube docker-env --shell powershell | Invoke-Expression

docker build -t express-api .

kubectl apply -f .\deployment.yaml
