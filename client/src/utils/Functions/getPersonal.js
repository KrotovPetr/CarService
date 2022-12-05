export  function getPersonal(type) {
        return new Promise((resolve, reject)=>{
            let requestOptions = {
                method: 'GET',
            };
            let ans = fetch(`http://localhost:5000/personal/${type}`, requestOptions).then(res=>res.json()).then(data=>resolve(data)).catch(e=>reject(e));
            return ans;
        })

}