window.rasilva.service = (function(model){
	
	function handleError(obj)
	{
		throw httpError.status + " : " + httpError.data;
	}
	
	function init(obj)
	{
		obj.service('userService',['$http','$location','$q', function($http,$location,$q){
			this.getUser = function (){
				return $http.get("db/user.json")
					.then(
						function(response){
							model.user.init(response.data.data);
							return model.user;
						},
						function(httpError){
							handleError(httpError);
						});
			};
		}]);
		obj.service('menuService',['$http','$location','$q', function($http,$location,$q){
			this.getMenu = function(){
				return $http.get("db/menu.json")
					.then(
						function(response){
							var menuItems = [];
							$.each(response.data.data,function(i,obj){
								menuItems.push(model.menu.init(obj));
							});
							return menuItems;
						},
						function(httpError){
							handleError(httpError);
						}
					);
			};
		}]);
		obj.service('skillService',['$http','$location','$q',function($http,$location,$q){
			this.getSkill = function(){
				return $http.get("db/skill.json")
					.then(
						function(response){
							var skillItems = [];
							$.each(response.data.data,function(i,obj){
								skillItems.push(model.skill.init(obj));
							});
							return skillItems;
						},
						function(httpError){
							handleError(httpError);
						}
					);
			};
		}]);
		obj.service('experienceService',['$http','$location','$q',function($http,$location,$q){
			this.getExperience = function(){
				return $http.get("db/experience.json")
					.then(
						function(response){
							var experienceItems = [];
							$.each(response.data.data,function(i,obj){
								experienceItems.push(model.experience.init(obj));
							});
							return experienceItems;
						},
						function(httpError){
							handleError(httpError);
						}
					);
			};
		}]);
		obj.service('educationService',['$http','$location','$q',function($http,$location,$q){
			this.getEducation = function(){
				return $http.get("db/education.json")
					.then(
						function(response){
							var educationItems = [];
							$.each(response.data.data,function(i,obj){
								educationItems.push(model.education.init(obj));
							});
							return educationItems;
						},
						function(httpError){
							handleError(httpError);
						}
					);
			};
		}]);
	}
	
	return{
		init:init
	};
})(window.rasilva.model);