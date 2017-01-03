exports.JOB_STATE = {
	ready: 'ready',
	inProgress: 'inProgress',
	solved: 'solved', // potential state, should never happen
};

exports.JOB_RESOLUTION = {
	success: 'success',
	fail: 'fail',
	timeout: 'timeout',
};

exports.WORKER_STATE = {
	empty: 'empty',
	ready: 'ready',
	busy: 'busy',
	dirty: 'dirty',
};

exports.createJob = function (jobId, task, state) {
	return {
		jobId,
		workerId: null,
		task,
		state,
	};
}

exports.createJobResult = function (task, payload, resolution) {
	return {
		task,
		result: {
			payload,
			resolution,
		}
	};
}