from dataclasses import dataclass


@dataclass()
class Dataset(object):

    context: str  # 경로
    fname: str  # 파일이름


    @property
    def context(self) -> str: return self._context  # _는 접근제한의 의미 프로퍼티 하나하나 다 추가해주어야함 getter

    @context.setter
    def context(self, context): self._context = context

    @property
    def fname(self) -> str: return self._fname

    @fname.setter
    def fname(self, fname): self._fname = fname
