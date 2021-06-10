from common.services import Printer, Reader
from common.models import FileDTO


class Service(Printer, Reader):

    def csv(self, payload):
        file = FileDTO()
        printer = Printer()
        reader = Reader()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        printer.dframe(reader.csv(file))

    def xls(self, payload):
        file = FileDTO()
        printer = Printer()
        reader = Reader()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        printer.dframe(reader.xls(file,1,None)) # 파일명 시작할행, 사용할 열 'F'

    def json(self, payload):
        pass

    def new_file(self):
        pass


