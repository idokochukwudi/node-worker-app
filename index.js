// Repeatedly logs a message every 5 seconds to simulate a background task
setInterval(() => {
  console.log('Node Worker: Task running at', new Date().toISOString());
}, 5000);
