import requests

resp = requests.post("http://localhost:5000/predict",
                     files={"file": open('./toreta_test.jpg', 'rb')})

print(resp.json())
