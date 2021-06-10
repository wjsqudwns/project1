import pandas as pd
import json
from common.abstracts import PrinterBase, ReaderBase


class Printer(PrinterBase):

    def dframe(self, this):

        print(f'type 은 \n{type(this)} 이다.')
        print(f'column 은 \n{(this.columns)} 이다.')
        print(f'상위1개행 은\n {(this.head(5))} 이다.')
        print(f'null 의 개수\n {this.isnull().sum()}개')

class Reader(ReaderBase):

    def new_file(self, file) -> str:
        return file._context + file._fname

    def csv(self, file) -> object:
        return pd.read_csv(f'{self.new_file(file)}.csv',encoding='UTF-8', thousands=',')  # 스칼라처리 퍼포먼스가 빠르다

    def xls(self, file, header, usecols) -> object:
        return pd.read_excel(f'{self.new_file(file)}.xls', header=header, usecols=usecols)

    def json(self, file) -> object:
        return json.load(open(f'{self.new_file(file)}.json', encoding='UTF-8'))
# 추상클래스에 있는 모든 기능이 구현되어있어야함

