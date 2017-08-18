export function showdata(data){
	return {
		type:"SHOWDATA",
		data
	}
}

export function post(){
	return dispatch=>{
		return fetch("http://47.92.145.129:8000/lhqnews/list?num=0")
		.then(e=>e.json())
		.then(data=>dispatch(showdata(data.data)))
		.catch(e=>alert('错了'))
	}
}