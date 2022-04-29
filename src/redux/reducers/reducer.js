const INITIAL_STATE = {
  name: '',
  email: '',
  searchTerm: '',
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    SET_LOGIN: { ...state, ...payload },
    SEARCH_TERM: { ...state, searchTerm: payload },
  };
  return cases[type] || state;
}
