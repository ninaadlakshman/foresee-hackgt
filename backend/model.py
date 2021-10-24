from torch.utils.data import Dataset
import torch
import pandas as pd
import os
from PIL import Image
import numpy as np
import us
import cv2
import torchvision.models

torchvision.models.mobilenet_v2(pretrained=True)

data = pd.read_csv('dataset.csv')


class FootTrafficDataset(Dataset):
    def __init__(self, dataset_file, income_file, population_file, root_dir, transform=None):
        self.dataset = pd.read_csv(dataset_file)
        self.population = pd.read_csv(population_file)
        self.income = pd.read_excel(income_file)
        cols = self.income.iloc[0]
        self.income = self.income[1:]
        self.income.columns = cols
        self.root_dir = root_dir
        self.transform = transform

    def __len__(self):
        return len(self.dataset)

    def __getitem__(self, idx):
        if torch.is_tensor(idx):
            idx = idx.tolist()

        img_name = os.path.join(self.root_dir, 'data/images', self.dataset.iloc[idx, 1])
        img = Image.open(f"{img_name}_x17.jpg")
        img.load()
        image = np.asarray(img, dtype="int32")
        county = self.dataset.iloc[idx, 4]
        state = self.dataset.iloc[idx, 1].split(', ')[2]
        median_income = self.income[
            (self.income['Name'] == county) & (self.income['Postal Code'] == state)]['Median Household Income'].values[
            0]
        pop = self.population[(self.population['NAME'] == county) & (self.population['State'] == us.states.lookup(state).name)][
            'B01001_calc_PopDensity'].values[0]

        return image, median_income, pop


data = FootTrafficDataset('dataset.csv', 'data/demographics/income.xls', 'data/demographics/population.csv', '')
print(data[0])
torch.