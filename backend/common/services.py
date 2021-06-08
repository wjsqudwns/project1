class CommonService(object):

    def print_dframe(self, this):

        print(f'type 은 {type(this)} 이다.')
        print(f'column 은 {(this.columns)} 이다.')
        print(f'상위5개행 은\n {(this.head(10))} 이다.')
        print(f'null 의 개수\n {this.isnull().sum()}개')