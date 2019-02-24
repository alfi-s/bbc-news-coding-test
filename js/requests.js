
/**
 * A function that simulates a fluctuating network by randomly sleeping
 * @param {int} maxSleep - the maximum sleep time
 */
function simulateFluctuatingNetwork(maxSleep, timeout) {
    let sleep = Math.random() * maxSleep;
    console.log(sleep);

    let promise =  new Promise((resolve, reject) => {
        setTimeout(resolve, sleep, 'success');
    });

    return new Promise((resolve, reject) => {

        let timer = setTimeout(() => reject(new Error('Timeout')), timeout)

        promise
            .then(res => {
                clearTimeout(timer);
                resolve(res);
            })
            .catch(rej => {
                clearTimeout(timer);
                reject(rej);
            });

    })
}


async function getData(endpoint, callback) {
    /* In practice this would be a HTTP GET request:
     *     
     *  try {
     *      const response = await fetch(endpoint);
     *      if (response.ok) {
     *           const json = await response.json();
     *           callback(json);
     *       }
     *      throw new Error('Failed to GET: ' + endpoint);
     *  } catch (err) {
     *      console.log(err);
     *  }
     */
    
    await callback(endpoint); // Right now we consider the data already loaded.
}

/**
 * Function which sends the article rankings to the server.
 * @param {string} endpoint - The endpoint to request
 * @param {array} articleRankings - The array of article rankings
 * @param {function} success - function which triggers on success
 * @param {function} fail - function which triggers on failure
 */
async function sendRankings(endpoint, articleRankings, callback, fail) {
    /* In practice this would be a HTTP POST request:
     *     
     *  try {
     *      const response = await fetch(endpoint, {
     *          method: 'POST',
     *          body: JSON.stringify({rankings: articleRankings})
     *      });
     *  
     *      if (response.ok) {
     *           const json = await response.json();
     *           callback(json);
     *       }
     *      throw new Error('Failed to POST: ' + endpoint);
     *  } catch (err) {
     *      console.log(err);
     *  }
     */

    // Here we simulate sending the data and handling network errors.
    simulateFluctuatingNetwork(5000, 3000)
        .then(res => callback(JSON.stringify({rankings: articleRankings})))
        .catch(rej => fail(rej));
}