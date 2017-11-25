// city
let cityRequest = function () {
	let p = new Promise((resolve, reject) => {
		$.getJSON('https://xiecg.github.io/other/vue-picker/city.json', (result) => {
			if (result && result.result && result.result.city) {
				let provinces = [], lastProvince;
				let city = result.result.city;
				for (name in city) {
					if (city.hasOwnProperty(name)) {
						provinces.push(name);
					}
				}
				lastProvince = provinces[0];

				let cityItem = [{
					width: '20%',
					values: provinces
				},{
					name: 'name',
					width: '80%',
					values: city[lastProvince]
				}];

				let citys = city;
				let res = {
					cityItem,
					citys,
					lastProvince
				}
				resolve(res);
			} else {
				reject('获取城市信息失败')
			}
		})
	});
	return p;
};

export default cityRequest;