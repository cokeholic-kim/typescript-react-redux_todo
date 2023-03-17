//액션타입 , 액션생성함수 , 리듀성함수 , 초기상태 , 상태타입 , 액션타입
const INCREASE = 'counter/INCREASE' ;
const DECREASE = 'counter/DECREASE' ; 

//액션 생성 함수
export const increase = () =>({
    type:INCREASE
})
export const decrease = () =>({
    type:DECREASE
})
//액션타입
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>
// type CounterAction2 = {type:INCREASE} | {type:DECREASE}

//이 리덕스 모듈에서 관리할 상태 타입을 선언
type CounterState = {
    count:number
}
//초기상태 선언
const initialState:CounterState = {
    count:0
}

//리듀서 함수
function counter(state:CounterState=initialState,action:CounterAction):CounterState{
    switch(action.type){
        case INCREASE:
            return{
                count:state.count + 1
            }
        case DECREASE:
            return{
                count:state.count - 1 
            }
        default:
            return state
    }
}

export default counter;