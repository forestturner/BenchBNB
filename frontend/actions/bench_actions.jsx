export const BenchConstants = {
    RECEIVE_BENCHES: "RECEIVE_BENCHES",
    REQUEST_BENCHES: "REQUEST_BENCHES"
  };

export const receiveBenches = benches => ({
	type: BenchesConstants.RECEIVE_BENCHES,
	benches
});

export const requestBenches = () => ({
	type: BenchesConstants.REQUEST_BENCHES
});
