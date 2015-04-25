describe('DribbbleListCtrl e Route tests', function(){
    var ctrl, mockRoute;
    beforeEach(module('dribbbleApp'));

    beforeEach(inject(function($controller, $location, $route){
        mockRoute = $route;
        ctrl = $controller('DribbbleListCtrl');
    }));

    it('Deve redirecionar uma URL qualquer para #/list', function() {
        expect(mockRoute.routes[null].redirectTo).toEqual('/list');
    });

    it('Deve mapear corretamente a url #/list com suas propriedades', function(){
        expect(mockRoute.routes['/list'].controller).toBe('DribbbleListCtrl');
        expect(mockRoute.routes['/list'].controllerAs).toBe('dribbbleListCtrl');
        expect(mockRoute.routes['/list'].templateUrl).toEqual('scripts/dribbble-app/views/list.html');
    });

});

describe('XHR tests', function(){
    var ctrl, mockBackend;
    beforeEach(module('dribbbleApp'));

    beforeEach(inject(function($controller, $httpBackend){
        mockBackend = $httpBackend;

        mockBackend.expectJSONP('http://api.dribbble.com/shots/popular?per_page=9&page=1&callback=JSON_CALLBACK')
            .respond(dribbblesMock.page1);
        ctrl = $controller('DribbbleListCtrl');
        ctrl.init();
    }));

    it('A lista de dribbbles (shots) deve iniciar vazia e depois preenchida', function(){
        // Inicialmente os items devem estar vazios
        expect(ctrl.dribbbles).toEqual([]);

        // Simula uma resposta do servidor
        mockBackend.flush();

        // De acordo com o Mock, apenas 2 itens na página 1
        expect(ctrl.dribbbles.length).toBe(2);
    });

    afterEach(function(){
        // Garante que todas as expects foram chamadas
        mockBackend.verifyNoOutstandingExpectation();

        // Garante que todas os requests foram respondidos (usando o flush)
        mockBackend.verifyNoOutstandingRequest();
    });

});