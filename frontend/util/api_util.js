
export const fetchAllBenches = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    success
  });
};

export const fetchSingleBench = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/benches/${id}`,
    success
  });
};

export const postBench = (bench, success, error) => {
  bench.moves = Object.keys(bench.moves).map(k => bench.moves[k]);
  $.ajax({
    method: 'POST',
    url: 'api/bench/',
    data: {bench: bench},
    success,
    error
  });
};
