export const ADD_TO_LIST = (item) => {
  return {
    type: "ADD_TO_LIST",
    payLoad: { item },
  };
};

export const REMOVE_FROM_LIST = (id) => {
  return {
    type: "REMOVE_FROM_LIST",
    payLoad: { id },
  };
};
