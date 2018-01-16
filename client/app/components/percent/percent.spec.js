import PercentModule from './percent'
import PercentController from './percent.controller';
import PercentComponent from './percent.component';
import PercentTemplate from './percent.html';

describe('Percent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PercentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PercentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PercentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PercentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PercentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PercentController);
      });
  });
});
