export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "addPoints": {
      return { ...state, points: state.points + action.payload };
    }
  }
};