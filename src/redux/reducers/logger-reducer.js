import { LoggerAction } from "../actions/logger-action";

const initialState = {
	logs: []
};

export const LoggerReducer = (state = initialState, action) => {
	switch (action['type']) {
		case LoggerAction.WRITE_COMPLETE: {
			let logs = state['logs'].splice(0);
			logs.push(action['payload']['log']);
			return Object.assign({}, state, {
				logs: logs
			});
		}
		default: {
			return state;
		}
	}
};
