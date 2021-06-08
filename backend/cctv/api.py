from common.services import CommonService
from cctv.service import Service


class Api(CommonService):

    @staticmethod
    def main():

        dataset = Service()

        while 1:

            menu = int(input('0: EXIT 1:New Model 2:DF 3:EXDF'))
            if menu == 0:
                break
            elif menu == 1:
                pass
            elif menu == 2:
                dataset.cctv = dataset.new_model(input('파일명'))
                CommonService.print_dframe("", dataset.cctv)

            elif menu == 3:
                dataset.cctv = dataset.new_model2(input('파일명'))
                CommonService.print_dframe("", dataset.cctv)


Api.main()
