import requests

url = 'https://raw.githubusercontent.com/khodemory/Bw6G5wgi7H62GHG1/main/f/f1'

response = requests.get(url)

if response.status_code == 200:
  print(response.text)
else:
  print('Error:', response.status_code)
