export const capitalize = (text) => {
    if(text === ''){
        return '';
    }
    let result = text[0].toUpperCase() + text.slice(1).toLowerCase();
    return result;
  };
  