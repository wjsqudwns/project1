
from cctv.service import Service


class Api(object):

    @staticmethod
    def main():
        dataset = Service()

        while 1:

            menu = int(input('0-Exit\n1-서울CCTV DF\n2-서울범죄 DF\n'
                         '3-경찰서위치 DF\n4-실업율 DF\n5-엑셀POP'))
            if menu == 0:
                break
            elif menu == 1:
                dataset.csv({'context':'./data/', 'fname':'cctv_in_seoul'})

            elif menu == 2:
                dataset.csv({'context':'./data/', 'fname':'crime_in_seoul'})

            elif menu == 3:
                dataset.csv({'context': './data/', 'fname': 'police_position'})

            elif menu == 4:
                dataset.csv({'context': './data/', 'fname': 'us_unemployment'})
            elif menu == 5:
                dataset.xls({'context': './data/', 'fname': 'pop_in_seoul'})


Api.main()
