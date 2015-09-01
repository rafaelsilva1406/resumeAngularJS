window.rasilva.model = window.rasilva.model || {};
window.rasilva.model.user = (function(){
	var userDetails = {};
	
	function init(obj)
	{
		userDetails.userImage = obj.userImage;
		userDetails.firstName = obj.firstName;
		userDetails.lastName = obj.lastName;
		userDetails.phone = obj.phone;
		userDetails.email = obj.email;
		userDetails.occupation = obj.occupation;
		userDetails.social = obj.social;
		userDetails.summaryDetails = obj.summaryDetails;
		userDetails.fullName = function(){
			return userDetails.firstName+' '+userDetails.lastName; 
		}
	}
	
	return{
		userDetails:userDetails,
		init:init
	};
})();
window.rasilva.model.menu = (function(){

	function init(obj)
	{
		var menuDetails = {};
		menuDetails.name = obj.name;
		menuDetails.path = obj.path;
		return menuDetails;
	}
	
	return{
		init:init
	};
})();
window.rasilva.model.skill = (function(){

	function init(obj)
	{
		var skillDetails = {};
		skillDetails.percentage = obj.percentage;
		skillDetails.language = obj.language;
		return skillDetails;
	}
	
	return{
		init:init
	};
})();
window.rasilva.model.experience = (function(){

	function init(obj)
	{
		var experienceDetails = {};
		experienceDetails.title = obj.title;
		experienceDetails.year = obj.year;
		experienceDetails.list = obj.list;
		return experienceDetails;
	}
	
	return{
		init:init
	};
})();
window.rasilva.model.education = (function(){

	function init(obj)
	{
		var educationDetails = {};
		educationDetails.title = obj.title;
		educationDetails.year = obj.year;
		educationDetails.name = obj.name;
		return educationDetails;
	}
	
	return{
		init:init
	};
})();
