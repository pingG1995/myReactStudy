/**
 * reduce函数
 */
const inintSate={
  value:'默认值'
}
const reducer=(state=inintSate,action)=>{
  console.log(action)
  switch(action.type) {
    case 'SEND_ACITON':
      return {...inintSate,...action};
      default:
        return state;
  }
}
export {
  reducer
};
