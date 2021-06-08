from real_estate.housingdto import Housingdto

import pandas as pd


class Housing(object):
    dataset = Housingdto()

    def new_model(self, payload):
        this = self.dataset
        this.context = './data/'
        this.fname = payload
        return pd.read_excel(this.context + this.fname, sheet_name='평균전세')


