import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({counter,todos})

export default rootReducer//

//루트리듀서의 반환값을 유추
//state 에 타입을 지정 useSelector 쓸때 사용.
export type RootState = ReturnType<typeof rootReducer>