# HackGT: 4C

Check out our website!: https://retail-space-329923.web.app

## Inspiration
Here at 4C, we recognize the amount of concern involved when businesses decide to expand into a retail location. We aid these businesses to determine the best open regions to expand to new locations.

## What it does
Our product predicts foot traffic for each candidate location, which serves as a proxy for a successful prospective store location. Therefore by obtaining the foot traffic of different regions, 4C allows companies to foresee which regions would be most successful.

## How we built it
We used a Machine Learning based approach to construct a model that takes in nearby competitors, income level of the county, population of the county, and satellite images of the area as the input features. It returns the foot traffic of the location as detailed above. Meanwhile, on the dashboard, companies can scout potential locations via latitude and longitude coordinates. The dashboard recommends certain latitude and longitude coordinates based on the output of the model.

This was powered by NCR's Sites API, which has a Find Nearby request that we used to get nearby locations to the one that a retail business would enter.

## What's next for 4C
We would like to improve the features and the accuracy of the model to give companies that use our product even better results. We would also like to aggregate more data so that our model is more accurate.

