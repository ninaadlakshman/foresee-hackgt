import requests

API_KEY = 'AIzaSyCTukla9GAu8VtFCM7CzSLV6uPGR3Is_CQ'
RADIUS = 4000
PLACES_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={}%2C{}&radius' \
             '={}&type={}&key={}'


def find_nearby_places(lat: float, lon: float, radius: float):
    url = PLACES_URL.format(lat, lon, radius, 'department_store', API_KEY)
    response = requests.request("GET", url)
    print(response.text)
