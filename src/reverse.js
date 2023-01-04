export const reverse = (text) => {
    let result = '';
    for(const letters of text){
      result =  letters + result;
    }
    return result;
  };