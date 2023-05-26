export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "onChangeInput": {
      const { id, name, value } = action.payload;
      return {
        ...state,
        [id]: {
          [name]: value 
        }
      };
    }
  }
};