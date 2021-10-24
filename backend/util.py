from datetime import date

import requests
import geopy.distance
import json
import urllib.parse
import sentinelsat as ss
import ee
import urllib.request

API_KEY = 'AIzaSyCTukla9GAu8VtFCM7CzSLV6uPGR3Is_CQ'
RADIUS = 4000
PLACES_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={}%2C{}&radius' \
             '={}&type={}&key={}'
GEOCODING_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address={}&key={}'
IMAGE_URL = 'https://maps.googleapis.com/maps/api/staticmap?center={},{}&zoom={}&' \
            'size=224x224&maptype=satellite&key={}'


def download_satellite_image(loc: str, lat: float, lon: float, zoom: float):
    url = IMAGE_URL.format(lat, lon, zoom, API_KEY)
    urllib.request.urlretrieve(url, f'data/images/{loc}.jpg')


def geocode_address(address: str, city: str, state: str):
    loc = f'{address}, {city}, {state}'
    loc = urllib.parse.quote_plus(loc)
    url = GEOCODING_URL.format(loc, API_KEY)
    response = requests.request("GET", url)
    data = json.loads(response.text)
    lat, lon = tuple(data['results'][0]['geometry']['location'].values())
    county = None
    for comp in data['results'][0]['address_components']:
        if 'types' in comp.keys() and 'administrative_area_level_2' in comp['types']:
            county = comp['short_name']
            break

    return lat, lon, county


def find_dists_nearby_stores(lat: float, lon: float, radius: float):
    """
    find distances (in meters) of stores within radius of a specified location
    :param lat: latitude
    :param lon: longitude
    :param radius: radius (meters)
    :return:
    """
    url = PLACES_URL.format(lat, lon, radius, 'supermarket', API_KEY)
    response = requests.request("GET", url)
    data = json.loads(response.text)
    place_dists = []
    for loc in data['results']:
        pos = loc['geometry']['location']
        pos = tuple(pos.values())
        pos = (float(pos[0]), float(pos[1]))
        place_dists.append(geopy.distance.distance(pos, (lat, lon)).m)
    return place_dists
