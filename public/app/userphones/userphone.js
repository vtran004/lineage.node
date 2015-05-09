(function () {

	angular.module('phoneLineage')
		.factory('userphoneService', service)
		.controller('UserphoneController', controller);

	controller.$inject = ['userphoneService'];
	function controller(userphoneService) {
		var vm = this;
		vm.new = {};
		vm.phones = userphoneService.query();
		vm.save = function () {
			userphoneService.save(vm.new, function (res) {
				vm.new = {};
				vm.phones = userphoneService.query();
			});
		}
		vm.delete = function (id) {
			if (confirm('Are you sure that you want to delete this phone?')) {
				userphoneService.remove({ id: id }, function () {
					vm.phones = userphoneService.query();
				});
			}
		};

		vm.update = function () {
			userphoneService.update({ id: vm.phone._id }, vm.phone, function () {
				delete vm.phone;
				vm.phones = userphoneService.query();
			});
		};
	}


	service.$inject = ['$resource'];
	function service($resource) {
		return $resource('/api/userphones/:id', { id: '@id' }, {
			update: {method: 'PUT'}
		});
	}
})();