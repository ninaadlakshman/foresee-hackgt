import util
import os
import pandas as pd


def prepare_features(lat: float, lon: float):
    pass


def get_images_per_store(df: pd.DataFrame):
    for row in df.index:
        loc, lat, lon = df['loc'][row], df['lat'][row], df['lon'][row]
        util.download_satellite_image(loc, lat, lon, 16)
        print(f'done with image: {loc}')

def convert_raw_to_df():
    data = {}
    for file in sorted(os.listdir('data/patterns')):
        print(f'reading file {file}...')
        df = pd.read_csv(os.path.join('data/patterns', file))
        # each store in a month
        for row in df.index:
            address, city, region, visits = df['street_address'][row], df['city'][row], df['region'][row], \
                                            eval(df['visits_by_day'][row])
            key = '+'.join([address, city, region])

            # check if key exists in data
            if key not in data:
                lat, lon, county = util.geocode_address(address, city, region)
                nearby = util.find_dists_nearby_stores(lat, lon, util.RADIUS)
                data[key] = [lat, lon, county, nearby, visits]
            else:
                data[key][4] += visits
            print(f'successfully loaded store: {key}: {data[key]}')

    df = pd.DataFrame(data)

    newdf = {'loc': [], 'lat': [], 'lon': [], 'county': [], 'nearby': [], 'visits': []}
    for city in df.columns[1:]:
        newdf['loc'].append(city.replace('+', ', '))
        newdf['lat'].append(df[city][0])
        newdf['lon'].append(df[city][1])
        newdf['county'].append(df[city][2])
        newdf['nearby'].append(df[city][3])
        newdf['visits'].append(df[city][4])
    newdf = pd.DataFrame(newdf)
    newdf.to_csv('dataset.csv')


get_images_per_store(pd.read_csv('dataset.csv'))
