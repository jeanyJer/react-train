const isPop = (state = false, action) => {
	switch (action.type) {
		case 'SET_POP':
			return state ? false : true;
		default:
			return state;
	}
}

export default isPop;
