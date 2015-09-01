window.rasilva.controller = (function(){
	
	function knobInit()
	{
		$('.dial').each(function (i){ 
			var elm = $(this),
			color = elm.attr('data-fgColor'),  
			perc = elm.attr('value');  
			 
			elm.knob({ 
				'value': 0, 
				'min':0,
				'max':100,
				'skin':'tron',
				'readOnly':true,
				'thickness':.1,
				'dynamicDraw': true,                
				'displayInput':false
			});

			$({value: 0}).animate({ value: perc },{
				duration: 300,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change')
				}
			},200*i);

			elm.append(function() {
				elm.parent().parent().find('.circular-bar-content').css('color',color);
				elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
			});
			$('.skill').css('display','block');
		});
	}
	
	function handleUserService($s,$d)
	{
		var userDetails = $d.userDetails;
		$s.userImage = userDetails.userImage;
		$s.phone = userDetails.phone;
		$s.email = userDetails.email;
		$s.social = userDetails.social;
		$s.fullName = userDetails.fullName();
		$s.occupation = userDetails.occupation;
		$s.summaryDetails = userDetails.summaryDetails;
	}
	
	function handleMenuService($s,$l,$d)
	{
		$s.menu = $d;
		$s.navClass = function (page){
			var currentRoute = $l.path().substring(1);
			return (page.toLowerCase() == currentRoute) ? 'active' : '';
		}
	}
	
	function init(obj)
	{
		obj.controller('SkillsController', ['$scope','$location','userService','menuService','skillService',function($scope,$location,userService,menuService,skillService){
			userService.getUser()
				.then(function(data){
					handleUserService($scope,data);
				});
			menuService.getMenu()
				.then(function(data){
					handleMenuService($scope,$location,data);
				});
			skillService.getSkill()
				.then(function(data){
					$scope.skill = data;
					setTimeout(knobInit, 700);
				});
			
		}]);
		obj.controller('ExperienceController', ['$scope','$location','userService','menuService','experienceService', function($scope,$location,userService,menuService,experienceService){
			userService.getUser()
				.then(function(data){
					handleUserService($scope,data);
				});
			menuService.getMenu()
				.then(function(data){
					handleMenuService($scope,$location,data);
				});
			experienceService.getExperience()
				.then(function(data){
					$scope.experience = data;
				});
		}]);
		obj.controller('EducationController', ['$scope','$location','userService','menuService','educationService', function($scope,$location,userService,menuService,educationService){
			userService.getUser()
				.then(function(data){
					handleUserService($scope,data);
				});
			menuService.getMenu()
				.then(function(data){
					handleMenuService($scope,$location,data);
				});
			educationService.getEducation()
				.then(function(data){
					$scope.education = data;
				});
		}]);
	}
	
	return{
		init:init
	};
})();