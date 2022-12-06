export  function getOrders() {
    return new Promise((resolve, reject)=>{
        let requestOptions = {
            method: 'GET',
        };
        let ans = fetch(`http://localhost:5000/orders`, requestOptions).then(res=>res.json()).then(data=>resolve(data)).catch(e=>reject(e));
        return ans;
    })

}