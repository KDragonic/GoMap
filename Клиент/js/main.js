var app = new Vue({
	el: '#app',
	data: {
		info: null,
		tab: "main", //user, posts, community
		review_star_count: 0,
		review_review: "",
		review_firstname: "",
		openInfo: null,
		is_sum_wt: false,
		is_sum_size: false,
		sum_wt: 0,
		sum_size: 0,
		accordion_open: [false, false, false],
		rate: "",
		user: {
			name: "",
			age: "",
			orders: [
				{
					name: "",
					description: "",
					status: "",
				}
			]
		}
	},
	methods: {
		switchingPage(page) {
			this.tab = page;
		},
		setReview_star_count(value)
		{
			this.review_star_count = value;
		},
		// getTypeReview_star_count (value)
		// {
		// 	if (value <= this.review_star_count) return "★";
		// 	if (value > this.review_star_count) return "☆";
		// }
		setOpenInfo(value)
		{
			if (this.openInfo == value) this.openInfo = null;
			else this.openInfo = value;
		},
		postNewReview()
		{
			fetch("http://127.0.0.1:8000/review/add", {  
				method: 'post',  
				// headers: {  
				//   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
				// },  
				body: 'firstname='+review_firstname+"$"+'review='+review_review+"$"+'stars='+review_star_count
				})
				.then(json)  
				.then(function (data) {  
				console.log('Request succeeded with JSON response', data);  
				})  
				.catch(function (error) {  
				console.log('Request failed', error);  
			});
		}
	},
	computed:
	{
		getPrice(){
			if (!(this.is_sum_wt && this.is_sum_size)) return "Не может быть отображена в реальном времени";
			if ((this.sum_wt <= 0 || this.sum_size <= 0)) return "Не может быть отображена в реальном времени";
			if (this.rate != "")
			switch(this.rate)
			{
				case "ЭкономДоставка": return Math.round((this.sum_wt * this.sum_size) * 134, 2) + " рублей";
				case "МастерДоставка": return Math.round((this.sum_wt * this.sum_size) * 425, 2) + " рублей";
				case "КоролевскаяДоставка": return Math.round((this.sum_wt * this.sum_size) * 1345, 2) + " рублей";			 
			}
		}
	}
	// mounted() {
		
	//   }
});