class Country(object):  # super
    name = '국가명'
    population = '인구'
    capital = '수도'

    def show(self):
        print('국가 클래스의 메소드입니다.')


class Korea(Country):  # subclass

    def show_name(self):
        print('국가 이름은 : ', self.name)


def main():
    k = Korea()
    k.name = 'korea'
    k.show_name()


main()