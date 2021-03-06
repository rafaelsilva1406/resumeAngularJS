window.rasilva.app = (function(service,controller){
	var app = angular.module('app',['ngRoute']);
	
	function configRoutes()
	{
		app.config(['$routeProvider',
		  function($routeProvider) {
			$routeProvider.
			when('/skills', {
				templateUrl: 'views/pages/skills.html',
				controller: 'SkillsController'
			}).
			when('/experience', {
				templateUrl: 'views/pages/experience.html',
				controller: 'ExperienceController'
			}).
			when('/education', {
				templateUrl: 'views/pages/education.html',
				controller: 'EducationController'
			}).
			otherwise({
				redirectTo: '/skills'
			 });
		}]);
	}
	
	function init()
	{
		configRoutes();
		service.init(app);
		controller.init(app);
	}
	
	return{
		app:app,
		init:init,
	};
})(window.rasilva.service,window.rasilva.controller);
window.rasilva.app.init();