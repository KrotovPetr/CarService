export async function getPersonal(type) {
    let requestOptions = {
        method: 'GET',
    };
   let ans = [];
   fetch(`http://localhost:5000/personal/${type}`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.error(e));
  return ans;
}