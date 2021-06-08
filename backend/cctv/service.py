from cctv.cctvdto import Cctvdto
import pandas as pd

class Service(object):
    dataset = Cctvdto()

    def new_model(self, payload):
        this = self.dataset
        this.context = './data/'
        this.fname = payload
        return pd.read_csv(this.context + this.fname + '.csv')

    def new_model2(self, payload):
        this = self.dataset
        this.context = './data/'
        this.fname = payload
        return pd.read_excel(this.context + this.fname + '.xls', sheet_name='YainSoft_Excel1')

