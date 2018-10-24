// Bob has a server farm crunching numbers. He has nodes servers in his farm. His company has a lot of work to do.

// The work comes as a number workload which indicates how many jobs there are. Bob wants his servers to get an equal number of jobs each. 
// If that is impossible, he wants the first servers to receive more jobs. He also wants the jobs sorted, so that the first server receives the first jobs.

// The way this works, Bob wants an array indicating which jobs are going to which servers.

// Can you help him distribute all this work as evenly as possible onto his servers?

function distribute(nodes, workload){
  let arr = [];
  let nums = [];
  
  for (let i = 0; i < workload; i++) {
    nums.push(i);
  }
  
  let sJobs = workload / nodes;
  let addJobs = workload % nodes;
  while (nodes > 0) {
    arr.push(nums.splice(0, (Math.abs(sJobs) + ((addJobs > 0) ? 1 : 0))))
    addJobs -=1;
    nodes -= 1;
  }
  return arr;
}