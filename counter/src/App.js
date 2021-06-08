
import {Counter} from './component/index' // 카운터가 json으로 정의된 곳은 index이기 때문에 index를 호출
import {Route} from "react-route-dom"

// "/" 는 홈으로 준다. component={Counter} json을 가져와야함 람다함수를 json으로 컨버전 그리고 json은 컴포넌트로 인터체인지
const App = () =>{
  return (
    <>
      <Route exact path='/' component={Counter}/>
    </>
  );
}

export default App;
