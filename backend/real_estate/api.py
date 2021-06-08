from real_estate.housingdto import Housingdto
from real_estate.service import Housing


class Controller(object):

    @staticmethod
    def main():
        housing = Housing()
        dataset = Housingdto()
        dataset.housing = housing.new_model('housing.xlsx')
        while 1:
            menu = int(input('0: EXIT 1:New Model 2:DF'))
            if menu == 0:
                break
            elif menu ==1:
                print(dataset.housing)
            elif menu ==2:
                Controller.to_string(dataset.housing)

    @staticmethod
    def to_string(this):
        print(f'Train 의 type 은 {type(this)} 이다.')
        print(f'Train 의 column 은 {(this.columns)} 이다.')
        print(f'Train 의 상위5개행 은\n {(this.head(10))} 이다.')
        print(f'4. Train의 null 의 개수\n {this.isnull().sum()}개')


Controller.main()
